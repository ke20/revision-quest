// @ts-check
/* Révision Quest — course editor: what must not be in a course proposed to everyone. Every text of the course is
   searched for an e-mail address, a phone number or a web link (a child's or a teacher's name cannot be found by a
   program: the author ticks a box for that). Pure functions, tested without a browser. */

/** @typedef {{ kind: "email" | "phone" | "link", found: string, where: string }} EdContact */

var EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
// French numbers (06 12 34 56 78, 06.12.34.56.78, +33 6 12 34 56 78) and other international ones (+44 20 7946 0958)
var PHONE = /(?:\+\d{2,3}[\s.-]?\(?0?\)?[\s.-]?[1-9](?:[\s.-]?\d{2}){4}|\b0[1-9](?:[\s.-]?\d{2}){4}\b|\+\d{1,3}(?:[\s.-]?\d{2,4}){3,5}\b)/g;
// http(s)://…, www.…, or a bare address such as monecole.fr / site.com/page (common endings only: a sentence like
// « 3.5 » or « p.ex » is not a link)
var LINK = /\b(?:https?:\/\/[^\s<>"]+|www\.[^\s<>"]+|[A-Za-z0-9-]{2,}(?:\.[A-Za-z0-9-]{2,})*\.(?:fr|com|net|org|eu|be|ch|ca|io|info|edu|gouv\.fr|ac-[a-z-]+\.fr)(?:\/[^\s<>"]*)?)\b/gi;

/** Every text of the course with where it is: [where, text]. @param {any} v @param {string} where @param {Array<[string, string]>} out */
function texts(v, where, out) {
  if (typeof v === "string") out.push([where, v]);
  else if (Array.isArray(v)) v.forEach(function (x, i) { texts(x, where + "[" + i + "]", out); });
  else if (v && typeof v === "object") Object.keys(v).forEach(function (k) { texts(v[k], where ? where + "." + k : k, out); });
  return out;
}

/** "worlds[1].exercises[2].prompt" → "monde 2, exercice 3"; "meta.title" → "infos du cours". @param {string} where */
export function placeOf(where) {
  var w = /^worlds\[(\d+)\]/.exec(where), e = /exercises\[(\d+)\]/.exec(where), d = /^documents\[(\d+)\]/.exec(where);
  if (d) return "texte à lire " + (+d[1] + 1);
  if (!w) return "infos du cours";
  return "monde " + (+w[1] + 1) + (e ? ", exercice " + (+e[1] + 1) : /\.lesson/.test(where) ? ", leçon" : "");
}

/** E-mail addresses, phone numbers and web links in the texts of a course (meta.basedOn, path, ids and colours are
    not texts an author writes: skipped). @param {any} pack @returns {EdContact[]} */
export function findContacts(pack) {
  /** @type {EdContact[]} */
  var found = [];
  texts(pack, "", []).forEach(function (t) {
    var where = t[0], s = t[1];
    if (/^(path|lang|meta\.(basedOn|license|color))$/.test(where) || /\.(id|cat|type|color|docId)$/.test(where)) return;
    var emails = s.match(EMAIL) || [];
    emails.forEach(function (m) { found.push({ kind: "email", found: m, where: placeOf(where) }); });
    var rest = s.replace(EMAIL, " ");
    (rest.match(PHONE) || []).forEach(function (m) { found.push({ kind: "phone", found: m.trim(), where: placeOf(where) }); });
    (rest.match(LINK) || []).forEach(function (m) { found.push({ kind: "link", found: m, where: placeOf(where) }); });
  });
  return found;
}
