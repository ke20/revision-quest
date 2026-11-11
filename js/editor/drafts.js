// @ts-check
/* Révision Quest — course editor: « Mes brouillons », the courses saved in this browser. Open one, delete one;
   each line says whether the course is ready to be added to the game (no error left). */
import { runChecks } from "./checks.js";
import { button, confirmBox, el, modal, toast } from "./dom.js";
import { deleteDraft, listDrafts, openDraft, store } from "./state.js";

/** @param {EdDraft} d */
function titleOf(d) { return String(d.pack.meta.title || "").trim() || "Cours sans titre"; }

/** "aujourd'hui à 14:05", "le 3 novembre à 09:12". @param {number} at */
function when(at) {
  if (!at) return "";
  var t = new Date(at);
  var hour = t.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  if (t.toDateString() === new Date().toDateString()) return "aujourd'hui à " + hour;
  return "le " + t.toLocaleDateString("fr-FR", { day: "numeric", month: "long" }) + " à " + hour;
}

export function showDrafts() {
  modal(function (box, close) {
    box.classList.add("ed-drafts-modal");
    box.appendChild(el("h3", "", "🗂️ Mes brouillons"));
    box.appendChild(el("p", "ed-help", "Enregistrés tout seuls dans ce navigateur. Pour les garder ailleurs ou les ajouter au jeu : « ⬇️ Télécharger »."));
    var list = el("ul", "ed-drafts");
    listDrafts().forEach(function (item) {
      var d = item.draft, current = item.id === store.id;
      var errors = runChecks(d).errors;
      var li = el("li", "ed-draft" + (current ? " is-current" : ""));
      li.setAttribute("data-draft", item.id);
      var info = el("div", "ed-draft-info");
      info.appendChild(el("span", "ed-draft-title", (d.pack.meta.icon ? d.pack.meta.icon + " " : "") + titleOf(d)));
      info.appendChild(el("span", "ed-draft-meta", (d.level && d.subject && d.slug ? d.pack.path : "identifiant à choisir") + (item.at ? " · modifié " + when(item.at) : "")));
      info.appendChild(el("span", "ed-draft-state " + (errors ? "has-err" : "ok"),
        errors ? "⛔ " + errors + " erreur" + (errors > 1 ? "s" : "") + " à corriger" : "✅ Prêt à publier"));
      li.appendChild(info);
      var acts = el("div", "ed-draft-acts");
      if (current) acts.appendChild(el("span", "ed-draft-here", "En cours"));
      else {
        var open = button("btn btn-small btn-white", "Ouvrir", function () { close(); openDraft(item.id); toast("📂 « " + titleOf(d) + " » ouvert"); });
        open.setAttribute("data-act", "open-draft");
        acts.appendChild(open);
      }
      var del = button("btn btn-small btn-ghost", "🗑️", function () {
        close();
        confirmBox("Supprimer « " + titleOf(d) + " » ?", "Le brouillon sera effacé de ce navigateur. Un fichier déjà téléchargé n'est pas touché.",
          "🗑️ Supprimer", function () { deleteDraft(item.id); toast("🗑️ Brouillon supprimé"); }, { danger: true });
      }, "Supprimer « " + titleOf(d) + " »");
      del.setAttribute("data-act", "delete-draft");
      acts.appendChild(del);
      li.appendChild(acts);
      list.appendChild(li);
    });
    box.appendChild(list);
    var row = el("div", "modal-actions");
    var ok = button("btn btn-primary", "Fermer", close);
    ok.setAttribute("data-act", "yes");
    row.appendChild(ok);
    box.appendChild(row);
  });
}
