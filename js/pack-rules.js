/* Révision Quest — rules of a content pack, shared by the browser (course editor, private courses) and Node
   (tools/validate-pack.js). Pure functions on plain data: no file, no catalogue, no DOM.
   Every check reports through err(message) (blocking) or warn(message) (advice). Messages are in French.
   Loaded as a classic <script> (window.PackRules) or with require() (module.exports). ES5, like the rest of js/. */
(function (root) {
  "use strict";

  var ID_RE = /^[a-z0-9-]{1,30}$/; // ids of levels, subjects and groups
  var WORLD_ID_RE = /^[a-z0-9-]{1,40}$/;
  var PATH_RE = /^([a-z0-9-]{1,30})\/([a-z0-9-]{1,30})\/([a-z0-9-]{1,60})$/; // a catalogue path: <niveau>/<matiere>/<cours>
  var PACK_PATH_RE = /^[a-z0-9-]{1,30}\/[a-z0-9-]{1,30}\/[a-z0-9-]{1,60}(\/[a-z0-9-]{1,30})?$/; // a pack id: the same, plus /<groupe> for a group
  var COLOR_RE = /^#[0-9a-fA-F]{3,8}$/;
  var TYPES = ["mcq", "sort", "match", "order", "fill", "spot", "write"];

  /* ---------- helpers ---------- */

  function isStr(v) { return typeof v === "string" && v.trim().length > 0; }
  var isArr = Array.isArray;
  function isInt(v) { return typeof v === "number" && isFinite(v) && Math.floor(v) === v; }
  function has(obj, k) { return Object.prototype.hasOwnProperty.call(obj, k); }
  function json(v) { var s = JSON.stringify(v); return s === undefined ? "undefined" : s; }

  /** A set of plain values (strings, numbers, null…): 1 and "1" are different, like a JS Set. */
  function valueSet() {
    var m = Object.create(null);
    var key = function (v) { return typeof v + ":" + String(v); };
    return {
      has: function (v) { return key(v) in m; },
      add: function (v) { m[key(v)] = true; }
    };
  }
  /** True when the list holds the same value twice. */
  function hasDup(list) {
    var seen = valueSet();
    return list.some(function (v) { if (seen.has(v)) return true; seen.add(v); return false; });
  }

  /** All strings inside a value (deep). */
  function strings(v, out) {
    out = out || [];
    if (typeof v === "string") out.push(v);
    else if (isArr(v)) v.forEach(function (x) { strings(x, out); });
    else if (v && typeof v === "object") Object.keys(v).forEach(function (k) { strings(v[k], out); });
    return out;
  }

  function count(text, re) { return (text.match(re) || []).length; }

  /** [[mot|traduction]] must be well formed; ** must be paired. */
  function checkMarkup(text, where, err) {
    if (typeof text !== "string") return;
    var opens = count(text, /\[\[/g);
    var ok = count(text, /\[\[[^|\]]+\|[^\]]+\]\]/g);
    if (opens !== ok || count(text, /\]\]/g) !== opens) err(where + " : syntaxe [[mot|traduction]] mal formée");
    if (count(text, /\*\*/g) % 2) err(where + " : ** (gras) non fermé");
  }

  /** Fields compared as plain text: no [[...]] allowed. */
  function noTr(v, where, err) {
    if (strings(v).some(function (s) { return s.indexOf("[[") !== -1; })) err(where + " : [[...]] interdit dans ce champ (le texte est comparé tel quel)");
  }

  function plain(s) {
    return String(s).replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1");
  }

  /** Unknown keys of obj (not in the allowed list). */
  function unknownKeys(obj, allowed) {
    return Object.keys(obj).filter(function (k) { return allowed.indexOf(k) === -1; });
  }

  /* ---------- figures (js/figures.js draws them; same limits) ---------- */

  var FIG_KINDS = { segment: 2, line: 2, ray: 2, ticks: 2, rightAngle: 3, angle: 3 };
  var FIG_KIND_NAMES = Object.keys(FIG_KINDS);
  var FIG_DIRS = ["n", "s", "e", "w", "ne", "nw", "se", "sw", "hidden"];
  var FIG_POINT_RE = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ0-9']{0,3}$/;
  var FIG_ITEM_KEYS = FIG_KIND_NAMES.concat(["label", "labelAt", "n", "hl"]);
  var FIG_KEYS = ["w", "h", "grid", "points", "draw", "alt", "caption"];

  function validateFigure(f, where, err, warn) {
    var F = where + " figure";
    if (!f || typeof f !== "object" || isArr(f)) return err(F + " : objet attendu");
    unknownKeys(f, FIG_KEYS).forEach(function (k) { err(F + ' : champ "' + k + '" inconnu (' + FIG_KEYS.join(", ") + ")"); });
    var size = function (v) { return typeof v === "number" && v >= 1 && v <= 24; };
    if (!size(f.w) || !size(f.h)) return err(F + " : w et h (taille en carreaux) doivent être des nombres de 1 à 24");
    if (f.grid != null && typeof f.grid !== "boolean") err(F + " : grid doit être true ou false");
    if (!f.points || typeof f.points !== "object" || isArr(f.points) || !Object.keys(f.points).length) return err(F + " : points manquant ({ A: [x, y], … })");
    var names = Object.keys(f.points);
    if (names.length > 40) err(F + " : 40 points maximum");
    names.forEach(function (n) {
      var p = f.points[n], P = F + " point " + n;
      if (!FIG_POINT_RE.test(n)) err(P + " : nom invalide (une lettre puis 3 lettres, chiffres ou ' au plus)");
      if (!isArr(p) || p.length < 2 || p.length > 3 || typeof p[0] !== "number" || typeof p[1] !== "number" || !isFinite(p[0]) || !isFinite(p[1])) return err(P + " : attendu [x, y] ou [x, y, position]");
      if (p[0] < 0 || p[0] > f.w || p[1] < 0 || p[1] > f.h) err(P + " : [" + p[0] + ", " + p[1] + "] hors de la figure (0 à " + f.w + ", 0 à " + f.h + ")");
      if (p.length === 3 && FIG_DIRS.indexOf(p[2]) === -1) err(P + ' : position "' + p[2] + '" inconnue (' + FIG_DIRS.join(", ") + ")");
    });
    if (!isArr(f.draw)) return err(F + " : draw doit être un tableau (peut être vide)");
    if (f.draw.length > 60) err(F + " : 60 tracés maximum");
    f.draw.forEach(function (it, i) {
      var D = F + " draw[" + i + "]";
      if (!it || typeof it !== "object") return err(D + " : objet attendu");
      unknownKeys(it, FIG_ITEM_KEYS).forEach(function (k) { err(D + ' : champ "' + k + '" inconnu'); });
      var kinds = FIG_KIND_NAMES.filter(function (k) { return k in it; });
      if (kinds.length !== 1) return err(D + " : un seul tracé par élément (" + FIG_KIND_NAMES.join(", ") + ")");
      var kind = kinds[0], refs = it[kind];
      if (!isArr(refs) || refs.length !== FIG_KINDS[kind]) return err(D + " : " + kind + " attend " + FIG_KINDS[kind] + " noms de points");
      refs.forEach(function (r) { if (!has(f.points, r)) err(D + ' : point "' + r + '" absent de points'); });
      if (hasDup(refs)) err(D + " : points identiques");
      else if (refs.every(function (r) { return isArr(f.points[r]); })) {
        var a = f.points[refs[0]], b = f.points[refs[1]], c = refs[2] != null ? f.points[refs[2]] : null;
        var same = function (p, q) { return p[0] === q[0] && p[1] === q[1]; };
        if (same(a, b) || (c && same(b, c))) err(D + " : deux points au même endroit");
      }
      if (it.label != null && (typeof it.label !== "string" || it.label.length > 16)) err(D + " : label doit être un texte court (16 caractères max)");
      if (it.label != null && (kind === "rightAngle" || kind === "angle" || kind === "ticks")) warn(D + " : label ignoré pour " + kind);
      if (it.labelAt != null && (it.labelAt !== "start" && it.labelAt !== "end" || (kind !== "line" && kind !== "ray"))) err(D + ' : labelAt ("start" ou "end") seulement pour line et ray');
      if (it.n != null && (kind !== "ticks" || !isInt(it.n) || it.n < 1 || it.n > 3)) err(D + " : n (1 à 3 traits) seulement pour ticks");
      if (it.hl != null && typeof it.hl !== "boolean") err(D + " : hl doit être true ou false");
    });
    if (f.caption != null && (typeof f.caption !== "string" || f.caption.length > 80)) err(F + " : caption doit être un texte court (80 caractères max)");
    if (f.alt != null && typeof f.alt !== "string") err(F + " : alt doit être un texte");
    if (!isStr(f.alt)) warn(F + " : ajoute alt (description de la figure pour les lecteurs d'écran)");
  }

  /* ---------- tables (js/figures.js buildTable draws them; same limits) ---------- */

  var TABLE_KEYS = ["rows", "head", "groups", "caption", "alt"];
  var CELL_KEYS = ["text", "span", "hl"];
  var MAX_ROWS = 8, MAX_COLS = 12, MAX_CELL = 20;

  function validateTable(t, where, err, warn) {
    var T = where + " table";
    if (!t || typeof t !== "object" || isArr(t)) return err(T + " : objet attendu ({ rows: [[…]], … })");
    unknownKeys(t, TABLE_KEYS).forEach(function (k) { err(T + ' : champ "' + k + '" inconnu (' + TABLE_KEYS.join(", ") + ")"); });
    if (!isArr(t.rows) || !t.rows.length) return err(T + " : rows doit être un tableau de lignes non vide");
    if (t.rows.length > MAX_ROWS) err(T + " : " + MAX_ROWS + " lignes maximum");
    if (t.head != null && (!isInt(t.head) || t.head < 0 || t.head > t.rows.length)) err(T + " : head = nombre de lignes d'en-tête (0 à rows.length)");
    if (t.groups != null && (!isInt(t.groups) || t.groups < 1 || t.groups > MAX_COLS)) err(T + " : groups = un trait épais toutes les N colonnes (1 à " + MAX_COLS + ")");
    var widths = t.rows.map(function (row, r) {
      var R = T + " ligne " + (r + 1);
      if (!isArr(row) || !row.length) { err(R + " : tableau de cellules non vide attendu"); return 0; }
      return row.reduce(function (w, c, ci) {
        var C = R + " cellule " + (ci + 1);
        var cell = typeof c === "string" ? { text: c } : c;
        if (!cell || typeof cell !== "object" || isArr(cell)) { err(C + " : texte ou { text, span, hl } attendu"); return w + 1; }
        unknownKeys(cell, CELL_KEYS).forEach(function (k) { err(C + ' : champ "' + k + '" inconnu (text, span, hl)'); });
        if (typeof cell.text !== "string") err(C + " : text doit être un texte (peut être vide)");
        else {
          if (cell.text.length > MAX_CELL) err(C + " : texte trop long (" + MAX_CELL + " caractères max)");
          if (/\[\[|\*\*/.test(cell.text)) err(C + " : texte simple seulement (pas de ** ni de [[...]]) ; hl: true pour surligner");
        }
        if (cell.span != null && (!isInt(cell.span) || cell.span < 1 || cell.span > MAX_COLS)) err(C + " : span = nombre de colonnes (1 à " + MAX_COLS + ")");
        if (cell.hl != null && typeof cell.hl !== "boolean") err(C + " : hl doit être true ou false");
        return w + (isInt(cell.span) ? cell.span : 1);
      }, 0);
    });
    if (widths.some(function (w) { return w > MAX_COLS; })) err(T + " : " + MAX_COLS + " colonnes maximum");
    if (widths.some(function (w) { return w !== widths[0]; })) err(T + " : toutes les lignes doivent couvrir le même nombre de colonnes (" + widths.join(", ") + ")");
    if (t.caption != null && (typeof t.caption !== "string" || t.caption.length > 80)) err(T + " : caption doit être un texte court (80 caractères max)");
    if (t.alt != null && typeof t.alt !== "string") err(T + " : alt doit être un texte");
    if (!isStr(t.alt)) warn(T + " : ajoute alt (description du tableau pour les lecteurs d'écran)");
  }

  /* ---------- pack identity ---------- */

  /** The pack path (its id). Returns true when well formed. */
  function checkPath(p, err) {
    if (PACK_PATH_RE.test(String(p))) return true;
    err("path " + json(p) + ' invalide (attendu "<niveau>/<matiere>/<cours>" ou "<niveau>/<matiere>/<cours>/<groupe>", minuscules, chiffres, tirets)');
    return false;
  }

  function checkLang(lang, err) {
    if (lang !== "fr" && lang !== "en") err('lang doit être "fr" ou "en" (reçu : ' + json(lang) + ")");
  }

  /* ---------- pack content: documents, worlds, lessons, exercises ---------- */

  /** Checks everything inside a pack except its identity (path, lang) and its catalogue entry.
      Returns { worlds, exercises, types } or null when there is no world to count. */
  function validateContent(pack, err, warn) {
    // documents (or legacy letters)
    if (pack.documents && pack.letters) err("utilise documents OU letters, pas les deux");
    var docs = pack.documents || pack.letters || [];
    var docField = pack.documents ? "documents" : "letters";
    if (!isArr(docs)) err(docField + " doit être un tableau");
    var docIds = valueSet();
    (isArr(docs) ? docs : []).forEach(function (d, i) {
      var w = docField + "[" + i + "]";
      if (!d || typeof d !== "object") return err(w + " : objet attendu");
      if (d.id == null || (typeof d.id !== "number" && typeof d.id !== "string")) err(w + " : id manquant");
      else if (docIds.has(d.id)) err(w + " : id " + d.id + " en double");
      docIds.add(d.id);
      if (!isStr(d.text)) err(w + " : text manquant");
      if (!isStr(d.title) && !isStr(d.from)) warn(w + " : ajoute un title (ou from) pour l'en-tête du document");
      if (d.screen != null && typeof d.screen !== "boolean") err(w + " : screen doit être true ou false");
      if (isStr(d.text) && !d.screen && plain(d.text).length > 450) warn(w + " : texte long au-dessus de la question : mets screen: true (écran de lecture)");
      checkMarkup(d.text, w + ".text", err);
    });

    // worlds
    if (!isArr(pack.worlds) || !pack.worlds.length) { err("worlds doit être un tableau non vide"); return null; }
    if (pack.worlds.length > 100) err("100 mondes maximum");
    var worldIds = valueSet();
    var stats = { worlds: pack.worlds.length, exercises: 0, types: {} };
    pack.worlds.forEach(function (w, wi) {
      var W = "monde " + (wi + 1);
      if (!w || typeof w !== "object") return err(W + " : objet attendu");
      if (w.id == null || !WORLD_ID_RE.test(String(w.id))) err(W + " : id " + json(w.id) + " invalide (nombre ou texte en minuscules/chiffres/tirets)");
      else if (worldIds.has(String(w.id))) err(W + " : id " + w.id + " en double");
      worldIds.add(String(w.id));
      if (!isStr(w.title)) err(W + " : title manquant");
      if (!isStr(w.icon)) warn(W + " : icon (emoji) manquant");
      if (w.color != null && !COLOR_RE.test(w.color)) err(W + ' : color "' + w.color + '" invalide (format #RRGGBB)');
      if (w.color == null) warn(W + " : color manquante");
      validateLesson(w.lesson, W, err, warn);
      if (!isArr(w.exercises) || !w.exercises.length) return err(W + " : exercises doit être un tableau non vide");
      w.exercises.forEach(function (e, ei) {
        stats.exercises++;
        validateExercise(e, W + " (" + (w.title || "") + ") ex " + (ei + 1), { err: err, warn: warn, docIds: docIds, stats: stats });
      });
    });
    return stats;
  }

  function validateLesson(lesson, W, err, warn) {
    if (!lesson || typeof lesson !== "object") return warn(W + " : pas de carte leçon (lesson)");
    if (!isArr(lesson.points) || !lesson.points.length) warn(W + " : lesson.points vide");
    else if (lesson.points.length > 5) warn(W + " : " + lesson.points.length + " points dans la leçon (5 max conseillé, reste court)");
    strings(lesson).forEach(function (s) { checkMarkup(s, W + " leçon", err); });
    if (lesson.figures != null) {
      if (!isArr(lesson.figures)) err(W + " : lesson.figures doit être un tableau");
      else {
        if (lesson.figures.length > 6) err(W + " : 6 figures maximum dans une leçon");
        lesson.figures.forEach(function (f, fi) { validateFigure(f, W + " leçon figures[" + fi + "]", err, warn); });
      }
    }
    if (lesson.tables != null) {
      if (!isArr(lesson.tables)) err(W + " : lesson.tables doit être un tableau");
      else {
        if (lesson.tables.length > 3) err(W + " : 3 tableaux maximum dans une leçon");
        lesson.tables.forEach(function (tb, ti) { validateTable(tb, W + " leçon tables[" + ti + "]", err, warn); });
      }
    }
  }

  /** One exercise. ctx: { err, warn, docIds (valueSet of the pack's document ids), stats ({ types }) }. */
  function validateExercise(e, where, ctx) {
    var err = ctx.err, warn = ctx.warn, docIds = ctx.docIds || valueSet(), stats = ctx.stats || { types: {} };
    if (!e || typeof e !== "object") return err(where + " : objet attendu");
    var t = where + " [" + e.type + "]";
    if (TYPES.indexOf(e.type) === -1) return err(where + ' : type "' + e.type + '" inconnu (' + TYPES.join(", ") + ")");
    stats.types[e.type] = (stats.types[e.type] || 0) + 1;
    if (!isStr(e.prompt)) err(t + " : prompt (consigne) manquant");
    if (!isStr(e.explanation)) err(t + " : explanation manquante");
    if (isStr(e.prompt) && plain(e.prompt).length > 160) warn(t + " : consigne longue (" + plain(e.prompt).length + " caractères) — fais simple");
    if (isStr(e.explanation) && plain(e.explanation).length > 300) warn(t + " : explication longue (" + plain(e.explanation).length + " caractères)");
    strings([e.prompt, e.explanation, e.hint]).forEach(function (s) { checkMarkup(s, t, err); });
    // text to read: any exercise can show a pack document (docId; letterId is the old name, write only)
    if (e.docId != null && e.letterId != null) err(t + " : utilise docId OU letterId, pas les deux");
    if (e.letterId != null && e.type !== "write") err(t + " : letterId seulement sur write (utilise docId)");
    var docRef = e.docId != null ? e.docId : e.letterId;
    if (docRef != null && !docIds.has(docRef)) err(t + " : document " + docRef + " introuvable dans documents/letters");
    if (e.figure != null) validateFigure(e.figure, t, err, warn);
    if (e.table != null) validateTable(e.table, t, err, warn);
    var check = TYPE_CHECKS[e.type];
    check(e, t, err, warn);
  }

  var TYPE_CHECKS = {
    mcq: function (e, t, err) {
      if (!isArr(e.options) || e.options.length < 2) return err(t + " : options doit contenir au moins 2 choix");
      if (isArr(e.answer)) { // several answers: tick boxes
        if (!e.answer.length) err(t + " : answer [] vide (au moins une bonne réponse)");
        if (e.answer.some(function (a) { return !isInt(a) || a < 0 || a >= e.options.length; })) err(t + " : answer " + json(e.answer) + " hors limites (0 à " + (e.options.length - 1) + ")");
        if (hasDup(e.answer)) err(t + " : answer contient un indice en double");
        if (e.answer.length >= e.options.length) err(t + " : il faut au moins une mauvaise réponse parmi les options");
        if (e.showCount != null && typeof e.showCount !== "boolean") err(t + " : showCount doit être true ou false");
      } else {
        if (e.showCount != null) err(t + " : showCount seulement avec plusieurs réponses (answer: [..])");
        if (!isInt(e.answer) || e.answer < 0 || e.answer >= e.options.length) err(t + " : answer " + e.answer + " hors limites (0 à " + (e.options.length - 1) + ")");
      }
      if (hasDup(e.options.map(function (o) { return plain(o).trim().toLowerCase(); }))) err(t + " : options en double");
      if (e.options.some(function (o) { return !isStr(o); })) err(t + " : option vide");
      noTr(e.options, t + " options", err);
    },
    sort: function (e, t, err) {
      if (!isArr(e.categories) || e.categories.length < 2) return err(t + " : au moins 2 categories");
      var cats = valueSet();
      e.categories.forEach(function (c, i) {
        if (!c || !isStr(String(c.id || ""))) err(t + " : categories[" + i + "].id manquant");
        else if (cats.has(c.id)) err(t + ' : catégorie "' + c.id + '" en double');
        cats.add(c && c.id);
        if (!c || !isStr(c.label)) err(t + " : categories[" + i + "].label manquant");
      });
      if (!isArr(e.items) || e.items.length < 2) return err(t + " : au moins 2 items");
      e.items.forEach(function (it, i) {
        if (!it || !isStr(it.text)) err(t + " : items[" + i + "].text manquant");
        if (!it || !cats.has(it.cat)) err(t + " : items[" + i + '].cat "' + (it && it.cat) + "\" n'existe pas dans categories");
      });
      noTr(e.items.map(function (i) { return i && i.cat; }), t + " items.cat", err);
    },
    match: function (e, t, err, warn) {
      if (!isArr(e.pairs) || e.pairs.length < 2) return err(t + " : au moins 2 pairs");
      e.pairs.forEach(function (p, i) { if (!p || !isStr(p.left) || !isStr(p.right)) err(t + " : pairs[" + i + "] doit avoir left et right"); });
      if (e.pairs.length > 6) warn(t + " : plus de 6 paires, c'est long sur téléphone");
      noTr(e.pairs, t + " pairs", err);
      if (hasDup(e.pairs.map(function (p) { return p && plain(p.left); }))) err(t + " : left en double");
      if (hasDup(e.pairs.map(function (p) { return p && plain(p.right); }))) err(t + " : right en double");
    },
    order: function (e, t, err, warn) {
      if (!isArr(e.words) || e.words.length < 2 || e.words.some(function (w) { return !isStr(w); })) return err(t + " : words doit contenir au moins 2 mots");
      if (e.distractors != null && !isArr(e.distractors)) err(t + " : distractors doit être un tableau");
      if (e.alternatives != null && (!isArr(e.alternatives) || e.alternatives.some(function (a) { return !isArr(a); }))) err(t + " : alternatives doit être un tableau de tableaux de mots");
      (isArr(e.alternatives) ? e.alternatives : []).forEach(function (a, i) {
        // every word of an alternative must exist among the chips (words + distractors), case-insensitive
        if (!isArr(a)) return;
        var bank = e.words.concat(isArr(e.distractors) ? e.distractors : []).map(function (w) { return plain(w).trim().toLowerCase(); });
        var missing = a.filter(function (w) {
          var k = bank.indexOf(plain(w).trim().toLowerCase());
          if (k === -1) return true;
          bank.splice(k, 1);
          return false;
        });
        if (missing.length) err(t + " : alternatives[" + i + "] utilise des mots absents des étiquettes : " + missing.join(" "));
      });
      noTr([e.words, e.distractors, e.alternatives], t, err);
      if (!isStr(e.translation)) warn(t + " : translation (phrase traduite / reformulée) conseillée");
    },
    fill: function (e, t, err, warn) {
      if (!isStr(e.sentence) || e.sentence.split("___").length !== 2) err(t + " : sentence doit contenir exactement un trou ___");
      if (!isArr(e.answers) || !e.answers.length || e.answers.some(function (a) { return !isStr(a); })) err(t + " : answers doit contenir au moins une réponse");
      noTr(e.answers, t + " answers", err);
      checkMarkup(e.sentence, t + " sentence", err);
      if (e.listen != null) {
        // text read aloud by the device voice: plain text, short (some voices stop after ~15 s)
        if (!isStr(e.listen)) err(t + " : listen doit être un texte non vide");
        else {
          if (/\[\[|\*\*/.test(e.listen)) err(t + " : listen est lu à voix haute, ni [[...]] ni ** (texte simple)");
          if (e.listen.length > 300) err(t + " : listen trop long (" + e.listen.length + " caractères, 300 max)");
        }
        if (!isStr(e.hint)) warn(t + " : hint conseillé (un indice de sens aide si la voix est mal comprise)");
      }
    },
    spot: function (e, t, err) {
      if (!isArr(e.tokens) || e.tokens.length < 2) return err(t + " : tokens doit contenir au moins 2 mots");
      if (!isInt(e.wrongIndex) || e.wrongIndex < 0 || e.wrongIndex >= e.tokens.length) err(t + " : wrongIndex " + e.wrongIndex + " hors limites (0 à " + (e.tokens.length - 1) + ")");
      if (!isStr(e.correction)) err(t + " : correction manquante");
      noTr(e.tokens, t + " tokens", err);
    },
    write: function (e, t, err, warn) {
      if (!isArr(e.requirements) || !e.requirements.length) return err(t + " : requirements manquant");
      var reqIds = valueSet();
      var met = 0;
      var model = String(e.modelAnswer || "").replace(/[’‘ʼ`´]/g, "'").replace(/\s+/g, " ");
      e.requirements.forEach(function (r, i) {
        var R = t + " requirement " + (r && r.id ? r.id : i);
        if (!r || !isStr(r.id)) err(R + " : id manquant");
        else if (reqIds.has(r.id)) err(R + " : id en double");
        reqIds.add(r && r.id);
        if (!r || !isStr(r.label)) err(R + " : label manquant");
        noTr(r && r.pattern, R + " pattern", err);
        var re = null;
        try { re = new RegExp(r.pattern, "i"); } catch (x) { err(R + " : regex invalide (" + x.message + ")"); }
        if (re && re.test(model)) met++;
        else if (re && e.modelAnswer) warn(R + " : non trouvé dans modelAnswer");
      });
      var min = e.minRequirements != null ? e.minRequirements : e.requirements.length;
      if (!isInt(min) || min < 1 || min > e.requirements.length) err(t + " : minRequirements " + e.minRequirements + " doit être entre 1 et " + e.requirements.length);
      if (!isStr(e.modelAnswer)) err(t + " : modelAnswer manquant");
      else {
        if (met < min) err(t + " : modelAnswer ne valide que " + met + "/" + min + " requirements");
        var words = (e.modelAnswer.trim().match(/[A-Za-zÀ-ÿ0-9']+/g) || []).length;
        if (e.minWords && words < e.minWords) err(t + " : modelAnswer trop court (" + words + " mots < minWords " + e.minWords + ")");
      }
      if (e.starters != null && !isArr(e.starters)) err(t + " : starters doit être un tableau");
      noTr(e.starters, t + " starters", err);
    }
  };

  var api = {
    ID_RE: ID_RE, WORLD_ID_RE: WORLD_ID_RE, PATH_RE: PATH_RE, PACK_PATH_RE: PACK_PATH_RE, COLOR_RE: COLOR_RE, TYPES: TYPES,
    MAX_ROWS: MAX_ROWS, MAX_COLS: MAX_COLS, MAX_CELL: MAX_CELL,
    isStr: isStr, plain: plain, checkMarkup: checkMarkup,
    checkPath: checkPath, checkLang: checkLang,
    validateContent: validateContent, validateLesson: validateLesson, validateExercise: validateExercise,
    validateFigure: validateFigure, validateTable: validateTable
  };
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.PackRules = api;
})(this);
