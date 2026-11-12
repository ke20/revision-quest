// @ts-check
/* Révision Quest — course editor: form fields. Each field writes into the pack at once (onInput) and carries
   data-check, a pattern of the check messages shown under it (checks.js); data-f names its input for the tests. */
import { button, el } from "../dom.js";

var uid = 0;

/** @typedef {{ label: string, f: string, help?: string, check?: string }} FieldOpts */

/** <div class="ed-field"> with its label and help. @param {HTMLElement} parent @param {FieldOpts} o @param {HTMLElement} [input] */
function wrap(parent, o, input) {
  var w = el("div", "ed-field");
  if (o.check) w.setAttribute("data-check", o.check);
  var lab = el("label", "ed-label", o.label);
  w.appendChild(lab);
  if (input) {
    input.id = "ed-f" + (++uid);
    lab.htmlFor = input.id;
    input.setAttribute("data-f", o.f);
    w.appendChild(input);
  }
  if (o.help) w.appendChild(el("p", "ed-help", o.help));
  parent.appendChild(w);
  return w;
}

/** A text box (or a multi-line one). @param {HTMLElement} parent
    @param {FieldOpts & { value: unknown, onInput: (v: string) => void, multiline?: boolean, rows?: number, placeholder?: string, maxLength?: number, onChange?: (v: string, input: HTMLInputElement | HTMLTextAreaElement) => void }} o */
export function text(parent, o) {
  var input = o.multiline ? el("textarea", "ed-input") : el("input", "ed-input");
  if (input instanceof HTMLTextAreaElement) input.rows = o.rows || 2;
  else input.type = "text";
  input.value = o.value == null ? "" : String(o.value);
  if (o.placeholder) input.placeholder = o.placeholder;
  if (o.maxLength) input.maxLength = o.maxLength;
  input.addEventListener("input", function () { o.onInput(input.value); });
  if (o.onChange) { var onChange = o.onChange; input.addEventListener("change", function () { onChange(input.value, input); }); }
  wrap(parent, o, input);
  return input;
}

/** A whole number, empty allowed (undefined). @param {HTMLElement} parent
    @param {FieldOpts & { value: unknown, onInput: (v: number | undefined) => void, min?: number, max?: number }} o */
export function number(parent, o) {
  var input = el("input", "ed-input ed-num");
  input.type = "number";
  input.step = "1";
  if (o.min != null) input.min = String(o.min);
  if (o.max != null) input.max = String(o.max);
  input.value = typeof o.value === "number" ? String(o.value) : "";
  input.addEventListener("input", function () {
    var n = parseInt(input.value, 10);
    o.onInput(isFinite(n) ? n : undefined);
  });
  wrap(parent, o, input);
  return input;
}

/** A drop-down list. options: [value, label]; a value not in the list (opened file) is added so it is not lost.
    @param {HTMLElement} parent @param {FieldOpts & { value: string, options: Array<[string, string]>, onChange: (v: string) => void, placeholder?: string }} o */
export function select(parent, o) {
  var s = el("select", "ed-input");
  var opts = o.options.slice();
  if (o.placeholder) opts.unshift(["", o.placeholder]);
  if (o.value && !opts.some(function (x) { return x[0] === o.value; })) opts.push([o.value, o.value + " (inconnu)"]);
  opts.forEach(function (x) {
    var op = el("option", "", x[1]);
    op.value = x[0];
    s.appendChild(op);
  });
  s.value = o.value || "";
  s.addEventListener("change", function () { o.onChange(s.value); });
  wrap(parent, o, s);
  return s;
}

/** A tick box with its label on the right. @param {HTMLElement} parent
    @param {{ label: string, f: string, checked: boolean, onChange: (on: boolean) => void, help?: string }} o */
export function checkbox(parent, o) {
  var w = el("div", "ed-field ed-check");
  var lab = el("label", "ed-check-label");
  var c = el("input");
  c.type = "checkbox";
  c.checked = o.checked;
  c.setAttribute("data-f", o.f);
  c.addEventListener("change", function () { o.onChange(c.checked); });
  lab.appendChild(c);
  lab.appendChild(document.createTextNode(" " + o.label));
  w.appendChild(lab);
  if (o.help) w.appendChild(el("p", "ed-help", o.help));
  parent.appendChild(w);
  return c;
}

/** @template T
    @typedef {FieldOpts & { list: T[], min?: number, max?: number, add: () => T, addLabel?: string,
      row: (row: HTMLElement, item: T, i: number) => void, remove?: (i: number) => void, onChange: () => void }} RowsOpts */

/** Rows of a list (options, pairs, points…): each row has a ✕ button, « ＋ Ajouter » adds one. The list is changed in
    place; remove(i) runs before a row is taken out (to fix indices that point into the list).
    @template T @param {HTMLElement} parent @param {RowsOpts<T>} o */
