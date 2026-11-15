// @ts-check
/* Révision Quest — course editor: start a course (new, copy of an official chapter, open a file) as a new draft, and download it.
   A file is only read as text and parsed by PackRules.parseStrict (JSON.parse): it is never executed. */
import { button, confirmBox, el, modal, toast } from "./dom.js";
import { runChecks } from "./checks.js";
import { clone, draftFromPack, isBlank, newDraft, syncPath } from "./model/draft.js";
import { exportPack } from "./model/export.js";
import { slugify } from "./model/text.js";
import { addDraft, countDrafts, MAX_DRAFTS, restructured, saveNow, store } from "./state.js";

var HEADER = "Révision Quest — cours écrit avec l'éditeur (editeur.html). Format strict : window.registerPack( + JSON pur + );";

/** @returns {PackRulesApi} */
function rules() { return /** @type {PackRulesApi} */ (window.PackRules); }

/** Runs then() when another draft can be started: the current one stays in « Mes brouillons ».
    @param {() => void} then */
function adding(then) {
  if (!isBlank(store.draft) && countDrafts() >= MAX_DRAFTS) {
    toast("😕 " + MAX_DRAFTS + " brouillons au maximum : supprime-en un dans « Mes brouillons » (télécharge-le d'abord si tu veux le garder).");
    return;
  }
  then();
}

export function newCourse() {
  adding(function () { addDraft(newDraft()); toast("📄 Nouveau cours (les autres restent dans « Mes brouillons »)"); });
}

/** Pick an official chapter (a chapter by groups gives one choice per group), load it, keep a private copy:
    meta.basedOn = the official chapter, a new title and id. */
export function duplicateOfficial() {
  adding(function () {
    modal(function (box, close) {
      box.appendChild(el("h3", "", "📚 Dupliquer un chapitre officiel"));
      box.appendChild(el("p", "", "La copie est pour ton usage personnel (avec tes enfants, ta classe) : elle ne pourra pas être proposée à tous."));
      var s = el("select", "ed-input");
      s.setAttribute("data-f", "official");
      s.setAttribute("aria-label", "Chapitre officiel");
      Packs.levels().forEach(function (l) {
        var units = Packs.units().filter(function (u) { return u.level === l.id; });
        if (!units.length) return;
        var g = el("optgroup");
        g.label = l.label;
        units.forEach(function (u) {
          var subject = Packs.subject(u.subject);
          var op = el("option", "", (subject ? subject.label + " · " : "") + u.title);
          op.value = u.id;
          g.appendChild(op);
        });
        s.appendChild(g);
      });
      box.appendChild(s);
      var row = el("div", "modal-actions");
      row.appendChild(button("btn btn-ghost", "Annuler", close));
      var go = button("btn btn-primary", "Dupliquer", function () {
        go.disabled = true;
        loadOfficial(s.value, function () { close(); });
      });
      go.setAttribute("data-act", "yes");
      row.appendChild(go);
      box.appendChild(row);
    });
  });
}

/** @param {string} id @param {() => void} done */
function loadOfficial(id, done) {
  const entry = Packs.get(id);
  if (!entry) { done(); return; }
  Packs.load(id, function (err, data) {
    done();
    if (err || !data) { toast("😕 " + (err ? err.message : "Chapitre introuvable.")); return; }
    const chapter = (entry.parent && Packs.get(entry.parent)) || entry;
    var title = (entry.title + " (ma version)").slice(0, 80);
    /** @type {any} */
    var pack = {
      path: "", lang: data.lang,
      meta: { title: title, description: entry.description, icon: entry.icon, color: entry.color, basedOn: chapter.id },
      worlds: clone(data.worlds)
    };
    if (data.documents && data.documents.length) pack.documents = clone(data.documents);
    var d = draftFromPack(pack);
    d.level = entry.level;
    d.subject = entry.subject;
    d.slug = slugify(id.split("/").slice(2).join("-") + "-ma-version");
    d.autoSlug = false;
    syncPath(d);
    addDraft(d);
    toast("📋 Copie de « " + entry.title + " » prête");
  });
}

/** Choose a .js pack file and open it (read as text, strict format, never executed). @param {HTMLInputElement} input */
export function openFile(input) {
  adding(function () { input.value = ""; input.click(); });
}

