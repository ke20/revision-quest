// @ts-check
/* Révision Quest — course editor: QCM (2 to 4 options, one right answer → answer: n, several → answer: [n, …]). */
import { el } from "../../dom.js";
import { edited } from "../../state.js";
import { checkbox, rows, rowText } from "../fields.js";

var group = 0;

/** @param {HTMLElement} root @param {any} ex */
export function mcqForm(root, ex) {
  if (!Array.isArray(ex.options)) ex.options = ["", ""];
  var name = "ed-mcq-" + (++group);
  var box = el("div", "ed-grid");
  root.appendChild(box);

  /** @returns {number[]} */
  function picked() { return Array.isArray(ex.answer) ? ex.answer : []; }

  function draw() {
    box.textContent = "";
    var multi = Array.isArray(ex.answer);
    checkbox(box, { label: "Plusieurs bonnes réponses (l'enfant coche des cases)", f: "multi", checked: multi, onChange: function (on) {
      if (on) ex.answer = typeof ex.answer === "number" && ex.answer >= 0 ? [ex.answer] : [];
      else { ex.answer = picked().length ? picked()[0] : 0; delete ex.showCount; }
      draw();
      edited();
    } });
    rows(box, {
      label: multi ? "Réponses proposées (2 à 4) : coche les bonnes" : "Réponses proposées (2 à 4) : choisis la bonne",
      f: "options", list: ex.options, min: 2, max: 4, addLabel: "＋ Ajouter une réponse", check: "^options|^answer|réponse|showCount",
      help: "Le jeu les mélange à chaque fois : pas de « A et B » ni de « la réponse C ».",
      add: function () { return ""; },
      onChange: edited,
      remove: function (i) { // keep the right answer(s) on the same options
        if (Array.isArray(ex.answer)) ex.answer = ex.answer.filter(function (/** @type {number} */ a) { return a !== i; }).map(function (/** @type {number} */ a) { return a > i ? a - 1 : a; });
        else if (ex.answer === i) ex.answer = 0;
        else if (ex.answer > i) ex.answer--;
      },
      row: function (r, opt, i) {
        var mark = el("input", "ed-mark");
        mark.type = multi ? "checkbox" : "radio";
        mark.name = name;
        mark.checked = multi ? picked().indexOf(i) !== -1 : ex.answer === i;
        mark.setAttribute("data-f", "answer." + i);
        mark.setAttribute("aria-label", "Bonne réponse " + (i + 1));
        mark.title = "Bonne réponse";
        mark.addEventListener("change", function () {
          if (!Array.isArray(ex.answer)) ex.answer = i;
          else if (mark.checked) ex.answer = picked().concat([i]).sort(function (a, b) { return a - b; });
          else ex.answer = picked().filter(function (a) { return a !== i; });
          edited();
        });
        r.appendChild(mark);
        rowText(r, "options." + i, opt, function (v) { ex.options[i] = v; edited(); }, "Réponse " + (i + 1));
      }
    });
    if (multi) {
      checkbox(box, { label: "Annoncer le nombre de bonnes réponses (« Choisis 2 réponses »)", f: "showCount", checked: ex.showCount !== false,
        help: "Sinon : « Plusieurs réponses possibles » (plus difficile ; une seule bonne réponse est alors permise).",
        onChange: function (on) { if (on) delete ex.showCount; else ex.showCount = false; edited(); } });
    }
  }
  draw();
}
