/* Révision Quest — rules of a content pack, shared by the browser (course editor, private courses) and Node
   (tools/validate-pack.js). Pure functions on plain data: no file, no catalogue, no DOM.
   Every check reports through err(message) (blocking) or warn(message) (advice). Messages are in French.
   Loaded as a classic <script> (window.PackRules) or with require() (module.exports). ES2017. */
// @ts-check
(/** @param {Window} root the browser window (this) */ function (root) {
  "use strict";

  const ID_RE = /^[a-z0-9-]{1,30}$/; // ids of levels, subjects and groups
  const WORLD_ID_RE = /^[a-z0-9-]{1,40}$/;
  const PATH_RE = /^([a-z0-9-]{1,30})\/([a-z0-9-]{1,30})\/([a-z0-9-]{1,60})$/; // a catalogue path: <niveau>/<matiere>/<cours>
  const PACK_PATH_RE = /^[a-z0-9-]{1,30}\/[a-z0-9-]{1,30}\/[a-z0-9-]{1,60}(\/[a-z0-9-]{1,30})?$/; // a pack id: the same, plus /<groupe> for a group
  const COLOR_RE = /^#[0-9a-fA-F]{3,8}$/;
  const TYPES = ["mcq", "sort", "match", "order", "fill", "spot", "question"];
  const BOSS_MIN = 10, BOSS_MAX = 20, BOSS_POOL = 40; // the boss (last world): 10 to 20 questions per run, from a pool of 40 at most

  /* ---------- helpers ---------- */

  /** A non-blank string. @param {unknown} v @returns {boolean} */
  const isStr = (v) => typeof v === "string" && v.trim().length > 0;
  const isArr = Array.isArray;
  /** @param {object} obj @param {string} k */
  const has = (obj, k) => Object.prototype.hasOwnProperty.call(obj, k);
  /** @param {unknown} v @returns {string} */
  const json = (v) => { const s = JSON.stringify(v); return s === undefined ? "undefined" : s; };
  /** @param {unknown[]} list */
  const hasDup = (list) => new Set(list).size !== list.length;
  /** @param {string} text @param {RegExp} re */
  const count = (text, re) => (text.match(re) || []).length;

  /** All strings inside a value (deep). @param {unknown} v @param {string[]} [out] @returns {string[]} */
  function strings(v, out = []) {
    if (typeof v === "string") out.push(v);
    else if (isArr(v)) v.forEach((x) => strings(x, out));
    else if (v && typeof v === "object") Object.keys(v).forEach((k) => strings(/** @type {Record<string, unknown>} */ (v)[k], out));
    return out;
  }

  /** [[mot|traduction]] must be well formed; ** must be paired. @param {unknown} text @param {string} where @param {PackReport} err */
  function checkMarkup(text, where, err) {
    if (typeof text !== "string") return;
    const opens = count(text, /\[\[/g);
    const ok = count(text, /\[\[[^|\]]+\|[^\]]+\]\]/g);
    if (opens !== ok || count(text, /\]\]/g) !== opens) err(where + " : syntaxe [[mot|traduction]] mal formée");
    if (count(text, /\*\*/g) % 2) err(where + " : ** (gras) non fermé");
  }

  /** Fields compared as plain text: no [[...]] allowed. @param {unknown} v @param {string} where @param {PackReport} err */
  function noTr(v, where, err) {
    if (strings(v).some((s) => s.includes("[["))) err(where + " : [[...]] interdit dans ce champ (le texte est comparé tel quel)");
  }

  /** Text without the markup. @param {unknown} s @returns {string} */
  function plain(s) {
    return String(s).replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1");
  }

  /** Keys of obj that are not in the allowed list. @param {object} obj @param {string[]} allowed @returns {string[]} */
  const unknownKeys = (obj, allowed) => Object.keys(obj).filter((k) => !allowed.includes(k));

  /* ---------- figures (js/exercises/figures.js draws them; same limits) ---------- */

  /** Kind of drawing → number of points. @type {Record<string, number>} */
  const FIG_KINDS = { segment: 2, line: 2, ray: 2, ticks: 2, rightAngle: 3, angle: 3, axis: 2 };
  const FIG_KIND_NAMES = Object.keys(FIG_KINDS);
  const FIG_DIRS = ["n", "s", "e", "w", "ne", "nw", "se", "sw", "hidden"];
  const FIG_POINT_RE = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ0-9']{0,3}$/;
  const FIG_ITEM_KEYS = FIG_KIND_NAMES.concat(["label", "labelAt", "n", "hl", "from", "to", "step", "every", "marks"]);
  const AXIS_KEYS = ["from", "to", "step", "every", "marks"], AXIS_MARK_KEYS = ["at", "label", "hl"];
  const MAX_AXIS_TICKS = 40, MAX_AXIS_MARKS = 6;
  const FIG_KEYS = ["w", "h", "grid", "points", "draw", "alt", "caption"];

  /** @param {any} f figure not checked yet @param {string} where @param {PackReport} err @param {PackReport} warn */
  function validateFigure(f, where, err, warn) {
    const F = where + " figure";
    if (!f || typeof f !== "object" || isArr(f)) return err(F + " : objet attendu");
    unknownKeys(f, FIG_KEYS).forEach((k) => err(F + ` : champ "${k}" inconnu (${FIG_KEYS.join(", ")})`));
    /** @param {unknown} v */
    const size = (v) => typeof v === "number" && v >= 1 && v <= 24;
    if (!size(f.w) || !size(f.h)) return err(F + " : w et h (taille en carreaux) doivent être des nombres de 1 à 24");
    if (f.grid != null && typeof f.grid !== "boolean") err(F + " : grid doit être true ou false");
    if (!f.points || typeof f.points !== "object" || isArr(f.points) || !Object.keys(f.points).length) return err(F + " : points manquant ({ A: [x, y], … })");
    const names = Object.keys(f.points);
    if (names.length > 40) err(F + " : 40 points maximum");
    names.forEach((n) => {
      const p = f.points[n], P = `${F} point ${n}`;
      if (!FIG_POINT_RE.test(n)) err(P + " : nom invalide (une lettre puis 3 lettres, chiffres ou ' au plus)");
      if (!isArr(p) || p.length < 2 || p.length > 3 || typeof p[0] !== "number" || typeof p[1] !== "number" || !isFinite(p[0]) || !isFinite(p[1])) return err(P + " : attendu [x, y] ou [x, y, position]");
      if (p[0] < 0 || p[0] > f.w || p[1] < 0 || p[1] > f.h) err(P + ` : [${p[0]}, ${p[1]}] hors de la figure (0 à ${f.w}, 0 à ${f.h})`);
      if (p.length === 3 && !FIG_DIRS.includes(p[2])) err(P + ` : position "${p[2]}" inconnue (${FIG_DIRS.join(", ")})`);
    });
    if (!isArr(f.draw)) return err(F + " : draw doit être un tableau (peut être vide)");
    if (f.draw.length > 60) err(F + " : 60 tracés maximum");
    f.draw.forEach(/** @param {any} it @param {number} i */ (it, i) => {
      const D = `${F} draw[${i}]`;
      if (!it || typeof it !== "object") return err(D + " : objet attendu");
      unknownKeys(it, FIG_ITEM_KEYS).forEach((k) => err(D + ` : champ "${k}" inconnu`));
      const kinds = FIG_KIND_NAMES.filter((k) => k in it);
      if (kinds.length !== 1) return err(D + ` : un seul tracé par élément (${FIG_KIND_NAMES.join(", ")})`);
      const kind = kinds[0], refs = it[kind];
      if (!isArr(refs) || refs.length !== FIG_KINDS[kind]) return err(D + ` : ${kind} attend ${FIG_KINDS[kind]} noms de points`);
      refs.forEach((r) => { if (!has(f.points, r)) err(D + ` : point "${r}" absent de points`); });
      if (hasDup(refs)) err(D + " : points identiques");
      else if (refs.every((r) => isArr(f.points[r]))) {
        const [a, b, c] = refs.map((r) => f.points[r]);
        /** @param {number[]} p @param {number[]} q */
        const same = (p, q) => p[0] === q[0] && p[1] === q[1];
        if (same(a, b) || (c && same(b, c))) err(D + " : deux points au même endroit");
      }
      if (it.label != null && (typeof it.label !== "string" || it.label.length > 16)) err(D + " : label doit être un texte court (16 caractères max)");
      if (it.label != null && (kind === "rightAngle" || kind === "angle" || kind === "ticks")) warn(D + ` : label ignoré pour ${kind}`);
      if (it.labelAt != null && (it.labelAt !== "start" && it.labelAt !== "end" || (kind !== "line" && kind !== "ray"))) err(D + ' : labelAt ("start" ou "end") seulement pour line et ray');
      if (it.n != null && (kind !== "ticks" || !Number.isInteger(it.n) || it.n < 1 || it.n > 3)) err(D + " : n (1 à 3 traits) seulement pour ticks");
      if (it.hl != null && typeof it.hl !== "boolean") err(D + " : hl doit être true ou false");
      if (kind === "axis") validateAxis(it, D, err, warn);
      else AXIS_KEYS.forEach((k) => { if (it[k] != null) err(D + ` : ${k} seulement pour axis`); });
    });
    if (f.caption != null && (typeof f.caption !== "string" || f.caption.length > 80)) err(F + " : caption doit être un texte court (80 caractères max)");
    if (f.alt != null && typeof f.alt !== "string") err(F + " : alt doit être un texte");
    if (!isStr(f.alt)) warn(F + " : ajoute alt (description de la figure pour les lecteurs d'écran)");
  }

  /** Number line: from < to, step > 0, at most 40 graduations, up to 6 arrows on values of the line.
      @param {any} it @param {string} D @param {PackReport} err @param {PackReport} warn */
  function validateAxis(it, D, err, warn) {
    /** @param {unknown} v */
    const isNum = (v) => typeof v === "number" && isFinite(v);
    if (it.label != null) warn(D + " : label ignoré pour axis (les nombres s'écrivent seuls)");
    if (!isNum(it.from) || !isNum(it.to) || !isNum(it.step)) return err(D + " : axis attend from, to et step (nombres)");
    if (it.to <= it.from || it.step <= 0) return err(D + " : axis attend from < to et step > 0");
    const count = (it.to - it.from) / it.step;
    if (Math.abs(count - Math.round(count)) > 1e-9) err(D + " : (to − from) doit être un multiple de step");
    if (Math.round(count) > MAX_AXIS_TICKS) err(D + ` : ${MAX_AXIS_TICKS} graduations maximum (augmente step)`);
    if (it.every != null && (!Number.isInteger(it.every) || it.every < 0 || it.every > MAX_AXIS_TICKS)) err(D + " : every = un nombre toutes les N graduations (0 : aucun)");
    if (it.marks == null) return;
    if (!isArr(it.marks)) return err(D + " : marks doit être un tableau de flèches ({ at, label })");
    if (it.marks.length > MAX_AXIS_MARKS) err(D + ` : ${MAX_AXIS_MARKS} flèches maximum`);
    it.marks.forEach(/** @param {any} m @param {number} i */ (m, i) => {
      const M = `${D} marks[${i}]`;
      if (!m || typeof m !== "object" || isArr(m)) return err(M + " : objet attendu ({ at, label })");
      unknownKeys(m, AXIS_MARK_KEYS).forEach((k) => err(M + ` : champ "${k}" inconnu (${AXIS_MARK_KEYS.join(", ")})`));
      if (!isNum(m.at) || m.at < it.from || m.at > it.to) err(M + ` : at doit être un nombre de ${it.from} à ${it.to}`);
      if (m.label != null && (typeof m.label !== "string" || m.label.length > 16)) err(M + " : label doit être un texte court (16 caractères max)");
      if (m.hl != null && typeof m.hl !== "boolean") err(M + " : hl doit être true ou false");
    });
  }

  /* ---------- tables (js/exercises/figures.js buildTable draws them; same limits) ---------- */

  const TABLE_KEYS = ["rows", "head", "groups", "caption", "alt"];
  const CELL_KEYS = ["text", "span", "hl"];
  const MAX_ROWS = 8, MAX_COLS = 12, MAX_CELL = 20;

  /** @param {any} t table not checked yet @param {string} where @param {PackReport} err @param {PackReport} warn */
  function validateTable(t, where, err, warn) {
    const T = where + " table";
    if (!t || typeof t !== "object" || isArr(t)) return err(T + " : objet attendu ({ rows: [[…]], … })");
    unknownKeys(t, TABLE_KEYS).forEach((k) => err(T + ` : champ "${k}" inconnu (${TABLE_KEYS.join(", ")})`));
    if (!isArr(t.rows) || !t.rows.length) return err(T + " : rows doit être un tableau de lignes non vide");
    if (t.rows.length > MAX_ROWS) err(T + ` : ${MAX_ROWS} lignes maximum`);
    if (t.head != null && (!Number.isInteger(t.head) || t.head < 0 || t.head > t.rows.length)) err(T + " : head = nombre de lignes d'en-tête (0 à rows.length)");
    if (t.groups != null && (!Number.isInteger(t.groups) || t.groups < 1 || t.groups > MAX_COLS)) err(T + ` : groups = un trait épais toutes les N colonnes (1 à ${MAX_COLS})`);
    /** @type {number[]} */
    const widths = t.rows.map(/** @param {any} row @param {number} r */ (row, r) => {
      const R = `${T} ligne ${r + 1}`;
      if (!isArr(row) || !row.length) { err(R + " : tableau de cellules non vide attendu"); return 0; }
      return row.reduce((w, c, ci) => {
        const C = `${R} cellule ${ci + 1}`;
        const cell = typeof c === "string" ? { text: c } : c;
        if (!cell || typeof cell !== "object" || isArr(cell)) { err(C + " : texte ou { text, span, hl } attendu"); return w + 1; }
        unknownKeys(cell, CELL_KEYS).forEach((k) => err(C + ` : champ "${k}" inconnu (text, span, hl)`));
        if (typeof cell.text !== "string") err(C + " : text doit être un texte (peut être vide)");
        else {
          if (cell.text.length > MAX_CELL) err(C + ` : texte trop long (${MAX_CELL} caractères max)`);
          if (/\[\[|\*\*/.test(cell.text)) err(C + " : texte simple seulement (pas de ** ni de [[...]]) ; hl: true pour surligner");
        }
        if (cell.span != null && (!Number.isInteger(cell.span) || cell.span < 1 || cell.span > MAX_COLS)) err(C + ` : span = nombre de colonnes (1 à ${MAX_COLS})`);
        if (cell.hl != null && typeof cell.hl !== "boolean") err(C + " : hl doit être true ou false");
        return w + (Number.isInteger(cell.span) ? cell.span : 1);
      }, 0);
    });
    if (widths.some((w) => w > MAX_COLS)) err(T + ` : ${MAX_COLS} colonnes maximum`);
    if (new Set(widths).size > 1) err(T + ` : toutes les lignes doivent couvrir le même nombre de colonnes (${widths.join(", ")})`);
    if (t.caption != null && (typeof t.caption !== "string" || t.caption.length > 80)) err(T + " : caption doit être un texte court (80 caractères max)");
    if (t.alt != null && typeof t.alt !== "string") err(T + " : alt doit être un texte");
    if (!isStr(t.alt)) warn(T + " : ajoute alt (description du tableau pour les lecteurs d'écran)");
  }

  /* ---------- strict file format ----------
     A pack file is: optional /* … *\/ comments, then window.registerPack( + one JSON object + );
     It is read as text and parsed with JSON.parse, so checking it never runs any of its code. */

  const MAX_PACK_SIZE = 1000000; // characters
  // a comment body never contains "*/": no code can hide between two comments
  const STRICT_RE = /^(?:\s*\/\*(?:[^*]|\*(?!\/))*\*\/)*\s*window\.registerPack\(([\s\S]*)\);\s*$/;

  /** Pack file text → pack object. Throws an Error with a French message when the file is not in the strict format.
      The object is not checked yet (run checkPath, checkLang, validateMeta, validateContent).
      @param {string} text @returns {Pack} */
  function parseStrict(text) {
    if (typeof text !== "string") throw new Error("fichier illisible");
    if (text.length > MAX_PACK_SIZE) throw new Error(`fichier trop gros (${text.length} caractères, ${MAX_PACK_SIZE} max)`);
    const m = (text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text).match(STRICT_RE);
    if (!m) throw new Error("format strict attendu : un commentaire /* … */ facultatif, puis window.registerPack( + un objet JSON + ); et rien d'autre");
    let pack;
    try { pack = JSON.parse(m[1]); } catch (e) {
      throw new Error(`format strict : le contenu de window.registerPack(...) doit être du JSON pur, clés entre guillemets, sans virgule finale ni commentaire (${/** @type {Error} */ (e).message})`, { cause: e });
    }
    if (!pack || typeof pack !== "object" || isArr(pack)) throw new Error("format strict : window.registerPack doit recevoir un objet { … }");
    return pack;
  }

  /** Pack object → file text in the strict format (header: optional comment text, without the comment marks). */
  /** @param {Pack} pack @param {string} [header] @returns {string} */
  function formatStrict(pack, header) {
    const head = header ? "/* " + String(header).replace(/\*\//g, "* /") + " */\n" : "";
    return head + "window.registerPack(" + JSON.stringify(pack, null, 2) + ");\n";
  }

  /* ---------- pack identity ---------- */

  /** The pack path (its id). Returns true when well formed. @param {unknown} p @param {PackReport} err @returns {boolean} */
  function checkPath(p, err) {
    if (PACK_PATH_RE.test(String(p))) return true;
    err(`path ${json(p)} invalide (attendu "<niveau>/<matiere>/<cours>" ou "<niveau>/<matiere>/<cours>/<groupe>", minuscules, chiffres, tirets)`);
    return false;
  }

  /** @param {unknown} lang @param {PackReport} err */
  function checkLang(lang, err) {
    if (lang !== "fr" && lang !== "en" && lang !== "es") err(`lang doit être "fr", "en" ou "es" (reçu : ${json(lang)})`);
  }

  /* ---------- course information (meta): what the catalogue shows ----------
     Level and subject are not repeated here: they are the first two parts of the path. */

  const META_KEYS = ["title", "description", "icon", "color", "license", "author", "basedOn"];
  const LICENSES = ["CC-BY-SA-4.0"];
  /** @type {Record<string, number>} */
  const META_LIMITS = { title: 80, description: 240, icon: 16, author: 40 }; // same limits as the game (js/core/packs.js)

  /** pack.meta. Returns true when it is usable to build a catalogue entry. @param {any} meta not checked yet @param {PackReport} err @returns {boolean} */
  function validateMeta(meta, err) {
    if (meta == null) { err("meta manquant : infos du cours pour le catalogue ({ \"title\", \"description\", \"icon\", \"color\" })"); return false; }
    if (typeof meta !== "object" || isArr(meta)) { err("meta doit être un objet"); return false; }
    let failed = 0;
    /** @type {PackReport} */
    const e = (m) => { failed++; err(m); };
    unknownKeys(meta, META_KEYS).forEach((k) => e(`meta : champ "${k}" inconnu (${META_KEYS.join(", ")})`));
    ["title", "description", "icon"].forEach((k) => {
      if (!isStr(meta[k])) e(`meta.${k} manquant`);
      else if (meta[k].length > META_LIMITS[k]) e(`meta.${k} trop long (${meta[k].length} caractères, ${META_LIMITS[k]} max)`);
    });
    ["title", "description", "icon", "author"].forEach((k) => {
      if (typeof meta[k] === "string" && /\[\[|\*\*/.test(meta[k])) e(`meta.${k} : texte simple seulement (pas de ** ni de [[...]])`);
    });
    if (meta.color != null && (typeof meta.color !== "string" || !COLOR_RE.test(meta.color))) e(`meta.color ${json(meta.color)} invalide (format #RRGGBB)`);
    if (meta.license != null && !LICENSES.includes(meta.license)) e(`meta.license ${json(meta.license)} inconnue (${LICENSES.join(", ")})`);
    if (meta.author != null && (!isStr(meta.author) || meta.author.length > META_LIMITS.author)) e(`meta.author : pseudonyme de 1 à ${META_LIMITS.author} caractères`);
    if (meta.basedOn != null && !PATH_RE.test(String(meta.basedOn))) e(`meta.basedOn ${json(meta.basedOn)} invalide (chemin "<niveau>/<matiere>/<cours>" du cours d'origine)`);
    return failed === 0;
  }

  /** Catalogue entry built from a pack (meta, lang, worlds): { path, title, description, icon, color?, lang, worldCount }.
      @param {Pack} pack @returns {CatalogEntry} */
  function catalogEntry(pack) {
    const m = pack.meta || /** @type {PackMeta} */ ({});
    /** @type {any} keys in this order: it is the order written in packs/catalog.js */
    const entry = { path: pack.path, title: m.title, description: m.description, icon: m.icon };
    if (m.color != null) entry.color = m.color;
    entry.lang = pack.lang;
    entry.worldCount = isArr(pack.worlds) ? pack.worlds.length : 0;
    const boss = bossOf(pack);
    if (boss != null) entry.boss = boss;
    return entry;
  }
  /** Id of the last world (the boss), as a string: the game computes a chapter's trophy without loading it.
      Null when the pack has no world with an id. @param {any} pack @returns {string | null} */
  function bossOf(pack) {
    const last = isArr(pack.worlds) && pack.worlds.length ? pack.worlds[pack.worlds.length - 1] : null;
    return last && (typeof last.id === "number" || typeof last.id === "string") ? String(last.id) : null;
  }

  /* ---------- pack content: documents, worlds, lessons, exercises ---------- */

  /** Checks everything inside a pack except its identity (path, lang) and its catalogue entry.
      Returns { worlds, exercises, types } or null when there is no world to count.
      @param {any} pack data not checked yet @param {PackReport} err @param {PackReport} warn */
  function validateContent(pack, err, warn) {
    // documents (or legacy letters)
    if (pack.documents && pack.letters) err("utilise documents OU letters, pas les deux");
    const docs = pack.documents || pack.letters || [];
    const docField = pack.documents ? "documents" : "letters";
    if (!isArr(docs)) err(docField + " doit être un tableau");
    const docIds = new Set();
    (isArr(docs) ? docs : []).forEach((d, i) => {
      const w = `${docField}[${i}]`;
      if (!d || typeof d !== "object") return err(w + " : objet attendu");
      if (d.id == null || (typeof d.id !== "number" && typeof d.id !== "string")) err(w + " : id manquant");
      else if (docIds.has(d.id)) err(w + ` : id ${d.id} en double`);
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
    const worldIds = new Set();
    const stats = { worlds: pack.worlds.length, exercises: 0, types: {} };
    pack.worlds.forEach(/** @param {any} w @param {number} wi */ (w, wi) => {
      const W = `monde ${wi + 1}`;
      if (!w || typeof w !== "object") return err(W + " : objet attendu");
      if (w.id == null || !WORLD_ID_RE.test(String(w.id))) err(W + ` : id ${json(w.id)} invalide (nombre ou texte en minuscules/chiffres/tirets)`);
      else if (worldIds.has(String(w.id))) err(W + ` : id ${w.id} en double`);
      worldIds.add(String(w.id));
      if (!isStr(w.title)) err(W + " : title manquant");
      if (!isStr(w.icon)) warn(W + " : icon (emoji) manquant");
      if (w.color != null && !COLOR_RE.test(w.color)) err(W + ` : color "${w.color}" invalide (format #RRGGBB)`);
      if (w.color == null) warn(W + " : color manquante");
      validateLesson(w.lesson, W, err, warn);
      if (!isArr(w.exercises) || !w.exercises.length) return err(W + " : exercises doit être un tableau non vide");
      w.exercises.forEach(/** @param {any} e @param {number} ei */ (e, ei) => {
        stats.exercises++;
        validateExercise(e, `${W} (${w.title || ""}) ex ${ei + 1}`, { err, warn, docIds, stats });
      });
    });
    pack.worlds.forEach(/** @param {any} w @param {number} wi */ (w, wi) => {
      if (w && w.draw != null && (pack.worlds.length < 2 || wi !== pack.worlds.length - 1)) err(`monde ${wi + 1} : draw seulement sur le boss (dernier monde)`);
    });
    // the boss: the last world of a chapter of 2 worlds or more, made of 10 to 20 questions only, without hints
    // (one try, like a test). A course of one world has no boss.
    const boss = pack.worlds.length >= 2 ? pack.worlds[pack.worlds.length - 1] : null;
    if (boss && typeof boss === "object" && isArr(boss.exercises)) {
      const B = `monde ${pack.worlds.length} (boss)`;
      const n = boss.exercises.length, draw = boss.draw;
      if (draw == null) {
        if (n < BOSS_MIN || n > BOSS_MAX) err(B + ` : ${n} exercices, il en faut ${BOSS_MIN} à ${BOSS_MAX} (ou une réserve plus grande avec draw)`);
      } else if (!Number.isInteger(draw) || draw < BOSS_MIN || draw > BOSS_MAX) {
        err(B + ` : draw ${json(draw)} doit être un nombre entier de ${BOSS_MIN} à ${BOSS_MAX} (questions tirées à chaque partie)`);
      } else {
        if (n < draw) err(B + ` : ${n} questions dans la réserve, il en faut au moins draw (${draw})`);
        else if (n < 2 * draw) warn(B + ` : réserve de ${n} questions pour ${draw} tirées à chaque partie : vise au moins ${2 * draw} pour que deux parties se ressemblent peu`);
        if (n > BOSS_POOL) err(B + ` : ${n} questions, ${BOSS_POOL} au plus dans la réserve`);
      }
      boss.exercises.forEach(/** @param {any} e @param {number} ei */ (e, ei) => {
        if (!e || typeof e !== "object") return;
        if (e.type !== "question") err(B + ` ex ${ei + 1} : le boss ne contient que des exercices question (reçu : ${json(e.type)})`);
        if (e.hint != null) err(B + ` ex ${ei + 1} : pas d'indice dans le boss`);
      });
    }
    return stats;
  }

  /** Does a text (probably) list short items in a sentence, after a colon: 3 items or more between commas, or 2 between
      « ; » or « · »; reasoning (« c'est… », « sinon… ») and parentheses do not count. Best effort, a tip only. (« Des noms : but, côte, ile. »,
      « 1 m = 100 cm ; 1 km = 1 000 m »)? A bullet list is easier to read for a child ("…:\n- but\n- côte").
      @param {unknown} s @returns {boolean} */
  function inlineList(s) {
    if (typeof s !== "string" || /(^|\n)\s*- /.test(s)) return false;
    const t = plain(s).replace(/(\d)[,.](?=\d)/g, "$1#");
    const re = /:\s*([^:.!?\n]+)/g;
    let m;
    while ((m = re.exec(t))) {
      const seg = m[1].replace(/\([^)]*\)/g, "");
      const items = seg.split(/\s*[,;·]\s*/).map((x) => x.trim()).filter(Boolean);
      const words = (/** @type {number} */ max) => items.every((x) => x.split(/\s+/).length <= max);
      const prose = items.some((x) => /^(c'est|donc|alors|sinon|car|mais|puis|on|il|elle|ils|elles|si)\b|→/i.test(x));
      if (prose || items.every((x) => /^[\d\s#…]+((ou|et) [\d#]+)?$/.test(x))) continue; // a sequence of numbers (7, 14, 21…) reads better in line
      if (/[;·]/.test(seg) ? items.length >= 2 && words(6) : items.length >= 3 && words(4)) return true;
    }
    return false;
  }
  /** @param {unknown[]} texts @param {string} where @param {PackReport} warn */
  function tipLists(texts, where, warn) {
    if (texts.some(inlineList)) warn(where + " : énumération dans une phrase, écris-la en liste à puces (\"… :\\n- un\\n- deux\")");
  }

  /** @param {any} lesson not checked yet @param {string} W @param {PackReport} err @param {PackReport} warn */
  function validateLesson(lesson, W, err, warn) {
    if (!lesson || typeof lesson !== "object") return warn(W + " : pas de carte leçon (lesson)");
    if (!isArr(lesson.points) || !lesson.points.length) warn(W + " : lesson.points vide");
    else if (lesson.points.length > 5) warn(W + ` : ${lesson.points.length} points dans la leçon (5 max conseillé, reste court)`);
    strings(lesson).forEach((s) => checkMarkup(s, W + " leçon", err));
    tipLists([lesson.title].concat(isArr(lesson.points) ? lesson.points : [], isArr(lesson.examples) ? lesson.examples : []), W + " leçon", warn);
    if (lesson.figures != null) {
      if (!isArr(lesson.figures)) err(W + " : lesson.figures doit être un tableau");
      else {
        if (lesson.figures.length > 6) err(W + " : 6 figures maximum dans une leçon");
        lesson.figures.forEach(/** @param {any} f @param {number} fi */ (f, fi) => validateFigure(f, `${W} leçon figures[${fi}]`, err, warn));
      }
    }
    if (lesson.tables != null) {
      if (!isArr(lesson.tables)) err(W + " : lesson.tables doit être un tableau");
      else {
        if (lesson.tables.length > 3) err(W + " : 3 tableaux maximum dans une leçon");
        lesson.tables.forEach(/** @param {any} tb @param {number} ti */ (tb, ti) => validateTable(tb, `${W} leçon tables[${ti}]`, err, warn));
      }
    }
  }

  /** @typedef {{ worlds?: number, exercises?: number, types: Record<string, number> }} RulesStats */
  /** @typedef {{ err: PackReport, warn: PackReport, docIds?: Set<unknown>, stats?: RulesStats }} RulesExerciseContext */
  /** @typedef {(e: any, t: string, err: PackReport, warn: PackReport) => void} RulesTypeCheck */
  /** One exercise. ctx: { err, warn, docIds (Set of the pack's document ids), stats ({ types }) }.
      @param {any} e exercise not checked yet @param {string} where @param {RulesExerciseContext} ctx */
  function validateExercise(e, where, ctx) {
    const { err, warn } = ctx;
    const docIds = ctx.docIds || new Set(), stats = ctx.stats || { types: {} };
    if (!e || typeof e !== "object") return err(where + " : objet attendu");
    const t = where + " [" + e.type + "]";
    if (!TYPES.includes(e.type)) return err(where + ` : type "${e.type}" inconnu (${TYPES.join(", ")})`);
    stats.types[e.type] = (stats.types[e.type] || 0) + 1;
    if (!isStr(e.prompt)) err(t + " : prompt (consigne) manquant");
    if (!isStr(e.explanation)) err(t + " : explanation manquante");
    if (isStr(e.prompt) && plain(e.prompt).length > 160) warn(t + " : consigne longue (" + plain(e.prompt).length + " caractères) — fais simple");
    if (isStr(e.explanation) && plain(e.explanation).length > 300) warn(t + " : explication longue (" + plain(e.explanation).length + " caractères)");
    strings([e.prompt, e.explanation, e.hint]).forEach((s) => checkMarkup(s, t, err));
    tipLists([e.explanation], t + " explication", warn);
    // text to read: any exercise can show a pack document (docId; letterId was its old name)
    if (e.docId != null && e.letterId != null) err(t + " : utilise docId OU letterId, pas les deux");
    if (e.letterId != null) err(t + " : letterId n'existe plus (utilise docId)");
    const docRef = e.docId != null ? e.docId : e.letterId;
    if (docRef != null && !docIds.has(docRef)) err(t + ` : document ${docRef} introuvable dans documents/letters`);
    if (e.figure != null) validateFigure(e.figure, t, err, warn);
    if (e.table != null) validateTable(e.table, t, err, warn);
    TYPE_CHECKS[e.type](e, t, err, warn);
  }

  /** Checks of each exercise type (e: the exercise, t: where). @type {Record<string, RulesTypeCheck>} */
  const TYPE_CHECKS = {
    mcq(e, t, err) {
      if (!isArr(e.options) || e.options.length < 2) return err(t + " : options doit contenir au moins 2 choix");
      if (isArr(e.answer)) { // several answers: tick boxes
        if (!e.answer.length) err(t + " : answer [] vide (au moins une bonne réponse)");
        if (e.answer.some(/** @param {any} a */ (a) => !Number.isInteger(a) || a < 0 || a >= e.options.length)) err(t + ` : answer ${json(e.answer)} hors limites (0 à ${e.options.length - 1})`);
        if (hasDup(e.answer)) err(t + " : answer contient un indice en double");
        if (e.answer.length >= e.options.length) err(t + " : il faut au moins une mauvaise réponse parmi les options");
        if (e.showCount != null && typeof e.showCount !== "boolean") err(t + " : showCount doit être true ou false");
      } else {
        if (e.showCount != null) err(t + " : showCount seulement avec plusieurs réponses (answer: [..])");
        if (!Number.isInteger(e.answer) || e.answer < 0 || e.answer >= e.options.length) err(t + ` : answer ${e.answer} hors limites (0 à ${e.options.length - 1})`);
      }
      if (hasDup(e.options.map(/** @param {any} o */ (o) => plain(o).trim().toLowerCase()))) err(t + " : options en double");
      if (e.options.some(/** @param {any} o */ (o) => !isStr(o))) err(t + " : option vide");
      noTr(e.options, t + " options", err);
    },
    sort(e, t, err) {
      if (!isArr(e.categories) || e.categories.length < 2) return err(t + " : au moins 2 categories");
      const cats = new Set();
      e.categories.forEach(/** @param {any} c @param {number} i */ (c, i) => {
        if (!c || !isStr(String(c.id || ""))) err(t + ` : categories[${i}].id manquant`);
        else if (cats.has(c.id)) err(t + ` : catégorie "${c.id}" en double`);
        cats.add(c && c.id);
        if (!c || !isStr(c.label)) err(t + ` : categories[${i}].label manquant`);
      });
      if (!isArr(e.items) || e.items.length < 2) return err(t + " : au moins 2 items");
      e.items.forEach(/** @param {any} it @param {number} i */ (it, i) => {
        if (!it || !isStr(it.text)) err(t + ` : items[${i}].text manquant`);
        if (!it || !cats.has(it.cat)) err(t + ` : items[${i}].cat "${it && it.cat}" n'existe pas dans categories`);
      });
      noTr(e.items.map(/** @param {any} i */ (i) => i && i.cat), t + " items.cat", err);
    },
    match(e, t, err, warn) {
      if (!isArr(e.pairs) || e.pairs.length < 2) return err(t + " : au moins 2 pairs");
      e.pairs.forEach(/** @param {any} p @param {number} i */ (p, i) => { if (!p || !isStr(p.left) || !isStr(p.right)) err(t + ` : pairs[${i}] doit avoir left et right`); });
      if (e.pairs.length > 6) warn(t + " : plus de 6 paires, c'est long sur téléphone");
      noTr(e.pairs, t + " pairs", err);
      if (hasDup(e.pairs.map(/** @param {any} p */ (p) => p && plain(p.left)))) err(t + " : left en double");
      if (hasDup(e.pairs.map(/** @param {any} p */ (p) => p && plain(p.right)))) err(t + " : right en double");
    },
    order(e, t, err, warn) {
      if (!isArr(e.words) || e.words.length < 2 || e.words.some(/** @param {any} w */ (w) => !isStr(w))) return err(t + " : words doit contenir au moins 2 mots");
      if (e.distractors != null && !isArr(e.distractors)) err(t + " : distractors doit être un tableau");
      if (e.alternatives != null && (!isArr(e.alternatives) || e.alternatives.some(/** @param {any} a */ (a) => !isArr(a)))) err(t + " : alternatives doit être un tableau de tableaux de mots");
      (isArr(e.alternatives) ? e.alternatives : []).forEach(/** @param {any} a @param {number} i */ (a, i) => {
        // every word of an alternative must exist among the chips (words + distractors), case-insensitive
        if (!isArr(a)) return;
        const bank = e.words.concat(isArr(e.distractors) ? e.distractors : []).map(/** @param {any} w */ (w) => plain(w).trim().toLowerCase());
        const missing = a.filter((w) => {
          const k = bank.indexOf(plain(w).trim().toLowerCase());
          if (k === -1) return true;
          bank.splice(k, 1);
          return false;
        });
        if (missing.length) err(t + ` : alternatives[${i}] utilise des mots absents des étiquettes : ${missing.join(" ")}`);
      });
      noTr([e.words, e.distractors, e.alternatives], t, err);
      if (!isStr(e.translation)) warn(t + " : translation (phrase traduite / reformulée) conseillée");
    },
    fill(e, t, err, warn) {
      if (!isStr(e.sentence) || e.sentence.split("___").length !== 2) err(t + " : sentence doit contenir exactement un trou ___");
      if (!isArr(e.answers) || !e.answers.length || e.answers.some(/** @param {any} a */ (a) => !isStr(a))) err(t + " : answers doit contenir au moins une réponse");
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
    spot(e, t, err) {
      if (!isArr(e.tokens) || e.tokens.length < 2) return err(t + " : tokens doit contenir au moins 2 mots");
      if (!Number.isInteger(e.wrongIndex) || e.wrongIndex < 0 || e.wrongIndex >= e.tokens.length) err(t + ` : wrongIndex ${e.wrongIndex} hors limites (0 à ${e.tokens.length - 1})`);
      if (!isStr(e.correction)) err(t + " : correction manquante");
      noTr(e.tokens, t + " tokens", err);
    },
    question(e, t, err) {
      if (!isArr(e.answers) || !e.answers.length) return err(t + " : answers doit contenir au moins une réponse");
      if (e.answers.length > 10) err(t + " : 10 réponses acceptées au plus");
      if (!e.answers.every(isStr)) err(t + " : answers ne contient que du texte non vide");
      if (hasDup(e.answers)) err(t + " : answers en double");
      noTr(e.answers, t + " answers", err);
      if (e.multiline != null && typeof e.multiline !== "boolean") err(t + " : multiline doit être true ou false");
    }
  };

  const api = {
    ID_RE, WORLD_ID_RE, PATH_RE, PACK_PATH_RE, COLOR_RE, TYPES,
    MAX_ROWS, MAX_COLS, MAX_CELL, MAX_PACK_SIZE, BOSS_MIN, BOSS_MAX, BOSS_POOL,
    parseStrict, formatStrict,
    isStr, plain, checkMarkup,
    checkPath, checkLang, validateMeta, catalogEntry, bossOf, LICENSES,
    validateContent, validateLesson, validateExercise,
    validateFigure, validateTable, inlineList
  };
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.PackRules = api;
})(/** @type {Window} */ (/** @type {unknown} */ (this))); // TypeScript reads this as module.exports
