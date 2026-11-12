// @ts-check
/* Révision Quest — course editor: the 7 exercise types (French names) and an empty exercise of each type.
   An empty exercise is not valid yet (the checks list what is missing); once its fields are filled it is. */

/** Exercise types, in the order of the « Ajouter un exercice » menu. @type {Array<[string, string]>} */
export var TYPE_LABELS = [
  ["mcq", "QCM"],
  ["sort", "Trier"],
  ["match", "Relier"],
  ["order", "Remettre dans l'ordre"],
  ["fill", "Texte à trous"],
  ["spot", "Trouver l'erreur"],
  ["question", "Question ou traduction"]
];

/** French name of a type (the type itself when unknown). @param {unknown} type @returns {string} */
export function typeLabel(type) {
  for (var i = 0; i < TYPE_LABELS.length; i++) if (TYPE_LABELS[i][0] === type) return TYPE_LABELS[i][1];
  return String(type);
}

/** @type {Record<string, () => object>} */
var EMPTY = {
  mcq: function () { return { options: ["", ""], answer: 0 }; },
  sort: function () {
    return { categories: [{ id: "c1", label: "" }, { id: "c2", label: "" }], items: [{ text: "", cat: "c1" }, { text: "", cat: "c2" }] };
  },
  match: function () { return { pairs: [{ left: "", right: "" }, { left: "", right: "" }, { left: "", right: "" }] }; },
  order: function () { return { words: [], distractors: [], translation: "" }; },
  fill: function () { return { sentence: "", answers: [""] }; },
  spot: function () { return { tokens: [], wrongIndex: -1, correction: "" }; },
  question: function () { return { answers: [""] }; }
};

/** A new exercise of this type: type, prompt, the fields of the type, then explanation and hint (the order of the file).
    @param {string} type @returns {any} */
export function emptyExercise(type) {
  if (!EMPTY[type]) throw new Error("type inconnu : " + type);
  /** @type {Record<string, unknown>} */
  var ex = { type: type, prompt: "" };
  var fields = /** @type {Record<string, unknown>} */ (EMPTY[type]());
  Object.keys(fields).forEach(function (k) { ex[k] = fields[k]; });
  ex.explanation = "";
  ex.hint = "";
  return ex;
}

/** A free id "<prefix><n>" among the ids of a list (sort categories c1, c2…).
    @param {Array<{ id?: unknown }>} list @param {string} prefix */
export function nextId(list, prefix) {
  var used = list.map(function (x) { return x && String(x.id); });
  for (var n = 1; ; n++) if (used.indexOf(prefix + n) === -1) return prefix + n;
}
