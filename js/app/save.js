// @ts-check
/* Révision Quest — Save, export / import, share by link or QR code, QR scanner. */
import { showHome } from "./home.js";
import { Sound } from "./sound.js";
import { h, modal, qs, toast } from "./ui.js";
import { APP_NAME, E, must } from "./util.js";

/* ---------- save / export / import ---------- */

/** @param {string} filename @param {string} content */
export function download(filename, content) {
  var blob = new Blob([content], { type: "application/octet-stream" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url; a.download = filename; a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1000);
}

/** @param {() => void} [back] */
export function showSavePanel(back) {
  var me = Engine.currentProfile();
  var ok = Engine.storageAvailable();
  modal('<h3>💾 Ma sauvegarde</h3>' +
    '<p class="save-status ' + (ok ? "ok" : "ko") + '">' + (ok ? "✅ Ta partie est enregistrée automatiquement sur cet appareil."
      : "⚠️ Ce navigateur ne peut pas enregistrer la partie. Pense à l'exporter !") + "</p>" +
    '<div class="save-actions">' +
      (me ? '<button class="btn btn-primary save-btn" data-act="share">📲 Partager ma partie<small>QR code ou lien, vers un autre appareil</small></button>' : "") +
      (canScan() ? '<button class="btn btn-white save-btn" data-act="scan">📷 Flasher un QR code<small>Récupérer une partie partagée</small></button>' : "") +
      (me ? '<button class="btn btn-white save-btn" data-act="export">⬇️ Exporter ma partie<small>Crée un fichier « ' + E(me.name) + ' »</small></button>' : "") +
      '<button class="btn btn-white save-btn" data-act="import">⬆️ Importer une partie<small>Ouvre un fichier .save</small></button>' +
      '<input type="file" accept=".save" class="file-input" hidden />' +
    "</div>" +
    '<p class="save-help">💡 Partager = afficher un QR code ou envoyer un lien : sur l\'autre appareil, flashe le QR code avec l\'appareil photo ou touche le lien. ' +
      "Exporter = garder ta partie dans un fichier. Importer = la remettre dans le jeu.</p>" +
    '<div class="modal-actions"><button class="btn btn-ghost" data-act="close">Fermer</button></div>',
    function (m, close) {
      var exp = /** @type {HTMLElement | null} */ (m.querySelector('[data-act="export"]'));
      if (exp) exp.onclick = function () {
        var f = Engine.exportProfile();
        if (!f) return;
        try {
          download(f.filename, f.content);
          toast("<span>⬇️ Fichier <b>" + E(f.filename) + "</b> téléchargé !</span>");
        } catch (e) {
          toast("😕 Impossible de créer le fichier.");
        }
      };
      var sh = /** @type {HTMLElement | null} */ (m.querySelector('[data-act="share"]'));
      if (sh) sh.onclick = function () { close(); showShare(back); };
      var sc = /** @type {HTMLElement | null} */ (m.querySelector('[data-act="scan"]'));
      if (sc) sc.onclick = function () { close(); showScanner(back); };
      var fileInput = /** @type {HTMLInputElement} */ (m.querySelector(".file-input"));
      qs(m, '[data-act="import"]').onclick = function () { fileInput.click(); };
      fileInput.onchange = function () {
        var file = fileInput.files && fileInput.files[0];
        if (!file) return;
        fileInput.value = "";
        // Only the file chosen by the player is read (the browser gives no access to anything else),
        // as plain text, then fully validated by Engine.parseImport. Nothing in it is ever executed.
        if (!/\.save$/i.test(file.name || "")) { importError("Choisis un fichier qui finit par .save"); return; }
        if (file.size > 500000) { importError("Ce fichier est trop gros pour être une sauvegarde."); return; }
        var reader = new FileReader();
        reader.onload = function () { close(); handleImport(String(reader.result || "")); };
        reader.onerror = function () { importError("Impossible de lire ce fichier."); };
        reader.readAsText(file);
        fileInput.value = "";
      };
      qs(m, '[data-act="close"]').onclick = function () { close(); (back || showHome)(); };
    });
}

/** @param {string} [msg] */
export function importError(msg) {
  Sound.wrong();
  modal('<h3>😕 Import impossible</h3><p>' + E(msg) + '</p><div class="modal-actions"><button class="btn btn-primary" data-act="ok">OK</button></div>',
    function (m, close) { qs(m, '[data-act="ok"]').onclick = close; });
}

/** @param {string} text */
export function handleImport(text) { handleParsed(Engine.parseImport(text)); }

/** A checked save (file, link or QR code): same name already here → replace or keep both. @param {ImportResult} res */
export function handleParsed(res) {
  if (!res.ok) return importError(res.error);
  var p = /** @type {Profile} */ (res.profile); // ok: the profile is there
  /** @param {"replace" | "copy"} mode */
  function finish(mode) {
    var done = Engine.importProfile(p, mode);
    if (!done) return importError("Impossible d'ajouter ce joueur (50 joueurs maximum sur cet appareil).");
    Sound.levelUp();
    showHome();
    toast("<span>✅ Partie de <b>" + E(done.name) + "</b> importée !</span>");
  }
  if (!res.conflict) return finish("copy");
  modal('<h3>' + E(p.avatar) + " " + E(p.name) + ' existe déjà</h3>' +
    "<p>Un joueur avec ce nom est déjà là. Que veux-tu faire ?</p>" +
    '<div class="save-actions">' +
      '<button class="btn btn-danger save-btn" data-act="replace">♻️ Remplacer<small>L\'ancienne partie sera effacée</small></button>' +
      '<button class="btn btn-primary save-btn" data-act="copy">📄 Garder les deux<small>Importer comme copie</small></button>' +
    "</div>" +
    '<div class="modal-actions"><button class="btn btn-ghost" data-act="cancel">Annuler</button></div>',
    function (m, close) {
      qs(m, '[data-act="replace"]').onclick = function () { close(); finish("replace"); };
      qs(m, '[data-act="copy"]').onclick = function () { close(); finish("copy"); };
      qs(m, '[data-act="cancel"]').onclick = close;
    });
}

/* ---------- sharing a game: QR code or link (#partie=<code>), file for a huge save ----------
   The code holds only the progress (Engine.shareCode). After "#" a link part is never sent to the server. */
export let SHARE_PARAM = "partie";
export let QR_MAX_VERSION = 25;     // 117 × 117 cells: still easy to scan on a screen; a bigger game is sent as a link
export let LINK_MAX = 16000;        // beyond, the game is sent as a .save file (never seen: a full game is about 1 000 characters)

/** @param {string} code */
export function shareLink(code) { return String(location.href).split("#")[0] + "#" + SHARE_PARAM + "=" + code; }

/** QR code as an SVG (dark cells as one path), or null when the link does not fit in a readable QR code. @param {string} text */
export function qrSvg(text) {
  var Q = window.qrcodegen;
  if (!Q) return null;
  var qr;
  try {
    qr = Q.QrCode.encodeSegments([Q.QrSegment.makeBytes(Array.prototype.slice.call(new TextEncoder().encode(text)))],
      Q.QrCode.Ecc.LOW, 1, QR_MAX_VERSION);
  } catch (e) { return null; } // too long for QR_MAX_VERSION
  var border = 4, n = qr.size + border * 2, d = "";
  for (var y = 0; y < qr.size; y++) for (var x = 0; x < qr.size; x++) {
    if (qr.getModule(x, y)) d += "M" + (x + border) + "," + (y + border) + "h1v1h-1z";
  }
  var NS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + n + " " + n);
  svg.setAttribute("class", "share-qr");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "QR code de la partie");
  svg.setAttribute("shape-rendering", "crispEdges");
  var bg = document.createElementNS(NS, "rect");
  bg.setAttribute("width", n); bg.setAttribute("height", n); bg.setAttribute("fill", "#fff");
  var path = document.createElementNS(NS, "path");
  path.setAttribute("d", d); path.setAttribute("fill", "#000");
  svg.appendChild(bg); svg.appendChild(path);
  return svg;
}

