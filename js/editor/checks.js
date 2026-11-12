// @ts-check
/* Révision Quest — course editor: live checks. The whole pack goes through the shared pack rules (js/core/pack-rules.js)
   on every change; each message is shown under the field it is about (data-check of the fields), or at the top of
   the form, and counted on its node of the plan. Typing is never blocked. */
import { el } from "./dom.js";
import { buildReport, exportPack } from "./model/export.js";

/** Checks of the draft: the pack rules plus what only the editor knows (level and subject of the catalogue,
    an id already used by an official chapter). @param {EdDraft} d @returns {EdReport} */
export function runChecks(d) {
  /** @type {EdMessage[]} */
  var extra = [];
  /** @param {string} msg */
  var err = function (msg) { extra.push({ level: "err", msg: msg, key: "course" }); };
  if (!d.level) err("Choisis le niveau (la classe) du cours.");
  else if (!Packs.level(d.level)) err("niveau « " + d.level + " » inconnu du catalogue : choisis-en un dans la liste.");
  if (!d.subject) err("Choisis la matière du cours.");
  else if (!Packs.subject(d.subject)) err("matière « " + d.subject + " » inconnue du catalogue : choisis-en une dans la liste.");
  if (!d.slug) err("Donne un identifiant court au cours (il se remplit d'après le titre).");
  var pack = exportPack(d);
  var complete = !!(d.level && d.subject && d.slug);
  var taken = complete ? Packs.get(pack.path) : null;
  if (taken && !taken.mine) {
    extra.push({ level: "warn", msg: "identifiant " + pack.path + " déjà pris par un chapitre officiel : choisis-en un autre.", key: "course" });
  }
  return buildReport(pack, /** @type {PackRulesApi} */ (window.PackRules), { extra: extra, path: complete });
}

/** The most frequent messages of the rules, said for the author (the others stay as the rules write them).
    @type {Array<[RegExp, string]>} */
var FRIENDLY = [
  [/^meta\.title manquant$/, "Donne un titre au cours."],
  [/^meta\.description manquant$/, "Écris une phrase de description pour le catalogue."],
  [/^meta\.icon manquant$/, "Choisis une icône (un emoji)."],
  [/^title manquant$/, "Donne un titre au monde."],
  [/^prompt \(consigne\) manquant$/, "Écris la consigne."],
  [/^explanation manquante$/, "Écris l'explication affichée après la réponse."],
  [/^exercises doit être un tableau non vide$/, "Ajoute au moins un exercice à ce monde."],
  [/^pas de carte leçon/, "Écris la leçon de ce monde."],
  [/^lesson\.points vide$/, "Écris au moins un point de leçon."],
  [/^options doit contenir au moins 2 choix$/, "Écris au moins 2 réponses proposées."],
  [/^sentence doit contenir exactement un trou/, "La phrase doit contenir exactement un trou ___."],
  [/^answers doit contenir au moins une réponse$/, "Écris au moins une réponse acceptée."],
  [/^words doit contenir au moins 2 mots$/, "Écris la phrase dans le bon ordre (au moins 2 étiquettes)."],
  [/^tokens doit contenir au moins 2 mots$/, "Écris la phrase qui contient une erreur."],
  [/^wrongIndex -1 /, "Touche le mot faux dans la phrase."],
  [/^correction manquante$/, "Écris la correction."],
  [/^modelAnswer manquant$/, "Écris la réponse modèle."]
];

/** A message without the « monde 2 (titre) ex 3 [mcq] » part (the form already says where it is).
    @param {EdMessage} m @param {Pack} pack */
export function shortMsg(m, pack) {
  var s = m.msg;
  var e = /^e:(\d+):(\d+)$/.exec(m.key);
  if (e) {
    var w = pack.worlds[+e[1]];
    var prefix = "monde " + (+e[1] + 1) + " (" + String((w && w.title) || "") + ") ex " + (+e[2] + 1);
    if (s.indexOf(prefix) === 0) s = s.slice(prefix.length).replace(/^ \[[^\]]*\]/, "");
  } else {
    s = s.replace(/^monde \d+( leçon)?/, "").replace(/^(documents|letters)\[\d+\]/, "");
  }
  return s.replace(/^\s*:\s*/, "").trim();
}

/** The short message as shown to the author. @param {string} s */
export function friendly(s) {
  for (var i = 0; i < FRIENDLY.length; i++) if (FRIENDLY[i][0].test(s)) return FRIENDLY[i][1];
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Messages of a node, under their field (first field whose data-check matches) or in the box at the top of the form.
    @param {HTMLElement} root the form @param {EdReport} report @param {string} key @param {Pack} pack */
export function showMessages(root, report, key, pack) {
  Array.prototype.forEach.call(root.querySelectorAll(".ed-msg"), function (/** @type {HTMLElement} */ x) { x.remove(); });
  var top = root.querySelector(".ed-msgs");
  var fields = /** @type {HTMLElement[]} */ (Array.prototype.slice.call(root.querySelectorAll("[data-check]")));
  var node = report.byKey[key];
  (node ? node.msgs : []).forEach(function (m) {
    var text = shortMsg(m, pack);
    var p = el("p", "ed-msg " + m.level, (m.level === "err" ? "⛔ " : "💡 ") + friendly(text));
    var field = fields.filter(function (f) {
      try { return new RegExp(/** @type {string} */ (f.getAttribute("data-check")), "i").test(text); } catch (x) { return false; }
    })[0];
    if (field) field.appendChild(p);
    else if (top) top.appendChild(p);
  });
}
