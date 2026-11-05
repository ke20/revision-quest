// Unit tests for tools/validate-pack.js (node:test, no dependency).
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const path = require("path");
const fs = require("fs");
const { validatePack, validateCatalog, catalogUnits, loadCatalog } = require("../../tools/validate-pack.js");

const ROOT = path.resolve(__dirname, "..", "..");
const FIX = path.join(ROOT, "tests", "fixtures", "unit");
const REL = "packs/4e/anglais/unit-valid.js"; // where the fixture pack would live in the repo

/** Small catalogue matching the fixture packs. */
const catalog = (over = {}) => ({
  subjects: [{ id: "anglais", label: "Anglais" }],
  levels: [{ id: "4e", label: "4e", order: 8 }],
  packs: [Object.assign({ path: "4e/anglais/unit-valid", title: "Test", lang: "fr", worldCount: 1 }, over)]
});
const run = (name, opts = {}) => validatePack(path.join(FIX, name + ".js"), opts.catalog || catalog(), { rel: opts.rel || REL });

test("the real catalogue and every real pack are valid", () => {
  const cat = loadCatalog();
  assert.deepStrictEqual(validateCatalog(cat), []);
  for (const p of catalogUnits(cat)) {
    const r = validatePack(path.join(ROOT, "packs", p.path + ".js"), cat);
    assert.deepStrictEqual(r.errors, [], p.path + ": " + r.errors.join(" | "));
  }
});

test("a valid fixture pack passes (all 7 exercise types)", () => {
  const r = run("valid");
  assert.deepStrictEqual(r.errors, []);
  assert.deepStrictEqual(Object.keys(r.stats.types).sort(), ["fill", "match", "mcq", "order", "sort", "spot", "write"]);
});

const BROKEN = {
  "bad-path": /path "Anglais 4e" invalide|path .*invalide/,
  "bad-lang": /lang doit être "fr" ou "en"/,
  "mcq-answer-out-of-range": /answer 5 hors limites/,
  "mcq-duplicate-options": /options en double/,
  "mcq-translation-in-options": /options : \[\[\.\.\.\]\] interdit/,
  "sort-unknown-category": /cat "zz" n'existe pas dans categories/,
  "order-alternative-unknown-word": /alternatives\[0\] utilise des mots absents des étiquettes : chien/,
  "fill-two-blanks": /exactement un trou ___/,
  "spot-index-out-of-range": /wrongIndex 9 hors limites/,
  "write-bad-regex": /regex invalide/,
  "write-model-misses-requirements": /modelAnswer ne valide que 0\/1/,
  "write-unknown-document": /document nope introuvable/,
  "duplicate-world-id": /monde 2 : id 1 en double/,
  "unknown-exercise-type": /type "boom" inconnu/,
  "broken-markup": /\[\[mot\|traduction\]\] mal formée/,
  "bad-color": /color "red" invalide/,
  "registers-twice": /exactement une fois/
};
for (const [name, re] of Object.entries(BROKEN)) {
  test(`broken pack is reported: ${name}`, () => {
    const r = run(name);
    assert.ok(r.errors.some((e) => re.test(e)), `expected ${re} in:\n${r.errors.join("\n")}`);
  });
}

test("every broken fixture has an expectation", () => {
  const files = fs.readdirSync(FIX).map((f) => f.replace(/\.js$/, "")).filter((f) => f !== "valid");
  assert.deepStrictEqual(files.sort(), Object.keys(BROKEN).sort());
});

test("pack file must be at packs/<path>.js", () => {
  const r = run("valid", { rel: "packs/5e/anglais/elsewhere.js" });
  assert.ok(r.errors.some((e) => /le fichier doit être packs\/4e\/anglais\/unit-valid\.js/.test(e)), r.errors.join("\n"));
});

test("pack must be listed in the catalogue, with the same lang and worldCount", () => {
  assert.ok(run("valid", { catalog: catalog({ path: "4e/anglais/other" }) }).errors.some((e) => /absent de js\/catalog\.js/.test(e)));
  assert.ok(run("valid", { catalog: catalog({ lang: "en" }) }).errors.some((e) => /lang "en" ≠ lang du pack "fr"/.test(e)));
  assert.ok(run("valid", { catalog: catalog({ worldCount: 3 }) }).errors.some((e) => /worldCount 3 ≠ 1/.test(e)));
});

test("catalogue: path segments must be a known level and subject, no duplicates, valid fields", () => {
  const errs = validateCatalog({
    subjects: [{ id: "anglais", label: "Anglais" }], levels: [{ id: "4e", label: "4e", order: 8 }],
    packs: [
      { path: "zz/anglais/a", title: "t", lang: "fr", worldCount: 1 },
      { path: "4e/maths/a", title: "t", lang: "fr", worldCount: 1 },
      { path: "../js/app", title: "t", lang: "fr", worldCount: 1 },
      { path: "4e/anglais/giving-advice", title: "t", lang: "fr", worldCount: 1 },
      { path: "4e/anglais/giving-advice", title: "", lang: "de", worldCount: 0, color: "red" }
    ]
  });
  const has = (re) => assert.ok(errs.some((e) => re.test(e)), `${re} in:\n${errs.join("\n")}`);
  has(/niveau "zz" inconnu/);
  has(/matière "maths" inconnue/);
  has(/\(\.\.\/js\/app\) : path invalide/);
  has(/path en double/);
  has(/title manquant/);
  has(/lang doit être fr ou en/);
  has(/color invalide/);
  has(/worldCount/);
  has(/fichier packs\/4e\/maths\/a\.js introuvable/);
});

