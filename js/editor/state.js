// @ts-check
/* Révision Quest — course editor: the draft being edited, the selected node of the plan, change notifications and
   the automatic save. Several drafts are kept in localStorage, under the game's prefix: one entry per draft
   (DRAFT_PREFIX + id = { draft, sel }) and a small index (INDEX_KEY = { current, items: { id: { at } } }).
   A draft is written only when it changed, so a tab left open on an old copy never overwrites a newer one. */
import { isBlank, newDraft, restoreDraft } from "./model/draft.js";

export var INDEX_KEY = "revisionQuest.editor.drafts";
export var DRAFT_PREFIX = "revisionQuest.editor.draft.";
export var MAX_DRAFTS = 30;
var SAVE_DELAY = 400;
var ID_RE = /^d[a-z0-9]{4,30}$/;

/** @typedef {{ current: string, items: Record<string, { at: number }> }} EdIndex */

function newId() { return "d" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

/** "content": a text was typed (forms stay as they are); "structure": the plan changed (everything is redrawn);
    "select": another node was chosen. @typedef {"content" | "structure" | "select"} EdChange */

export var store = {
  /** Id of the current draft. */
  id: newId(),
  /** @type {EdDraft} */
  draft: newDraft(),
  /** @type {EdSel} */
  sel: { kind: "course" },
  /** Last checks of the whole pack (checks.js). @type {EdReport} */
  report: { list: [], byKey: {}, errors: 0, warnings: 0 },
  /** Why the last save failed: "" (it worked), "full" (no room left), "blocked" (private mode, storage off). */
  saveError: /** @type {"" | "full" | "blocked"} */ ("")
};

/** @type {Array<(kind: EdChange) => void>} */
var listeners = [];
/** @param {(kind: EdChange) => void} fn */
export function subscribe(fn) { listeners.push(fn); }
/** @param {EdChange} kind */
function notify(kind) { listeners.forEach(function (fn) { fn(kind); }); }

/* ---------- storage ---------- */

/** @param {string} key @returns {any} */
function readJson(key) {
  try { return JSON.parse(localStorage.getItem(key) || "null"); } catch (e) { return null; }
}

/** @param {string} key @param {unknown} value */
function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    store.saveError = "";
    return true;
  } catch (e) {
    var name = e && typeof e === "object" && "name" in e ? String(e.name) : "";
    store.saveError = /quota/i.test(name) ? "full" : "blocked";
    return false;
  }
}

/** @param {string} key */
function remove(key) { try { localStorage.removeItem(key); } catch (e) { /* nothing to clean then */ } }

/** The index of the drafts. Ids are checked (no "__proto__" or other inherited name). @returns {EdIndex} */
function readIndex() {
  /** @type {EdIndex} */
  var index = { current: "", items: {} };
  var raw = readJson(INDEX_KEY);
  if (!raw || typeof raw !== "object" || !raw.items || typeof raw.items !== "object") return index;
  Object.keys(raw.items).forEach(function (id) {
    if (ID_RE.test(id)) index.items[id] = { at: Number(raw.items[id] && raw.items[id].at) || 0 };
  });
  if (typeof raw.current === "string" && ID_RE.test(raw.current) && Object.prototype.hasOwnProperty.call(index.items, raw.current)) {
    index.current = raw.current;
  }
  return index;
}

/** Ids of the index, the most recently changed first. @param {EdIndex} index */
function recentIds(index) {
  return Object.keys(index.items).sort(function (a, b) { return index.items[b].at - index.items[a].at; });
}

/** A saved draft, checked (null when missing or not readable, e.g. written by a later version: it is left as it is).
    @param {string} id @returns {{ draft: EdDraft, sel: EdSel } | null} */
function readDraft(id) {
  var raw = readJson(DRAFT_PREFIX + id);
  var d = raw && typeof raw === "object" ? restoreDraft(raw.draft) : null;
  return d ? { draft: d, sel: validSel(raw.sel, d) } : null;
}

/** True when this browser lets the editor save at all (checked once, at start). */
export function storageWorks() {
  var key = DRAFT_PREFIX + "test";
  var ok = writeJson(key, 1);
  remove(key);
  return ok;
}

/* ---------- save ---------- */

/** @type {ReturnType<typeof setTimeout> | null} */
var saveTimer = null;
/** The current draft has changes not written yet. */
var dirty = false;

function scheduleSave() {
  dirty = true;
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, SAVE_DELAY);
}

function cancelSave() {
  if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; }
}

/** Writes the current draft if it changed (also called when the page is hidden). Returns false when the browser refused. */
export function saveNow() {
  cancelSave();
  if (!dirty) return !store.saveError;
  if (!writeJson(DRAFT_PREFIX + store.id, { draft: store.draft, sel: store.sel })) return false;
  var index = readIndex();
  index.items[store.id] = { at: Date.now() };
  index.current = store.id;
  if (!writeJson(INDEX_KEY, index)) return false;
  dirty = false;
  return true;
}

/** Marks the current draft as the one to reopen next time (its date does not change). */
function markCurrent() {
  var index = readIndex();
  if (!index.items[store.id]) return;
  index.current = store.id;
  writeJson(INDEX_KEY, index);
}

