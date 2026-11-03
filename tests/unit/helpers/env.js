// Minimal fake browser to run the app scripts in Node (node:test, no dependency):
// window/globals, localStorage, document.cookie (with path / max-age), location, storage events.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..", "..");

/** A cookie jar shared between environments (like one browser profile). */
function cookieJar() {
  const jar = new Map(); // name -> { value, path }
  return {
    jar,
    get() { return [...jar].map(([k, v]) => k + "=" + v.value).join("; "); },
    set(str) {
      const parts = String(str).split(";").map((x) => x.trim());
      const [name, ...rest] = parts[0].split("=");
      const attrs = Object.fromEntries(parts.slice(1).map((a) => { const i = a.indexOf("="); return i < 0 ? [a.toLowerCase(), true] : [a.slice(0, i).toLowerCase(), a.slice(i + 1)]; }));
      if (attrs["max-age"] !== undefined && +attrs["max-age"] <= 0) jar.delete(name);
      else jar.set(name, { value: rest.join("="), path: attrs.path, sameSite: attrs.samesite, secure: !!attrs.secure });
    },
    /** total size of the Cookie header the browser would send */
    size() { return this.get().length; }
  };
}

function storage(initial) {
  const m = new Map(Object.entries(initial || {}));
  return {
    map: m,
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => { m.set(k, String(v)); },
    removeItem: (k) => { m.delete(k); },
    clear: () => m.clear()
  };
}

/**
 * Load app scripts into a fresh fake window.
 * opts: { scripts, localStorage (shared object from storage()), cookies (cookieJar()), search, pathname, protocol,
 *         globals (extra window properties set before the scripts run, e.g. { CATALOG }) }
 */
function load(opts = {}) {
  const scripts = opts.scripts || ["js/i18n.js", "js/catalog.js", "js/packs.js", "js/engine.js", "js/exercises.js"];
  const ls = opts.localStorage || storage();
  const jar = opts.cookies || cookieJar();
  const listeners = {};
  const win = {
    console, Math, Date, JSON, TextEncoder, TextDecoder, Uint8Array, Object, Array, String, Number, RegExp, Error, isFinite,
    btoa: (s) => Buffer.from(s, "binary").toString("base64"),
    atob: (s) => Buffer.from(s, "base64").toString("binary"),
    setTimeout, clearTimeout,
    localStorage: ls,
    location: { pathname: opts.pathname || "/", protocol: opts.protocol || "http:", search: opts.search || "" },
    addEventListener: (type, fn) => { (listeners[type] = listeners[type] || []).push(fn); },
    removeEventListener: () => {}
  };
  win.document = {
    get cookie() { return jar.get(); },
    set cookie(v) { jar.set(v); },
    readyState: "complete",
    addEventListener: () => {},
    createElement: () => { throw new Error("no DOM in unit tests"); }
  };
  Object.assign(win, opts.globals);
  win.window = win;
  const ctx = vm.createContext(win);
  for (const s of scripts) vm.runInContext(fs.readFileSync(path.join(ROOT, s), "utf8"), ctx, { filename: s });
  return {
    window: win, localStorage: ls, cookies: jar,
    /** simulate another tab writing the save (fires the "storage" listeners) */
    storageEvent(key, newValue) { (listeners.storage || []).forEach((fn) => fn({ key, newValue })); }
  };
}

/** A small synthetic pack: n worlds with k exercises each (world 3 shows a document). */
function makePack(n = 4, k = 2) {
  return {
    id: "4e/anglais/test-pack", lang: "en", documents: [{ id: "d1", text: "x" }],
    worlds: Array.from({ length: n }, (_, i) => ({
      id: i + 1, title: "W" + (i + 1),
      exercises: Array.from({ length: k }, () => (i === 2 ? { type: "write", docId: "d1" } : { type: "mcq" }))
    }))
  };
}

module.exports = { ROOT, load, storage, cookieJar, makePack };
