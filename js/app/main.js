// @ts-check
/* Révision Quest — Entry point: boot, fatal error screens, window.App (used by the tests). */
import { S } from "./state.js";
import { openPack, showCatalog } from "./catalog.js";
import { Confetti } from "./confetti.js";
import { showHome } from "./home.js";
import { showMap } from "./map.js";
import { goRoute, parseRoute, rerender } from "./nav.js";
import { pauseGuard, showPause } from "./play.js";
import { showProfiles } from "./profiles.js";
import { importShared, takeSharedCode } from "./save.js";
import { Sound } from "./sound.js";
import { badgeToasts, openModals } from "./ui.js";
import { APP_NAME, E, must } from "./util.js";

/* ================= Boot ================= */

/** @param {string} msg */
export function showError(msg) {
  S.app.innerHTML = '<section class="screen error"><div class="card result-card"><div class="result-icon">😵</div>' +
    '<h2 class="result-title">Oups ! Le jeu ne peut pas démarrer.</h2>' +
    '<p class="result-msg">' + E(msg) + '</p><p class="result-msg"><small>Lance le jeu avec <code>mise run dev</code> (ou <code>npm start</code>) puis ouvre l\'adresse affichée.</small></p>' +
    '<button class="btn btn-primary" data-act="reload">↻ Recharger</button></div></section>';
  var rb = S.app.querySelector('[data-act="reload"]');
  if (rb) rb.addEventListener("click", function () { location.reload(); });
}

/** Shown inside a frame (iframe) of another site: a hidden or disguised game could make a child click
    « Supprimer » without knowing it (clickjacking). A meta CSP cannot forbid frames (frame-ancestors) and
    GitHub Pages sends no X-Frame-Options header, so the game refuses to start there. */
export function isFramed() {
  try { return window.top !== window.self; } catch (e) { return true; } // cross-origin parent: access throws
}
export function showFramed() {
  S.app.innerHTML = '<section class="screen error"><div class="card result-card"><div class="result-icon">🔒</div>' +
    '<h2 class="result-title">Ouvre Révision Quest dans son propre onglet</h2>' +
    '<p class="result-msg">Le jeu ne fonctionne pas à l\'intérieur d\'une autre page.</p></div></section>';
}

export function boot() {
  S.app = must(document.getElementById("app")); // in index.html
  try { document.title = APP_NAME; } catch (e) { /* ignore */ }
  if (isFramed()) { showFramed(); return; }
  if (!window.Engine || !window.Exercises || !window.Packs) { showError("Certains fichiers du jeu n'ont pas pu être chargés."); return; }
  if (!Packs.list().length) { showError("Le catalogue des chapitres (js/catalog.js) est vide ou invalide."); return; }
  if (window.I18N) I18N.setLang("fr");
  Exercises.initTranslations(function (key) {
    badgeToasts(Engine.viewTranslation(key));
  });
  // another tab saved: redraw the current screen, except during an exercise, a form or an open dialog
  Engine.onExternalChange(function () {
    if (Engine.session || openModals.length) return;
    if (!Engine.currentProfile()) { if (!document.querySelector(".screen.newplayer")) showProfiles(); return; }
    if (rerender) rerender();
  });
  document.addEventListener("pointerdown", function once() { Sound.unlock(); document.removeEventListener("pointerdown", once); });
  var shared = takeSharedCode();
  var start = parseRoute();
  if (start && Engine.currentProfile() && !pauseGuard()) goRoute(start); else showHome();
  if (shared) importShared(shared);
  // a link opened while the game is already open in this tab
  window.addEventListener("hashchange", function () { var c = takeSharedCode(); if (c) importShared(c); });
}

window.App = {
  boot: boot, showHome: showHome, showCatalog: showCatalog, showMap: showMap, openPack: openPack,
  currentPack: function () { return S.pack; }, Sound: Sound, Confetti: Confetti, showPause: showPause
};
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
