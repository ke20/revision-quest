/* Révision Quest — screens, navigation, animations, sounds.
   Navigation: players → home → catalogue → world map of a pack → lesson → exercises. */
(function () {
  "use strict";

  var E = function (t) {
    return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };
  var R = function (t) { return window.Exercises ? window.Exercises.rich(t) : E(t); };
  var T = function () { return window.I18N ? window.I18N.t.apply(null, arguments) : String(arguments[0]); };
  var COLOR_RE = /^#[0-9a-fA-F]{3,8}$/;
  function safeColor(c, dflt) { return typeof c === "string" && COLOR_RE.test(c) ? c : (dflt || "#7C4DFF"); }
  var APP_NAME = (window.APP_CONFIG && window.APP_CONFIG.name) || "Révision Quest";
  var APP_ICON = (window.APP_CONFIG && window.APP_CONFIG.icon) || "🎓";
  var app;
  var DATA = null;   // registered data of the pack being played
  var PACK = null;   // catalogue entry of the pack being played

  /* ================= Sounds (WebAudio) ================= */
  var Sound = (function () {
    var ctx = null;
    function ac() {
      if (!ctx) {
        var C = window.AudioContext || window.webkitAudioContext;
        if (!C) return null;
        try { ctx = new C(); } catch (e) { return null; }
      }
      if (ctx.state === "suspended") { try { ctx.resume(); } catch (e) { /* */ } }
      return ctx;
    }
    function tone(freq, start, dur, type, vol) {
      var c = ac(); if (!c) return;
      var t0 = c.currentTime + start;
      var o = c.createOscillator(), g = c.createGain();
      o.type = type || "sine";
      o.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol || 0.18, t0 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(c.destination);
      o.start(t0); o.stop(t0 + dur + 0.05);
    }
    function on() { return window.Engine && Engine.soundOn(); }
    return {
      unlock: function () { if (on()) ac(); },
      correct: function () { if (!on()) return; tone(660, 0, 0.12, "triangle"); tone(990, 0.09, 0.2, "triangle"); },
      wrong: function () { if (!on()) return; tone(220, 0, 0.18, "sawtooth", 0.08); tone(160, 0.12, 0.25, "sawtooth", 0.08); },
      tap: function () { if (!on()) return; tone(520, 0, 0.05, "sine", 0.06); },
      levelUp: function () {
        if (!on()) return;
        [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.11, 0.22, "triangle", 0.16); });
        tone(1319, 0.48, 0.4, "sine", 0.12);
      },
      win: function () {
        if (!on()) return;
        [392, 523, 659, 784, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.09, 0.18, "square", 0.06); });
      },
      lose: function () { if (!on()) return; [392, 330, 262, 196].forEach(function (f, i) { tone(f, i * 0.16, 0.25, "triangle", 0.12); }); }
    };
  })();

  /* ================= Comfort settings (per player, see Engine.settings) ================= */

  function reducedMotion() {
    try { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); } catch (e) { return false; }
  }
  function animSetting() { return window.Engine ? Engine.settings().animations : "normal"; }
  /** Confetti and smooth scrolling: off with "Aucune", and when the device asks for reduced motion (the setting is kept). */
  function motionOn() { return animSetting() !== "none" && !reducedMotion(); }
  function boostOn() { return animSetting() === "boost"; }
  function scrollBehavior() { return motionOn() ? "smooth" : "auto"; }
  /** body classes anim-none / anim-boost (CSS turns animations off with anim-none). */
  function applyComfort() {
    var a = animSetting();
    document.body.classList.toggle("anim-none", a === "none");
    document.body.classList.toggle("anim-boost", a === "boost");
  }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  /* ================= Confetti (homemade canvas) ================= */
  var Confetti = (function () {
    var canvas, c2d, parts = [], raf = null, launched = 0;
    var COLORS = ["#FF5C8A", "#FFB72B", "#7C4DFF", "#2BD9A0", "#29B6F6", "#FF7A45", "#FFFFFF"];
    function setup() {
      if (canvas) return;
      canvas = document.createElement("canvas");
      canvas.className = "confetti";
      document.body.appendChild(canvas);
      c2d = canvas.getContext("2d");
      resize();
      window.addEventListener("resize", resize);
    }
    function resize() {
      if (!canvas) return;
      var dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px"; canvas.style.height = window.innerHeight + "px";
      c2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function burst(n, opts) {
      if (!motionOn()) return;
      launched++;
      setup();
      if (!c2d) return;
      opts = opts || {};
      var W = window.innerWidth, H = window.innerHeight;
      for (var i = 0; i < (n || 140); i++) {
        var fromLeft = i % 2 === 0;
        parts.push({
          x: opts.center ? W / 2 : (fromLeft ? -10 : W + 10),
          y: opts.center ? H * 0.35 : H * 0.6,
          vx: opts.center ? (Math.random() - 0.5) * 14 : (fromLeft ? 1 : -1) * (4 + Math.random() * 9),
          vy: -(8 + Math.random() * 10),
          w: 6 + Math.random() * 7, h: 4 + Math.random() * 6,
          r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: 0, shape: Math.random() < 0.3 ? "circle" : "rect"
        });
      }
      if (!raf) raf = requestAnimationFrame(tick);
    }
    function tick() {
      var W = window.innerWidth, H = window.innerHeight;
      c2d.clearRect(0, 0, W, H);
      parts = parts.filter(function (p) { return p.y < H + 40 && p.life < 400; });
      parts.forEach(function (p) {
        p.life++; p.vy += 0.32; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        c2d.save(); c2d.translate(p.x, p.y); c2d.rotate(p.r); c2d.fillStyle = p.color;
        if (p.shape === "circle") { c2d.beginPath(); c2d.arc(0, 0, p.w / 2.5, 0, Math.PI * 2); c2d.fill(); }
        else c2d.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.life / 8)) + 1);
        c2d.restore();
      });
      if (parts.length) raf = requestAnimationFrame(tick);
      else { raf = null; c2d.clearRect(0, 0, W, H); }
    }
    /** Remove the confetti still falling. */
    function stop() {
      parts = [];
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      if (c2d) c2d.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    /** launched(): number of bursts actually shown since the page loaded (used by the tests). */
    return { burst: burst, stop: stop, launched: function () { return launched; } };
  })();


  /* ================= UI helpers ================= */

  function h(html) {
    var d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstChild;
  }

  function show(node) {
    window.Exercises && Exercises.closeBubble();
    app.innerHTML = "";
    app.appendChild(node);
    applyComfort();
    window.scrollTo(0, 0);
  }

  /* ---------- in-app history: the browser / Android back button stays inside the app ----------
     Each screen declares its "back" action (same as its ← button) and how to redraw itself.
     A single history entry is pushed as a trap; popstate runs the back action (or closes the open modal). */
  var backAction = null, rerender = null, trapped = false, openModals = [], loadToken = 0;
  function pushTrap() {
    if (trapped) return;
    try { history.pushState({ rq: 1 }, ""); trapped = true; } catch (e) { /* ignore */ }
  }
  function setNav(back, again) {
    loadToken++; // any navigation cancels a pack that is still loading
    backAction = back || null;
    rerender = again || null;
    if (backAction) pushTrap();
  }
  window.addEventListener("popstate", function () {
    trapped = false;
    if (openModals.length) { openModals[openModals.length - 1](); pushTrap(); return; }
    if (backAction) { var f = backAction; pushTrap(); f(); }
    // on the root screen the next "back" leaves the app, as expected
  });

  function on(node, act, fn) {
    var b = node.querySelector('[data-act="' + act + '"]');
    if (b) b.onclick = fn;
    return b;
  }

  function each(node, sel, fn) { Array.prototype.forEach.call(node.querySelectorAll(sel), fn); }

  /** html must be trusted or already escaped. */
  function toast(html, cls) {
    var wrap = document.getElementById("toasts");
    var t = h('<div class="toast ' + (cls || "") + '">' + html + "</div>");
    wrap.appendChild(t);
    setTimeout(function () { t.classList.add("out"); }, 2800);
    setTimeout(function () { t.remove(); }, 3300);
  }

  function badgeToasts(list) {
    (list || []).forEach(function (b, i) {
      setTimeout(function () {
        toast('<span class="toast-icon">' + E(b.icon) + '</span><span><b>Nouveau badge !</b><br>' + E(b.name) + "</span>", "badge");
        Sound.levelUp();
      }, 400 + i * 700);
    });
  }

  function modal(html, onMount) {
    var m = h('<div class="modal-backdrop"><div class="modal pop">' + html + "</div></div>");
    document.body.appendChild(m);
    var closed = false;
    function close() {
      if (closed) return;
      closed = true;
      openModals = openModals.filter(function (f) { return f !== close; });
      m.classList.add("out"); setTimeout(function () { m.remove(); }, 200);
    }
    openModals.push(close);
    m.addEventListener("click", function (e) { if (e.target === m) close(); });
    if (onMount) onMount(m, close);
    return close;
  }

  /** title / text / okLabel must be trusted or already escaped. */
  function confirmBox(title, text, okLabel, onOk, danger, cancelLabel) {
    modal('<h3>' + title + '</h3><p>' + text + '</p><div class="modal-actions">' +
      '<button class="btn btn-ghost" data-act="no">' + (cancelLabel || "Annuler") + '</button>' +
      '<button class="btn ' + (danger ? "btn-danger" : "btn-primary") + '" data-act="yes">' + okLabel + "</button></div>",
      function (m, close) {
        m.querySelector('[data-act="no"]').onclick = close;
        m.querySelector('[data-act="yes"]').onclick = function () { close(); onOk(); };
      });
  }

  function levelUpPopup(info) {
    Sound.levelUp();
    Confetti.burst(120, { center: true });
    modal('<div class="levelup"><div class="levelup-burst">🎉</div><div class="levelup-label">NIVEAU SUPÉRIEUR !</div>' +
      '<div class="levelup-num">Niveau ' + info.level + '</div><div class="levelup-name">' + E(info.icon) + " " + E(info.name) + "</div>" +
      '<button class="btn btn-primary btn-big" data-act="ok">Génial !</button></div>',
      function (m, close) { m.querySelector('[data-act="ok"]').onclick = close; });
  }

  function starsHtml(n, total) {
    var s = "";
    for (var i = 0; i < (total || Engine.MAX_STARS); i++) s += '<span class="star ' + (i < n ? "on" : "") + '">★</span>';
    return s;
  }

  function bigStarsHtml(n) {
    var s = "";
    for (var i = 0; i < Engine.MAX_STARS; i++) s += '<span class="bstar ' + (i < n ? "on" : "") + '" style="animation-delay:' + (0.3 + i * 0.25) + 's">★</span>';
    return s;
  }

  function heartsHtml(n) {
    var s = "";
    for (var i = 0; i < Engine.MAX_HEARTS; i++) s += '<span class="heart ' + (i < n ? "" : "lost") + '">' + (i < n ? "❤️" : "🤍") + "</span>";
    return s;
  }
  /** Free mistakes of the world (n left out of max): used before the hearts. */
  function shieldsHtml(n, max) {
    var s = "";
    for (var i = 0; i < max; i++) s += '<span class="shield ' + (i < n ? "" : "used") + '">🛡️</span>';
    return s ? '<span class="shields" aria-label="' + n + " bouclier" + (n > 1 ? "s" : "") + '">' + s + "</span>" : "";
  }

  /** Leave the pack: global screens are always in French. */
  function leavePack() {
    if (Engine.session) Engine.quitWorld();
    if (window.I18N) I18N.setLang("fr");
  }

  /* ================= Home ================= */

  function titleHtml() {
    var parts = APP_NAME.split(" ");
    var first = parts.shift();
    return E(first) + (parts.length ? "<br><span>" + E(parts.join(" ")) + "</span>" : "");
  }

  /* ---------- full screen (comfort only: Esc always leaves it; hidden where unsupported, e.g. iPhone) ---------- */
  var FS_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
    '<path class="fs-in" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/><path class="fs-out" d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';
  function fsSupported() {
    var el = document.documentElement;
    return !!((document.fullscreenEnabled && el.requestFullscreen) || (document.webkitFullscreenEnabled && el.webkitRequestFullscreen));
  }
  function fsActive() { return !!(document.fullscreenElement || document.webkitFullscreenElement); }
  function fsToggle() {
    var el = document.documentElement, p;
    try {
      if (fsActive()) p = document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
      else p = el.requestFullscreen ? el.requestFullscreen() : el.webkitRequestFullscreen();
    } catch (e) { p = null; }
    if (p && p.catch) p.catch(function () { toast("Le plein écran n'est pas disponible ici."); });
  }
  function fsRefresh() {
    each(document, '[data-act="fullscreen"]', function (b) {
      b.classList.toggle("on", fsActive());
      b.setAttribute("aria-pressed", fsActive() ? "true" : "false");
    });
  }
  document.addEventListener("fullscreenchange", fsRefresh);
  document.addEventListener("webkitfullscreenchange", fsRefresh);

  /** Small « Code source » link at the bottom of the home screen: a new tab, no referrer, no access to this page
      (rel noopener). Only a plain https://github.com/<owner>/<repo> address is accepted. */
  // GitHub mark (Primer Octicons « mark-github », MIT), drawn in the text colour
  var GH_ICON = '<svg class="gh-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/></svg>';
  var SOURCE_URL_RE = /^https:\/\/github\.com\/[A-Za-z0-9-]{1,39}\/[A-Za-z0-9._-]{1,100}$/;
  function sourceLinkHtml() {
    var url = window.APP_CONFIG && APP_CONFIG.sourceUrl;
    if (!SOURCE_URL_RE.test(String(url || ""))) return "";
    return '<p class="source-link"><a href="' + E(url) + '" target="_blank" rel="noopener noreferrer">' +
      GH_ICON + "<span>Code source sur GitHub</span></a></p>";
  }

  function showHome() {
    var me = Engine.currentProfile();
    if (!me) return showProfiles();
    if (pauseGuard()) return;
    leavePack();
    setNav(null, showHome);
    var li = Engine.levelInfo();
    var streak = Engine.streak();
    var nb = Engine.state.badges.length;
    var last = Engine.lastPack() ? Packs.get(Engine.lastPack()) : null;
    var lastSum = last ? Engine.packSummary(last.id, last.worldCount) : null;
    var node = h(
      '<section class="screen home">' +
        '<div class="home-hero">' +
          '<div class="logo bounce-slow">' + E(APP_ICON) + '</div>' +
          '<h1 class="title">' + titleHtml() + '</h1>' +
          '<p class="tagline">' + E((window.APP_CONFIG && APP_CONFIG.tagline) || "") + '</p>' +
        "</div>" +
        '<div class="card player-card">' +
          '<div class="who">' +
            '<span class="who-avatar">' + E(me.avatar) + '</span>' +
            '<span class="who-name">' + E(me.name) + '</span>' +
            '<button class="btn btn-ghost btn-small" data-act="switch">🔄 Changer de joueur</button>' +
          "</div>" +
          '<div class="player-top">' +
            '<div class="lvl-badge"><span>NIV.</span><b>' + li.level + "</b></div>" +
            '<div class="player-info"><div class="rank">' + E(li.icon) + " " + E(li.name) + '</div>' +
              '<div class="xpbar"><div class="xpbar-fill" style="width:' + Math.round(li.progress * 100) + '%"></div></div>' +
              '<div class="xp-text">' + (li.next ? li.xp + " / " + li.next + " XP → <b>" + E(li.nextName) + "</b>" : li.xp + " XP — niveau max ! 👑") + "</div>" +
            "</div>" +
          "</div>" +
          '<div class="player-stats">' +
            '<div class="pstat"><span class="pstat-ico ' + (streak > 0 ? "fire" : "") + '">🔥</span><b>' + streak + '</b><small>jour' + (streak > 1 ? "s" : "") + " de suite</small></div>" +
            '<div class="pstat"><span class="pstat-ico">⭐</span><b>' + Engine.totalStars() + "</b><small>étoiles</small></div>" +
            '<div class="pstat"><span class="pstat-ico">🏅</span><b>' + nb + "/" + Engine.BADGES.length + "</b><small>badges</small></div>" +
          "</div>" +
        "</div>" +
        (last
          ? '<button class="btn btn-primary btn-big btn-play btn-continue" data-act="continue" style="--c:' + safeColor(last.color) + '">' +
              '<span class="cont-icon">' + E(last.icon) + '</span><span class="cont-main"><span class="cont-label">▶ Continuer :</span>' +
              '<b class="cont-title">' + E(last.title) + '</b><small>⭐ ' + lastSum.stars + "/" + lastSum.maxStars + "</small></span></button>" +
            '<button class="btn btn-white btn-wide" data-act="catalog">📚 Choisir un chapitre</button>'
          : '<button class="btn btn-primary btn-big btn-play" data-act="catalog">📚 Choisir un chapitre</button>') +
        '<div class="home-row">' +
          '<button class="btn btn-white" data-act="badges">🏅 Badges</button>' +
          '<button class="btn btn-white" data-act="ranking">🏆 Classement</button>' +
          '<button class="btn btn-white" data-act="save">💾 Ma sauvegarde</button>' +
          '<button class="btn btn-white" data-act="settings">⚙️ Réglages</button>' +
        "</div>" +
        (fsSupported() ? '<button class="btn btn-ghost btn-small fs-btn' + (fsActive() ? " on" : "") + '" data-act="fullscreen" aria-pressed="' + fsActive() + '">' +
          FS_ICON + '<span class="fs-in">Plein écran</span><span class="fs-out">Quitter le plein écran</span></button>' : "") +
        (Engine.storageAvailable() ? "" : '<p class="note">⚠️ Ce navigateur ne peut pas enregistrer ta progression. Pense à exporter ta partie !</p>') +
        sourceLinkHtml() +
      "</section>");
    on(node, "continue", function () { Sound.unlock(); Sound.tap(); openPack(last.id); });
    on(node, "catalog", function () { Sound.unlock(); Sound.tap(); showCatalog(); });
    on(node, "badges", function () { Sound.tap(); showBadges(); });
    on(node, "settings", function () { Sound.tap(); showSettings(); });
    on(node, "switch", function () { Sound.tap(); showProfiles(); });
    on(node, "fullscreen", function () { Sound.tap(); fsToggle(); });
    on(node, "ranking", function () { Sound.tap(); showLeaderboard(showHome); });
    on(node, "save", function () { Sound.tap(); showSavePanel(showHome); });
    show(node);
  }

  /* ================= Catalogue ================= */

  var catFilter = { level: "", subject: "" };

  function chip(kind, value, label, active) {
    return '<button class="filter-chip' + (active ? " on" : "") + '" data-' + kind + '="' + E(value) + '" aria-pressed="' + (active ? "true" : "false") + '">' + label + "</button>";
  }

  /** Progress of a catalogue card: a grouped chapter adds up its groups. */
  function chapterSummary(p) {
    if (!p.groups) return Engine.packSummary(p.id, p.worldCount);
    var stars = 0, max = 0, done = 0, n = 0;
    p.groups.forEach(function (g) {
      var s = Engine.packSummary(g.id, g.worldCount);
      stars += s.stars; max += s.maxStars; done += s.worldsDone; n += g.worldCount;
    });
    return { stars: stars, maxStars: max, worldsDone: done, progress: n ? Math.min(1, done / n) : 0 };
  }

  /** A pack card (catalogue or group choice). tagsHtml must be trusted or already escaped. */
  function packCard(p, title, tagsHtml, desc, sum) {
    return '<button class="pack-card" data-pack="' + E(p.id) + '" style="--c:' + safeColor(p.color) + '">' +
      '<span class="pack-icon">' + E(p.icon) + "</span>" +
      '<span class="pack-main">' +
        (tagsHtml ? '<span class="pack-tags">' + tagsHtml + "</span>" : "") +
        '<b class="pack-title">' + E(title) + "</b>" +
        (desc ? '<span class="pack-desc">' + E(desc) + "</span>" : "") +
        '<span class="pack-progress"><span class="pack-bar"><span class="pack-bar-fill" style="width:' + Math.round(sum.progress * 100) + '%"></span></span>' +
        '<span class="pack-stars">⭐ ' + sum.stars + "/" + sum.maxStars + "</span></span>" +
      "</span>" +
    "</button>";
  }

  /** Where "back" goes from a pack: its group choice for a group, else the catalogue. */
  function backFromPack(entry) {
    var parent = entry && entry.parent ? Packs.get(entry.parent) : null;
    return parent ? function () { showGroups(parent.id); } : showCatalog;
  }

  /** Group choice of a chapter "par groupes" (catalogue entry with groups). */
  function showGroups(id) {
    var ch = Packs.get(id);
    if (!ch || !ch.groups) return showCatalog();
    if (!Engine.currentProfile()) return showProfiles();
    if (pauseGuard()) return;
    leavePack();
    setNav(showCatalog, function () { showGroups(id); });
    var cards = ch.groups.map(function (g) {
      var dots = g.difficulty ? '<span class="tag tag-difficulty" aria-label="Difficulté ' + g.difficulty + ' sur 5">' +
        new Array(g.difficulty + 1).join("●") + "</span>" : "";
      return packCard(g, g.label, dots + '<span class="tag tag-level">' + g.worldCount + " monde" + (g.worldCount > 1 ? "s" : "") + "</span>", "", Engine.packSummary(g.id, g.worldCount));
    }).join("");
    var node = h('<section class="screen groups">' +
      '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Chapitres">←</button><h2>👥 Choisis ton groupe</h2>' +
      '<span class="head-right">⭐ ' + chapterSummary(ch).stars + "</span></header>" +
      '<p class="map-pack"><span>' + E(ch.icon) + "</span> " + E(ch.title) + "</p>" +
      '<p class="screen-help">Prends le groupe donné par ta maîtresse ou ton maître. Tu peux en essayer un autre quand tu veux.</p>' +
      '<div class="pack-list">' + cards + "</div></section>");
    on(node, "back", function () { Sound.tap(); showCatalog(); });
    each(node, ".pack-card", function (b) {
      b.onclick = function () { Sound.unlock(); Sound.tap(); openPack(b.getAttribute("data-pack")); };
    });
    show(node);
  }

  function showCatalog() {
    if (!Engine.currentProfile()) return showProfiles();
    if (pauseGuard()) return;
    leavePack();
    setNav(showHome, showCatalog);
    var all = Packs.list();
    var usedLevels = Packs.levels().filter(function (l) { return all.some(function (p) { return p.level === l.id; }); });
    var usedSubjects = Packs.subjects().filter(function (s) { return all.some(function (p) { return p.subject === s.id; }); });
    if (catFilter.level && !usedLevels.some(function (l) { return l.id === catFilter.level; })) catFilter.level = "";
    if (catFilter.subject && !usedSubjects.some(function (s) { return s.id === catFilter.subject; })) catFilter.subject = "";
    var list = all.filter(function (p) {
      return (!catFilter.level || p.level === catFilter.level) && (!catFilter.subject || p.subject === catFilter.subject);
    }).sort(function (a, b) {
      var la = Packs.level(a.level).order, lb = Packs.level(b.level).order;
      return la - lb || a.title.localeCompare(b.title);
    });
    var cards = list.map(function (p) {
      var sub = Packs.subject(p.subject), lvl = Packs.level(p.level);
      var tags = '<span class="tag tag-subject">' + E(sub.icon) + " " + E(sub.label) + '</span><span class="tag tag-level">' + E(lvl.label) + "</span>" +
        (p.groups ? '<span class="tag tag-groups">👥 ' + p.groups.length + " groupes</span>" : "");
      return packCard(p, p.title, tags, p.description, chapterSummary(p));
    }).join("");
    var node = h('<section class="screen catalog">' +
      '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>📚 Chapitres</h2>' +
      '<span class="head-right">' + list.length + " / " + all.length + "</span></header>" +
      '<div class="filters">' +
        '<div class="filter-row" role="group" aria-label="Niveau"><span class="filter-label">Niveau</span>' +
          chip("level", "", "Tous", !catFilter.level) +
          usedLevels.map(function (l) { return chip("level", l.id, E(l.label), catFilter.level === l.id); }).join("") + "</div>" +
        '<div class="filter-row" role="group" aria-label="Matière"><span class="filter-label">Matière</span>' +
          chip("subject", "", "Toutes", !catFilter.subject) +
          usedSubjects.map(function (s) { return chip("subject", s.id, E(s.icon) + " " + E(s.label), catFilter.subject === s.id); }).join("") + "</div>" +
      "</div>" +
      '<div class="pack-list">' + (cards || '<div class="card empty-card"><p>Aucun chapitre pour ce choix. Essaie un autre filtre !</p></div>') + "</div>" +
      "</section>");
    on(node, "back", function () { Sound.tap(); showHome(); });
    each(node, "[data-level]", function (b) {
      b.onclick = function () { Sound.tap(); catFilter.level = b.getAttribute("data-level"); showCatalog(); };
    });
    each(node, "[data-subject]", function (b) {
      b.onclick = function () { Sound.tap(); catFilter.subject = b.getAttribute("data-subject"); showCatalog(); };
    });
    each(node, ".pack-card", function (b) {
      b.onclick = function () { Sound.unlock(); Sound.tap(); openPack(b.getAttribute("data-pack")); };
    });
    show(node);
  }

  /** Load a pack (lazily) then show its world map. A load token ignores a late answer if the player went elsewhere. */
  function openPack(id) {
    var entry = Packs.get(id);
    if (!entry) return showPackError(id, { message: "Ce chapitre n'existe pas (ou plus)." });
    if (entry.groups) return showGroups(id); // a chapter "par groupes": choose the group first
    var back = backFromPack(entry);
    function cancel() { back(); } // showCatalog / showGroups → setNav → the token below becomes stale
    setNav(cancel, null);
    var token = ++loadToken;
    var loading = h('<section class="screen loading"><div class="card result-card" style="--c:' + safeColor(entry.color) + '">' +
      '<div class="result-icon bounce">' + E(entry.icon) + '</div><h2 class="result-title">Chargement…</h2>' +
      '<p class="result-msg">' + E(entry.title) + "</p>" +
      '<button class="btn btn-white" data-act="cancel">← Retour</button></div></section>');
    on(loading, "cancel", function () { Sound.tap(); cancel(); });
    var timer = setTimeout(function () { if (token === loadToken) show(loading); }, 120); // no flash when cached
    Packs.load(id, function (err, data) {
      clearTimeout(timer);
      if (token !== loadToken) return; // the player left the loading screen
      if (err) return showPackError(id, err);
      PACK = entry;
      DATA = data;
      Engine.setPack(id, data);
      if (window.I18N) I18N.setLang(data.lang);
      showMap();
    });
  }

  function showPackError(id, err) {
    leavePack();
    var back = backFromPack(Packs.get(id));
    setNav(back, null);
    var node = h('<section class="screen error"><div class="card result-card"><div class="result-icon">😵</div>' +
      '<h2 class="result-title">Oups !</h2><p class="result-msg">' + E(err && err.message || "Impossible de charger ce chapitre.") + "</p>" +
      '<div class="result-actions"><button class="btn btn-primary" data-act="retry">↻ Réessayer</button>' +
      '<button class="btn btn-white" data-act="back">📚 Retour aux chapitres</button></div></div></section>');
    on(node, "retry", function () { openPack(id); });
    on(node, "back", function () { back(); });
    show(node);
  }

  /* ---------- players ---------- */

  function showProfiles() {
    leavePack();
    var me = Engine.currentProfile();
    setNav(me ? showHome : null, showProfiles);
    var list = Engine.profiles().map(Engine.profileSummary);
    var cards = list.map(function (p) {
      return '<div class="profile-row' + (p.current ? " current" : "") + '">' +
        '<button class="profile-pick" data-id="' + E(p.id) + '">' +
          '<span class="profile-avatar">' + E(p.avatar) + "</span>" +
          '<span class="profile-main"><b>' + E(p.name) + "</b><small>" + E(p.rankIcon) + " " + E(p.rank) + "</small></span>" +
          '<span class="profile-stats"><span>' + p.xp + " XP</span><span>⭐ " + p.stars + "</span></span>" +
        "</button>" +
        '<button class="btn-del" data-del="' + E(p.id) + '" aria-label="Supprimer ' + E(p.name) + '">🗑️</button>' +
      "</div>";
    }).join("");
    var node = h('<section class="screen profiles">' +
      '<header class="screen-head">' + (me ? '<button class="btn-icon" data-act="back" aria-label="Retour">←</button>' : "") +
      "<h2>👋 Qui joue ?</h2><span class=\"head-right\"></span></header>" +
      (list.length ? '<p class="screen-help">Touche ton nom pour jouer.</p><div class="profile-list">' + cards + "</div>"
        : '<div class="card empty-card"><div class="logo">' + E(APP_ICON) + '</div><h3>Bienvenue dans ' + E(APP_NAME) + ' !</h3><p>Crée ton joueur pour commencer.</p></div>') +
      '<button class="btn btn-primary btn-big" data-act="new">➕ Nouveau joueur</button>' +
      '<div class="home-row">' +
        (list.length ? '<button class="btn btn-white" data-act="ranking">🏆 Classement</button>' : "") +
        '<button class="btn btn-white" data-act="save">💾 Ma sauvegarde</button>' +
      "</div>" +
      "</section>");
    on(node, "back", showHome);
    on(node, "new", function () { Sound.unlock(); Sound.tap(); showNewPlayer(); });
    on(node, "ranking", function () { Sound.tap(); showLeaderboard(showProfiles); });
    on(node, "save", function () { Sound.tap(); showSavePanel(showProfiles); });
    each(node, ".profile-pick", function (b) {
      b.onclick = function () {
        Sound.unlock(); Sound.tap();
        Engine.selectProfile(b.getAttribute("data-id"));
        var p = Engine.currentProfile();
        showHome();
        if (p) toast("<span>" + E(p.avatar) + " Salut <b>" + E(p.name) + "</b> !</span>");
      };
    });
    each(node, ".btn-del", function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-del");
        var p = list.filter(function (x) { return x.id === id; })[0];
        if (!p) return;
        confirmBox("Supprimer " + E(p.name) + " ?", "Toute la progression de ce joueur sera effacée (XP, étoiles, badges).<br><small>Astuce : exporte la partie avant, au cas où.</small>",
          "Oui, supprimer", function () {
            Engine.deleteProfile(id);
            toast("🗑️ Joueur supprimé");
            showProfiles();
          }, true);
      };
    });
    show(node);
  }

  function showNewPlayer() {
    setNav(showProfiles, null);
    var avatars = Engine.AVATARS;
    var chosen = avatars[Math.floor(Math.random() * avatars.length)];
    var node = h('<section class="screen newplayer">' +
      '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>➕ Nouveau joueur</h2><span class="head-right"></span></header>' +
      '<div class="card form-card">' +
        '<label class="field-label" for="np-name">Ton prénom ou pseudo</label>' +
        '<input id="np-name" class="text-input" type="text" maxlength="20" autocomplete="off" placeholder="Ex : Léa" />' +
        '<div class="field-error" aria-live="polite"></div>' +
        '<div class="field-label">Choisis ton avatar</div>' +
        '<div class="avatar-grid">' + avatars.map(function (a) {
          return '<button type="button" class="avatar-btn' + (a === chosen ? " selected" : "") + '" data-av="' + E(a) + '" aria-label="Avatar ' + E(a) + '">' + E(a) + "</button>";
        }).join("") + "</div>" +
        '<div class="field-label" id="np-comfort">As-tu un TDA/H ? <small>(du mal à rester concentré)</small></div>' +
        '<div class="seg" role="group" aria-labelledby="np-comfort">' +
          '<button type="button" class="seg-btn" data-comfort="yes" aria-pressed="false">Oui</button>' +
          '<button type="button" class="seg-btn on" data-comfort="no" aria-pressed="true">Non</button>' +
        "</div>" +
        '<p class="field-help">🔒 Ta réponse n\'est pas enregistrée : elle sert juste à choisir tes réglages de départ (pauses, boucliers, animations). Tu pourras les changer dans ⚙️ Réglages.</p>' +
      "</div>" +
      '<button class="btn btn-primary btn-big" data-act="create">C\'est parti ! 🚀</button>' +
      "</section>");
    var input = node.querySelector("#np-name"), err = node.querySelector(".field-error");
    on(node, "back", showProfiles);
    each(node, ".avatar-btn", function (b) {
      b.onclick = function () {
        Sound.tap();
        chosen = b.getAttribute("data-av");
        each(node, ".avatar-btn", function (x) { x.classList.toggle("selected", x === b); });
      };
    });
    var comfortYes = false; // only lives while this screen is open; never stored
    each(node, "[data-comfort]", function (b) {
      b.onclick = function () {
        Sound.tap();
        comfortYes = b.getAttribute("data-comfort") === "yes";
        each(node, "[data-comfort]", function (x) { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      };
    });
    function create() {
      var res = Engine.createProfile(input.value, chosen, comfortYes);
      if (!res.ok) {
        err.textContent = res.error;
        input.classList.remove("shake"); void input.offsetWidth; input.classList.add("shake");
        Sound.wrong();
        return;
      }
      Sound.levelUp();
      showHome();
      toast("<span>" + E(res.profile.avatar) + " Bienvenue <b>" + E(res.profile.name) + "</b> !</span>");
    }
    input.addEventListener("input", function () { err.textContent = ""; });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") create(); });
    on(node, "create", create);
    show(node);
    try { input.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
  }

  function showLeaderboard(back, packId) {
    var entry = packId ? Packs.get(packId) : null;
    if (!entry) packId = "";
    setNav(back || showHome, function () { showLeaderboard(back, packId); });
    var rows = Engine.leaderboard(packId || undefined, entry ? entry.worldCount : 0);
    var medals = ["🥇", "🥈", "🥉"];
    var body = rows.map(function (p, i) {
      return '<div class="lb-row' + (p.current ? " me" : "") + (i < 3 ? " top" + (i + 1) : "") + '">' +
        '<span class="lb-pos">' + (medals[i] || (i + 1)) + "</span>" +
        '<span class="lb-avatar">' + E(p.avatar) + "</span>" +
        '<span class="lb-main"><b>' + E(p.name) + (p.current ? ' <em class="lb-you">toi</em>' : "") + "</b><small>" + E(p.rankIcon) + " " + E(p.rank) + "</small></span>" +
        (packId
          ? '<span class="lb-stats"><b>⭐ ' + p.packStars + "/" + entry.worldCount * Engine.MAX_STARS + '</b><small>' + p.xp + " XP</small></span>"
          : '<span class="lb-stats"><b>' + p.xp + ' XP</b><small>⭐ ' + p.stars + " · 🏅 " + p.badges + "</small></span>") +
      "</div>";
    }).join("");
    var packs = Packs.units(); // a group is ranked on its own (its stars are saved under its own id)
    var filters = packs.length ? '<div class="filter-row lb-filters" role="group" aria-label="Classement">' +
      chip("lb", "", "🌍 Général", !packId) +
      packs.map(function (p) { return chip("lb", p.id, E(p.icon) + " " + E(p.title), packId === p.id); }).join("") + "</div>" : "";
    var node = h('<section class="screen leaderboard">' +
      '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>🏆 Classement</h2><span class="head-right">' + rows.length + " joueur" + (rows.length > 1 ? "s" : "") + "</span></header>" +
      filters +
      '<p class="screen-help">' + (packId ? "Le plus d'étoiles dans ce chapitre gagne. En cas d'égalité : le plus d'XP." : "Le plus d'XP gagne. En cas d'égalité : le plus d'étoiles.") + "</p>" +
      '<div class="lb-list">' + (body || '<div class="card">Aucun joueur pour l\'instant.</div>') + "</div>" +
      "</section>");
    on(node, "back", function () { (back || showHome)(); });
    each(node, "[data-lb]", function (b) {
      b.onclick = function () { Sound.tap(); showLeaderboard(back, b.getAttribute("data-lb")); };
    });
    show(node);
  }

  /* ---------- save / export / import ---------- */

  function download(filename, content) {
    var blob = new Blob([content], { type: "application/octet-stream" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename; a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1000);
  }

  function showSavePanel(back) {
    var me = Engine.currentProfile();
    var ok = Engine.storageAvailable();
    modal('<h3>💾 Ma sauvegarde</h3>' +
      '<p class="save-status ' + (ok ? "ok" : "ko") + '">' + (ok ? "✅ Ta partie est enregistrée automatiquement sur cet appareil."
        : "⚠️ Ce navigateur ne peut pas enregistrer la partie. Pense à l'exporter !") + "</p>" +
      '<div class="save-actions">' +
        (me ? '<button class="btn btn-primary save-btn" data-act="export">⬇️ Exporter ma partie<small>Crée un fichier « ' + E(me.name) + ' »</small></button>' : "") +
        '<button class="btn btn-white save-btn" data-act="import">⬆️ Importer une partie<small>Ouvre un fichier .save</small></button>' +
        '<input type="file" accept=".save" class="file-input" hidden />' +
      "</div>" +
      '<p class="save-help">💡 Exporter = garder ta partie dans un fichier (pour changer d\'ordinateur ou ne rien perdre). Importer = la remettre dans le jeu.</p>' +
      '<div class="modal-actions"><button class="btn btn-ghost" data-act="close">Fermer</button></div>',
      function (m, close) {
        var exp = m.querySelector('[data-act="export"]');
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
        var fileInput = m.querySelector(".file-input");
        m.querySelector('[data-act="import"]').onclick = function () { fileInput.click(); };
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
        m.querySelector('[data-act="close"]').onclick = function () { close(); (back || showHome)(); };
      });
  }

  function importError(msg) {
    Sound.wrong();
    modal('<h3>😕 Import impossible</h3><p>' + E(msg) + '</p><div class="modal-actions"><button class="btn btn-primary" data-act="ok">OK</button></div>',
      function (m, close) { m.querySelector('[data-act="ok"]').onclick = close; });
  }

  function handleImport(text) {
    var res = Engine.parseImport(text);
    if (!res.ok) return importError(res.error);
    var p = res.profile;
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
        m.querySelector('[data-act="replace"]').onclick = function () { close(); finish("replace"); };
        m.querySelector('[data-act="copy"]').onclick = function () { close(); finish("copy"); };
        m.querySelector('[data-act="cancel"]').onclick = close;
      });
  }

  var SETTING_ROWS = [
    { key: "pauseEvery", label: "⏸️ Pause conseillée après…", values: [[0, "Jamais"], [2, "2 mondes"], [3, "3 mondes"], [4, "4 mondes"]] },
    { key: "freeMistakes", label: "🛡️ Erreurs sans perdre de cœur", values: [[0, "0"], [1, "1"], [2, "2"], [3, "3"]] },
    { key: "animations", label: "✨ Animations", values: [["none", "Aucune"], ["normal", "Normales"], ["boost", "Renforcées"]] },
    { key: "difficulty", label: "🎯 Étoiles pour passer au monde suivant",
      values: [["easy", "Facile 2⭐"], ["normal", "Normal 3⭐"], ["medium", "Modéré 4⭐"], ["hard", "Difficile 5⭐"]] }
  ];

  function showSettings() {
    var cur = Engine.settings();
    var comfort = SETTING_ROWS.map(function (r) {
      return '<div class="setting-block"><div class="setting-label" id="set-' + r.key + '">' + r.label + "</div>" +
        '<div class="seg" role="group" aria-labelledby="set-' + r.key + '">' + r.values.map(function (v) {
          var on = cur[r.key] === v[0];
          return '<button type="button" class="seg-btn' + (on ? " on" : "") + '" data-set="' + r.key + '" data-val="' + E(v[0]) + '" aria-pressed="' + on + '">' + E(v[1]) + "</button>";
        }).join("") + "</div></div>";
    }).join("");
    modal('<h3>⚙️ Réglages</h3>' +
      '<div class="setting-row"><span>🔊 Son</span>' +
      '<button class="toggle ' + (Engine.soundOn() ? "on" : "") + '" data-act="sound" aria-label="Activer ou couper le son"><span></span></button></div>' +
      (fsSupported() ? '<div class="setting-row"><span>🖥️ Plein écran</span>' +
        '<button class="toggle ' + (fsActive() ? "on" : "") + '" data-act="fullscreen" aria-pressed="' + fsActive() + '" aria-label="Activer ou quitter le plein écran"><span></span></button></div>' : "") +
      comfort +
      '<div class="setting-row"><span>🗑️ Effacer ma progression</span>' +
      '<button class="btn btn-danger btn-small" data-act="reset">Effacer</button></div>' +
      '<div class="modal-actions"><button class="btn btn-primary" data-act="close">Terminé</button></div>',
      function (m, close) {
        each(m, "[data-set]", function (b) {
          b.onclick = function () {
            var key = b.getAttribute("data-set"), raw = b.getAttribute("data-val"), ch = {};
            ch[key] = key === "animations" || key === "difficulty" ? raw : +raw;
            Engine.setSettings(ch);
            var now = Engine.settings()[key];
            each(m, '[data-set="' + key + '"]', function (x) {
              var v = x.getAttribute("data-val"), on = String(now) === v;
              x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false");
            });
            applyComfort();
            Sound.tap();
          };
        });
        var fs = m.querySelector('[data-act="fullscreen"]');
        if (fs) fs.onclick = function () { Sound.tap(); fsToggle(); };
        var tg = m.querySelector('[data-act="sound"]');
        tg.onclick = function () {
          Engine.setSound(!Engine.soundOn());
          tg.classList.toggle("on", Engine.soundOn());
          Sound.unlock(); Sound.tap();
        };
        m.querySelector('[data-act="reset"]').onclick = function () {
          close();
          var me = Engine.currentProfile();
          confirmBox("Tout effacer ?", "Toute la progression de " + E(me ? me.name : "") + " sera effacée : XP, étoiles et badges de tous les chapitres.", "Oui, effacer", function () {
            Engine.reset(); showHome(); toast("Progression effacée ✨");
          }, true);
        };
        m.querySelector('[data-act="close"]').onclick = function () { close(); showHome(); };
      });
  }

  /* ================= Badges ================= */

  /** Locked badges stay secret: no icon, name or description. */
  function badgeCard(b) {
    if (!Engine.hasBadge(b.id)) {
      return '<div class="badge-card locked"><div class="badge-icon mystery">?</div><div class="badge-name">???</div>' +
        '<div class="badge-desc">Badge secret — continue à jouer !</div></div>';
    }
    return '<div class="badge-card on"><div class="badge-icon">' + E(b.icon) + "</div>" +
      '<div class="badge-name">' + E(b.name) + '</div><div class="badge-desc">' + E(b.desc) + "</div></div>";
  }

  function showBadges() {
    setNav(showHome, showBadges);
    var items = Engine.BADGES.map(badgeCard).join("");
    var node = h('<section class="screen badges">' +
      '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>🏅 Badges</h2><span class="head-right">' +
      Engine.state.badges.length + "/" + Engine.BADGES.length + "</span></header>" +
      '<p class="screen-help">Les badges sont secrets : joue pour les découvrir ! 🤫</p>' +
      '<div class="badge-grid">' + items + "</div></section>");
    on(node, "back", showHome);
    show(node);
  }

  /* ================= World map (of the current pack) ================= */

  function showMap() {
    if (pauseGuard()) return;
    if (!DATA || !PACK) return showCatalog();
    var back = backFromPack(PACK);
    setNav(back, showMap);
    var cur = Engine.currentWorldId();
    var nodes = DATA.worlds.map(function (w, i) {
      var p = Engine.worldProgress(w.id), unlocked = Engine.isUnlocked(w.id);
      return '<div class="map-node ' + (unlocked ? "" : "locked ") + (p.stars ? "done " : "") + (w.id === cur ? "current" : "") +
        '" style="--c:' + safeColor(w.color) + '" data-i="' + i + '">' +
        (w.id === cur ? '<div class="here">' + T("here") + "</div>" : "") +
        '<button class="node-btn" ' + (unlocked ? "" : 'aria-disabled="true"') + ' aria-label="' + E(w.title) + '">' +
          '<span class="node-icon">' + (unlocked ? E(w.icon || "⭐") : "🔒") + "</span>" +
          '<span class="node-num">' + (i + 1) + "</span>" +
        "</button>" +
        '<div class="node-label"><b>' + E(w.title) + '</b><span class="node-stars">' + starsHtml(p.stars) + "</span></div>" +
      "</div>";
    }).join("");
    var node = h('<section class="screen map">' +
      '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Chapitres">←</button>' +
      "<h2>" + T("mapTitle") + '</h2><span class="head-right">⭐ ' + Engine.totalStars(PACK.id) + "/" + DATA.worlds.length * Engine.MAX_STARS + "</span></header>" +
      '<p class="map-pack"><span>' + E(PACK.icon) + "</span> " + E(PACK.title) + "</p>" +
      '<div class="map-path"><svg class="map-svg" aria-hidden="true"></svg>' + nodes + "</div></section>");
    on(node, "back", function () { Sound.tap(); back(); });
    each(node, ".map-node", function (n) {
      n.querySelector(".node-btn").onclick = function () {
        var w = DATA.worlds[+n.getAttribute("data-i")];
        if (!w) return;
        if (!Engine.isUnlocked(w.id)) {
          Sound.wrong();
          n.classList.remove("shake"); void n.offsetWidth; n.classList.add("shake");
          toast(T("locked", Engine.starsToUnlock()));
          return;
        }
        Sound.tap();
        showLesson(w);
      };
    });
    show(node);
    layoutMap(node);
    var onResize = function () { if (document.body.contains(node)) layoutMap(node); else window.removeEventListener("resize", onResize); };
    window.addEventListener("resize", onResize);
    var curNode = node.querySelector(".map-node.current");
    if (curNode && curNode.getBoundingClientRect().top > window.innerHeight * 0.7) {
      setTimeout(function () { curNode.scrollIntoView({ behavior: scrollBehavior(), block: "center" }); }, 250);
    }
  }

  function layoutMap(node) {
    var path = node.querySelector(".map-path");
    var svg = node.querySelector(".map-svg");
    var items = path.querySelectorAll(".map-node");
    var W = path.clientWidth, STEP = 150, TOP = 100;
    var offsets = [0, 0.26, 0, -0.26];
    var pts = [];
    Array.prototype.forEach.call(items, function (n, i) {
      var x = W / 2 + offsets[i % 4] * W;
      var y = TOP + i * STEP;
      n.style.left = x + "px"; n.style.top = y + "px";
      pts.push([x, y]);
    });
    path.style.height = (TOP + (items.length - 1) * STEP + 120) + "px";
    svg.setAttribute("width", W); svg.setAttribute("height", path.style.height.replace("px", ""));
    var d = "";
    pts.forEach(function (p, i) {
      if (i === 0) { d += "M" + p[0] + " " + p[1]; return; }
      var q = pts[i - 1], my = (q[1] + p[1]) / 2;
      d += " C" + q[0] + " " + my + " " + p[0] + " " + my + " " + p[0] + " " + p[1];
    });
    svg.innerHTML = '<path d="' + d + '" class="map-line-bg"/><path d="' + d + '" class="map-line"/>';
  }

  /* ================= Lesson ================= */

  function showLesson(w) {
    setNav(showMap, function () { showLesson(w); });
    var L = w.lesson || {};
    var points = (L.points || []).map(function (p) { return "<li>" + R(p) + "</li>"; }).join("");
    var examples = (L.examples || []).map(function (p) { return '<div class="example">💬 ' + R(p) + "</div>"; }).join("");
    var hasTr = /\[\[[^\]]+\|/.test(JSON.stringify(w));
    var figures = window.Figures && Array.isArray(L.figures) ? L.figures.slice(0, 6) : [];
    var node = h('<section class="screen lesson" style="--c:' + safeColor(w.color) + '">' +
      '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>' + T("lesson") + '</h2><span class="head-right"></span></header>' +
      '<div class="card lesson-card pop">' +
        '<div class="lesson-top"><span class="lesson-icon">' + E(w.icon || "⭐") + '</span><div><div class="lesson-world">' + E(w.title) + "</div>" +
        '<div class="lesson-sub">' + E(w.subtitle || "") + (w.subtitleFr ? " <small>· " + E(w.subtitleFr) + "</small>" : "") + "</div></div></div>" +
        (L.title ? '<h3 class="lesson-title">' + R(L.title) + "</h3>" : "") +
        (points ? '<ul class="lesson-points">' + points + "</ul>" : "") +
        (figures.length ? '<div class="lesson-figs"></div>' : "") +
        (examples ? '<div class="lesson-examples"><div class="ex-label">' + T("examples") + "</div>" + examples + "</div>" : "") +
        (hasTr ? '<p class="lesson-tip">' + T("lessonTip") + "</p>" : "") +
      "</div>" +
      '<div class="lesson-meta">📝 ' + T("exercises", (w.exercises || []).length) + " · " + heartsHtml(Engine.MAX_HEARTS) +
        " " + shieldsHtml(Engine.settings().freeMistakes, Engine.settings().freeMistakes) + "</div>" +
      '<button class="btn btn-primary btn-big" data-act="go">' + T("go") + "</button>" +
      "</section>");
    var figBox = node.querySelector(".lesson-figs");
    figures.forEach(function (f) {
      try { figBox.appendChild(window.Figures.build(f)); } catch (e) { console.error("Figure failed", e); }
    });
    on(node, "back", showMap);
    on(node, "go", function () { Sound.unlock(); Sound.tap(); startWorld(w); });
    show(node);
  }

  /* ================= Play ================= */

  function startWorld(w) {
    if (pauseGuard()) return;
    if (!w.exercises || !w.exercises.length) { toast(T("noExercises")); return; }
    Engine.startWorld(w.id);
    var node = h('<section class="screen play" style="--c:' + safeColor(w.color) + '">' +
      '<header class="play-top">' +
        '<button class="btn-icon quit" data-act="quit" aria-label="Quitter">✕</button>' +
        '<div class="progress"><div class="progress-fill"></div></div>' +
        '<div class="hearts"></div>' +
      "</header>" +
      '<div class="play-stats"><span class="combo"></span><span class="world-name">' + E(w.icon || "") + " " + E(w.title) + '</span><span class="xp-pill">⭐ <b class="xp-val">0</b> XP</span></div>' +
      '<main class="ex-container"></main>' +
      '<footer class="checkbar"><div class="checkbar-inner"><div class="feedback"></div><button class="btn btn-check" data-act="check" disabled>' + T("check") + "</button></div></footer>" +
      "</section>");
    show(node);
    var ui = {
      node: node,
      progress: node.querySelector(".progress-fill"),
      hearts: node.querySelector(".hearts"),
      combo: node.querySelector(".combo"),
      xp: node.querySelector(".xp-val"),
      container: node.querySelector(".ex-container"),
      bar: node.querySelector(".checkbar"),
      feedback: node.querySelector(".feedback"),
      btn: node.querySelector('[data-act="check"]')
    };
    function askQuit() {
      confirmBox(T("quitTitle"), T("quitText"), T("quit"), function () {
        Engine.quitWorld(); showMap();
      }, true, T("cancel"));
    }
    setNav(askQuit, null); // back button during an exercise = the usual quit confirmation
    on(node, "quit", askQuit);
    updateTop(ui, false);
    playExercise(w, ui);
  }

  function updateTop(ui, animateHeart) {
    var s = Engine.session;
    if (!s) return;
    ui.progress.style.width = Math.round((s.index / s.total) * 100) + "%";
    ui.hearts.innerHTML = heartsHtml(s.hearts) + shieldsHtml(s.shields, s.maxShields);
    if (animateHeart) { // the shield or heart just lost breaks
      var lost = animateHeart === "shield" ? ui.hearts.querySelectorAll(".shield.used") : ui.hearts.querySelectorAll(".heart.lost");
      if (lost[0]) lost[0].classList.add("break");
    }
    ui.xp.textContent = Engine.state.xp;
    if (s.combo >= 2) {
      ui.combo.innerHTML = '<span class="fire">🔥</span> x' + s.combo + (s.combo >= 6 ? " <em>×2 XP</em>" : s.combo >= 3 ? " <em>×1.5 XP</em>" : "");
      ui.combo.className = "combo on" + (s.combo >= 6 ? " hot" : s.combo >= 3 ? " warm" : "");
      ui.combo.classList.remove("bump"); void ui.combo.offsetWidth; ui.combo.classList.add("bump");
    } else {
      ui.combo.innerHTML = "";
      ui.combo.className = "combo";
    }
  }

  function floatXp(ui, text) {
    var pill = ui.node.querySelector(".xp-pill");
    var f = h('<span class="float-xp">' + E(text) + "</span>");
    pill.appendChild(f);
    setTimeout(function () { f.remove(); }, 1200);
  }

  function setBar(ui, state, html, label) {
    ui.bar.className = "checkbar" + (state ? " " + state : "");
    ui.feedback.innerHTML = html || "";
    if (label) ui.btn.innerHTML = label;
  }

  function playExercise(w, ui) {
    var s = Engine.session;
    var ex = w.exercises[s.index];
    var phase = "answer"; // "answer" | "done"
    var controller = null;
    setBar(ui, "", "", T("check"));
    ui.btn.disabled = true;
    ui.btn.style.display = "";
    ui.container.classList.remove("slide-in"); void ui.container.offsetWidth; ui.container.classList.add("slide-in");

    function onResult(res) {
      phase = "done";
      var r = Engine.answer(res);
      if (r.skipped) { // broken exercise: neutral, no XP, no heart lost
        updateTop(ui, false);
        setBar(ui, "", '<div class="fb-title"><span class="fb-ico">⏭️</span> ' + T("skipped") + "</div>", T("next"));
        ui.btn.style.display = "";
        ui.btn.disabled = false;
        return;
      }
      updateTop(ui, res.correct ? false : r.shieldUsed ? "shield" : "heart");
      var expl = ex.explanation ? '<div class="fb-expl">' + R(ex.explanation) + "</div>" : "";
      var note = res.message ? '<div class="fb-note">' + res.message + "</div>" : ""; // trusted HTML from Exercises
      if (res.correct) {
        Sound.correct();
        var praises = T("praise");
        var praise = praises[Math.floor(Math.random() * praises.length)];
        var xpTxt = r.xp > 0 ? "+" + r.xp + " XP" + (r.multiplier > 1 ? " (combo ×" + r.multiplier + ")" : "") : T("noXp");
        var boost = boostOn() ? '<div class="fb-boost">' + pick(T("boostOk")) + "</div>" : "";
        setBar(ui, "ok", '<div class="fb-title"><span class="fb-ico">✅</span> ' + praise + ' <span class="fb-xp">' + xpTxt + "</span></div>" + boost + note + expl, T("next"));
        if (r.xp > 0) floatXp(ui, "+" + r.xp);
        if (r.combo >= 3 && r.combo % 3 === 0) Confetti.burst(boostOn() ? 70 : 40, { center: true });
        else if (boostOn()) Confetti.burst(24, { center: true }); // "Renforcées": a small burst on every right answer
      } else {
        Sound.wrong();
        ui.node.querySelector(".hearts").classList.add("shake");
        var ans = res.answerText ? '<div class="fb-answer">' + T("correctAnswer") + ": <b>" + E(res.answerText) + "</b></div>" : "";
        var kind = boostOn() && !r.gameOver ? '<div class="fb-boost">' + pick(T("boostKo")) + "</div>" : "";
        var title = r.gameOver ? T("noHearts") : r.shieldUsed ? T("shieldUsed") : T("lostHeart");
        setBar(ui, "ko" + (r.shieldUsed ? " shielded" : ""), '<div class="fb-title"><span class="fb-ico">' + (r.shieldUsed ? "😌" : "❌") + "</span> " + title + "</div>" + kind + note + ans + expl,
          r.gameOver ? T("seeResults") : T("next"));
      }
      ui.btn.style.display = "";
      ui.btn.disabled = false;
      var reveals = ui.container.querySelectorAll(".reveal");
      if (reveals.length) {
        var rv = reveals[reveals.length - 1];
        setTimeout(function () { rv.scrollIntoView({ behavior: scrollBehavior(), block: "center" }); }, 80);
      }
      setTimeout(function () { try { ui.btn.focus({ preventScroll: true }); } catch (e) { /* */ } }, 50);
      if (r.levelUp) setTimeout(function () { levelUpPopup(r.levelUp); }, 500);
      badgeToasts(r.newBadges);
    }

    controller = Exercises.render(ex, ui.container, onResult, {
      data: DATA,
      onReady: function (enabled, label, auto) {
        if (phase !== "answer") return;
        if (auto) {
          ui.btn.style.display = "none";
          setBar(ui, "", '<div class="fb-hint">' + T("matchAll") + "</div>");
          return;
        }
        ui.btn.disabled = !enabled;
        if (label) ui.btn.innerHTML = label;
      },
      onRetry: function (msg) {
        Sound.wrong();
        setBar(ui, "retry", '<div class="fb-title"><span class="fb-ico">🤔</span> ' + msg + "</div>");
      },
      onTick: function (ok) { if (ok) Sound.tap(); else Sound.wrong(); },
      onHint: function () {
        var spent = Engine.useHint();
        updateTop(ui, false);
        if (spent) floatXp(ui, "−" + spent);
      }
    }) || {};

    ui.btn.onclick = function () {
      if (phase === "answer") {
        if (controller.check) controller.check();
        return;
      }
      // continue
      var sess = Engine.session;
      if (!sess) return;
      if (sess.over) return showGameOver(w);
      if (sess.index >= sess.total) return showComplete(w);
      playExercise(w, ui);
    };
  }

  /* ================= Result screens ================= */

  function showComplete(w) {
    var sum = Engine.finishWorld();
    setNav(showMap, null);
    var li = Engine.levelInfo();
    var acc = Math.round(sum.accuracy * 100);
    var badges = sum.newBadges.length ? '<div class="new-badges"><div class="ex-label">' + T("newBadges") + "</div>" +
      sum.newBadges.map(function (b) { return '<div class="nb pop"><span>' + E(b.icon) + "</span>" + E(b.name) + "</div>"; }).join("") + "</div>" : "";
    var msg = sum.stars >= Engine.MAX_STARS ? T("msg3") : sum.nextLocked ? T("msgNeed", sum.starsToUnlock) : sum.stars >= 4 ? T("msg2") : T("msg1");
    var node = h('<section class="screen complete" style="--c:' + safeColor(w.color) + '">' +
      '<div class="card result-card">' +
        '<div class="result-icon bounce">' + E(w.icon || "🏆") + "</div>" +
        '<h2 class="result-title">' + T("complete") + '</h2><p class="result-sub">' + E(w.title) + " · <small>" + T("completeSub") + "</small></p>" +
        '<div class="big-stars">' + bigStarsHtml(sum.stars) + "</div>" +
        '<p class="result-msg">' + msg + "</p>" +
        '<div class="result-stats">' +
          '<div class="rstat"><b>+' + Math.max(0, sum.xpEarned) + "</b><small>" + T("xpEarned") + "</small></div>" +
          '<div class="rstat"><b>' + acc + "%</b><small>" + T("accuracy") + "</small></div>" +
          '<div class="rstat"><b>🔥 ' + sum.maxCombo + "</b><small>" + T("bestCombo") + "</small></div>" +
        "</div>" +
        '<div class="xp-line">Niveau ' + li.level + " · " + E(li.icon) + " " + E(li.name) + '<div class="xpbar"><div class="xpbar-fill" style="width:' + Math.round(li.progress * 100) + '%"></div></div></div>' +
        badges +
        (sum.unlockedWorld ? '<div class="unlocked pop">' + T("unlocked") + " <b>" + E(sum.unlockedWorld.icon || "") + " " + E(sum.unlockedWorld.title) + "</b></div>" : "") +
      "</div>" +
      (sum.pauseSuggested
        ? '<div class="card pause-card pop"><p>Super série ! Tu as fini <b>' + sum.worldsInARow + ' mondes</b> d\'affilée. C\'est l\'heure d\'une petite pause 🧃</p></div>'
        : "") +
      '<button class="btn btn-primary btn-big" data-act="next">' + T("next") + "</button>" +
      '<button class="btn btn-white" data-act="replay">' + T("replay") + "</button>" +
      "</section>");
    on(node, "next", sum.pauseSuggested ? showPause : showMap); // the pause is due: "Continuer" leads to it
    on(node, "replay", function () { startWorld(w); });
    show(node);
    Sound.win();
    var big = boostOn();
    Confetti.burst(big ? 260 : 160);
    var here = function () { return document.body.contains(node); }; // no late confetti on another screen (e.g. the pause)
    setTimeout(function () { if (here()) Confetti.burst(big ? 160 : 80, { center: true }); }, 900);
    if (big) setTimeout(function () { if (here()) Confetti.burst(160); }, 1700);
  }

  /* ================= Pause (suggested after N worlds in a row) =================
     Completely static on purpose (no timer, no animation, no confetti): the child should leave the screen. */

  function showPause() {
    var endAt = Engine.startPause(); // kept across reloads: the pause cannot be skipped by reloading the page
    Confetti.stop();
    var level = PACK ? PACK.level : null;
    var ideas = window.I18N ? I18N.pauseIdeas(level) : ["Lis 2 pages de ton livre 📖"];
    function back() { if (PACK && DATA) showMap(); else showHome(); }
    function stay() {} // back button: the pause stays on screen
    setNav(stay, showPause);
    var d = new Date(endAt), hhmm = d.getHours() + "h" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    var node = h('<section class="screen pause">' +
      '<div class="card result-card pause-screen">' +
        '<div class="result-icon">🧃</div>' +
        '<h2 class="result-title">Pause !</h2>' +
        '<p class="result-msg">Va faire autre chose et reviens dans 5 minutes 🙂</p>' +
        '<p class="pause-idea">' + E(pick(ideas)) + "</p>" +
        '<p class="pause-until">Le jeu reprend à <b>' + E(hhmm) + "</b></p>" +
      "</div>" +
      '<button class="btn btn-white btn-big" data-act="resume" disabled>Je reprends</button>' +
      '<button class="btn btn-ghost btn-small" data-act="switch">🔄 Changer de joueur</button>' +
      "</section>");
    on(node, "switch", function () { Sound.tap(); showProfiles(); }); // another player can play meanwhile (the pause stays for this one)
    var btn = on(node, "resume", function () {
      if (Engine.pauseEndsAt()) return; // still running (e.g. the clock was changed)
      Sound.tap(); back();
    });
    // a single timer, nothing visible moves: the button simply becomes clickable at the end
    setTimeout(function () { if (document.body.contains(node)) btn.disabled = false; }, Math.max(0, endAt - Date.now()) + 50);
    show(node);
  }

  /** While the current player's pause runs, every way into the game leads back to the pause screen. */
  function pauseGuard() {
    if (Engine.currentProfile() && Engine.pauseEndsAt()) { showPause(); return true; }
    return false;
  }

  function showGameOver(w) {
    var s = Engine.session;
    var xp = s ? s.xpEarned : 0;
    Engine.quitWorld();
    setNav(showMap, null);
    Sound.lose();
    var node = h('<section class="screen gameover">' +
      '<div class="card result-card">' +
        '<div class="result-icon broken">💔</div>' +
        '<h2 class="result-title">' + T("outOfHearts") + '</h2><p class="result-sub">' + T("outSub") + "</p>" +
        '<p class="result-msg">' + T("dontGiveUp") + "</p>" +
        '<div class="result-stats"><div class="rstat"><b>+' + Math.max(0, xp) + "</b><small>" + T("xpKept") + "</small></div></div>" +
      "</div>" +
      '<button class="btn btn-primary btn-big" data-act="retry">' + T("tryAgain") + "</button>" +
      '<button class="btn btn-white" data-act="map">' + T("worldMap") + "</button>" +
      "</section>");
    on(node, "retry", function () { showLesson(w); });
    on(node, "map", showMap);
    show(node);
  }

  /* ================= Boot ================= */

  function showError(msg) {
    app.innerHTML = '<section class="screen error"><div class="card result-card"><div class="result-icon">😵</div>' +
      '<h2 class="result-title">Oups ! Le jeu ne peut pas démarrer.</h2>' +
      '<p class="result-msg">' + E(msg) + '</p><p class="result-msg"><small>Lance le jeu avec <code>mise run dev</code> (ou <code>npm start</code>) puis ouvre l\'adresse affichée.</small></p>' +
      '<button class="btn btn-primary" data-act="reload">↻ Recharger</button></div></section>';
    var rb = app.querySelector('[data-act="reload"]');
    if (rb) rb.addEventListener("click", function () { location.reload(); });
  }

  /** Shown inside a frame (iframe) of another site: a hidden or disguised game could make a child click
      « Supprimer » without knowing it (clickjacking). A meta CSP cannot forbid frames (frame-ancestors) and
      GitHub Pages sends no X-Frame-Options header, so the game refuses to start there. */
  function isFramed() {
    try { return window.top !== window.self; } catch (e) { return true; } // cross-origin parent: access throws
  }
  function showFramed() {
    app.innerHTML = '<section class="screen error"><div class="card result-card"><div class="result-icon">🔒</div>' +
      '<h2 class="result-title">Ouvre Révision Quest dans son propre onglet</h2>' +
      '<p class="result-msg">Le jeu ne fonctionne pas à l\'intérieur d\'une autre page.</p></div></section>';
  }

  function boot() {
    app = document.getElementById("app");
    try { document.title = APP_NAME; } catch (e) { /* ignore */ }
    if (isFramed()) { showFramed(); return; }
    if (!window.Engine || !window.Exercises || !window.Packs) { showError("Certains fichiers du jeu n'ont pas pu être chargés."); return; }
    if (!Packs.list().length) { showError("Le catalogue des chapitres (js/catalog.js) est vide ou invalide."); return; }
    if (window.I18N) I18N.setLang("fr");
    Exercises.initTranslations(function (key) {
      badgeToasts(Engine.viewTranslation(key));
    });
    // another tab saved: redraw the current screen, except during an exercise, a form or an open dialog
    Engine.onExternalChange(function () {
      if (Engine.session || openModals.length) return;
      if (!Engine.currentProfile()) { if (!document.querySelector(".screen.newplayer")) showProfiles(); return; }
      if (rerender) rerender();
    });
    document.addEventListener("pointerdown", function once() { Sound.unlock(); document.removeEventListener("pointerdown", once); });
    showHome();
  }

  window.App = {
    boot: boot, showHome: showHome, showCatalog: showCatalog, showMap: showMap, openPack: openPack,
    currentPack: function () { return PACK; }, Sound: Sound, Confetti: Confetti, showPause: showPause
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
