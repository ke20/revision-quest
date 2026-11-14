/* Révision Quest — « Mes cours » : the courses made with the editor and kept in this browser (localStorage), shared
   by all the players of the device. A private course is plain JSON: it is checked with the shared pack rules
   (js/core/pack-rules.js) when it is saved AND each time it is read back, and it is never executed (no <script>,
   no eval). Its id is its path "<niveau>/<matiere>/<cours>", the same as when it becomes an official chapter, so the
   stars of the players stay attached to it. Loaded after js/core/packs.js and js/core/pack-rules.js.
   Exposes window.MyCourses (js/core/packs.js reads it to show and load a private course). ES2017. */
// @ts-check
/** @typedef {{ pack: Pack, saved: number, sent?: string }} MyCourseItem A private course as stored (pack checked, saved: time in ms,
    sent: hash of the course when it was proposed to everyone, set by « Proposer à tous »). */
(function () {
  "use strict";

  const KEY = "revisionQuest.courses";       // { version: 1, courses: [{ pack, saved }] }
  const CORRUPT_KEY = "revisionQuest.courses.corrupt";
  const VERSION = 1;
  const MAX_COURSES = 30;
  const MAX_COURSE_CHARS = 300000;   // one course, as JSON (a big official chapter is about 100 000)
  const MAX_TOTAL_CHARS = 2000000;   // all the courses: localStorage holds about 5 million characters per site
  const MAX_TIME = 4102444800000;    // year 2100
  const PACK_KEYS = ["path", "lang", "meta", "documents", "worlds"];

  /** @returns {PackRulesApi | null} */
  function rules() { return window.PackRules || null; }
  /** @param {unknown} v @returns {v is Record<string, any>} */
  function isObj(v) { return !!v && typeof v === "object" && !Array.isArray(v); }
  /** JSON.parse without the keys that could reach a prototype. @param {string} text */
  function parse(text) {
    return JSON.parse(text, (k, v) => (k === "__proto__" || k === "constructor" || k === "prototype" ? undefined : v));
  }
  /** Short hash of a text (FNV-1a, base 36): tells whether a course changed since it was proposed. @param {string} s */
  function hash(s) {
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(36);
  }
  const SENT_RE = /^[a-z0-9]{1,16}$/;
  /** @param {string} k @returns {string | null} */
  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  /** @param {string} k @param {string} v @returns {boolean} */
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  /** @param {string} k */
  function lsRemove(k) { try { window.localStorage.removeItem(k); } catch (e) { /* nothing to remove */ } }

  /* ---------- checks ---------- */

  /** Checks a course and returns a clean copy of it (plain JSON, known keys only), or the errors (in French).
      Same rules as an official chapter, plus: a chapter path (no group), a level and a subject of the catalogue,
      a size limit. The advice (warnings) of the rules never blocks.
      @param {unknown} data not checked yet
      @returns {{ pack: Pack, errors: [] } | { pack: null, errors: string[] }} */
  function check(data) {
    const R = rules();
    if (!R) return { pack: null, errors: ["règles des cours introuvables (js/core/pack-rules.js)"] };
    if (!isObj(data)) return { pack: null, errors: ["un cours est un objet { path, lang, meta, worlds }"] };
    let text;
    try { text = JSON.stringify(data); } catch (e) { return { pack: null, errors: ["cours illisible (" + /** @type {Error} */ (e).message + ")"] }; }
    if (text.length > MAX_COURSE_CHARS) return { pack: null, errors: [`cours trop gros (${text.length} caractères, ${MAX_COURSE_CHARS} max)`] };
    /** @type {any} a plain JSON copy: no function, no prototype, nothing shared with the caller */
    const copy = parse(text);
    /** @type {any} */
    const pack = {};
    PACK_KEYS.forEach((k) => { if (copy[k] !== undefined) pack[k] = copy[k]; });
    if (copy.letters !== undefined && copy.documents === undefined) pack.documents = copy.letters; // older name of documents

    /** @type {string[]} */
    const errors = [];
    /** @param {string} m */
    const err = (m) => { errors.push(m); };
    const warn = () => { /* advice: shown by the editor, not needed here */ };
    if (!R.PATH_RE.test(String(pack.path))) err(`path ${JSON.stringify(pack.path)} invalide (attendu "<niveau>/<matiere>/<cours>", minuscules, chiffres, tirets)`);
    else {
      const seg = String(pack.path).split("/");
      if (!Packs.level(seg[0])) err(`niveau "${seg[0]}" inconnu du catalogue`);
      if (!Packs.subject(seg[1])) err(`matière "${seg[1]}" inconnue du catalogue`);
    }
    R.checkLang(pack.lang, err);
    R.validateMeta(pack.meta, err);
    R.validateContent(pack, err, warn);
    return errors.length ? { pack: null, errors: errors } : { pack: /** @type {Pack} */ (pack), errors: [] };
  }

  /* ---------- storage ---------- */

  let lastRaw = /** @type {string | null} */ (null);
  /** @type {MyCourseItem[]} */
  let cache = [];

  /** The stored courses, each one checked again (a damaged one is left out). Read again only when the value
      changed (another tab, or this one). @returns {MyCourseItem[]} */
  function read() {
    const raw = lsGet(KEY);
    if (raw === lastRaw) return cache;
    lastRaw = raw;
    cache = [];
    if (raw === null) return cache;
    let db;
    try { db = parse(raw); } catch (e) { db = null; }
    if (!isObj(db) || db.version !== VERSION || !Array.isArray(db.courses)) {
      lsSet(CORRUPT_KEY, raw.slice(0, MAX_TOTAL_CHARS)); // kept aside, like a damaged save (js/core/engine/storage.js)
      return cache;
    }
    /** @type {Record<string, boolean>} */
    const seen = {};
    db.courses.slice(0, MAX_COURSES).forEach((/** @type {any} */ item) => {
      if (!isObj(item)) return;
      const c = check(item.pack);
      if (!c.pack || Object.prototype.hasOwnProperty.call(seen, c.pack.path)) return;
      seen[c.pack.path] = true;
      const saved = Math.round(+item.saved);
      /** @type {MyCourseItem} */
      const kept = { pack: c.pack, saved: isFinite(saved) && saved > 0 && saved < MAX_TIME ? saved : 0 };
      if (typeof item.sent === "string" && SENT_RE.test(item.sent)) kept.sent = item.sent;
      cache.push(kept);
    });
    return cache;
  }

  /** @param {MyCourseItem[]} list @returns {boolean} */
  function write(list) {
    const raw = JSON.stringify({ version: VERSION, courses: list });
    if (raw.length > MAX_TOTAL_CHARS || !lsSet(KEY, raw)) return false;
    lastRaw = raw;
    cache = list;
    return true;
  }

  /** @param {string} id @returns {number} */
  function indexOf(id) {
    const list = read();
    for (let i = 0; i < list.length; i++) if (list[i].pack.path === id) return i;
    return -1;
  }

  /* ---------- catalogue entries and loaded data ---------- */

  /** The catalogue card of a private course (same shape as an official one, file: null, mine: true).
      official: the official catalogue has a chapter with the same id (the course was proposed and accepted);
      modified: it changed since it was proposed (never proposed: modified). An official one that was not modified
      is hidden: the official chapter replaces it, with the same id, so the stars are kept.
      @param {MyCourseItem} item @returns {CatalogPack} */
  function entryOf(item) {
    const p = item.pack, m = /** @type {PackMeta} */ (p.meta), seg = p.path.split("/");
    const subject = /** @type {CatalogSubject} */ (Packs.subject(seg[1])); // checked by check()
    const official = Packs.units().some((u) => u.id === p.path);
    return {
      id: p.path, level: seg[0], subject: seg[1], title: m.title, description: m.description, icon: m.icon,
      color: m.color || subject.color, lang: /** @type {UiLang} */ (p.lang), worldCount: p.worlds.length,
      boss: p.worlds.length ? String(p.worlds[p.worlds.length - 1].id) : "",
      file: null, mine: true, saved: item.saved, official: official,
      modified: !item.sent || item.sent !== hash(JSON.stringify(p))
    };
  }

  /** A fresh copy of a stored course, or null. @param {string} id @returns {Pack | null} */
  function packOf(id) {
    const i = indexOf(id);
    return i < 0 ? null : parse(JSON.stringify(read()[i].pack));
  }

  window.MyCourses = {
    MAX_COURSES: MAX_COURSES, MAX_COURSE_CHARS: MAX_COURSE_CHARS, MAX_TOTAL_CHARS: MAX_TOTAL_CHARS,
    check: check,
    hash: hash,
    /** Catalogue cards of the private courses, most recently saved first. */
    list: function () {
      return read().slice().sort((a, b) => b.saved - a.saved).map(entryOf);
    },
    /** The cards to show in « Mes cours »: without the ones that became official and were not modified since. */
    shown: function () {
      return this.list().filter((c) => !c.official || c.modified);
    },
    /** The catalogue card of a private course, or null. */
    get: function (id) {
      const i = indexOf(id);
      return i < 0 ? null : entryOf(read()[i]);
    },
    /** The course itself (a fresh copy), or null. */
    pack: packOf,
    /** What the game plays (like a pack loaded by js/core/packs.js): a fresh copy, never executed. */
    data: function (id) {
      const p = packOf(id);
      return p ? { id: p.path, lang: p.lang, documents: p.documents || [], worlds: p.worlds } : null;
    },
    /** Adds a course, or replaces the one with the same id. */
    save: function (data) {
      const c = check(data);
      if (!c.pack) return { ok: false, errors: c.errors };
      const list = read().slice();
      const i = indexOf(c.pack.path);
      /** @type {MyCourseItem} */
      const item = { pack: c.pack, saved: Date.now() };
      if (i >= 0 && read()[i].sent) item.sent = read()[i].sent; // still proposed: tells later whether it changed
      if (i < 0 && list.length >= MAX_COURSES) return { ok: false, errors: [`${MAX_COURSES} cours au plus sur cet appareil : supprimes-en un d'abord`] };
      if (i < 0) list.push(item); else list[i] = item;
      if (!write(list)) return { ok: false, errors: ["plus de place dans ce navigateur pour ce cours : supprime un cours d'abord"] };
      return { ok: true, replaced: i >= 0, id: c.pack.path };
    },
    /** Deletes a course (the stars of the players stay in their save). */
    remove: function (id) {
      const i = indexOf(id);
      if (i < 0) return false;
      const list = read().slice();
      list.splice(i, 1);
      if (list.length) return write(list);
      lsRemove(KEY);
      lastRaw = null;
      cache = [];
      return true;
    }
  };
})();
