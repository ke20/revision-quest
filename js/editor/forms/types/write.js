// @ts-check
/* Révision Quest — course editor: write (a written answer checked by the criteria: minimum words, requirements
   found by a pattern, model answer). */
import { nextId } from "../../model/templates.js";
import { edited } from "../../state.js";
import { number, rows, rowText, text, textList } from "../fields.js";

/** @param {HTMLElement} root @param {any} ex */
export function writeForm(root, ex) {
  if (!Array.isArray(ex.requirements)) ex.requirements = [];
  if (!Array.isArray(ex.starters)) ex.starters = [];
  var reqs = /** @type {WriteRequirement[]} */ (ex.requirements);
  number(root, { label: "Nombre de mots minimum", f: "minWords", value: ex.minWords, min: 1, max: 300, check: "minWords",
    onInput: function (v) { ex.minWords = v; edited(); } });
  rows(root, {
    label: "Critères vérifiés dans la réponse", f: "requirements", list: reqs, min: 1, max: 8, addLabel: "＋ Ajouter un critère", check: "^requirement|regex",
    help: "Le mot ou motif cherché (expression régulière, majuscules ignorées) : « députés? » accepte député et députés.",
    add: function () { return { id: nextId(reqs, "r"), label: "", pattern: "" }; },
    onChange: edited,
    row: function (r, q, i) {
      rowText(r, "requirements." + i + ".label", q.label, function (v) { q.label = v; edited(); }, "Critère " + (i + 1), "Parle des députés");
      rowText(r, "requirements." + i + ".pattern", q.pattern, function (v) { q.pattern = v; edited(); }, "Motif cherché " + (i + 1), "députés?");
    }
  });
  number(root, { label: "Critères à remplir pour valider", f: "minRequirements", value: ex.minRequirements, min: 1, max: 8, check: "^minRequirements",
    onInput: function (v) { ex.minRequirements = v; edited(); } });
  textList(root, { label: "Débuts de phrase proposés (facultatif)", f: "starters", list: ex.starters, max: 6, addLabel: "＋ Ajouter un début de phrase",
    check: "starters", onChange: edited });
  text(root, { label: "Réponse modèle", f: "modelAnswer", value: ex.modelAnswer, multiline: true, rows: 3, check: "^modelAnswer",
    help: "Elle doit remplir les critères et avoir assez de mots (vérifié en direct).",
    onInput: function (v) { ex.modelAnswer = v; edited(); } });
}
