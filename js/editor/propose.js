// @ts-check
/* Révision Quest — course editor: « 🌍 Proposer à tous ». The site makes no network call: the course is downloaded
   in the strict format, then the adult opens GitHub's « Upload files » page of the right folder (GitHub makes the
   fork and the Pull Request for a contributor without rights) and follows a short guide.
   Before that: the course has no error, is not a copy of an official chapter, has no e-mail / phone / link in its
   texts, and the 4 boxes are ticked (no names, no copied text, answers checked, licence CC BY-SA 4.0). */
import { button, el, modal, toast } from "./dom.js";
import { runChecks } from "./checks.js";
import { downloadFile, fileName, HEADER } from "./io.js";
import { exportPack } from "./model/export.js";
import { findContacts } from "./model/privacy.js";
import { restructured, saveNow, store } from "./state.js";

export var LICENSE = "CC-BY-SA-4.0";
export var LICENSE_URL = "https://creativecommons.org/licenses/by-sa/4.0/deed.fr";
var BRANCH = "main";
var SOURCE_RE = /^https:\/\/github\.com\/[A-Za-z0-9-]{1,39}\/[A-Za-z0-9._-]{1,100}$/; // same rule as the game's « Code source » link

/** The « Upload files » page of the folder of the course: packs/<niveau>/<matiere>/ when it exists, packs/ otherwise
    (GitHub shows no page for a missing folder; the project lead moves the file). "" without a GitHub address.
    @param {string} level @param {string} subject */
export function uploadUrl(level, subject) {
  var src = window.APP_CONFIG && window.APP_CONFIG.sourceUrl;
  if (!SOURCE_RE.test(String(src || ""))) return "";
  var folder = Packs.units().some(function (u) { return u.level === level && u.subject === subject; }) ? "packs/" + level + "/" + subject : "packs";
  return src + "/upload/" + BRANCH + "/" + folder;
}

/** What blocks the proposal (in French, for the author), or [] when the course can go. @param {EdDraft} d @returns {string[]} */
export function blockers(d) {
  var report = runChecks(d);
  var pack = exportPack(d);
  /** @type {string[]} */
  var out = [];
  if (pack.meta.basedOn) out.push("Ce cours est une copie du chapitre officiel « " + pack.meta.basedOn + " » : il reste pour ton usage personnel (les chapitres officiels ne sont pas sous licence libre).");
  if (report.errors) out.push("Corrige d'abord " + (report.errors > 1 ? "les " + report.errors + " erreurs" : "l'erreur") + " du cours.");
  var taken = d.level && d.subject && d.slug ? Packs.get(pack.path) : null;
  if (taken && !taken.mine) out.push("L'identifiant « " + pack.path + " » est déjà pris par un chapitre officiel : choisis-en un autre.");
  findContacts(pack).forEach(function (c) {
    var what = c.kind === "email" ? "Adresse e-mail" : c.kind === "phone" ? "Numéro de téléphone" : "Lien web";
    out.push(what + " « " + c.found + " » (" + c.where + ") : retire-le, un cours public ne doit pas en contenir.");
  });
  return out;
}

var BOXES = [
  ["names", "Aucun prénom d'enfant, aucun nom d'enseignant ni d'école dans le cours."],
  ["copy", "Aucun texte recopié d'un livre, d'un manuel ou d'un site (sauf les textes libres de droits, comme les auteurs morts depuis plus de 70 ans)."],
  ["checked", "J'ai vérifié les réponses et joué le cours en entier (▶ Essayer)."],
  ["license", ""] // label with a link: built below
];

