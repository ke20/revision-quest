// @ts-check
/* Révision Quest — course editor: fill (a sentence with exactly one ___, the accepted answers, optional dictation). */
import { button } from "../../dom.js";
import { edited } from "../../state.js";
import { text, textList } from "../fields.js";

/** @param {HTMLElement} root @param {any} ex */
export function fillForm(root, ex) {
  if (!Array.isArray(ex.answers)) ex.answers = [""];
  var sentence = text(root, { label: "Phrase avec un trou ___", f: "sentence", value: ex.sentence, check: "^sentence|trou",
    help: "Exactement un trou, écrit avec trois tirets bas : ___", placeholder: "La prise de la Bastille a lieu le 14 juillet ___.",
    onInput: function (v) { ex.sentence = v; edited(); } });
  /** @type {HTMLElement} */ (sentence.parentElement).appendChild(button("btn btn-ghost btn-small", "Insérer le trou ___", function () {
    var at = sentence.selectionStart == null ? sentence.value.length : sentence.selectionStart;
    var end = sentence.selectionEnd == null ? at : sentence.selectionEnd;
    sentence.value = sentence.value.slice(0, at) + "___" + sentence.value.slice(end);
    ex.sentence = sentence.value;
    sentence.focus();
    sentence.setSelectionRange(at + 3, at + 3);
    edited();
  }));
  textList(root, { label: "Réponses acceptées", f: "answers", list: ex.answers, min: 1, max: 10, addLabel: "＋ Ajouter une réponse acceptée",
    check: "^answers", help: "Majuscules, espaces et apostrophes ne comptent pas ; les accents comptent.", onChange: edited });
  text(root, { label: "Écoute et écris (facultatif) : texte lu à voix haute", f: "listen", value: ex.listen, maxLength: 300, check: "^listen",
    help: "Lu par une voix de l'appareil, dans la langue du cours. Ne pas écrire ce mot dans la phrase ; un indice aide si la voix est mal comprise.",
    onInput: function (v) { ex.listen = v; edited(); } });
}
