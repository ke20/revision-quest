// @ts-check
/* Révision Quest — course editor: plain text helpers (no DOM, no browser global: unit-tested in Node). */

/** Course id from a title: lower case, no accents, digits and dashes only (packs/README.md § 0), 60 characters max.
    @param {unknown} text @param {number} [max] @returns {string} */
export function slugify(text, max) {
  var s = String(text == null ? "" : text).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return s.slice(0, max || 60).replace(/-+$/, "");
}

var LEAD = /^([«“¿¡]+)(.+)$/;
var TRAIL = /^(.+?)([.,;:!?…»”]+)$/;

/** A sentence → its labels, split like the packs do: at spaces, punctuation at the end (or « at the start) of a
    word on its own label. Apostrophes, hyphens and decimal commas stay inside the word (« l'arbre », « 0,75 »).
    @param {unknown} sentence @returns {string[]} */
export function splitWords(sentence) {
  /** @type {string[]} */
  var out = [];
  String(sentence == null ? "" : sentence).split(/\s+/).forEach(function (chunk) {
    if (!chunk) return;
    var lead = LEAD.exec(chunk);
    if (lead) { out.push(lead[1]); chunk = lead[2]; }
    var trail = TRAIL.exec(chunk);
    if (trail) out.push(trail[1], trail[2]);
    else out.push(chunk);
  });
  return out;
}

/** Labels back to a sentence the author can edit (splitWords gives the same labels back). @param {unknown} words */
export function joinWords(words) {
  return Array.isArray(words) ? words.map(String).join(" ") : "";
}

/** A short one-line excerpt (plan labels). @param {unknown} text @param {number} max */
export function excerpt(text, max) {
  var s = String(text == null ? "" : text).replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, "$1").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}
