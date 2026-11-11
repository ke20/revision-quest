// @ts-check
/* Révision Quest — course editor: the form of the selected node (course, world, lesson or exercise). */
import { showMessages } from "../checks.js";
import { el } from "../dom.js";
import { store } from "../state.js";
import { keyOf } from "../tree.js";
import { courseForm } from "./course.js";
import { exerciseForm } from "./exercise.js";
import { lessonForm, worldForm } from "./world.js";

/** Draws the form of store.sel into root (its messages box first). @param {HTMLElement} root */
export function renderForm(root) {
  root.textContent = "";
  var sel = store.sel;
  var body = el("div", "ed-form-body");
  if (sel.kind === "course") courseForm(body);
  else if (sel.kind === "world") worldForm(body, sel.w);
  else if (sel.kind === "lesson") lessonForm(body, sel.w);
  else exerciseForm(body, sel.w, sel.e);
  var msgs = el("div", "ed-msgs");
  msgs.setAttribute("aria-live", "polite");
  var title = body.querySelector(".ed-form-title");
  body.insertBefore(msgs, title ? title.nextSibling : body.firstChild);
  root.appendChild(body);
  refreshMessages(root);
}

/** Messages of the checks for the node shown in root. @param {HTMLElement} root */
export function refreshMessages(root) {
  showMessages(root, store.report, keyOf(store.sel), store.draft.pack);
}
