// @ts-check
/* Révision Quest — course editor: sort (boxes = categories, cards = items, each card goes in one box). */
import { el } from "../../dom.js";
import { nextId } from "../../model/templates.js";
import { edited } from "../../state.js";
import { rows, rowText } from "../fields.js";

/** @param {HTMLElement} root @param {any} ex */
export function sortForm(root, ex) {
  if (!Array.isArray(ex.categories)) ex.categories = [];
  if (!Array.isArray(ex.items)) ex.items = [];
  var cats = /** @type {Array<{ id: string, label: string }>} */ (ex.categories);
  var items = /** @type {Array<{ text: string, cat: string }>} */ (ex.items);

  rows(root, {
    label: "Boîtes (2 à 4)", f: "categories", list: cats, min: 2, max: 4, addLabel: "＋ Ajouter une boîte", check: "categor|catégorie",
    add: function () { return { id: nextId(cats, "c"), label: "" }; },
    remove: function (i) { // the cards of a removed box go to the first other box
      var other = cats.filter(function (c, j) { return j !== i; })[0];
      items.forEach(function (it) { if (it.cat === cats[i].id && other) it.cat = other.id; });
    },
    onChange: function () { itemRows.draw(); edited(); },
    row: function (r, cat, i) {
      rowText(r, "categories." + i, cat.label, function (v) { cat.label = v; refreshNames(); edited(); }, "Boîte " + (i + 1), "👑 Avant");
    }
  });

  var itemRows = rows(root, {
    label: "Cartes à ranger (4 à 8)", f: "items", list: items, min: 2, max: 8, addLabel: "＋ Ajouter une carte", check: "^items",
    add: function () { return { text: "", cat: cats.length ? cats[0].id : "" }; },
    onChange: edited,
    row: function (r, it, i) {
      rowText(r, "items." + i, it.text, function (v) { it.text = v; edited(); }, "Carte " + (i + 1));
      var s = el("select", "ed-input ed-cat");
      s.setAttribute("data-f", "items." + i + ".cat");
      s.setAttribute("aria-label", "Boîte de la carte " + (i + 1));
      cats.forEach(function (c, j) {
        var op = el("option", "", catName(c, j));
        op.value = c.id;
        s.appendChild(op);
      });
      if (!cats.some(function (c) { return c.id === it.cat; })) {
        var lost = el("option", "", "— boîte inconnue —");
        lost.value = String(it.cat);
        s.appendChild(lost);
      }
      s.value = String(it.cat);
      s.addEventListener("change", function () { it.cat = s.value; edited(); });
      r.appendChild(s);
    }
  });

  /** @param {{ label: string }} c @param {number} j */
  function catName(c, j) { return "→ " + (String(c.label || "").trim() || "Boîte " + (j + 1)); }
  /** Box names in the card lists follow the labels being typed (no redraw: the focus stays). */
  function refreshNames() {
    Array.prototype.forEach.call(root.querySelectorAll("select.ed-cat"), function (/** @type {HTMLSelectElement} */ s) {
      Array.prototype.forEach.call(s.options, function (/** @type {HTMLOptionElement} */ op) {
        var j = cats.map(function (c) { return c.id; }).indexOf(op.value);
        if (j !== -1) op.textContent = catName(cats[j], j);
      });
    });
  }
}
