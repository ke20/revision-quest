// @ts-check
/* Révision Quest — Players (choice, creation) and leaderboard. */
import { chip, gradeButtons, resetCatalogFilters } from "./catalog.js";
import { showHome } from "./home.js";
import { route, setNav } from "../nav.js";
import { showSavePanel } from "./save.js";
import { Sound } from "../ui/sound.js";
import { confirmBox, each, h, leavePack, on, qs, show, toast } from "../ui/ui.js";
import { APP_ICON, APP_NAME, E, must } from "../ui/util.js";

/* ---------- players ---------- */

export function showProfiles() {
  leavePack();
  route(Engine.currentProfile() ? "joueurs" : ""); // no player yet: the start screen, not a page to come back to
  var me = Engine.currentProfile();
  setNav(me ? showHome : null, showProfiles);
  var list = Engine.profiles().map(Engine.profileSummary);
  var cards = list.map(function (p) {
    return '<div class="profile-row' + (p.current ? " current" : "") + '">' +
      '<button class="profile-pick" data-id="' + E(p.id) + '">' +
        '<span class="profile-avatar">' + E(p.avatar) + "</span>" +
        '<span class="profile-main"><b>' + E(p.name) + "</b><small>" + E(p.rankIcon) + " " + E(p.rank) + "</small></span>" +
        '<span class="profile-stats"><span>' + p.xp + " XP</span><span>⭐ " + p.stars + "</span></span>" +
      "</button>" +
      '<button class="btn-del" data-del="' + E(p.id) + '" aria-label="Supprimer ' + E(p.name) + '">🗑️</button>' +
    "</div>";
  }).join("");
  var node = h('<section class="screen profiles">' +
    '<header class="screen-head">' + (me ? '<button class="btn-icon" data-act="back" aria-label="Retour">←</button>' : "") +
    "<h2>👋 Qui joue ?</h2><span class=\"head-right\"></span></header>" +
    (list.length ? '<p class="screen-help">Touche ton nom pour jouer.</p><div class="profile-list">' + cards + "</div>"
      : '<div class="card empty-card"><div class="logo">' + E(APP_ICON) + '</div><h3>Bienvenue dans ' + E(APP_NAME) + ' !</h3><p>Crée ton joueur pour commencer.</p></div>') +
    '<button class="btn btn-primary btn-big" data-act="new">➕ Nouveau joueur</button>' +
    '<div class="home-row">' +
      (list.length ? '<button class="btn btn-white" data-act="ranking">🏆 Classement</button>' : "") +
      '<button class="btn btn-white" data-act="save">💾 Ma sauvegarde</button>' +
    "</div>" +
    "</section>");
  on(node, "back", showHome);
  on(node, "new", function () { Sound.unlock(); Sound.tap(); showNewPlayer(); });
  on(node, "ranking", function () { Sound.tap(); showLeaderboard(showProfiles); });
  on(node, "save", function () { Sound.tap(); showSavePanel(showProfiles); });
  each(node, ".profile-pick", /** @param {HTMLElement} b */ function (b) {
    b.onclick = function () {
      Sound.unlock(); Sound.tap();
      Engine.selectProfile(must(b.getAttribute("data-id")));
      resetCatalogFilters();
      var p = Engine.currentProfile();
      showHome();
      if (p) toast("<span>" + E(p.avatar) + " Salut <b>" + E(p.name) + "</b> !</span>");
    };
  });
  each(node, ".btn-del", /** @param {HTMLElement} b */ function (b) {
    b.onclick = function () {
      var id = must(b.getAttribute("data-del"));
      var p = list.filter(function (x) { return x.id === id; })[0];
      if (!p) return;
      confirmBox("Supprimer " + E(p.name) + " ?", "Toute la progression de ce joueur sera effacée (XP, étoiles, badges).<br><small>Astuce : exporte la partie avant, au cas où.</small>",
        "Oui, supprimer", function () {
          Engine.deleteProfile(id);
          toast("🗑️ Joueur supprimé");
          showProfiles();
        }, true);
    };
  });
  show(node);
}

