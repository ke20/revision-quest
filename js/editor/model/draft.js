// @ts-check
/* Révision Quest — course editor: the draft (pack being written + its id parts) and the operations of the plan
   (add, duplicate, delete, move worlds and exercises). Pure data: no DOM, no browser global (unit-tested in Node). */
import { emptyExercise } from "./templates.js";
import { slugify } from "./text.js";

export var DEFAULT_COLOR = "#7C3AED";
var WORLD_COLORS = ["#7C3AED", "#2563EB", "#059669", "#D97706", "#DC2626", "#DB2777", "#0891B2", "#4F46E5"];
var WORLD_ICONS = ["🌱", "🧭", "🧩", "🚀", "🏔️", "🏆", "🌟", "🎯"];

/** Deep copy of plain data. @template T @param {T} v @returns {T} */
export function clone(v) { return JSON.parse(JSON.stringify(v)); }

/** @param {unknown} v @returns {v is Record<string, any>} */
function isObj(v) { return !!v && typeof v === "object" && !Array.isArray(v); }

/** A world id not used yet: the smallest number above the numeric ids (texts ids are kept as they are).
    @param {World[]} worlds @returns {number} */
export function nextWorldId(worlds) {
  var used = worlds.map(function (w) { return String(w && w.id); });
  var n = worlds.reduce(function (m, w) { return w && typeof w.id === "number" && w.id > m ? w.id : m; }, 0) + 1;
  while (used.indexOf(String(n)) !== -1) n++;
  return n;
}

/** A new world (title « Nouveau monde », colour and icon taken in turn), with an empty lesson. @param {World[]} worlds @returns {World} */
export function newWorld(worlds) {
  var i = worlds.length;
  return {
    id: nextWorldId(worlds), title: "Nouveau monde", subtitle: "", icon: WORLD_ICONS[i % WORLD_ICONS.length],
    color: WORLD_COLORS[i % WORLD_COLORS.length], lesson: { title: "", points: [""], examples: [""] }, exercises: []
  };
}

/** @returns {EdPack} */
export function emptyPack() {
  return { path: "", lang: "fr", meta: { title: "", description: "", icon: "📘", color: DEFAULT_COLOR }, worlds: [newWorld([])] };
}

/** @returns {EdDraft} */
export function newDraft() {
  return { v: 1, pack: emptyPack(), level: "", subject: "", slug: "", autoSlug: true, locked: false };
}

/** Nothing worth keeping: no course title or description, and every world is still as created (default title,
    empty lesson, no exercise). @param {EdDraft} d */
export function isBlank(d) {
  var m = d.pack.meta;
  /** @param {unknown} v */
  var empty = function (v) { return !String(v == null ? "" : v).trim(); };
  /** @param {unknown} list */
  var emptyList = function (list) { return !Array.isArray(list) || list.every(empty); };
  return empty(m.title) && empty(m.description) && d.pack.worlds.every(function (w) {
    var L = w && w.lesson;
    return !w || ((empty(w.title) || w.title === "Nouveau monde") && empty(w.subtitle) &&
      (!Array.isArray(w.exercises) || !w.exercises.length) &&
      (!L || typeof L !== "object" || (empty(L.title) && emptyList(L.points) && emptyList(L.examples))));
  });
}

/** pack.path = <niveau>/<matiere>/<cours> from the draft fields. @param {EdDraft} d */
export function syncPath(d) {
  d.pack.path = [d.level, d.subject, d.slug].join("/");
}

/** The course title; the id follows it until the author changes the id or downloads the file.
    @param {EdDraft} d @param {string} title */
export function setTitle(d, title) {
  d.pack.meta.title = title;
  if (d.autoSlug && !d.locked) { d.slug = slugify(title); syncPath(d); }
}

/** Any data (an opened file, a stored draft) → a pack the forms can show. What is not understood is kept as it is
    (the checks report it); only the containers the forms need are created. @param {any} raw @returns {EdPack} */
