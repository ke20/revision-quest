// @ts-check
/* Révision Quest — course editor: order (the sentence in the right order is cut into labels; trap labels,
   other accepted orders, translation shown after the answer). */
import { el } from "../../dom.js";
import { joinWords, splitWords } from "../../model/text.js";
import { edited } from "../../state.js";
import { chips, rows, rowText, text } from "../fields.js";

var SPLIT_HELP = "Coupée aux espaces ; la ponctuation (. , ? ! :) devient une étiquette à part.";

/** @param {HTMLElement} root @param {any} ex */
export function orderForm(root, ex) {
  if (!Array.isArray(ex.words)) ex.words = [];
  var preview = el("div", "ed-chips");
  text(root, { label: "Phrase dans le bon ordre", f: "words", value: joinWords(ex.words), check: "^words|mots", help: SPLIT_HELP,
    placeholder: "La Bastille est prise le 14 juillet 1789 .",
    onInput: function (v) { ex.words = splitWords(v); chips(preview, ex.words, { f: "word" }); edited(); } });
  /** @type {HTMLElement} */ (root.lastElementChild).appendChild(preview);
  chips(preview, ex.words, { f: "word" });

  text(root, { label: "Étiquettes pièges (facultatif, séparées par des espaces)", f: "distractors", value: joinWords(ex.distractors),
    check: "distractors", onInput: function (v) { ex.distractors = splitWords(v); edited(); } });

  if (!Array.isArray(ex.alternatives)) ex.alternatives = [];
  var alts = /** @type {string[][]} */ (ex.alternatives);
  rows(root, {
    label: "Autres ordres acceptés (facultatif)", f: "alternatives", list: alts, addLabel: "＋ Ajouter un autre ordre", check: "alternatives",
    help: "Avec les mêmes étiquettes, par exemple « Le 14 juillet 1789 , la Bastille est prise . ».",
    add: function () { return []; },
    onChange: edited,
    row: function (r, alt, i) {
      rowText(r, "alternatives." + i, joinWords(alt), function (v) { alts[i] = splitWords(v); edited(); }, "Autre ordre " + (i + 1));
    }
  });

  text(root, { label: "Traduction ou reformulation (affichée après la réponse)", f: "translation", value: ex.translation, check: "translation",
    onInput: function (v) { ex.translation = v; edited(); } });
}