/** The file chosen in the file input: a pack (.js, strict format) or a course sent from another device (.cours).
    @param {HTMLInputElement} input */
export function readChosenFile(input) {
  const file = input.files && input.files[0];
  input.value = "";
  if (!file) return;
  if (/\.cours$/i.test(file.name || "")) { readCourseFile(file); return; }
  if (!/\.js$/i.test(file.name || "")) { toast("😕 Choisis un fichier de cours qui finit par .js ou .cours"); return; }
  if (file.size > rules().MAX_PACK_SIZE) { toast("😕 Ce fichier est trop gros pour être un cours."); return; }
  var reader = new FileReader();
  reader.onload = function () {
    var pack;
    try { pack = rules().parseStrict(String(reader.result || "")); } catch (e) {
      toast("😕 Ce fichier n'est pas un cours au bon format : " + /** @type {Error} */ (e).message);
      return;
    }
    if (String(pack.path).split("/").length > 3) {
      toast("😕 Ce fichier est une partie d'un chapitre par groupes : l'éditeur ne sait pas encore les modifier.");
      return;
    }
    addDraft(draftFromPack(pack));
    toast("📂 « " + (file.name || "") + " » ouvert");
  };
  reader.onerror = function () { toast("😕 Impossible de lire ce fichier."); };
  reader.readAsText(file);
}

/** A .cours file (MyCourses.decode: JSON checked, never executed), opened as a new draft. @param {File} file */
function readCourseFile(file) {
  const MC = window.MyCourses;
  if (!MC) { toast("😕 Impossible d'ouvrir un fichier .cours ici."); return; }
  if (file.size > MC.MAX_CODE_CHARS + 100) { toast("😕 Ce fichier est trop gros pour être un cours."); return; }
  var reader = new FileReader();
  reader.onload = function () {
    MC.decode(String(reader.result || "")).then(function (res) {
      if (!res.ok) { toast("😕 " + res.error); return; }
      addDraft(draftFromPack(res.pack));
      toast("📂 « " + (file.name || "") + " » ouvert");
    });
  };
  reader.onerror = function () { toast("😕 Impossible de lire ce fichier."); };
  reader.readAsText(file);
}

/** The file name: <id>.js. */
export function fileName() { return (store.draft.slug || "mon-cours") + ".js"; }

/** « ➕ Ajouter à Mes cours »: the course goes into this browser's « ✏️ Mes cours » (js/core/courses.js), where every
    player of the device finds it in the game. Only without errors; adding it again updates it (same id, stars kept). */
export function addToMyCourses() {
  var report = runChecks(store.draft);
  var errors = report.list.filter(function (m) { return m.level === "err"; }).length;
  if (errors) { toast("😕 Corrige d'abord " + (errors > 1 ? "les " + errors + " erreurs" : "l'erreur") + " du cours."); return; }
  if (!window.MyCourses) { toast("😕 « Mes cours » n'est pas disponible ici."); return; }
  var r = window.MyCourses.save(exportPack(store.draft));
  if (!r.ok) { toast("😕 " + r.errors[0]); return; }
  toast(r.replaced ? "✅ Cours mis à jour dans « Mes cours »." : "✅ Ajouté à « Mes cours » : ouvre le jeu, il est en haut de la liste des chapitres.");
}

/* ---------- « 📤 Envoyer »: the course to another device, as a link to the game (#cours=…) or a .cours file ----------
   The game shows the received course and asks before adding it to « Mes cours » (js/app/screens/receive.js). */
export var LINK_MAX = 16000; // beyond, only the file (a short course gives a link of a few thousand characters)

/** The link that opens the game with the course. @param {string} code */
export function courseLink(code) { return new URL("./", location.href).href.split("#")[0] + "#cours=" + code; }

