// @ts-check
/* Révision Quest — Interface helpers: building and showing a screen, toasts, dialogs, stars / hearts / shields. */
import { S } from "./state.js";
import { applyComfort } from "./comfort.js";
import { Confetti } from "./confetti.js";
import { clearRun } from "./nav.js";
import { Sound } from "./sound.js";
import { E } from "./util.js";

/* ================= UI helpers ================= */

export let openModals = [];

/** An element of a screen built by this code (it is there). @param {ParentNode} node @param {string} sel @returns {HTMLElement} */
export function qs(node, sel) { return /** @type {HTMLElement} */ (node.querySelector(sel)); }

/** The element built from a piece of trusted HTML (its first node). @param {string} html @returns {HTMLElement} */
export function h(html) {
  var d = document.createElement("div");
  d.innerHTML = html.trim();
  return /** @type {HTMLElement} */ (d.firstChild);
}

export function show(node) {
  window.Exercises && Exercises.closeBubble();
  window.Exercises && Exercises.closeText && Exercises.closeText();
  S.app.innerHTML = "";
  S.app.appendChild(node);
  applyComfort();
  window.scrollTo(0, 0);
}

export function on(node, act, fn) {
  var b = node.querySelector('[data-act="' + act + '"]');
  if (b) b.onclick = fn;
  return b;
}

export function each(node, sel, fn) { Array.prototype.forEach.call(node.querySelectorAll(sel), fn); }

/** html must be trusted or already escaped. */
export function toast(html, cls) {
  var wrap = /** @type {HTMLElement} */ (document.getElementById("toasts")); // in index.html
  var t = h('<div class="toast ' + (cls || "") + '">' + html + "</div>");
  wrap.appendChild(t);
  setTimeout(function () { t.classList.add("out"); }, 2800);
  setTimeout(function () { t.remove(); }, 3300);
}

export function badgeToasts(list) {
  (list || []).forEach(function (b, i) {
    setTimeout(function () {
      toast('<span class="toast-icon">' + E(b.icon) + '</span><span><b>Nouveau badge !</b><br>' + E(b.name) + "</span>", "badge");
      Sound.levelUp();
    }, 400 + i * 700);
  });
}

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

/** title / text / okLabel must be trusted or already escaped. */
export function confirmBox(title, text, okLabel, onOk, danger, cancelLabel) {
  modal('<h3>' + title + '</h3><p>' + text + '</p><div class="modal-actions">' +
    '<button class="btn btn-ghost" data-act="no">' + (cancelLabel || "Annuler") + '</button>' +
    '<button class="btn ' + (danger ? "btn-danger" : "btn-primary") + '" data-act="yes">' + okLabel + "</button></div>",
    function (m, close) {
      m.querySelector('[data-act="no"]').onclick = close;
      m.querySelector('[data-act="yes"]').onclick = function () { close(); onOk(); };
    });
}

export function levelUpPopup(info) {
  Sound.levelUp();
  Confetti.burst(120, { center: true });
  modal('<div class="levelup"><div class="levelup-burst">🎉</div><div class="levelup-label">NIVEAU SUPÉRIEUR !</div>' +
    '<div class="levelup-num">Niveau ' + info.level + '</div><div class="levelup-name">' + E(info.icon) + " " + E(info.name) + "</div>" +
    '<button class="btn btn-primary btn-big" data-act="ok">Génial !</button></div>',
    function (m, close) { m.querySelector('[data-act="ok"]').onclick = close; });
}

export function starsHtml(n, total) {
  var s = "";
  for (var i = 0; i < (total || Engine.MAX_STARS); i++) s += '<span class="star ' + (i < n ? "on" : "") + '">★</span>';
  return s;
}

export function bigStarsHtml(n) {
  var s = "";
  for (var i = 0; i < Engine.MAX_STARS; i++) s += '<span class="bstar ' + (i < n ? "on" : "") + '" style="animation-delay:' + (0.3 + i * 0.25) + 's">★</span>';
  return s;
}

export function heartsHtml(n) {
  var s = "";
  for (var i = 0; i < Engine.MAX_HEARTS; i++) s += '<span class="heart ' + (i < n ? "" : "lost") + '">' + (i < n ? "❤️" : "🤍") + "</span>";
  return s;
}
/** Free mistakes of the world (n left out of max): used before the hearts. */
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
