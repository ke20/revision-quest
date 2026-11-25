// @ts-check
/* Révision Quest — Interface helpers: building and showing a screen, toasts, dialogs, stars / hearts / shields. */
import { S } from "../state.js";
import { applyComfort } from "./comfort.js";
import { Confetti } from "./confetti.js";
import { clearRun } from "../nav.js";
import { Sound } from "./sound.js";
import { E } from "./util.js";

/* ================= UI helpers ================= */

/** Close functions of the open dialogs. @type {Array<() => void>} */
export let openModals = [];

/** An element of a screen built by this code (it is there). @param {ParentNode} node @param {string} sel @returns {HTMLElement} */
export function qs(node, sel) { return /** @type {HTMLElement} */ (node.querySelector(sel)); }

/** The element built from a piece of trusted HTML (its first node). @param {string} html @returns {HTMLElement} */
export function h(html) {
  var d = document.createElement("div");
  d.innerHTML = html.trim();
  return /** @type {HTMLElement} */ (d.firstChild);
}

/** @param {Node} node */
export function show(node) {
  window.Exercises && Exercises.closeBubble();
  window.Exercises && Exercises.closeText && Exercises.closeText();
  S.app.innerHTML = "";
  S.app.appendChild(node);
  applyComfort();
  window.scrollTo(0, 0);
}

/** The [data-act] button gets fn as click handler (if it is there). @param {ParentNode} node @param {string} act @param {(e: MouseEvent) => void} fn @returns {HTMLElement | null} */
export function on(node, act, fn) {
  var b = /** @type {HTMLElement | null} */ (node.querySelector('[data-act="' + act + '"]'));
  if (b) b.onclick = fn;
  return b;
}

/** @template {HTMLElement} T @param {ParentNode} node @param {string} sel @param {(el: T, i: number) => void} fn */
export function each(node, sel, fn) { Array.prototype.forEach.call(node.querySelectorAll(sel), fn); }

/** html must be trusted or already escaped. @param {string} html @param {string} [cls] */
export function toast(html, cls) {
  var wrap = /** @type {HTMLElement} */ (document.getElementById("toasts")); // in index.html
  var t = h('<div class="toast ' + (cls || "") + '">' + html + "</div>");
  wrap.appendChild(t);
  setTimeout(function () { t.classList.add("out"); }, 2800);
  setTimeout(function () { t.remove(); }, 3300);
}

/** @param {Badge[] | null} [list] */
export function badgeToasts(list) {
  (list || []).forEach(function (b, i) {
    setTimeout(function () {
      toast('<span class="toast-icon">' + E(b.icon) + '</span><span><b>Nouveau badge !</b><br>' + E(b.name) + "</span>", "badge");
      Sound.levelUp();
    }, 400 + i * 700);
  });
}

/** html must be trusted. @param {string} html @param {(m: HTMLElement, close: () => void) => void} [onMount] @returns {() => void} close */
export function modal(html, onMount) {
  var m = h('<div class="modal-backdrop"><div class="modal pop">' + html + "</div></div>");
  document.body.appendChild(m);
  var closed = false;
  function close() {
    if (closed) return;
    closed = true;
    openModals = openModals.filter(function (f) { return f !== close; });
    m.classList.add("out"); setTimeout(function () { m.remove(); }, 200);
  }
  openModals.push(close);
  m.addEventListener("click", function (e) { if (e.target === m) close(); });
  if (onMount) onMount(m, close);
  return close;
}

/** title / text / okLabel must be trusted or already escaped.
 * @param {string} title @param {string} text @param {string} okLabel @param {() => void} onOk @param {boolean} [danger] @param {string} [cancelLabel] */
export function confirmBox(title, text, okLabel, onOk, danger, cancelLabel) {
  modal('<h3>' + title + '</h3><p>' + text + '</p><div class="modal-actions">' +
    '<button class="btn btn-ghost" data-act="no">' + (cancelLabel || "Annuler") + '</button>' +
    '<button class="btn ' + (danger ? "btn-danger" : "btn-primary") + '" data-act="yes">' + okLabel + "</button></div>",
    function (m, close) {
      qs(m, '[data-act="no"]').onclick = close;
      qs(m, '[data-act="yes"]').onclick = function () { close(); onOk(); };
    });
}