/** @param {() => void} [back] */
export function showShare(back) {
  const me = must(Engine.currentProfile()); // the share panel is opened by the current player
  if (!me) return;
  modal('<h3>📲 Partager ma partie</h3><p class="share-who">' + E(me.avatar) + " <b>" + E(me.name) + "</b></p>" +
    '<div class="share-body"><p class="save-help">Préparation…</p></div>' +
    '<div class="modal-actions"><button class="btn btn-ghost" data-act="close">Fermer</button></div>',
    function (m, close) {
      qs(m, '[data-act="close"]').onclick = function () { close(); if (back) back(); };
      var body = qs(m, ".share-body");
      Engine.shareCode(me.id).then(function (code) {
        if (!code) { body.innerHTML = '<p class="save-help">Impossible de préparer la partie.</p>'; return; }
        var link = shareLink(code);
        body.innerHTML = "";
        if (link.length > LINK_MAX) {
          body.appendChild(h('<p class="save-help">Ta partie est très grande : envoie-la sous forme de fichier.</p>'));
          var fb = h('<button class="btn btn-primary save-btn" data-act="sendfile">📤 Envoyer le fichier<small>SMS, WhatsApp, e-mail…</small></button>');
          fb.onclick = function () { sendFile(); };
          body.appendChild(fb);
          return;
        }
        var svg = qrSvg(link);
        if (svg) {
          body.appendChild(svg);
          body.appendChild(h('<p class="save-help">Sur l\'autre appareil, flashe ce QR code avec l\'appareil photo, puis ouvre le lien.</p>'));
        } else {
          body.appendChild(h('<p class="save-help">Ta partie est trop grande pour un QR code : envoie le lien.</p>'));
        }
        var actions = h('<div class="save-actions"></div>');
        if (navigator.share) {
          var sb = h('<button class="btn btn-primary save-btn" data-act="sendlink">📤 Envoyer le lien<small>SMS, WhatsApp, e-mail…</small></button>');
          sb.onclick = function () {
            navigator.share({ title: APP_NAME, text: "Ma partie " + APP_NAME + " (" + me.name + ") : touche le lien pour la récupérer.", url: link })
              .catch(function () { /* cancelled */ });
          };
          actions.appendChild(sb);
        }
        var cb = h('<button class="btn btn-white save-btn" data-act="copylink">🔗 Copier le lien</button>');
        cb.onclick = function () { copyText(link, body); };
        actions.appendChild(cb);
        body.appendChild(actions);
      });
    });
}