export function rows(parent, o) {
  var w = wrap(parent, o);
  w.classList.add("ed-rows");
  w.setAttribute("data-f", o.f);
  var box = el("div", "ed-rows-box");
  w.appendChild(box);
  var add = button("btn btn-ghost btn-small ed-add", o.addLabel || "＋ Ajouter", function () {
    o.list.push(o.add());
    draw();
    o.onChange();
    var inputs = box.querySelectorAll(".ed-row:last-child input[type=text], .ed-row:last-child textarea");
    if (inputs[0]) /** @type {HTMLElement} */ (inputs[0]).focus();
  });
  add.setAttribute("data-add", o.f);
  w.appendChild(add);
  function draw() {
    box.textContent = "";
    o.list.forEach(function (item, i) {
      var r = el("div", "ed-row");
      r.setAttribute("data-row", String(i));
      o.row(r, item, i);
      var del = button("ed-del", "✕", function () {
        if (o.remove) o.remove(i);
        o.list.splice(i, 1);
        draw();
        o.onChange();
      }, "Retirer cette ligne");
      del.disabled = o.list.length <= (o.min || 0);
      r.appendChild(del);
      box.appendChild(r);
    });
    add.disabled = o.max != null && o.list.length >= o.max;
  }
  draw();
  return { wrap: w, draw: draw };
}

/** A text box inside a row (no label of its own: aria-label). @param {HTMLElement} row @param {string} f @param {unknown} value
    @param {(v: string) => void} onInput @param {string} label @param {string} [placeholder]
    @param {boolean} [multiline] a box that grows with its lines (Enter adds a line) */
export function rowText(row, f, value, onInput, label, placeholder, multiline) {
  var input = multiline ? el("textarea", "ed-input") : el("input", "ed-input");
  if (!(input instanceof HTMLTextAreaElement)) input.type = "text";
  input.value = value == null ? "" : String(value);
  input.setAttribute("data-f", f);
  input.setAttribute("aria-label", label);
  if (placeholder) input.placeholder = placeholder;
  function fit() { if (input instanceof HTMLTextAreaElement) input.rows = Math.max(1, input.value.split("\n").length); }
  fit();
  input.addEventListener("input", function () { fit(); onInput(input.value); });
  row.appendChild(input);
  return input;
}

/** A list of texts (lesson points, accepted answers, model answers…).
    @param {HTMLElement} parent @param {FieldOpts & { list: string[], min?: number, max?: number, placeholder?: string, addLabel?: string, multiline?: boolean, onChange: () => void }} o */
export function textList(parent, o) {
  return rows(parent, {
    label: o.label, f: o.f, help: o.help, check: o.check, list: o.list, min: o.min, max: o.max, addLabel: o.addLabel,
    add: function () { return ""; }, onChange: o.onChange,
    row: function (r, item, i) {
      rowText(r, o.f + "." + i, item, function (v) { o.list[i] = v; o.onChange(); }, o.label + " " + (i + 1), o.placeholder, o.multiline);
    }
  });
}

/** A part of the pack kept as it is (figures, tables, groups, texts to read). @param {HTMLElement} parent @param {string} what */
export function keptNote(parent, what) {
  parent.appendChild(el("p", "ed-kept", "🔒 " + what + " : non modifiable ici, gardé tel quel dans le fichier."));
}

var ICONS = ["📘", "📗", "📖", "🧮", "📐", "🔢", "🔬", "🧪", "🌍", "🗺️", "🏰", "👑", "⚔️", "🏛️", "🌋", "🌊",
  "🌳", "🐾", "🦕", "🚀", "🪐", "⚡", "🎨", "🎵", "🇬🇧", "🇪🇸", "✏️", "🧠", "💡", "⭐", "🏆", "🐉"];

/** A row of emoji buttons under an icon field: a click writes the emoji into the input and calls onPick.
    @param {HTMLElement} parent @param {HTMLInputElement | HTMLTextAreaElement} input @param {(icon: string) => void} onPick */
export function emojiPicks(parent, input, onPick) {
  var picks = el("div", "ed-emoji-picks");
  ICONS.forEach(function (ic) {
    picks.appendChild(button("ed-emoji", ic, function () { input.value = ic; onPick(ic); }, "Icône " + ic));
  });
  parent.appendChild(picks);
}

/** Help shown under the rich text fields. */
export var RICH_HELP = "**mot** = gras · [[mot|explication]] = bulle d'aide.";

/** Help shown under the lesson lists, where a line starting with "- " becomes a bullet. */
export var LIST_HELP = RICH_HELP + " Entrée = nouvelle ligne · une ligne qui commence par « - » = une puce.";

/** The labels of a sentence as chips (order, spot). onPick(i): the chips are buttons, the picked one is pressed.
    @param {HTMLElement} box @param {string[]} words @param {{ picked?: number, onPick?: (i: number) => void, f: string }} o */
export function chips(box, words, o) {
  box.textContent = "";
  if (!words.length) { box.appendChild(el("span", "ed-help", "(les étiquettes apparaissent ici)")); return; }
  words.forEach(function (w, i) {
    const onPick = o.onPick;
    var c = onPick ? button("ed-chip", w, function () { onPick(i); }) : el("span", "ed-chip", w);
    c.setAttribute("data-f", o.f + "." + i);
    if (onPick) c.setAttribute("aria-pressed", o.picked === i ? "true" : "false");
    box.appendChild(c);
  });
}