/** A field of the current node was typed in. */
export function edited() { scheduleSave(); notify("content"); }
/** The plan changed (node added, moved, deleted): sel is the node to show next, checked against the new plan.
    @param {EdSel} [sel] */
export function restructured(sel) {
  store.sel = validSel(sel || store.sel, store.draft);
  scheduleSave();
  notify("structure");
}
/** @param {EdSel} sel */
export function select(sel) { store.sel = sel; scheduleSave(); notify("select"); }
/** Puts back an earlier state of the current draft (undo / redo). @param {EdDraft} d @param {EdSel} sel */
export function restoreState(d, sel) {
  store.draft = d;
  store.sel = validSel(sel, d);
  scheduleSave();
  notify("structure");
}

/* ---------- the list of drafts ---------- */

/** Number of saved drafts (the current one counted even before its first save). */
export function countDrafts() {
  var items = readIndex().items;
  return Object.keys(items).length + (items[store.id] ? 0 : 1);
}

/** The saved drafts: the current one first (with its latest state), then the others, the most recently changed first.
    @returns {Array<{ id: string, draft: EdDraft, at: number }>} */
export function listDrafts() {
  var index = readIndex();
  var list = [{ id: store.id, draft: store.draft, at: index.items[store.id] ? index.items[store.id].at : 0 }];
  recentIds(index).forEach(function (id) {
    if (id === store.id) return;
    var it = readDraft(id);
    if (it) list.push({ id: id, draft: it.draft, at: index.items[id].at });
  });
  return list;
}

/** @param {string} id @param {{ draft: EdDraft, sel: EdSel }} it */
function show(id, it) {
  store.id = id;
  store.draft = it.draft;
  store.sel = it.sel;
  dirty = false;
}

/** Deletes a draft from the storage (its entry and its line in the index). @param {string} id */
function drop(id) {
  remove(DRAFT_PREFIX + id);
  var index = readIndex();
  delete index.items[id];
  if (index.current === id) index.current = "";
  writeJson(INDEX_KEY, index);
}

/** Opens another saved draft. The current one is saved first, or dropped when it is empty. @param {string} id */
export function openDraft(id) {
  if (id === store.id) return;
  var it = readDraft(id);
  if (!it) return;
  if (isBlank(store.draft)) { cancelSave(); drop(store.id); } else saveNow();
  show(id, it);
  markCurrent();
  notify("structure");
}

/** Deletes a saved draft. The current one gives way to the most recent other draft, or to a new course. @param {string} id */
export function deleteDraft(id) {
  if (id === store.id) cancelSave();
  drop(id);
  if (id !== store.id) return;
  var ids = recentIds(readIndex());
  for (var i = 0; i < ids.length; i++) {
    var it = readDraft(ids[i]);
    if (it) { show(ids[i], it); markCurrent(); notify("structure"); return; }
  }
  show(newId(), { draft: newDraft(), sel: { kind: "course" } });
  notify("structure");
}

/** Another course (new, opened, duplicated): a new draft next to the others, saved at once. An empty current draft
    is reused instead of being kept in the list. @param {EdDraft} d */
export function addDraft(d) {
  if (!isBlank(store.draft)) { saveNow(); store.id = newId(); }
  store.draft = d;
  store.sel = { kind: "course" };
  dirty = true;
  saveNow();
  notify("structure");
}

/** The selection, or the course when it points to a node that no longer exists. @param {any} sel @param {EdDraft} d @returns {EdSel} */
export function validSel(sel, d) {
  var ws = d.pack.worlds;
  var docs = Array.isArray(d.pack.documents) ? d.pack.documents : Array.isArray(d.pack.letters) ? d.pack.letters : [];
  if (sel && typeof sel === "object" && sel.kind === "doc") return Number.isInteger(sel.d) && docs[sel.d] ? { kind: "doc", d: sel.d } : { kind: "course" };
  if (!sel || typeof sel !== "object" || !Number.isInteger(sel.w) || !ws[sel.w]) return { kind: "course" };
  if (sel.kind === "world" || sel.kind === "lesson") return { kind: sel.kind, w: sel.w };
  if (sel.kind === "exercise" && Number.isInteger(sel.e) && ws[sel.w].exercises[sel.e]) return { kind: "exercise", w: sel.w, e: sel.e };
  return { kind: "course" };
}

/** The last draft worked on (if any) becomes the current one. Returns true when one was restored. */
export function loadSaved() {
  var index = readIndex();
  var ids = recentIds(index);
  if (index.current) ids.unshift(index.current);
  for (var i = 0; i < ids.length; i++) {
    var it = readDraft(ids[i]);
    if (it) { show(ids[i], it); return true; }
  }
  return false;
}

/** The current draft was saved by another tab: it is taken back here when this tab has no change of its own,
    otherwise onConflict() is called (the next save of this tab wins). @param {() => void} onConflict */
export function followOtherTabs(onConflict) {
  window.addEventListener("storage", function (e) {
    if (e.key !== DRAFT_PREFIX + store.id || e.newValue === null) return;
    if (dirty) { onConflict(); return; }
    var it = readDraft(store.id);
    if (!it) return;
    show(store.id, it);
    notify("structure");
  });
}
