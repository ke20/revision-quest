/* Révision Quest — catalogue validé + chargement paresseux des packs.
   Un pack est identifié par son chemin "<niveau>/<matiere>/<cours>" : fichier packs/<chemin>.js,
   qui appelle window.registerPack({ path: "<chemin>", ... }).
   Un chapitre « par groupes » (entrée de catalogue avec groups: [...]) n'a pas de fichier à lui : chaque groupe est
   un pack "<niveau>/<matiere>/<cours>/<groupe>" (fichier packs/<cours>/<groupe>.js), choisi sur un écran à part.
   Il est chargé seulement quand on le choisit, avec une balise <script src> (compatible avec la
   Content-Security-Policy script-src 'self' : pas de script inline, pas d'eval, pas de fetch).
   Exposes window.Packs and window.registerPack. */
(function () {
  "use strict";

  var ID_RE = /^[a-z0-9-]{1,30}$/; // ids of levels, subjects and groups
  var PATH_RE = /^[a-z0-9-]{1,30}\/[a-z0-9-]{1,30}\/[a-z0-9-]{1,60}$/; // <niveau>/<matiere>/<cours>
  var COLOR_RE = /^#[0-9a-fA-F]{3,8}$/;
  var LOAD_TIMEOUT = 15000;

  function own(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function str(v, max) { return typeof v === "string" ? v.slice(0, max) : ""; }
  function color(v, dflt) { return typeof v === "string" && COLOR_RE.test(v) ? v : dflt; }

  /* ---------- catalogue (validated once; everything is still escaped when displayed) ---------- */

  var C = window.CATALOG && typeof window.CATALOG === "object" ? window.CATALOG : {};
  var subjects = (Array.isArray(C.subjects) ? C.subjects : []).filter(function (s) {
    return s && typeof s.id === "string" && ID_RE.test(s.id);
  }).map(function (s) {
    return { id: s.id, label: str(s.label, 40) || s.id, icon: str(s.icon, 16), color: color(s.color, "#7C4DFF") };
  });
  var levels = (Array.isArray(C.levels) ? C.levels : []).filter(function (l) {
    return l && typeof l.id === "string" && ID_RE.test(l.id);
  }).map(function (l) {
    return { id: l.id, label: str(l.label, 20) || l.id, order: typeof l.order === "number" && isFinite(l.order) ? l.order : 99 };
  }).sort(function (a, b) { return a.order - b.order; });

  function find(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }

  function count(v) { var n = Math.round(+v); return isFinite(n) && n > 0 ? Math.min(n, 100) : 0; }
  function difficulty(v) { var n = Math.round(+v); return isFinite(n) && n >= 1 ? Math.min(n, 5) : 0; }

  /** Groups of a catalogue entry: [{ id, label, difficulty, worldCount }] (invalid or duplicate ids dropped). */
  function groupsOf(p) {
    if (!Array.isArray(p.groups)) return null;
    var ids = {};
    return p.groups.filter(function (g) {
      if (!g || typeof g.id !== "string" || !ID_RE.test(g.id) || own(ids, g.id)) return false;
      ids[g.id] = true;
      return true;
    }).slice(0, 20).map(function (g) {
      return { id: g.id, label: str(g.label, 40) || g.id, difficulty: difficulty(g.difficulty), worldCount: count(g.worldCount) };
    });
  }

  var seen = {};
  var packs = [];  // catalogue cards (chapters)
  var units = [];  // playable packs: chapters without groups + every group of a grouped chapter
  (Array.isArray(C.packs) ? C.packs : []).forEach(function (p) {
    if (!p || typeof p.path !== "string" || !PATH_RE.test(p.path) || own(seen, p.path)) return;
    var seg = p.path.split("/");
    if (!find(levels, seg[0]) || !find(subjects, seg[1])) return;
    var groups = groupsOf(p);
    if (groups && !groups.length) return; // groups: [] (or only invalid groups) = nothing to play
    seen[p.path] = true;
    var chapter = {
      id: p.path, level: seg[0], subject: seg[1], // the path is the pack id
      title: str(p.title, 80) || p.path, description: str(p.description, 240), icon: str(p.icon, 16) || "📘",
      color: color(p.color, find(subjects, seg[1]).color), lang: p.lang === "en" ? "en" : "fr",
      worldCount: count(p.worldCount), file: "packs/" + p.path + ".js"
    };
    if (!groups) { packs.push(chapter); units.push(chapter); return; }
    chapter.file = null;
    chapter.groups = groups.map(function (g) {
      var id = p.path + "/" + g.id;
      return {
        id: id, level: chapter.level, subject: chapter.subject, parent: chapter.id, label: g.label, difficulty: g.difficulty,
        title: chapter.title + " · " + g.label, description: chapter.description, icon: chapter.icon, color: chapter.color,
        lang: chapter.lang, worldCount: g.worldCount, file: "packs/" + id + ".js"
      };
    });
    chapter.worldCount = chapter.groups.reduce(function (n, g) { return n + g.worldCount; }, 0);
    packs.push(chapter);
    units.push.apply(units, chapter.groups);
  });

  /* ---------- registry ---------- */

  var registry = {};  // id -> normalized pack data
  var pending = {};   // id -> [callbacks] while its script is loading

  function validWorlds(w) {
    return Array.isArray(w) && w.length > 0 && w.length <= 100 && w.every(function (x) {
      return x && typeof x === "object" && (typeof x.id === "number" || typeof x.id === "string") && Array.isArray(x.exercises);
    });
  }

  /** Called by pack files. Only accepted for a pack of the catalogue that is currently being loaded. */
  window.registerPack = function (data) {
    if (!data || typeof data !== "object" || typeof data.path !== "string" || !own(pending, data.path)) return false;
    var entry = find(units, data.path);
    if (!entry || !validWorlds(data.worlds)) return false;
    var docs = Array.isArray(data.documents) ? data.documents : Array.isArray(data.letters) ? data.letters : [];
    registry[data.path] = {
      id: data.path,
      lang: entry.lang, // the catalogue decides (tools/validate-pack.js flags a mismatch with the pack file)
      documents: docs.filter(function (d) { return d && typeof d === "object"; }),
      worlds: data.worlds
    };
    return true;
  };

  var ERRORS = {
    unknown: "Ce chapitre n'existe pas (ou plus).",
    network: "Impossible de charger ce chapitre. Vérifie ta connexion internet, puis réessaie.",
    invalid: "Ce chapitre est abîmé ou incomplet. Préviens la personne qui l'a créé.",
    timeout: "Le chapitre met trop de temps à se charger. Réessaie dans un moment."
  };

  /** Load a pack by id. cb(error|null, packData). error = { code, message } (message in French). */
  function load(id, cb) {
    var entry = find(units, id); // a grouped chapter has no file: only its groups can be loaded
    if (!entry) return cb({ code: "unknown", message: ERRORS.unknown });
    if (own(registry, id)) return cb(null, registry[id]);
    if (own(pending, id)) { pending[id].push(cb); return; }
    pending[id] = [cb];
    var done = false;
    var s = document.createElement("script");
    var timer = setTimeout(function () { finish("timeout"); }, LOAD_TIMEOUT);
    function finish(code) {
      if (done) return;
      done = true;
      clearTimeout(timer);
      if (!code && !own(registry, id)) code = "invalid";
      if (code && s.parentNode) s.parentNode.removeChild(s); // allows a clean retry
      var cbs = pending[id] || [];
      delete pending[id];
      cbs.forEach(function (f) {
        try { f(code ? { code: code, message: ERRORS[code] } : null, code ? null : registry[id]); } catch (e) { console.error(e); }
      });
    }
    s.onload = function () { finish(null); };
    s.onerror = function () { finish("network"); };
    s.src = entry.file; // "packs/" + path [+ "/" + group] + ".js", relative; path and group checked above
    document.head.appendChild(s);
  }

  window.Packs = {
    subjects: function () { return subjects.slice(); },
    levels: function () { return levels.slice(); },
    /** Catalogue cards (a grouped chapter is one card, with .groups). */
    list: function () { return packs.slice(); },
    /** Playable packs (what gets loaded, saved and ranked): chapters without groups and every group. */
    units: function () { return units.slice(); },
    /** A chapter or a group, by id. */
    get: function (id) { return find(packs, id) || find(units, id); },
    subject: function (id) { return find(subjects, id); },
    level: function (id) { return find(levels, id); },
    loaded: function (id) { return own(registry, id) ? registry[id] : null; },
    load: load
  };
})();
