// @ts-check
/* Révision Quest — course editor: the form of a world and the form of its lesson card. */
import { el } from "../dom.js";
import { DEFAULT_COLOR } from "../model/draft.js";
import { edited, store } from "../state.js";
import { colorField } from "./course.js";
import { emojiPicks, keptNote, LIST_HELP, RICH_HELP, text, textList } from "./fields.js";

/** @param {HTMLElement} root @param {number} wi */
export function worldForm(root, wi) {
  var w = /** @type {any} */ (store.draft.pack.worlds[wi]);
  root.appendChild(el("h2", "ed-form-title", "🌍 Monde " + (wi + 1)));
  root.appendChild(el("p", "ed-help", "Un monde = une notion, avec sa leçon et ses exercices. Les mondes vont du plus facile au plus difficile ; le dernier est le « boss » du chapitre."));
  var box = el("div", "ed-grid");
  root.appendChild(box);
  text(box, { label: "Titre du monde", f: "w.title", value: w.title, maxLength: 60, check: "^title",
    onInput: function (v) { w.title = v; edited(); } });
  text(box, { label: "Sous-titre (facultatif)", f: "w.subtitle", value: w.subtitle, maxLength: 80, check: "^subtitle",
    onInput: function (v) { w.subtitle = v; edited(); } });
  if (store.draft.pack.lang !== "fr" || w.subtitleFr) {
    text(box, { label: "Aide en français sous le sous-titre (facultatif)", f: "w.subtitleFr", value: w.subtitleFr, maxLength: 80,
      onInput: function (v) { w.subtitleFr = v; edited(); } });
  }
  var look = el("div", "ed-inline");
  box.appendChild(look);
  var icon = text(look, { label: "Icône (un emoji)", f: "w.icon", value: w.icon, maxLength: 16, check: "^icon",
    onInput: function (v) { w.icon = v; edited(); } });
  colorField(look, "Couleur", "w.color", w.color, DEFAULT_COLOR, "^color", function (v) { w.color = v; edited(); });
  emojiPicks(box, icon, function (ic) { w.icon = ic; edited(); });
  root.appendChild(el("p", "ed-help", "Numéro interne du monde : " + String(w.id) + " (la progression des enfants y est rattachée)."));
}

/** @param {HTMLElement} root @param {number} wi */
export function lessonForm(root, wi) {
  var w = /** @type {any} */ (store.draft.pack.worlds[wi]);
  if (!w.lesson || typeof w.lesson !== "object") w.lesson = { title: "", points: [""], examples: [""] };
  var L = w.lesson;
  if (!Array.isArray(L.points)) L.points = [];
  if (!Array.isArray(L.examples)) L.examples = [];
  root.appendChild(el("h2", "ed-form-title", "📖 Leçon du monde " + (wi + 1)));
  root.appendChild(el("p", "ed-help", "La carte affichée avant les exercices : 2 à 4 points, 1 à 3 exemples. Elle se lit en 30 secondes."));
  var box = el("div", "ed-grid");
  root.appendChild(box);
  text(box, { label: "Titre de la leçon", f: "l.title", value: L.title, help: RICH_HELP, onInput: function (v) { L.title = v; edited(); } });
  textList(box, { label: "Points à retenir", f: "l.points", list: L.points, max: 8, addLabel: "＋ Ajouter un point", check: "points",
    help: LIST_HELP, multiline: true, placeholder: "La Révolution commence en **1789**.", onChange: edited });
  textList(box, { label: "Exemples", f: "l.examples", list: L.examples, max: 6, addLabel: "＋ Ajouter un exemple", check: "exemple",
    help: LIST_HELP, multiline: true, onChange: edited });
  if (Array.isArray(L.figures) && L.figures.length) keptNote(root, L.figures.length + " figure(s) de géométrie");
  if (Array.isArray(L.tables) && L.tables.length) keptNote(root, L.tables.length + " tableau(x)");
}