export function showNewPlayer() {
  setNav(showProfiles, null);
  var avatars = Engine.AVATARS;
  var chosen = avatars[Math.floor(Math.random() * avatars.length)];
  var node = h('<section class="screen newplayer">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>➕ Nouveau joueur</h2><span class="head-right"></span></header>' +
    '<div class="card form-card">' +
      '<label class="field-label" for="np-name">Ton prénom ou pseudo</label>' +
      '<input id="np-name" class="text-input" type="text" maxlength="20" autocomplete="off" placeholder="Ex : Léa" />' +
      '<div class="field-error" aria-live="polite"></div>' +
      '<div class="field-label">Choisis ton avatar</div>' +
      '<div class="avatar-grid">' + avatars.map(function (a) {
        return '<button type="button" class="avatar-btn' + (a === chosen ? " selected" : "") + '" data-av="' + E(a) + '" aria-label="Avatar ' + E(a) + '">' + E(a) + "</button>";
      }).join("") + "</div>" +
      '<div class="field-label">Ta classe <small>(facultatif)</small></div>' +
      gradeButtons("data-grade", "", "Plus tard") +
      '<p class="field-help">Pour ne voir que les chapitres de ta classe. Tu pourras la changer dans ⚙️ Réglages.</p>' +
      '<div class="field-label" id="np-comfort">As-tu un TDA/H ? <small>(du mal à rester concentré)</small></div>' +
      '<div class="seg" role="group" aria-labelledby="np-comfort">' +
        '<button type="button" class="seg-btn" data-comfort="yes" aria-pressed="false">Oui</button>' +
        '<button type="button" class="seg-btn on" data-comfort="no" aria-pressed="true">Non</button>' +
      "</div>" +
      '<p class="field-help">🔒 Ta réponse n\'est pas enregistrée : elle sert juste à choisir tes réglages de départ (pauses, boucliers, animations). Tu pourras les changer dans ⚙️ Réglages.</p>' +
    "</div>" +
    '<button class="btn btn-primary btn-big" data-act="create">C\'est parti ! 🚀</button>' +
    "</section>");
  var input = /** @type {HTMLInputElement} */ (node.querySelector("#np-name")), err = qs(node, ".field-error");
  on(node, "back", showProfiles);
  each(node, ".avatar-btn", /** @param {HTMLElement} b */ function (b) {
    b.onclick = function () {
      Sound.tap();
      chosen = must(b.getAttribute("data-av"));
      each(node, ".avatar-btn", /** @param {HTMLElement} x */ function (x) { x.classList.toggle("selected", x === b); });
    };
  });
  var grade = "";
  each(node, "[data-grade]", /** @param {HTMLElement} b */ function (b) {
    b.onclick = function () {
      Sound.tap();
      grade = must(b.getAttribute("data-grade"));
      each(node, "[data-grade]", /** @param {HTMLElement} x */ function (x) { var on = x === b; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false"); });
    };
  });
  var comfortYes = false; // only lives while this screen is open; never stored
  each(node, "[data-comfort]", /** @param {HTMLElement} b */ function (b) {
    b.onclick = function () {
      Sound.tap();
      comfortYes = b.getAttribute("data-comfort") === "yes";
      each(node, "[data-comfort]", /** @param {HTMLElement} x */ function (x) { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
    };
  });
  function create() {
    var res = Engine.createProfile(input.value, chosen, comfortYes, grade);
    if (!res.ok) {
      err.textContent = res.error || "";
      input.classList.remove("shake"); void input.offsetWidth; input.classList.add("shake");
      Sound.wrong();
      return;
    }
    Sound.levelUp();
    resetCatalogFilters();
    showHome();
    var made = must(res.profile);
    toast("<span>" + E(made.avatar) + " Bienvenue <b>" + E(made.name) + "</b> !</span>");
  }
  input.addEventListener("input", function () { err.textContent = ""; });
  input.addEventListener("keydown", function (e) { if (e.key === "Enter") create(); });
  on(node, "create", create);
  show(node);
  try { input.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
}

/** Ranking: general (XP), per subject (stars of all its chapters), or per chapter (chosen in the subject's menu).
    @param {() => void} [back] @param {string | null} [subjectId] @param {string | null} [unitId] */
export function showLeaderboard(back, subjectId, unitId) {
  route("classement");
  var units = Packs.units(); // a group is ranked on its own (its stars are saved under its own id)
  var unit = unitId ? Packs.get(unitId) : null;
  if (unit && !unit.groups) subjectId = unit.subject; else unit = null;
  var subject = subjectId ? Packs.subject(subjectId) : null;
  var subjectKey = subject ? subject.id : "";
  var inSubject = subject ? units.filter(function (u) { return u.subject === subjectKey; }) : [];
  if (!inSubject.length) { subject = null; unit = null; }
  setNav(back || showHome, function () { showLeaderboard(back, subject && subject.id, unit && unit.id); });
  var ranked = unit ? [unit] : subject ? inSubject : null;
  var rows = ranked ? Engine.leaderboard(ranked.map(function (u) { return { id: u.id, worldCount: u.worldCount }; })) : Engine.leaderboard();
  var maxStars = ranked ? ranked.reduce(function (t, u) { return t + u.worldCount * Engine.MAX_STARS; }, 0) : 0;
  var medals = ["🥇", "🥈", "🥉"];
  var body = rows.map(function (p, i) {
    return '<div class="lb-row' + (p.current ? " me" : "") + (i < 3 ? " top" + (i + 1) : "") + '">' +
      '<span class="lb-pos">' + (medals[i] || (i + 1)) + "</span>" +
      '<span class="lb-avatar">' + E(p.avatar) + "</span>" +
      '<span class="lb-main"><b>' + E(p.name) + (p.current ? ' <em class="lb-you">toi</em>' : "") + "</b><small>" + E(p.rankIcon) + " " + E(p.rank) + "</small></span>" +
      (ranked
        ? '<span class="lb-stats"><b>⭐ ' + p.packStars + "/" + maxStars + '</b><small>' + p.xp + " XP</small></span>"
        : '<span class="lb-stats"><b>' + p.xp + ' XP</b><small>⭐ ' + p.stars + " · 🏅 " + p.badges + "</small></span>") +
    "</div>";
  }).join("");
  // one chip per subject that has chapters, in the catalogue order
  var subjects = Packs.subjects().filter(function (s) { return units.some(function (u) { return u.subject === s.id; }); });
  var filters = subjects.length ? '<div class="filter-row lb-filters" role="group" aria-label="Classement">' +
    chip("lb", "", "🌍 Général", !subject) +
    subjects.map(function (s) { return chip("lb", s.id, E(s.icon) + " " + E(s.label), !!subject && subject.id === s.id); }).join("") + "</div>" : "";
  var menu = subject ? '<label class="lb-chapter-row"><span>Chapitre</span><select class="lb-chapter" aria-label="Chapitre">' +
    '<option value="">Tous les chapitres de ' + E(subject.label) + "</option>" +
    inSubject.map(function (u) {
      return '<option value="' + E(u.id) + '"' + (unit && unit.id === u.id ? " selected" : "") + ">" + E(u.icon) + " " + E(u.title) + "</option>";
    }).join("") + "</select></label>" : "";
  var help = unit ? "Le plus d'étoiles dans ce chapitre gagne. En cas d'égalité : le plus d'XP."
    : subject ? "Le plus d'étoiles en " + E(subject.label) + " gagne (tous ses chapitres). En cas d'égalité : le plus d'XP."
    : "Le plus d'XP gagne. En cas d'égalité : le plus d'étoiles.";
  var node = h('<section class="screen leaderboard">' +
    '<header class="screen-head"><button class="btn-icon" data-act="back" aria-label="Retour">←</button><h2>🏆 Classement</h2><span class="head-right">' + rows.length + " joueur" + (rows.length > 1 ? "s" : "") + "</span></header>" +
    filters + menu +
    '<p class="screen-help">' + help + "</p>" +
    '<div class="lb-list">' + (body || '<div class="card">Aucun joueur pour l\'instant.</div>') + "</div>" +
    "</section>");
  on(node, "back", function () { (back || showHome)(); });
  each(node, "[data-lb]", /** @param {HTMLElement} b */ function (b) {
    b.onclick = function () { Sound.tap(); showLeaderboard(back, b.getAttribute("data-lb")); };
  });
  const sel = /** @type {HTMLSelectElement|null} */ (node.querySelector(".lb-chapter")); // only shown inside a subject
  if (sel) sel.onchange = function () { Sound.tap(); showLeaderboard(back, must(subject).id, sel.value); };
  show(node);
}
