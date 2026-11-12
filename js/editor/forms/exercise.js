// @ts-check
/* Révision Quest — course editor: the form of an exercise. Fields shared by every type (prompt, text to read,
   explanation, hint) around the fields of its type (forms/types/<type>.js). */
import { el } from "../dom.js";
import { typeLabel } from "../model/templates.js";
import { edited, store } from "../state.js";
import { keptNote, RICH_HELP, select, text } from "./fields.js";
import { fillForm } from "./types/fill.js";
import { matchForm } from "./types/match.js";
import { mcqForm } from "./types/mcq.js";
import { orderForm } from "./types/order.js";
import { sortForm } from "./types/sort.js";
import { spotForm } from "./types/spot.js";
import { writeForm } from "./types/write.js";

/** @type {Record<string, (root: HTMLElement, ex: any) => void>} */
var TYPE_FORMS = { mcq: mcqForm, sort: sortForm, match: matchForm, order: orderForm, fill: fillForm, spot: spotForm, write: writeForm };

/** @param {HTMLElement} root @param {number} wi @param {number} ei */
export function exerciseForm(root, wi, ei) {
  var pack = store.draft.pack;
  var ex = /** @type {any} */ (pack.worlds[wi].exercises[ei]);
  var known = Object.prototype.hasOwnProperty.call(TYPE_FORMS, ex.type);
  root.appendChild(el("h2", "ed-form-title", typeLabel(ex.type) + " · exercice " + (ei + 1) + " du monde " + (wi + 1)));
  if (!known) {
    keptNote(root, "Exercice de type « " + String(ex.type) + " » (inconnu)");
    return;
  }
  var box = el("div", "ed-grid");
  root.appendChild(box);
  text(box, { label: "Consigne", f: "prompt", value: ex.prompt, multiline: true, check: "^prompt|consigne", help: RICH_HELP,
    onInput: function (v) { ex.prompt = v; edited(); } });

  var docs = Array.isArray(pack.documents) ? pack.documents : Array.isArray(pack.letters) ? pack.letters : [];
  if (!docs.length && ex.docId == null) {
    box.appendChild(el("p", "ed-help", "📄 Pour afficher un texte au-dessus de la question : « ＋ Ajouter un texte à lire » dans le plan."));
  } else {
    select(box, { label: "Texte à lire au-dessus de la question", f: "docId", value: ex.docId == null ? "" : String(ex.docId),
      placeholder: "— aucun —", check: "document",
      options: docs.map(/** @param {PackDocument} doc */ function (doc) {
        return /** @type {[string, string]} */ ([String(doc.id), doc.title || doc.from || String(doc.id)]);
      }),
      onChange: function (v) {
        var found = docs.filter(/** @param {PackDocument} doc */ function (doc) { return String(doc.id) === v; })[0];
        if (found) ex.docId = found.id; else delete ex.docId; // ids may be numbers in a file
        edited();
      } });
  }
  if (ex.letterId != null) keptNote(box, "Lettre liée (letterId)");
  if (ex.figure) keptNote(box, "Figure de géométrie");
  if (ex.table) keptNote(box, "Tableau");

  var typeBox = el("div", "ed-grid ed-type");
  box.appendChild(typeBox);
  TYPE_FORMS[ex.type](typeBox, ex);

  text(box, { label: "Explication (affichée après la réponse)", f: "explanation", value: ex.explanation, multiline: true,
    check: "^explanation|explication", help: "1 ou 2 phrases qui disent pourquoi. " + RICH_HELP,
    onInput: function (v) { ex.explanation = v; edited(); } });
  text(box, { label: "Indice (facultatif, coûte 3 XP)", f: "hint", value: ex.hint, check: "^hint|indice",
    onInput: function (v) { ex.hint = v; edited(); } });
}