test("catalogue: a chapter par groupes has groups (id, label, difficulty, worldCount) and no file / worldCount of its own", () => {
  const base = { subjects: [{ id: "anglais", label: "Anglais" }], levels: [{ id: "4e", label: "4e", order: 8 }] };
  const errs = validateCatalog(Object.assign({}, base, { packs: [
    { path: "4e/anglais/g-empty", title: "t", lang: "fr", groups: [] },
    { path: "4e/anglais/g-bad", title: "t", lang: "fr", worldCount: 3, groups: [
      { id: "G 1", label: "Groupe 1", worldCount: 1 },
      { id: "g2", label: "", difficulty: 9, worldCount: 0 },
      { id: "g2", label: "Groupe 2 bis", worldCount: 1 }
    ] }
  ] }));
  const has = (re) => assert.ok(errs.some((e) => re.test(e)), `${re} in:\n${errs.join("\n")}`);
  has(/g-empty\) : groups doit être un tableau non vide/);
  has(/pas de worldCount sur un chapitre par groupes/);
  has(/groups\[0\] : id "G 1" invalide/);
  has(/groups\[1\] : label manquant/);
  has(/groups\[1\] : difficulty doit être un entier de 1 à 5/);
  has(/groups\[1\] : worldCount/);
  has(/groups\[2\] : id "g2" en double/);
  has(/fichier packs\/4e\/anglais\/g-bad\/g2\.js introuvable/);
  assert.ok(!errs.some((e) => /packs\/4e\/anglais\/g-bad\.js introuvable/.test(e)), "no file expected for the chapter itself");
});

test("a group pack: path <cours>/<groupe>, found through the groups of its catalogue entry", () => {
  const cat = { subjects: [{ id: "anglais", label: "Anglais" }], levels: [{ id: "4e", label: "4e", order: 8 }],
    packs: [{ path: "4e/anglais/unit", title: "t", lang: "fr", groups: [{ id: "valid", label: "Groupe", worldCount: 1 }] }] };
  assert.deepStrictEqual(catalogUnits(cat).map((u) => u.path), ["4e/anglais/unit/valid"]);
  const src = fs.readFileSync(path.join(FIX, "valid.js"), "utf8").replace(/"path": "[^"]+"/, '"path": "4e/anglais/unit/valid"');
  const tmp = path.join(require("os").tmpdir(), "rq-group-valid-" + process.pid + ".js");
  fs.writeFileSync(tmp, src);
  try {
    assert.deepStrictEqual(validatePack(tmp, cat, { rel: "packs/4e/anglais/unit/valid.js" }).errors, []);
    assert.ok(validatePack(tmp, cat, { rel: "packs/4e/anglais/unit-valid.js" }).errors.some((e) => /le fichier doit être packs\/4e\/anglais\/unit\/valid\.js/.test(e)));
    const wrongCount = JSON.parse(JSON.stringify(cat)); wrongCount.packs[0].groups[0].worldCount = 4;
    assert.ok(validatePack(tmp, wrongCount, { rel: "packs/4e/anglais/unit/valid.js" }).errors.some((e) => /worldCount 4 ≠ 1 mondes dans le pack \(groupe\)/.test(e)));
  } finally { fs.unlinkSync(tmp); }
});

test("fill listen: plain text read aloud, 300 characters max, a hint advised", () => {
  const src = fs.readFileSync(path.join(FIX, "valid.js"), "utf8");
  const check = (listen, hint) => {
    const tmp = path.join(require("os").tmpdir(), "rq-listen-" + process.pid + ".js");
    const extra = JSON.stringify({ listen, hint }).slice(1, -1);
    fs.writeFileSync(tmp, src.replace('"sentence": "Le ___ dort.",', '"sentence": "Le ___ dort.", ' + extra + ","));
    try { return validatePack(tmp, catalog(), { rel: REL }); } finally { fs.unlinkSync(tmp); }
  };
  const ok = check("Le chat dort.", "Un animal.");
  assert.deepStrictEqual(ok.errors, []);
  assert.ok(!ok.warnings.some((w) => /listen|hint conseillé/.test(w)), ok.warnings.join(" | "));
  assert.ok(check("Le **chat** dort.", "x").errors.some((e) => /listen est lu à voix haute/.test(e)));
  assert.ok(check("Le [[chat|cat]] dort.", "x").errors.some((e) => /listen est lu à voix haute/.test(e)));
  assert.ok(check("a".repeat(301), "x").errors.some((e) => /listen trop long \(301 caractères/.test(e)));
  assert.ok(check("  ", "x").errors.some((e) => /listen doit être un texte non vide/.test(e)));
  assert.ok(check("Le chat dort.").warnings.some((w) => /hint conseillé/.test(w)));
});
