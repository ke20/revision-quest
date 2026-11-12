// @ts-check
/* Révision Quest — course editor: the pack as it is written to the file (and checked), and the checks of the whole
   pack mapped to the nodes of the plan. Pure data: the pack rules are passed in (window.PackRules in the browser,
   require("js/core/pack-rules.js") in the unit tests). */
import { clone, syncPath } from "./draft.js";

/** @param {unknown} v */
var blank = function (v) { return v == null || (typeof v === "string" && !v.trim()); };

/** Removes the optional fields left empty by the forms (an empty hint, an empty line of a list…).
    @param {Record<string, any>} o @param {string[]} keys */
function dropBlank(o, keys) {
  keys.forEach(function (k) { if (k in o && blank(o[k])) delete o[k]; });
}
/** Empty lines out of a list of texts; the list itself goes when optional and empty.
    @param {Record<string, any>} o @param {string} k @param {boolean} optional */
function tidyList(o, k, optional) {
  if (!Array.isArray(o[k])) return;
  o[k] = o[k].filter(function (x) { return !blank(x); });
  if (optional && !o[k].length) delete o[k];
}

/** @param {Record<string, any>} e */
function tidyExercise(e) {
  dropBlank(e, ["hint", "translation", "listen", "docId"]);
  tidyList(e, "distractors", true);
  if (e.multiline !== true) delete e.multiline;
  tidyList(e, "answers", false);
  if (Array.isArray(e.alternatives)) {
    e.alternatives = e.alternatives.filter(function (a) { return !Array.isArray(a) || a.length; });
    if (!e.alternatives.length) delete e.alternatives;
  }
  if ("minWords" in e && !(typeof e.minWords === "number" && e.minWords > 0)) delete e.minWords;
  if ("minRequirements" in e && blank(e.minRequirements)) delete e.minRequirements;
  if (e.showCount === true) delete e.showCount; // the default
}

/** @param {Record<string, any>} d */
function tidyDocument(d) {
  dropBlank(d, ["title", "from"]);
  if (d.screen !== true) delete d.screen;
}

/** @param {Record<string, any>} w */
function tidyWorld(w) {
  dropBlank(w, ["subtitle", "subtitleFr"]);
  if (w.lesson && typeof w.lesson === "object") {
    dropBlank(w.lesson, ["title"]);
    tidyList(w.lesson, "points", true);
    tidyList(w.lesson, "examples", true);
  }
  if (Array.isArray(w.exercises)) w.exercises.forEach(function (e) { if (e && typeof e === "object") tidyExercise(e); });
}

/** The pack written to the file: path from the draft, keys in the usual order (path, lang, meta, documents…, worlds),
    empty optional fields removed. The draft is not changed. @param {EdDraft} draft @returns {EdPack} */
export function exportPack(draft) {
  syncPath(draft);
  var src = clone(draft.pack);
  var meta = src.meta;
  dropBlank(meta, ["color", "author", "license", "basedOn"]);
  /** @type {Record<string, any>} */
  var out = { path: src.path, lang: src.lang, meta: meta };
  Object.keys(src).forEach(function (k) {
    if (k !== "path" && k !== "lang" && k !== "meta" && k !== "worlds" && k !== "__proto__") out[k] = /** @type {any} */ (src)[k];
  });
  ["documents", "letters"].forEach(function (k) {
    if (!Array.isArray(out[k])) return;
    out[k].forEach(/** @param {any} d */ function (d) { if (d && typeof d === "object") tidyDocument(d); });
    if (!out[k].length) delete out[k];
  });
  out.worlds = src.worlds;
  out.worlds.forEach(/** @param {any} w */ function (w) { if (w && typeof w === "object") tidyWorld(w); });
  return /** @type {EdPack} */ (out);
}

/** Plan node of a message of the pack rules ("course", "d:<i>", "w:<i>", "l:<i>" or "e:<i>:<j>"), from the prefixes the
    rules write: « documents[0] : … », « monde 2 : … », « monde 2 leçon … », « monde 2 (<titre>) ex 3 [mcq] : … »; anything else is the course.
    @param {string} msg @param {Pack} pack @returns {string} */
export function locate(msg, pack) {
  var doc = /^(?:documents|letters)\[(\d+)\]/.exec(msg);
  if (doc) return "d:" + doc[1];
  var m = /^monde (\d+)/.exec(msg);
  if (!m) return "course";
  var wi = +m[1] - 1;
  var w = pack.worlds[wi];
  var exPrefix = "monde " + m[1] + " (" + String((w && w.title) || "") + ") ex ";
  if (msg.indexOf(exPrefix) === 0) {
    var em = /^(\d+)/.exec(msg.slice(exPrefix.length));
    if (em) return "e:" + wi + ":" + (+em[1] - 1);
  }
  var rest = msg.slice(m[0].length);
  if (/^ leçon/.test(rest) || (/^ : /.test(rest) && /lesson|leçon/.test(rest))) return "l:" + wi;
  return "w:" + wi;
}

/** Every check of the pack (as exported), each message with its plan node.
    opts.extra: messages of the editor itself (missing level…); opts.path: false while the id is incomplete.
    @param {Pack} pack @param {PackRulesApi} rules @param {{ extra?: EdMessage[], path?: boolean }} [opts] @returns {EdReport} */
export function buildReport(pack, rules, opts) {
  opts = opts || {};
  /** @type {EdMessage[]} */
  var list = (opts.extra || []).slice();
  /** @type {PackReport} */
  var err = function (msg) { list.push({ level: "err", msg: msg, key: locate(msg, pack) }); };
  /** @type {PackReport} */
  var warn = function (msg) { list.push({ level: "warn", msg: msg, key: locate(msg, pack) }); };
  if (opts.path !== false) rules.checkPath(pack.path, err);
  rules.checkLang(pack.lang, err);
  rules.validateMeta(pack.meta, err);
  try { rules.validateContent(pack, err, warn); } catch (e) { err("contrôle impossible : " + /** @type {Error} */ (e).message); }
  /** @type {EdReport} */
  var report = { list: list, byKey: {}, errors: 0, warnings: 0 };
  list.forEach(function (x) {
    var n = report.byKey[x.key] || (report.byKey[x.key] = { err: 0, warn: 0, msgs: [] });
    n[x.level]++;
    n.msgs.push(x);
    if (x.level === "err") report.errors++; else report.warnings++;
  });
  return report;
}

/** Counts of a world with its lesson and exercises (badge of a world in the plan). @param {EdReport} r @param {number} wi */
export function worldTotals(r, wi) {
  var t = { err: 0, warn: 0 };
  Object.keys(r.byKey).forEach(function (k) {
    if (k === "w:" + wi || k === "l:" + wi || k.indexOf("e:" + wi + ":") === 0) { t.err += r.byKey[k].err; t.warn += r.byKey[k].warn; }
  });
  return t;
}
