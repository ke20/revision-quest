// Every real pack of packs/catalog.js accepts its own expected answers, checked with the very functions the game uses
// (window.Exercises from js/exercises/, loaded in the fake browser). Catches a typo in an answer that the validator cannot see,
// in milliseconds instead of playing each pack in a browser. Rendering is covered by tests/e2e/real-packs.spec.js.
"use strict";
const path = require("path");
const test = require("node:test");
const assert = require("node:assert");
const { load, pageScripts } = require("./helpers/env");
const { catalogUnits, loadCatalog, loadPack } = require("../../tools/validate-pack");

const ROOT = path.resolve(__dirname, "..", "..");
const X = load({ scripts: ["js/core/i18n.js", ...pageScripts("voix.html", "js/exercises/")] }).window.Exercises;

/** Problems of one exercise when answered with its own expected answer (empty = the game accepts it). */
function problems(ex, lang) {
  const out = [];
  switch (ex.type) {
    case "mcq":
      if (Array.isArray(ex.answer)) { // several answers: the right boxes are accepted, one box less is not
        if (ex.answer.some((a) => !(a >= 0 && a < ex.options.length))) out.push("answer out of range");
        if (!X.mcqMultiAccepted(ex, ex.answer.slice().reverse())) out.push("right boxes refused");
        if (ex.answer.length > 1 && X.mcqMultiAccepted(ex, ex.answer.slice(1))) out.push("a missing box is accepted");
      } else if (!(ex.answer >= 0 && ex.answer < ex.options.length)) out.push("answer out of range");
      break;
    case "fill":
      ex.answers.forEach((a) => { if (!X.fillAccepted(ex, a)) out.push(`answer "${a}" refused`); });
      if (!/\S/.test(X.normalize(ex.answers[0]))) out.push("first answer is empty once normalised");
      break;
    case "order":
      if (!X.orderAccepted(ex, ex.words.map(X.plain))) out.push("words refused");
      (ex.alternatives || []).forEach((alt, i) => { if (!X.orderAccepted(ex, alt.map(X.plain))) out.push(`alternative ${i} refused`); });
      break;
    case "question": {
      ex.answers.forEach((a) => { if (!X.questionAccepted(ex, a, lang)) out.push(`answer "${a}" refused`); });
      const keys = ex.answers.map((a) => X.answerKey(a, lang));
      keys.forEach((k, i) => { if (keys.indexOf(k) !== i) out.push(`answer "${ex.answers[i]}" is the same as "${ex.answers[keys.indexOf(k)]}" once compared`); });
      break;
    }
    case "spot":
      if (!(ex.wrongIndex >= 0 && ex.wrongIndex < ex.tokens.length)) out.push("wrongIndex out of range");
      break;
    case "sort": {
      const cats = new Set(ex.categories.map((c) => c.id));
      ex.items.forEach((it) => { if (!cats.has(it.cat)) out.push(`item "${it.text}" has no box`); });
      break;
    }
    case "match":
      if (new Set(ex.pairs.map((p) => X.plain(p.right))).size !== ex.pairs.length) out.push("two pairs share the same right side");
      break;
    default:
      out.push("unknown type " + ex.type);
  }
  return out;
}

for (const unit of catalogUnits(loadCatalog())) {
  test(`real pack ${unit.path}: every exercise accepts its own answer`, () => {
    const pack = loadPack(path.join(ROOT, "packs", unit.path + ".js"));
    const bad = [];
    pack.worlds.forEach((w, wi) => w.exercises.forEach((ex, ei) => {
      problems(ex, pack.lang).forEach((p) => bad.push(`world ${wi + 1} exercise ${ei + 1} (${ex.type}): ${p}`));
    }));
    assert.deepStrictEqual(bad, []);
  });
}

test("problems(): a wrong expected answer is reported (the check is not a no-op)", () => {
  assert.deepStrictEqual(problems({ type: "fill", answers: ["?"] }), ["first answer is empty once normalised"]);
  assert.match(problems({ type: "question", answers: ["I am 12.", "I'm 12"] }, "en")[0], /is the same as "I am 12\." once compared/);
  assert.match(problems({ type: "question", answers: ["   "] }, "fr")[0], /refused/);
  assert.deepStrictEqual(problems({ type: "sort", categories: [{ id: "a" }], items: [{ text: "x", cat: "b" }] }), ['item "x" has no box']);
});
