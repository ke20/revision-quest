// @ts-check
/* Révision Quest — receiving a course of « Mes cours » sent from the editor of another device: a link (#cours=<code>)
   or a .cours file. The code is read by MyCourses.decode (JSON, checked like a saved course, never executed), then
   shown and confirmed before anything is added. */
import { showCatalog } from "./catalog.js";
import { importError } from "./save.js";
import { Sound } from "../ui/sound.js";
import { modal, qs, toast } from "../ui/ui.js";
import { E } from "../ui/util.js";

export let COURSE_PARAM = "cours";

/** "#cours=…" in the address: taken, then removed from the address bar and the history right away. @returns {string | null} */
export function takeCourseCode() {
  var m = new RegExp("^#" + COURSE_PARAM + "=(.*)$").exec(location.hash || "");
  if (!m) return null;
  try { history.replaceState(history.state, "", String(location.href).split("#")[0]); } catch (e) { /* ignore */ }
  return m[1] || "x"; // a damaged link still gets its error message
}

/** @type {string | null} */
var courseOpen = null; // code whose confirmation is on screen (the same link is not asked twice)

/** A course received by link or file: checked, shown, confirmed, then added to « Mes cours ». @param {string} code */
export function importCourse(code) {
  if (Engine.session) { toast("Termine ton monde, puis ouvre à nouveau le lien du cours."); return; }
  if (!window.MyCourses) { importError("« Mes cours » n'est pas disponible ici."); return; }
  if (courseOpen === code) return;
  courseOpen = code;
  window.MyCourses.decode(code).then(function (res) {
    courseOpen = null;
    if (!res.ok) return importError(res.error);
    if (res.full) return importError("Il y a déjà " + must().MAX_COURSES + " cours sur cet appareil : supprimes-en un dans « Mes cours », puis rouvre le lien.");
    var pack = res.pack, meta = pack.meta || /** @type {PackMeta} */ ({}), seg = pack.path.split("/");
    var lvl = Packs.level(seg[0]), sub = Packs.subject(seg[1]), n = pack.worlds.length;
    modal('<h3>📥 Recevoir un cours</h3>' +
      '<p class="share-who">' + E(meta.icon) + " <b>" + E(meta.title) + "</b></p>" +
      "<p>" + (sub ? E(sub.icon) + " " + E(sub.label) + " · " : "") + (lvl ? E(lvl.label) + " · " : "") + n + " monde" + (n > 1 ? "s" : "") + "</p>" +
      (meta.author ? "<p>Créé par " + E(meta.author) + "</p>" : "") +
      '<p class="save-help">Ce cours a été fait avec l\'éditeur, pas par l\'équipe du jeu. Il ira dans « ✏️ Mes cours », pour tous les joueurs de cet appareil.</p>' +
      (res.existing ? '<p class="save-help">♻️ Ce cours est déjà sur cet appareil : cette version remplace l\'ancienne. Les étoiles restent.</p>' : "") +
      '<div class="modal-actions"><button class="btn btn-ghost" data-act="no">Annuler</button>' +
      '<button class="btn btn-primary" data-act="yes">' + (res.existing ? "♻️ Remplacer" : "📥 Ajouter") + "</button></div>",
      function (m, close) {
        courseOpen = code;
        var shut = function () { courseOpen = null; close(); };
        qs(m, '[data-act="no"]').onclick = shut;
        qs(m, '[data-act="yes"]').onclick = function () {
          shut();
          var r = must().save(pack);
          if (!r.ok) return importError(r.errors[0]);
          Sound.levelUp();
          if (Engine.currentProfile()) showCatalog();
          toast("<span>✅ « " + E(meta.title) + " » est dans « ✏️ Mes cours » !</span>");
        };
      });
  });
}

/** @returns {MyCoursesApi} */
function must() { return /** @type {MyCoursesApi} */ (window.MyCourses); }

/** « 📥 Ouvrir un cours reçu »: a .cours file chosen by the player, read as text (never executed). */
export function chooseCourseFile() {
  var input = document.createElement("input");
  input.type = "file";
  // no "accept": on iPhone a file type unknown to the system would be greyed out; the content is checked instead
  input.hidden = true;
  input.onchange = function () {
    var file = input.files && input.files[0];
    input.remove();
    if (!file) return;
    if (!/\.cours$/i.test(file.name || "")) { importError("Choisis un fichier qui finit par .cours"); return; }
    if (file.size > must().MAX_CODE_CHARS + 100) { importError("Ce fichier est trop gros pour être un cours."); return; }
    var reader = new FileReader();
    reader.onload = function () { importCourse(String(reader.result || "")); };
    reader.onerror = function () { importError("Impossible de lire ce fichier."); };
    reader.readAsText(file);
  };
  document.body.appendChild(input);
  input.click();
}