/** @param {LevelInfo} info */
export function levelUpPopup(info) {
  Sound.levelUp();
  Confetti.burst(120, { center: true });
  modal('<div class="levelup"><div class="levelup-burst">🎉</div><div class="levelup-label">NIVEAU SUPÉRIEUR !</div>' +
    '<div class="levelup-num">Niveau ' + info.level + '</div><div class="levelup-name">' + E(info.icon) + " " + E(info.name) + "</div>" +
    '<button class="btn btn-primary btn-big" data-act="ok">Génial !</button></div>',
    function (m, close) { qs(m, '[data-act="ok"]').onclick = close; });
}

/** @param {number} n @param {number} [total] */
export function starsHtml(n, total) {
  var s = "";
  for (var i = 0; i < (total || Engine.MAX_STARS); i++) s += '<span class="star ' + (i < n ? "on" : "") + '">★</span>';
  return s;
}

/** @param {number} n */
export function bigStarsHtml(n) {
  var s = "";
  for (var i = 0; i < Engine.MAX_STARS; i++) s += '<span class="bstar ' + (i < n ? "on" : "") + '" style="animation-delay:' + (0.3 + i * 0.25) + 's">★</span>';
  return s;
}

/** A calculator drawn by the game (flat style, no image file): crossed out in red when it is not allowed.
    @param {boolean} allowed @returns {string} */
export function calcSvg(allowed) {
  return '<svg class="calc-svg" viewBox="0 0 24 30" width="20" height="25" aria-hidden="true">' +
    '<rect x="1.5" y="1.5" width="21" height="27" rx="3.5" fill="#fff" stroke="#2B2E4A" stroke-width="2"/>' +
    '<rect x="5" y="5" width="14" height="5" rx="1" fill="#5BC0EB" stroke="#2B2E4A" stroke-width="1.4"/>' +
    '<rect x="5" y="13" width="6" height="6" rx="1.2" fill="#F6C453" stroke="#2B2E4A" stroke-width="1.2"/>' +
    '<rect x="13" y="13" width="6" height="6" rx="1.2" fill="#B49FDC" stroke="#2B2E4A" stroke-width="1.2"/>' +
    '<rect x="5" y="21" width="6" height="5" rx="1.2" fill="#8E9AC8" stroke="#2B2E4A" stroke-width="1.2"/>' +
    '<rect x="13" y="21" width="6" height="5" rx="1.2" fill="#EF6F8A" stroke="#2B2E4A" stroke-width="1.2"/>' +
    '<path d="M6.5 16h3M14.5 16h3M16 14.5v3M6.8 22.2l2.4 2.6M9.2 22.2l-2.4 2.6M14.5 23.5h3" stroke="#2B2E4A" stroke-width="1.1" stroke-linecap="round"/>' +
    '<circle cx="16" cy="22.2" r=".45" fill="#2B2E4A"/><circle cx="16" cy="24.8" r=".45" fill="#2B2E4A"/>' +
    (allowed ? "" : '<path d="M2 28L22 2" stroke="#DC2626" stroke-width="3" stroke-linecap="round"/>') +
    "</svg>";
}

/** @param {number} n */
export function heartsHtml(n) {
  var s = "";
  for (var i = 0; i < Engine.MAX_HEARTS; i++) s += '<span class="heart ' + (i < n ? "" : "lost") + '">' + (i < n ? "❤️" : "🤍") + "</span>";
  return s;
}
/** Free mistakes of the world (n left out of max): used before the hearts. @param {number} n @param {number} max */
export function shieldsHtml(n, max) {
  var s = "";
  for (var i = 0; i < max; i++) s += '<span class="shield ' + (i < n ? "" : "used") + '">🛡️</span>';
  return s ? '<span class="shields" aria-label="' + n + " bouclier" + (n > 1 ? "s" : "") + '">' + s + "</span>" : "";
}

/** Leave the pack: global screens are always in French. */
export function leavePack() {
  if (Engine.session) { Engine.quitWorld(); clearRun(); }
  if (window.I18N) I18N.setLang("fr");
}