export function sendCourse() {
  var report = runChecks(store.draft);
  var errors = report.list.filter(function (m) { return m.level === "err"; }).length;
  if (errors) { toast("😕 Corrige d'abord " + (errors > 1 ? "les " + errors + " erreurs" : "l'erreur") + " du cours."); return; }
  const MC = window.MyCourses;
  if (!MC) { toast("😕 L'envoi n'est pas disponible ici."); return; }
  var name = (store.draft.slug || "mon-cours") + ".cours";
  MC.encode(exportPack(store.draft)).then(function (res) {
    if (!res.ok) { toast("😕 " + res.errors[0]); return; }
    var code = res.code, link = courseLink(code);
    modal(function (box, close) {
      box.appendChild(el("h3", "", "📤 Envoyer le cours vers un autre appareil"));
      box.appendChild(el("p", "", "Sur l'autre appareil (tablette, téléphone), le jeu montre le cours et demande avant de l'ajouter à « ✏️ Mes cours »."));
      var actions = el("div", "ed-send");
      if (link.length <= LINK_MAX) {
        var input = /** @type {HTMLInputElement} */ (el("input", "ed-input ed-link"));
        input.readOnly = true;
        input.value = link;
        input.setAttribute("aria-label", "Lien du cours");
        input.setAttribute("data-f", "link");
        box.appendChild(input);
        var copy = button("btn btn-primary", "🔗 Copier le lien", function () { copyLink(link, input); });
        copy.setAttribute("data-act", "copy");
        actions.appendChild(copy);
        if (navigator.share) {
          var share = button("btn btn-white", "📤 Partager le lien", function () {
            navigator.share({ title: "Révision Quest", text: "Un cours Révision Quest : touche le lien pour l'ajouter.", url: link }).catch(function () { /* cancelled */ });
          });
          share.setAttribute("data-act", "share");
          actions.appendChild(share);
        }
      } else {
        box.appendChild(el("p", "", "Ce cours est trop grand pour un lien : envoie le fichier (e-mail, messagerie, clé USB), puis ouvre-le dans le jeu avec « 📥 Ouvrir un cours reçu » (page des chapitres)."));
      }
      var file = button("btn btn-white", "⬇️ Fichier « " + name + " »", function () { saveFile(name, code); });
      file.setAttribute("data-act", "file");
      actions.appendChild(file);
      box.appendChild(actions);
      var row = el("div", "modal-actions");
      var shut = button("btn btn-ghost", "Fermer", close);
      shut.setAttribute("data-act", "close");
      row.appendChild(shut);
      box.appendChild(row);
    });
  });
}

/** @param {string} link @param {HTMLInputElement} input */
function copyLink(link, input) {
  function fallback() { input.focus(); input.select(); toast("Lien sélectionné : copie-le 📋"); }
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(function () { toast("🔗 Lien copié !"); }, fallback);
    else fallback();
  } catch (e) { fallback(); }
}

/** @param {string} name @param {string} code */
function saveFile(name, code) {
  var url = URL.createObjectURL(new Blob([code], { type: "application/octet-stream" }));
  var a = el("a");
  a.href = url;
  a.download = name;
  a.hidden = true;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1000);
  toast("⬇️ « " + name + " » téléchargé : sur l'autre appareil, ouvre-le dans le jeu avec « 📥 Ouvrir un cours reçu ».");
}

/** Download the course in the strict format. With errors: a warning that lists them first (the download stays possible). */
export function download() {
  var report = runChecks(store.draft);
  var errors = report.list.filter(function (m) { return m.level === "err"; });
  if (!errors.length) { save(); return; }
  var lines = errors.slice(0, 8).map(function (m) { return m.msg; });
  if (errors.length > 8) lines.push("… et " + (errors.length - 8) + " autre(s)");
  confirmBox("Télécharger malgré " + errors.length + " erreur" + (errors.length > 1 ? "s" : "") + " ?",
    "Le fichier ne pourra pas être ajouté au jeu tant que ces erreurs restent. Tu pourras le rouvrir ici pour les corriger.",
    "⬇️ Télécharger quand même", save, { lines: lines });
}

function save() {
  var text = rules().formatStrict(exportPack(store.draft), HEADER);
  var name = fileName();
  var url = URL.createObjectURL(new Blob([text], { type: "text/javascript" }));
  var a = el("a");
  a.href = url;
  a.download = name;
  a.hidden = true;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1000);
  if (!store.draft.locked) { store.draft.locked = true; restructured(); }
  saveNow();
  toast("⬇️ « " + name + " » téléchargé. Pour l'ajouter au jeu : mise run pack:add " + name);
}
