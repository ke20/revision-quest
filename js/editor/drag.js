// @ts-check
/* Révision Quest — course editor: drag and drop in the plan. A text to read, a world, or an exercise (in its world or
   into another one), is moved by its handle ⠿. Pointer events: the same code for a mouse, a pen and a finger (tablets). A line
   shows where it will go; Échap cancels. The ↑ ↓ buttons stay for the keyboard. */
import { el } from "./dom.js";
import { docsOf, moveExercise, moveTo } from "./model/draft.js";
import { restructured, store } from "./state.js";

/** Where a dragged node goes: before item at of world w (worlds and texts: w unused, at = their index).
    @typedef {{ w: number, at: number, line: number }} EdDrop */

var MIN_MOVE = 4; // px before a press on the handle becomes a drag

/** @typedef {"doc" | "world" | "ex"} EdDragKind */

/** The handle of a world (e < 0) or of an exercise. @param {number} w @param {number} e */
export function grip(w, e) { return handle(e < 0 ? "world" : "ex", w, e, e < 0 ? "w:" + w : "e:" + w + ":" + e); }

/** The handle of a text to read. @param {number} d */
export function docGrip(d) { return handle("doc", d, -1, "d:" + d); }

/** @param {EdDragKind} kind @param {number} w @param {number} e @param {string} key */
function handle(kind, w, e, key) {
  var g = el("span", "tn-grip", "⠿");
  g.setAttribute("aria-hidden", "true"); // the keyboard uses ↑ ↓
  g.title = "Glisser pour déplacer";
  g.setAttribute("data-grip", key);
  g.addEventListener("pointerdown", function (ev) { start(ev, g, kind, w, e); });
  return g;
}

/** @param {PointerEvent} ev @param {HTMLElement} g @param {EdDragKind} kind @param {number} w @param {number} e */
function start(ev, g, kind, w, e) {
  if (ev.button !== 0) return;
  var found = /** @type {HTMLElement | null} */ (g.closest(".ed-tree"));
  var item = /** @type {HTMLElement | null} */ (g.closest("li"));
  if (!found || !item) return;
  var box = found;
  ev.preventDefault();
  try { g.setPointerCapture(ev.pointerId); } catch (x) { /* an old browser: the events still reach the handle */ }
  var x0 = ev.clientX, y0 = ev.clientY, dragging = false;
  /** @type {EdDrop | null} */
  var drop = null;
  var line = el("div", "tn-drop");
  var source = item;
  var lastY = y0, timer = 0;

  /** The line under the pointer. */
  function place() {
    var r = box.getBoundingClientRect();
    drop = kind === "ex" ? exerciseDrop(box, lastY) : listDrop(all(box, kind === "doc" ? "li[data-doc]" : ".tn-world"), lastY);
    line.hidden = !drop;
    if (drop) line.style.top = (drop.line - r.top + box.scrollTop) + "px";
  }
  /** Near an edge of the plan, it keeps scrolling while the pointer stays there (faster closer to the edge). */
  function edgeScroll() {
    timer = 0;
    var r = box.getBoundingClientRect(), step = 0;
    if (lastY < r.top + 40) step = -Math.ceil((r.top + 40 - lastY) / 4);
    else if (lastY > r.bottom - 40) step = Math.ceil((lastY - r.bottom + 40) / 4);
    if (!step) return;
    var before = box.scrollTop;
    box.scrollTop += Math.max(-20, Math.min(20, step));
    if (box.scrollTop === before) return; // at the top or the bottom
    place();
    timer = window.setTimeout(edgeScroll, 16);
  }

  /** @param {PointerEvent} m */
  function onMove(m) {
    if (!dragging) {
      if (Math.abs(m.clientX - x0) + Math.abs(m.clientY - y0) < MIN_MOVE) return;
      dragging = true;
      source.classList.add("tn-dragging");
      document.body.classList.add("ed-dragging");
      box.appendChild(line);
    }
    lastY = m.clientY;
    place();
    if (!timer) edgeScroll();
  }
  function end() {
    if (timer) window.clearTimeout(timer);
    timer = 0;
    g.removeEventListener("pointermove", onMove);
    g.removeEventListener("pointerup", onUp);
    g.removeEventListener("pointercancel", end);
    document.removeEventListener("keydown", onKey, true);
    line.remove();
    source.classList.remove("tn-dragging");
    document.body.classList.remove("ed-dragging");
  }
  function onUp() {
    end();
    if (!dragging || !drop) return;
    var pack = store.draft.pack;
    if (kind === "doc") { restructured({ kind: "doc", d: moveTo(docsOf(pack), w, drop.at) }); return; }
    if (kind === "world") { restructured({ kind: "world", w: moveTo(pack.worlds, w, drop.at) }); return; }
    var to = moveExercise(pack, w, e, drop.w, drop.at);
    restructured({ kind: "exercise", w: to.w, e: to.e });
  }
  /** @param {KeyboardEvent} k */
  function onKey(k) { if (k.key === "Escape") { k.stopPropagation(); drop = null; end(); } }
  g.addEventListener("pointermove", onMove);
  g.addEventListener("pointerup", onUp);
  g.addEventListener("pointercancel", end);
  document.addEventListener("keydown", onKey, true);
}

/** @param {HTMLElement} box @param {string} sel */
function all(box, sel) { return /** @type {HTMLElement[]} */ (Array.prototype.slice.call(box.querySelectorAll(sel))); }

/** A world or a text goes before the first of the list whose middle is below the pointer.
    @param {HTMLElement[]} items @param {number} y @returns {EdDrop} */
function listDrop(items, y) {
  for (var i = 0; i < items.length; i++) {
    var r = items[i].getBoundingClientRect();
    if (y < r.top + r.height / 2) return { w: 0, at: i, line: r.top - 2 };
  }
  var last = items[items.length - 1].getBoundingClientRect();
  return { w: 0, at: items.length, line: last.bottom + 2 };
}

/** An exercise goes into the world under the pointer, before the first of its exercises whose middle is below the
    pointer (after the lesson, which stays first). @param {HTMLElement} box @param {number} y @returns {EdDrop | null} */
function exerciseDrop(box, y) {
  var worlds = all(box, ".tn-world");
  for (var i = 0; i < worlds.length; i++) {
    var r = worlds[i].getBoundingClientRect();
    if (y < r.top || y > r.bottom) continue;
    var items = all(worlds[i], "li[data-ex]");
    for (var k = 0; k < items.length; k++) {
      var ir = items[k].getBoundingClientRect();
      if (y < ir.top + ir.height / 2) return { w: i, at: k, line: ir.top - 1 };
    }
    var after = items.length ? items[items.length - 1] : worlds[i].querySelector("li[data-lesson]");
    return { w: i, at: items.length, line: (after ? after.getBoundingClientRect().bottom : r.top + 30) + 1 };
  }
  return null;
}
