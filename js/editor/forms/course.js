// @ts-check
/* Révision Quest — course editor: the course form (catalogue card, level, subject, language, id, author). */
import { button, el } from "../dom.js";
import { DEFAULT_COLOR, setTitle, syncPath } from "../model/draft.js";
import { slugify } from "../model/text.js";
import { edited, store } from "../state.js";
import { emojiPicks, select, text } from "./fields.js";

export var LANGS = /** @type {Array<[string, string]>} */ ([["fr", "Français"], ["en", "Anglais (boutons en anglais + aide en français)"], ["es", "Espagnol (boutons en espagnol + aide en français)"]]);

/** @param {HTMLElement} root */
export function courseForm(root) {
  var d = store.draft, m = d.pack.meta;
  root.appendChild(el("h2", "ed-form-title", "📘 Le cours"));
  var card = el("div", "ed-grid");
  root.appendChild(card);
  var pathLine = el("p", "ed-help ed-path");
  /** @type {HTMLInputElement | HTMLTextAreaElement} */
  var slugInput;
  function refreshPath() {
    syncPath(d);
    pathLine.textContent = "Identifiant complet : " + (d.level || "<niveau>") + "/" + (d.subject || "<matière>") + "/" + (d.slug || "<cours>") +
      (d.locked ? " (fixé : déjà téléchargé ou ouvert depuis un fichier)" : "");
  }

  text(card, { label: "Titre du cours", f: "title", value: m.title, maxLength: 80, check: "^meta\\.title",
    placeholder: "Les fractions", onInput: function (v) {
      setTitle(d, v);
      if (slugInput && slugInput !== document.activeElement) slugInput.value = d.slug;
      refreshPath(); edited();
    } });
  text(card, { label: "Description (une phrase pour le catalogue)", f: "description", value: m.description, multiline: true, maxLength: 240,
    check: "^meta\\.description", placeholder: "Moitiés, tiers, quarts : lire, écrire et comparer.",
    onInput: function (v) { m.description = v; edited(); } });

  var look = el("div", "ed-inline");
  card.appendChild(look);
  var icon = text(look, { label: "Icône (un emoji)", f: "icon", value: m.icon, maxLength: 16, check: "^meta\\.icon",
    onInput: function (v) { m.icon = v; edited(); } });
  colorField(look, "Couleur", "color", m.color, DEFAULT_COLOR, "^meta\\.color", function (v) { m.color = v; edited(); });
  emojiPicks(card, icon, function (ic) { m.icon = ic; edited(); });

  var where = el("div", "ed-inline");
  card.appendChild(where);
  select(where, { label: "Niveau (classe)", f: "level", value: d.level, placeholder: "— choisir —", check: "niveau",
    options: Packs.levels().map(function (l) { return /** @type {[string, string]} */ ([l.id, l.label]); }),
    onChange: function (v) { d.level = v; refreshPath(); edited(); } });
  select(where, { label: "Matière", f: "subject", value: d.subject, placeholder: "— choisir —", check: "matière",
    options: Packs.subjects().map(function (s) { return /** @type {[string, string]} */ ([s.id, (s.icon ? s.icon + " " : "") + s.label]); }),
    onChange: function (v) { d.subject = v; refreshPath(); edited(); } });
  select(card, { label: "Langue des exercices", f: "lang", value: d.pack.lang, options: LANGS, check: "^lang",
    help: "Langue des boutons et des petites aides autour des exercices (pas du contenu, écrit par toi).",
    onChange: function (v) { d.pack.lang = /** @type {Pack["lang"]} */ (v); edited(); } });

  slugInput = text(card, { label: "Identifiant court du cours", f: "slug", value: d.slug, maxLength: 60, check: "identifiant|^path",
    help: "Minuscules, chiffres et tirets. Rempli d'après le titre ; il ne change plus une fois le fichier téléchargé (la progression des enfants y est rattachée).",
    onInput: function (v) {
      d.slug = v.toLowerCase().replace(/[^a-z0-9-]/g, "");
      d.autoSlug = false;
      refreshPath(); edited();
    },
    onChange: function (v, input) { d.slug = slugify(v); input.value = d.slug; refreshPath(); edited(); } });
  slugInput.disabled = d.locked;
  var slugField = /** @type {HTMLElement} */ (slugInput.parentElement);
  slugField.appendChild(pathLine);
  if (d.locked) {
    slugField.appendChild(button("btn btn-ghost btn-small", "🔓 Changer quand même l'identifiant", function () {
      d.locked = false;
      slugInput.disabled = false;
      slugInput.focus();
      refreshPath(); edited();
    }));
  }
  refreshPath();

  text(card, { label: "Créé par (facultatif, un pseudonyme suffit)", f: "author", value: m.author || "", maxLength: 40, check: "^meta\\.author",
    onInput: function (v) { m.author = v; edited(); } });

  if (m.basedOn) root.appendChild(el("p", "ed-note", "📋 Copie privée du chapitre officiel « " + m.basedOn + " » : elle reste pour ton usage personnel."));
}

/** A colour picker (#RRGGBB; #RGB from a file is widened). @param {HTMLElement} parent @param {string} label @param {string} f
    @param {unknown} value @param {string} dflt @param {string} check @param {(v: string) => void} onInput */
export function colorField(parent, label, f, value, dflt, check, onInput) {
  var w = el("div", "ed-field");
  w.setAttribute("data-check", check);
  var lab = el("label", "ed-label", label);
  var c = el("input", "ed-color");
  c.type = "color";
  var v = typeof value === "string" ? value : "";
  if (/^#[0-9a-fA-F]{3}$/.test(v)) v = "#" + v[1] + v[1] + v[2] + v[2] + v[3] + v[3];
  c.value = /^#[0-9a-fA-F]{6}$/.test(v) ? v : dflt;
  c.id = "ed-color-" + f;
  lab.htmlFor = c.id;
  c.setAttribute("data-f", f);
  c.addEventListener("input", function () { onInput(c.value.toUpperCase()); });
  w.appendChild(lab);
  w.appendChild(c);
  parent.appendChild(w);
  return c;
}
