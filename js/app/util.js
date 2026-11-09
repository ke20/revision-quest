// @ts-check
/* Révision Quest — Small shared helpers: escaping, rich text, interface texts, colours, app name. */

/** HTML-escaped text. @param {unknown} t @returns {string} */
export let E = function (t) {
  return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
};
/** Rich text (see Exercises.rich), or escaped text before it loads. @param {string} t @returns {string} */
export let R = function (t) { return window.Exercises ? window.Exercises.rich(t) : E(t); };
export let T = function () { return window.I18N ? window.I18N.t.apply(null, /** @type {any} */ (arguments)) : String(arguments[0]); };
export let COLOR_RE = /^#[0-9a-fA-F]{3,8}$/;
/** The same value, declared present: for a value the code already knows is set, which TypeScript cannot follow
    (an element of the page, the world just finished…). No check at run time.
    @template T @param {T} v @returns {NonNullable<T>} */
export function must(v) { return /** @type {NonNullable<T>} */ (v); }
/** @param {unknown} c @param {string} [dflt] @returns {string} */
export function safeColor(c, dflt) { return typeof c === "string" && COLOR_RE.test(c) ? c : (dflt || "#7C4DFF"); }
export let APP_NAME = (window.APP_CONFIG && window.APP_CONFIG.name) || "Révision Quest";
export let APP_ICON = (window.APP_CONFIG && window.APP_CONFIG.icon) || "🎓";

/** @template X @param {X[]} list @returns {X} */
export function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
