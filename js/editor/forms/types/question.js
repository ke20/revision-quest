// @ts-check
/* Révision Quest — course editor: question (a question or a sentence to translate, the accepted answers, a box of one
   or several lines). The boss (last world) is made of 10 to 20 of them. */
import { edited } from "../../state.js";
import { checkbox, textList } from "../fields.js";

/** @param {HTMLElement} root @param {any} ex */
export function questionForm(root, ex) {
  if (!Array.isArray(ex.answers)) ex.answers = [""];
  textList(root, { label: "Réponses acceptées", f: "answers", list: ex.answers, min: 1, max: 10, addLabel: "＋ Ajouter une réponse acceptée",
    check: "^answers",
    help: "Toutes les bonnes réponses possibles (une traduction peut s'écrire de plusieurs façons). Ne comptent pas : majuscules, espaces, " +
      "ponctuation, l'accent d'une majuscule ; en anglais, I'm = I am, don't = do not… Les autres accents comptent.",
    onChange: edited });
  checkbox(root, { label: "Réponse longue : zone de plusieurs lignes (deux phrases, une phrase longue)", f: "multiline", checked: !!ex.multiline,
    onChange: function (on) { if (on) ex.multiline = true; else delete ex.multiline; edited(); } });
}
