// @ts-check
/* Révision Quest — course editor: DOM helpers. Text typed by the author is only ever set with textContent / value;
   innerHTML is used for trusted markup or text escaped with E() / R() (js/app/ui/util.js). */

/** An element with a class and a plain text. @template {keyof HTMLElementTagNameMap} K
    @param {K} tag @param {string} [cls] @param {string} [text] @returns {HTMLElementTagNameMap[K]} */
export function el(tag, cls, text) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

/** A button (type="button"). @param {string} cls @param {string} text @param {() => void} [onClick] @param {string} [label] aria-label */
export function button(cls, text, onClick, label) {
  var b = el("button", cls, text);
  b.type = "button";
  if (label) { b.setAttribute("aria-label", label); b.title = label; }
  if (onClick) b.addEventListener("click", onClick);
  return b;
}

/** An element of the page or of a node built by this code (it is there). @param {ParentNode} node @param {string} sel @returns {HTMLElement} */
export function qs(node, sel) { return /** @type {HTMLElement} */ (node.querySelector(sel)); }

/** A short message at the top of the page (plain text). @param {string} text @param {string} [cls] */
export function toast(text, cls) {
  var wrap = document.getElementById("toasts");
  if (!wrap) return;
  var t = el("div", "toast " + (cls || ""), text);
  wrap.appendChild(t);
  setTimeout(function () { t.classList.add("out"); }, 3200);
  setTimeout(function () { t.remove(); }, 3700);
}

/** A dialog; build(box, close) fills it. Escape or a click outside closes it.
    @param {(box: HTMLElement, close: () => void) => void} build @returns {() => void} close */
export function modal(build) {
  var back = el("div", "modal-backdrop");
  var box = el("div", "modal ed-modal pop");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  back.appendChild(box);
  var closed = false;
  function close() {
    if (closed) return;
    closed = true;
    document.removeEventListener("keydown", onKey);
    back.classList.add("out");
    setTimeout(function () { back.remove(); }, 200);
  }
  /** @param {KeyboardEvent} e */
  function onKey(e) { if (e.key === "Escape") close(); }
  back.addEventListener("click", function (e) { if (e.target === back) close(); });
  document.addEventListener("keydown", onKey);
  build(box, close);
  document.body.appendChild(back);
  var first = /** @type {HTMLElement | null} */ (box.querySelector("select, input, [data-act=yes]"));
  if (first) first.focus();
  return close;
}

/** A question with « Annuler » and okLabel (plain texts; lines: extra paragraphs, e.g. a list of errors).
    @param {string} title @param {string} text @param {string} okLabel @param {() => void} onOk
    @param {{ danger?: boolean, lines?: string[] }} [opts] */
export function confirmBox(title, text, okLabel, onOk, opts) {
  opts = opts || {};
  modal(function (box, close) {
    box.appendChild(el("h3", "", title));
    if (text) box.appendChild(el("p", "", text));
    if (opts.lines && opts.lines.length) {
      var ul = el("ul", "ed-modal-list");
      opts.lines.forEach(function (l) { ul.appendChild(el("li", "", l)); });
      box.appendChild(ul);
    }
    var row = el("div", "modal-actions");
    row.appendChild(button("btn btn-ghost", "Annuler", close));
    var ok = button("btn " + (opts.danger ? "btn-danger" : "btn-primary"), okLabel, function () { close(); onOk(); });
    ok.setAttribute("data-act", "yes");
    row.appendChild(ok);
    box.appendChild(row);
  });
}