/** @param {string} text @param {HTMLElement} box */
export function copyText(text, box) {
  function fallback() { // show the link, selected, to copy by hand
    var old = box.querySelector(".share-link");
    if (old) old.remove();
    var input = /** @type {HTMLInputElement} */ (h('<input class="share-link" type="text" readonly aria-label="Lien de la partie" />'));
    input.value = text;
    box.appendChild(input);
    input.focus(); input.select();
    toast("Lien sélectionné : copie-le 📋");
  }
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast("🔗 Lien copié !"); }, fallback);
    } else fallback();
  } catch (e) { fallback(); }
}

export function sendFile() {
  var f = Engine.exportProfile();
  if (!f) return;
  try {
    var file = new File([f.content], f.filename, { type: "text/plain" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: APP_NAME }).catch(function () { /* cancelled */ });
      return;
    }
  } catch (e) { /* no file sharing: download instead */ }
  try { download(f.filename, f.content); toast("<span>⬇️ Fichier <b>" + E(f.filename) + "</b> téléchargé !</span>"); }
  catch (e) { toast("😕 Impossible de créer le fichier."); }
}

/** The code inside a scanned text or a link: "…#partie=<code>" or the bare code. @param {string} text @returns {string | null} */
export function codeFrom(text) {
  text = String(text || "").trim();
  var m = new RegExp("[#&]" + SHARE_PARAM + "=([A-Za-z0-9._-]+)").exec(text);
  if (m) return m[1];
  return /^[zj]\.[A-Za-z0-9_-]+\.[a-z0-9]+$/.test(text) ? text : null;
}