export function proposeCourse() {
  var d = store.draft;
  var url = uploadUrl(d.level, d.subject);
  if (!url) { toast("😕 L'adresse GitHub du projet n'est pas configurée (APP_CONFIG.sourceUrl)."); return; }
  var stop = blockers(d);
  if (stop.length) {
    modal(function (box, close) {
      box.appendChild(el("h3", "", "🌍 Pas encore prêt à être proposé"));
      var ul = el("ul", "ed-modal-list");
      stop.slice(0, 10).forEach(function (m) { ul.appendChild(el("li", "", m)); });
      if (stop.length > 10) ul.appendChild(el("li", "", "… et " + (stop.length - 10) + " autre(s)"));
      box.appendChild(ul);
      var row = el("div", "modal-actions");
      var ok = button("btn btn-primary", "OK", close);
      ok.setAttribute("data-act", "yes");
      row.appendChild(ok);
      box.appendChild(row);
    });
    return;
  }
  modal(function (box, close) {
    box.classList.add("ed-propose");
    box.appendChild(el("h3", "", "🌍 Proposer ce cours à tous"));
    box.appendChild(el("p", "", "Le responsable du projet relit le cours. S'il l'accepte, tous les joueurs le trouveront dans le jeu."));
    var author = /** @type {HTMLInputElement} */ (el("input", "ed-input"));
    author.maxLength = 40;
    author.value = d.pack.meta.author || "";
    author.placeholder = "Un pseudonyme suffit (facultatif)";
    author.setAttribute("data-f", "propose-author");
    var lab = el("label", "ed-field");
    lab.appendChild(el("span", "ed-label", "Créé par"));
    lab.appendChild(author);
    box.appendChild(lab);
    var list = el("div", "ed-checks");
    /** @type {HTMLInputElement[]} */
    var inputs = [];
    BOXES.forEach(function (b) {
      var row = el("label", "ed-check");
      var c = /** @type {HTMLInputElement} */ (el("input"));
      c.type = "checkbox";
      c.setAttribute("data-f", "ok-" + b[0]);
      row.appendChild(c);
      var span = el("span", "", b[1]);
      if (b[0] === "license") {
        span.appendChild(document.createTextNode("J'accepte que ce cours soit publié sous licence "));
        var a = /** @type {HTMLAnchorElement} */ (el("a", "", "CC BY-SA 4.0"));
        a.href = LICENSE_URL;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        span.appendChild(a);
        span.appendChild(document.createTextNode(" : chacun peut le copier, le modifier et le partager, même pour un usage commercial, en citant le cours et sous la même licence."));
      }
      row.appendChild(span);
      list.appendChild(row);
      inputs.push(c);
    });
    box.appendChild(list);
    var actions = el("div", "modal-actions");
    actions.appendChild(button("btn btn-ghost", "Annuler", close));
    var go = button("btn btn-primary", "⬇️ Télécharger et continuer", function () {
      var name = author.value.replace(/\s+/g, " ").trim().slice(0, 40);
      var m = d.pack.meta;
      if (name) m.author = name; else delete m.author;
      m.license = LICENSE;
      d.locked = true; // the id is now in a file: it does not follow the title any more
      restructured(); // the course form shows the new « Créé par »
      saveNow();
      var pack = exportPack(d), file = fileName();
      downloadFile(file, /** @type {PackRulesApi} */ (window.PackRules).formatStrict(pack, HEADER), "text/javascript");
      // kept in « Mes cours » with its hash: once the same course is official, this copy hides itself
      if (window.MyCourses) window.MyCourses.save(pack, { sent: true });
      close();
      guide(file, url, String(m.title || ""));
    });
    go.setAttribute("data-act", "yes");
    actions.appendChild(go);
    box.appendChild(actions);
    function refresh() { go.disabled = !inputs.every(function (c) { return c.checked; }); }
    inputs.forEach(function (c) { c.addEventListener("change", refresh); });
    refresh();
  });
}

/** The 4 steps on GitHub. @param {string} file @param {string} url @param {string} title */
function guide(file, url, title) {
  modal(function (box, close) {
    box.classList.add("ed-propose");
    box.appendChild(el("h3", "", "🌍 Envoyer le cours sur GitHub"));
    var ol = el("ol", "ed-steps");
    [
      "Le fichier « " + file + " » est téléchargé (dossier Téléchargements).",
      "Ouvre la page GitHub ci-dessous et connecte-toi (le compte est gratuit).",
      "Glisse le fichier « " + file + " » dans la page. Sous « Commit changes », écris : Nouveau cours : " + title + ".",
      "Clique « Propose changes », puis « Create pull request ». C'est envoyé ! Le responsable du projet te répondra sur GitHub."
    ].forEach(function (s) { ol.appendChild(el("li", "", s)); });
    box.appendChild(ol);
    var a = /** @type {HTMLAnchorElement} */ (el("a", "btn btn-primary ed-github", "Ouvrir la page GitHub ↗"));
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("data-act", "github");
    box.appendChild(a);
    box.appendChild(el("p", "ed-help", "Pas de compte GitHub ? Garde le fichier et contacte le responsable du projet. Le cours est aussi dans « ✏️ Mes cours » sur cet appareil : tu peux déjà y jouer."));
    var row = el("div", "modal-actions");
    var ok = button("btn btn-ghost", "Fermer", close);
    ok.setAttribute("data-act", "close");
    row.appendChild(ok);
    box.appendChild(row);
  });
}
