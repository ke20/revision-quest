// @ts-check
/* Révision Quest — course editor: undo / redo of the current draft. A step is a copy of the draft (and of the selected
   node). Typing is grouped: one step once the author stops for STEP_DELAY ms; a change of the plan is one step at
   once. Kept in memory for the current draft only: opening another draft starts a new history. */
import { restoreState, store, subscribe } from "./state.js";

var STEP_DELAY = 700;
var MAX_STEPS = 100;

/** @typedef {{ draft: string, sel: EdSel }} EdStep */

/** @type {EdStep[]} */
var past = [];
/** @type {EdStep[]} */
var future = [];
/** @type {EdStep} */
var current = { draft: "", sel: { kind: "course" } };
var draftId = "";
/** @type {ReturnType<typeof setTimeout> | null} */
var timer = null;
var applying = false;

function reset() {
  past = [];
  future = [];
  current = { draft: JSON.stringify(store.draft), sel: store.sel };
  draftId = store.id;
}

/** Takes a step when the draft changed since the last one (a new selection alone is not a step). */
function record() {
  if (timer) { clearTimeout(timer); timer = null; }
  if (store.id !== draftId) { reset(); return; }
  var now = JSON.stringify(store.draft);
  if (now === current.draft) { current.sel = store.sel; return; }
  past.push(current);
  if (past.length > MAX_STEPS) past.shift();
  future = [];
  current = { draft: now, sel: store.sel };
}

/** Starts following the changes of the editor (once, after the saved draft is loaded). */
export function startHistory() {
  reset();
  subscribe(function (kind) {
    if (applying) return;
    if (store.id !== draftId) { reset(); return; }
    if (kind === "content") {
      if (timer) clearTimeout(timer);
      timer = setTimeout(record, STEP_DELAY);
    } else if (kind === "structure") record();
    else current.sel = store.sel;
  });
}

/** @param {EdStep} step */
function apply(step) {
  applying = true;
  try { restoreState(JSON.parse(step.draft), step.sel); } finally { applying = false; }
}

export function canUndo() { return past.length > 0 || timer !== null; }
export function canRedo() { return future.length > 0 && timer === null; }

/** Back one step. Returns false when there is nothing to undo. */
export function undo() {
  record();
  var step = past.pop();
  if (!step) return false;
  future.push(current);
  current = step;
  apply(step);
  return true;
}

/** Forward one step (after an undo). Returns false when there is nothing to redo. */
export function redo() {
  record();
  var step = future.pop();
  if (!step) return false;
  past.push(current);
  current = step;
  apply(step);
  return true;
}