/** A game received by link or QR code: always shown and confirmed before anything is changed. */
/** @type {string | null} */
export let sharedOpen = null; // code whose confirmation is on screen (the same link is not asked twice)
/** @param {string} code */
export function importShared(code) {
  if (Engine.session) { toast("Termine ton monde, puis ouvre à nouveau le lien."); return; }
  if (sharedOpen === code) return;
  sharedOpen = code;
  Engine.parseShareCode(code).then(function (res) {
    sharedOpen = null;
    if (!res.ok) return importError(res.error);
    var s = Engine.profileSummary(must(res.profile));
    modal('<h3>📥 Récupérer une partie</h3>' +
      '<p class="share-who">' + E(s.avatar) + " <b>" + E(s.name) + "</b></p>" +
      "<p>Niveau " + s.level + " · " + s.xp + " XP · " + s.stars + " ⭐</p>" +
      "<p>Ajouter cette partie sur cet appareil ?</p>" +
      '<div class="modal-actions"><button class="btn btn-ghost" data-act="no">Annuler</button>' +
      '<button class="btn btn-primary" data-act="yes">📥 Importer</button></div>',
      function (m, close) {
        sharedOpen = code;
        var shut = function () { sharedOpen = null; close(); };
        qs(m, '[data-act="no"]').onclick = shut;
        qs(m, '[data-act="yes"]').onclick = function () { shut(); handleParsed(res); };
      });
  });
}

/** "#partie=…" in the address: taken, then removed from the address bar and the history right away. */
export function takeSharedCode() {
  var code = codeFrom(location.hash || "");
  if (!/^#partie=/.test(location.hash || "")) return null;
  try { history.replaceState(history.state, "", String(location.href).split("#")[0]); } catch (e) { /* ignore */ }
  return code || "x"; // a damaged link still gets its error message
}

/* ---------- scanning a QR code: only with the browser's own detector (no extra library) ---------- */

export function canScan() {
  try { return "BarcodeDetector" in window && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia); } catch (e) { return false; }
}

/** @param {() => void} [back] */
export function showScanner(back) {
  /** @type {MediaStream | null} */
  var stream = null;
  /** @type {ReturnType<typeof setTimeout> | null} */
  var timer = null;
  var done = false;
  function stop() {
    done = true;
    if (timer) clearTimeout(timer);
    if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
    stream = null;
  }
  modal('<h3>📷 Flasher un QR code</h3>' +
    '<div class="scan-box"><video class="scan-video" playsinline muted autoplay></video></div>' +
    '<p class="save-help scan-msg">Montre le QR code de la partie à la caméra.</p>' +
    '<div class="modal-actions"><button class="btn btn-ghost" data-act="close">Fermer</button></div>',
    function (m, close) {
      var video = /** @type {HTMLVideoElement} */ (m.querySelector(".scan-video")), msg = qs(m, ".scan-msg");
      function quit() { stop(); close(); }
      qs(m, '[data-act="close"]').onclick = function () { quit(); if (back) back(); };
      /** @type {any} BarcodeDetector: not in the DOM types */
      var detector;
      try { detector = new window.BarcodeDetector({ formats: ["qr_code"] }); } catch (e) { msg.textContent = "Ce navigateur ne sait pas lire les QR codes."; return; }
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false }).then(function (s) {
        if (done || !document.body.contains(m)) { s.getTracks().forEach(function (t) { t.stop(); }); return; }
        stream = s;
        video.srcObject = s;
        var p = video.play(); if (p && p.catch) p.catch(function () {});
        (function look() {
          if (done) return;
          detector.detect(video).then(function (/** @type {Array<{ rawValue: string }>} */ codes) {
            if (done) return;
            /** @type {string | null} */
            var found = null;
            (codes || []).forEach(function (c) { if (!found && c && codeFrom(c.rawValue)) found = codeFrom(c.rawValue); });
            if (found) { quit(); importShared(found); return; }
            if ((codes || []).length) msg.textContent = "Ce QR code n'est pas une partie " + APP_NAME + ".";
            timer = setTimeout(look, 300);
          }, function () { timer = setTimeout(look, 500); });
        })();
      }, function () {
        msg.textContent = "Impossible d'utiliser la caméra. Autorise-la dans le navigateur, ou flashe le QR code avec l'appareil photo.";
      });
      // closing by the backdrop or the back button also stops the camera
      var obs = new MutationObserver(function () { if (!document.body.contains(m)) { stop(); obs.disconnect(); } });
      obs.observe(document.body, { childList: true });
    });
}
