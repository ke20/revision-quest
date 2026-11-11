// @ts-check
/* Révision Quest — course editor: start a course (new, copy of an official chapter, open a file) as a new draft, and download it.
   A file is only read as text and parsed by PackRules.parseStrict (JSON.parse): it is never executed. */
import { button, confirmBox, el, modal, toast } from "./dom.js";
import { runChecks } from "./checks.js";
import { clone, draftFromPack, isBlank, newDraft, syncPath } from "./model/draft.js";
import { exportPack } from "./model/export.js";
import { slugify } from "./model/text.js";
import { addDraft, countDrafts, MAX_DRAFTS, restructured, saveNow, store } from "./state.js";

var HEADER = "Révision Quest — cours écrit avec l'éditeur (editeur.html). Format strict : window.registerPack( + JSON pur + );";

/** @returns {PackRulesApi} */
function rules() { return /** @type {PackRulesApi} */ (window.PackRules); }

/** Runs then() when another draft can be started: the current one stays in « Mes brouillons ».
    @param {() => void} then */
function adding(then) {
  if (!isBlank(store.draft) && countDrafts() >= MAX_DRAFTS) {
    toast("😕 " + MAX_DRAFTS + " brouillons au maximum : supprime-en un dans « Mes brouillons » (télécharge-le d'abord si tu veux le garder).");
    return;
  }
  then();
}

export function newCourse() {
  adding(function () { addDraft(newDraft()); toast("📄 Nouveau cours (les autres restent dans « Mes brouillons »)"); });
}

/** Pick an official chapter (a chapter by groups gives one choice per group), load it, keep a private copy:
    meta.basedOn = the official chapter, a new title and id. */
export function duplicateOfficial() {
  adding(function () {
    modal(function (box, close) {
      box.appendChild(el("h3", "", "📚 Dupliquer un chapitre officiel"));
      box.appendChild(el("p", "", "La copie est pour ton usage personnel (avec tes enfants, ta classe) : elle ne pourra pas être proposée à tous."));
      var s = el("select", "ed-input");
      s.setAttribute("data-f", "official");
      s.setAttribute("aria-label", "Chapitre officiel");
      Packs.levels().forEach(function (l) {
        var units = Packs.units().filter(function (u) { return u.level === l.id; });
        if (!units.length) return;
        var g = el("optgroup");
        g.label = l.label;
        units.forEach(function (u) {
          var subject = Packs.subject(u.subject);
          var op = el("option", "", (subject ? subject.label + " · " : "") + u.title);
          op.value = u.id;
          g.appendChild(op);
        });
        s.appendChild(g);
      });
      box.appendChild(s);
      var row = el("div", "modal-actions");
      row.appendChild(button("btn btn-ghost", "Annuler", close));
      var go = button("btn btn-primary", "Dupliquer", function () {
        go.disabled = true;
        loadOfficial(s.value, function () { close(); });
      });
      go.setAttribute("data-act", "yes");
      row.appendChild(go);
      box.appendChild(row);
    });
  });
}

/** @param {string} id @param {() => void} done */
function loadOfficial(id, done) {
  const entry = Packs.get(id);
  if (!entry) { done(); return; }
  Packs.load(id, function (err, data) {
    done();
    if (err || !data) { toast("😕 " + (err ? err.message : "Chapitre introuvable.")); return; }
    const chapter = (entry.parent && Packs.get(entry.parent)) || entry;
    var title = (entry.title + " (ma version)").slice(0, 80);
    /** @type {any} */
    var pack = {
      path: "", lang: data.lang,
      meta: { title: title, description: entry.description, icon: entry.icon, color: entry.color, basedOn: chapter.id },
      worlds: clone(data.worlds)
    };
    if (data.documents && data.documents.length) pack.documents = clone(data.documents);
    var d = draftFromPack(pack);
    d.level = entry.level;
    d.subject = entry.subject;
    d.slug = slugify(id.split("/").slice(2).join("-") + "-ma-version");
    d.autoSlug = false;
    syncPath(d);
    addDraft(d);
    toast("📋 Copie de « " + entry.title + " » prête");
  });
}

/** Choose a .js pack file and open it (read as text, strict format, never executed). @param {HTMLInputElement} input */
export function openFile(input) {
  adding(function () { input.value = ""; input.click(); });
}

/** The file chosen in the file input. @param {HTMLInputElement} input */
export function readChosenFile(input) {
  const file = input.files && input.files[0];
  input.value = "";
  if (!file) return;
  if (!/\.js$/i.test(file.name || "")) { toast("😕 Choisis un fichier de cours qui finit par .js"); return; }
  if (file.size > rules().MAX_PACK_SIZE) { toast("😕 Ce fichier est trop gros pour être un cours."); return; }
  var reader = new FileReader();
  reader.onload = function () {
    var pack;
    try { pack = rules().parseStrict(String(reader.result || "")); } catch (e) {
      toast("😕 Ce fichier n'est pas un cours au bon format : " + /** @type {Error} */ (e).message);
      return;
    }
    if (String(pack.path).split("/").length > 3) {
      toast("😕 Ce fichier est une partie d'un chapitre par groupes : l'éditeur ne sait pas encore les modifier.");
      return;
    }
    addDraft(draftFromPack(pack));
    toast("📂 « " + (file.name || "") + " » ouvert");
  };
  reader.onerror = function () { toast("😕 Impossible de lire ce fichier."); };
  reader.readAsText(file);
}

/** The file name: <id>.js. */
export function fileName() { return (store.draft.slug || "mon-cours") + ".js"; }

/** Download the course in the strict format. With errors: a warning that lists them first (the download stays possible). */
export function download() {
  var report = runChecks(store.draft);
  var errors = report.list.filter(function (m) { return m.level === "err"; });
  if (!errors.length) { save(); return; }
  var lines = errors.slice(0, 8).map(function (m) { return m.msg; });
  if (errors.length > 8) lines.push("… et " + (errors.length - 8) + " autre(s)");
  confirmBox("Télécharger malgré " + errors.length + " erreur" + (errors.length > 1 ? "s" : "") + " ?",
    "Le fichier ne pourra pas être ajouté au jeu tant que ces erreurs restent. Tu pourras le rouvrir ici pour les corriger.",
    "⬇️ Télécharger quand même", save, { lines: lines });
}

function save() {
  var text = rules().formatStrict(exportPack(store.draft), HEADER);
  var name = fileName();
  var url = URL.createObjectURL(new Blob([text], { type: "text/javascript" }));
  var a = el("a");
  a.href = url;
  a.download = name;
  a.hidden = true;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1000);
  if (!store.draft.locked) { store.draft.locked = true; restructured(); }
  saveNow();
  toast("⬇️ « " + name + " » téléchargé. Pour l'ajouter au jeu : mise run pack:add " + name);
}
