// @ts-check
/* Révision Quest — course editor: spot (a sentence cut into labels; the author touches the wrong one and types the
   correction). */
import { el } from "../../dom.js";
import { joinWords, splitWords } from "../../model/text.js";
import { edited } from "../../state.js";
import { chips, text } from "../fields.js";

/** @param {HTMLElement} root @param {any} ex */
export function spotForm(root, ex) {
  if (!Array.isArray(ex.tokens)) ex.tokens = [];
  var box = el("div", "ed-chips ed-chips-pick");
  function draw() {
    chips(box, ex.tokens, { f: "token", picked: ex.wrongIndex, onPick: function (i) { ex.wrongIndex = i; draw(); edited(); } });
  }
  text(root, { label: "Phrase avec une erreur", f: "sentence", value: joinWords(ex.tokens), check: "^tokens",
    help: "Coupée aux espaces ; la ponctuation devient une étiquette à part.", placeholder: "Les élèves écoute la maîtresse.",
    onInput: function (v) {
      ex.tokens = splitWords(v);
      if (!(ex.wrongIndex < ex.tokens.length)) ex.wrongIndex = -1;
      draw();
      edited();
    } });
  var pick = el("div", "ed-field");
  pick.setAttribute("data-check", "wrongIndex");
  pick.appendChild(el("p", "ed-label", "Touche le mot faux :"));
  pick.appendChild(box);
  root.appendChild(pick);
  draw();
  text(root, { label: "Correction (le mot juste)", f: "correction", value: ex.correction, check: "^correction",
    onInput: function (v) { ex.correction = v; edited(); } });
}
