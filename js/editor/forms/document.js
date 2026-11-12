// @ts-check
/* Révision Quest — course editor: the form of a text to read (a pack document), shown over the questions that use it
   or, when long, on a reading screen before them. */
import { el } from "../dom.js";
import { docsOf, docUses } from "../model/draft.js";
import { edited, store } from "../state.js";
import { checkbox, RICH_HELP, text } from "./fields.js";

/** @param {HTMLElement} root @param {number} di */
export function documentForm(root, di) {
  var pack = store.draft.pack;
  var doc = /** @type {any} */ (docsOf(pack)[di]);
  root.appendChild(el("h2", "ed-form-title", "📄 Texte à lire " + (di + 1)));
  root.appendChild(el("p", "ed-help", "Un texte (extrait, lettre, source…) affiché avec les questions qui le choisissent dans « Texte à lire au-dessus de la question »."));
  var box = el("div", "ed-grid");
  root.appendChild(box);
  text(box, { label: "Titre", f: "doc.title", value: doc.title, maxLength: 80, check: "title",
    placeholder: "Le serment du Jeu de paume", onInput: function (v) { doc.title = v; edited(); } });
  text(box, { label: "Auteur ou source (facultatif)", f: "doc.from", value: doc.from, maxLength: 80,
    help: "Pour une lettre : qui l'écrit. Sans titre, l'en-tête devient « Lettre de … ».",
    onInput: function (v) { doc.from = v; edited(); } });
  text(box, { label: "Texte", f: "doc.text", value: doc.text, multiline: true, rows: 8, check: "text|texte",
    help: RICH_HELP + " Entrée = nouvelle ligne · une ligne qui commence par « - » = une puce.",
    onInput: function (v) { doc.text = v; edited(); } });
  checkbox(box, { label: "Texte long : l'enfant le lit d'abord seul, sur un écran de lecture", f: "doc.screen", checked: doc.screen === true,
    help: "Conseillé au-delà de 3 phrases. Chaque question propose ensuite « 📖 Retour au texte ».",
    onChange: function (on) { doc.screen = on; edited(); } });
  var n = docUses(pack, doc.id);
  root.appendChild(el("p", "ed-help", n ? "Affiché par " + n + " exercice" + (n > 1 ? "s" : "") + "." :
    "Aucun exercice ne l'affiche encore : choisis-le dans le formulaire d'un exercice."));
}
