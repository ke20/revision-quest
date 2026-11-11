// @ts-check
/* Révision Quest — course editor: match (pairs to link, left ↔ right). */
import { el } from "../../dom.js";
import { edited } from "../../state.js";
import { rows, rowText } from "../fields.js";

/** @param {HTMLElement} root @param {any} ex */
export function matchForm(root, ex) {
  if (!Array.isArray(ex.pairs)) ex.pairs = [];
  var pairs = /** @type {Array<{ left: string, right: string }>} */ (ex.pairs);
  rows(root, {
    label: "Paires à relier (3 à 6)", f: "pairs", list: pairs, min: 2, max: 6, addLabel: "＋ Ajouter une paire", check: "^pairs|left|right",
    help: "Texte simple (pas de [[…]]) ; deux paires ne peuvent pas avoir le même côté gauche ou droit.",
    add: function () { return { left: "", right: "" }; },
    onChange: edited,
    row: function (r, p, i) {
      rowText(r, "pairs." + i + ".left", p.left, function (v) { p.left = v; edited(); }, "Gauche " + (i + 1), "monarchie");
      r.appendChild(el("span", "ed-arrow", "↔"));
      rowText(r, "pairs." + i + ".right", p.right, function (v) { p.right = v; edited(); }, "Droite " + (i + 1), "un roi gouverne");
    }
  });
}