export function normalizePack(raw) {
  var p = isObj(raw) ? raw : {};
  if (!isObj(p.meta)) p.meta = {};
  ["title", "description", "icon"].forEach(function (k) { if (typeof p.meta[k] !== "string") p.meta[k] = ""; });
  if (typeof p.path !== "string") p.path = "";
  if (typeof p.lang !== "string") p.lang = "fr";
  if (!Array.isArray(p.worlds)) p.worlds = [];
  p.worlds = p.worlds.map(/** @param {any} w */ function (w) {
    var world = isObj(w) ? w : {};
    if (!Array.isArray(world.exercises)) world.exercises = [];
    world.exercises = world.exercises.map(/** @param {any} e */ function (e) { return isObj(e) ? e : { type: "" }; });
    return world;
  });
  return /** @type {EdPack} */ (p);
}

/** A draft around a pack read from a file or copied from an official chapter. Its id parts come from its path;
    a pack that already has a full id keeps it (locked): changing it would lose the players' progress.
    @param {any} raw @returns {EdDraft} */
export function draftFromPack(raw) {
  var pack = normalizePack(raw);
  var seg = String(pack.path).split("/");
  var full = /^[a-z0-9-]{1,30}\/[a-z0-9-]{1,30}\/[a-z0-9-]{1,60}$/.test(pack.path);
  var d = /** @type {EdDraft} */ ({
    v: 1, pack: pack, level: seg[0] || "", subject: seg[1] || "", slug: slugify(seg.slice(2).join("-")),
    autoSlug: !full, locked: full
  });
  syncPath(d);
  return d;
}

/** A draft read back from localStorage (any shape) → a usable draft, or null. @param {any} raw @returns {EdDraft | null} */
export function restoreDraft(raw) {
  if (!isObj(raw) || raw.v !== 1 || !isObj(raw.pack)) return null;
  /** @param {unknown} v */
  var str = function (v) { return typeof v === "string" ? v : ""; };
  var d = /** @type {EdDraft} */ ({
    v: 1, pack: normalizePack(raw.pack), level: str(raw.level), subject: str(raw.subject), slug: slugify(str(raw.slug)),
    autoSlug: raw.autoSlug !== false, locked: raw.locked === true
  });
  syncPath(d);
  return d;
}

/* ---------- plan operations (return the index of the node to select) ---------- */

/** Move list[i] by d (-1 up, +1 down). Returns its new index (the same one at an end).
    @param {unknown[]} list @param {number} i @param {number} d */
export function move(list, i, d) {
  var j = i + d;
  if (i < 0 || i >= list.length || j < 0 || j >= list.length) return i;
  var x = list[i];
  list[i] = list[j];
  list[j] = x;
  return j;
}

/** @param {EdPack} pack */
export function addWorld(pack) {
  pack.worlds.push(newWorld(pack.worlds));
  return pack.worlds.length - 1;
}

/** A copy right after the world, with a new id. @param {EdPack} pack @param {number} i */
export function duplicateWorld(pack, i) {
  var copy = clone(pack.worlds[i]);
  copy.id = nextWorldId(pack.worlds);
  copy.title = String(copy.title || "") + " (copie)";
  pack.worlds.splice(i + 1, 0, copy);
  return i + 1;
}

/** Returns the index to select after it (the previous world, or -1 when none is left). @param {EdPack} pack @param {number} i */
export function deleteWorld(pack, i) {
  pack.worlds.splice(i, 1);
  return Math.min(i, pack.worlds.length - 1);
}

/** @param {World} world @param {string} type */
export function addExercise(world, type) {
  world.exercises.push(emptyExercise(type));
  return world.exercises.length - 1;
}

/** @param {World} world @param {number} i */
export function duplicateExercise(world, i) {
  world.exercises.splice(i + 1, 0, clone(world.exercises[i]));
  return i + 1;
}

/** @param {World} world @param {number} i */
export function deleteExercise(world, i) {
  world.exercises.splice(i, 1);
  return Math.min(i, world.exercises.length - 1);
}
