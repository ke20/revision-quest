// Unit tests for js/core/i18n.js (interface texts of the exercises, by pack language) and the "es" language.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const { load } = require("./helpers/env");

const I18N = () => load({ scripts: ["js/core/i18n.js"] }).window.I18N;
const LANGS = ["fr", "en", "es"];

test("every language has the same keys, with the same kind of value", () => {
  const d = I18N().dict;
  const shape = (o) => Object.keys(o).sort().map((k) => k + ":" + (Array.isArray(o[k]) ? "array" : typeof o[k])).join();
  for (const l of LANGS) assert.strictEqual(shape(d[l]), shape(d.fr), `I18N.${l} differs from I18N.fr`);
});

test("setLang: fr, en and es are kept, anything else falls back to fr", () => {
  const I = I18N();
  for (const l of LANGS) { I.setLang(l); assert.strictEqual(I.lang(), l); }
  I.setLang("de");
  assert.strictEqual(I.lang(), "fr");
  I.setLang("es");
  assert.match(I.t("check"), /Comprobar/);
  assert.match(I.t("pickN", 2), /Elige 2 respuestas/);
});

test("the catalogue keeps lang es (and still turns an unknown lang into fr)", () => {
  const CATALOG = {
    levels: [{ id: "4e", label: "4e", order: 8 }],
    subjects: [{ id: "espagnol", label: "Espagnol", color: "#DC2626" }],
    packs: [{ path: "4e/espagnol/a", title: "A", lang: "es", worldCount: 1 }, { path: "4e/espagnol/b", title: "B", lang: "de", worldCount: 1 }]
  };
  const P = load({ scripts: ["js/core/packs.js"], globals: { CATALOG } }).window.Packs;
  assert.strictEqual(P.get("4e/espagnol/a").lang, "es");
  assert.strictEqual(P.get("4e/espagnol/b").lang, "fr");
});
