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
  packs: [Object.assign({ path: "4e/anglais/unit-valid", title: "Test", description: "Pack de test des contrôles.", icon: "🧪", lang: "fr", worldCount: 1 }, over)]
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
  "bad-lang": /lang doit être "fr", "en" ou "es"/,
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
  "registers-twice": /format strict/
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
  assert.ok(run("valid", { catalog: catalog({ path: "4e/anglais/other" }) }).errors.some((e) => /absent de packs\/catalog\.js/.test(e)));
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
  has(/lang doit être fr, en ou es/);
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

test("mcq with several answers and docId on any exercise (reading comprehension)", () => {
  const src = fs.readFileSync(path.join(FIX, "valid.js"), "utf8");
  const check = (mcq, doc) => {
    const tmp = path.join(require("os").tmpdir(), "rq-multi-" + process.pid + ".js");
    let out = src.replace('"answer": 0,\n          "explanation": "C\'est a."', mcq + ',\n          "explanation": "C\'est a."');
    if (doc) out = out.replace('"title": "Un document",', '"title": "Un document", ' + doc + ",");
    fs.writeFileSync(tmp, out);
    try { return validatePack(tmp, catalog(), { rel: REL }); } finally { fs.unlinkSync(tmp); }
  };
  assert.deepStrictEqual(check('"answer": [0, 2]').errors, []);
  assert.deepStrictEqual(check('"answer": [1], "showCount": false, "docId": "d1"', '"screen": true').errors, []);
  assert.ok(check('"answer": []').errors.some((e) => /answer \[\] vide/.test(e)));
  assert.ok(check('"answer": [0, 3]').errors.some((e) => /hors limites/.test(e)));
  assert.ok(check('"answer": [1, 1]').errors.some((e) => /en double/.test(e)));
  assert.ok(check('"answer": [0, 1, 2]').errors.some((e) => /au moins une mauvaise/.test(e)));
  assert.ok(check('"answer": 0, "showCount": false').errors.some((e) => /showCount seulement/.test(e)));
  assert.ok(check('"answer": [0], "showCount": "non"').errors.some((e) => /showCount doit être/.test(e)));
  assert.ok(check('"answer": 0, "docId": "nope"').errors.some((e) => /document nope introuvable/.test(e)));
  assert.ok(check('"answer": 0, "letterId": "d1"').errors.some((e) => /letterId seulement sur write/.test(e)));
  assert.ok(check('"answer": 0', '"screen": "oui"').errors.some((e) => /screen doit être/.test(e)));
});

test("js/core/pack-rules.js: the same rules run in the browser (window.PackRules) and in Node", () => {
  const { load } = require("./helpers/env");
  const Browser = load({ scripts: ["js/core/pack-rules.js"] }).window.PackRules;
  const NodeRules = require("../../js/core/pack-rules.js");
  assert.ok(Browser && typeof Browser.validateContent === "function", "window.PackRules is defined by a classic <script>");
  const check = (Rules, pack) => {
    const errors = [], warnings = [];
    const stats = Rules.validateContent(JSON.parse(JSON.stringify(pack)), (m) => errors.push(m), (m) => warnings.push(m));
    return JSON.parse(JSON.stringify({ errors, warnings, stats }));
  };
  const cat = loadCatalog();
  const packs = catalogUnits(cat).slice(0, 3).map((u) => require("../../tools/validate-pack.js").loadPack(path.join(ROOT, "packs", u.path + ".js")));
  const broken = { documents: [{ id: 1, text: "**x" }, { id: 1, text: "y" }], worlds: [{ id: "A B", title: "", exercises: [
    { type: "mcq", prompt: "p", explanation: "e", options: ["a", "A"], answer: 3 },
    { type: "sort", prompt: "p", explanation: "e", categories: [{ id: "c", label: "C" }, { id: "c", label: "D" }], items: [{ text: "t", cat: "z" }, { text: "u", cat: "c" }] },
    { type: "write", prompt: "p", explanation: "e", requirements: [{ id: "r", label: "R", pattern: "(" }], modelAnswer: "x" },
    { type: "nope" }
  ] }] };
  for (const pack of packs.concat([broken])) assert.deepStrictEqual(check(Browser, pack), check(NodeRules, pack));
  const r = check(NodeRules, broken);
  for (const re of [/id 1 en double/, /\*\* \(gras\) non fermé/, /id "A B" invalide/, /title manquant/, /answer 3 hors limites/, /options en double/,
    /catégorie "c" en double/, /cat "z" n'existe pas/, /regex invalide/, /type "nope" inconnu/]) {
    assert.ok(r.errors.some((e) => re.test(e)), re + " — " + r.errors.join(" | "));
  }
  const errs = [];
  assert.strictEqual(NodeRules.checkPath("cm1/maths/les-fractions", (m) => errs.push(m)), true);
  assert.strictEqual(NodeRules.checkPath("CM1/maths", (m) => errs.push(m)), false);
  assert.match(errs.join(" | "), /path "CM1\/maths" invalide/);
});

test("strict format: read as text, JSON only, never run", () => {
  const { parseStrict, formatStrict, MAX_PACK_SIZE } = require("../../js/core/pack-rules.js");
  const body = '{ "path": "cm1/maths/x", "lang": "fr", "worlds": [] }';
  assert.deepStrictEqual(parseStrict("window.registerPack(" + body + ");"), { path: "cm1/maths/x", lang: "fr", worlds: [] });
  assert.ok(parseStrict("\uFEFF/* Source : cahier */\n/* deux */\nwindow.registerPack(" + body + ");\n\n"), "BOM, comments, final blank lines");
  const fails = (text, re) => assert.throws(() => parseStrict(text), re, JSON.stringify(text.slice(0, 80)));
  fails("window.registerPack({ path: \"x\" });", /JSON pur/);
  fails('window.registerPack({ "a": 1, });', /JSON pur/);
  fails("window.registerPack(" + body + "); alert(1);", /format strict/);
  fails("alert(1); window.registerPack(" + body + ");", /format strict attendu/);
  fails("/* a */ alert(1); /* b */ window.registerPack(" + body + ");", /format strict attendu/, "no code hidden between two comments");
  fails("// note\nwindow.registerPack(" + body + ");", /format strict attendu/);
  fails("window.registerPack(" + body + ", alert(1));", /JSON pur/);
  fails("window.registerPack([1]);", /un objet/);
  fails("window.registerPack(" + body + ");" + " ".repeat(MAX_PACK_SIZE), /trop gros/);
  fails("window.GAME_DATA = {};", /format strict attendu/);
  const text = formatStrict({ path: "cm1/maths/x", t: "*/ alert(1) /*" }, "Créé avec l'éditeur */ alert(2) /*");
  assert.deepStrictEqual(parseStrict(text), { path: "cm1/maths/x", t: "*/ alert(1) /*" });
  assert.ok(!/\*\/ alert\(2\)/.test(text), "a header cannot close its comment");
});

test("strict format: every pack and fixture pack file of the repo", () => {
  const { parseStrict } = require("../../js/core/pack-rules.js");
  const list = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => d.isDirectory() ? list(path.join(dir, d.name)) : d.name.endsWith(".js") ? [path.join(dir, d.name)] : []);
  const files = list(path.join(ROOT, "packs")).filter((f) => f !== path.join(ROOT, "packs", "catalog.js")).concat(list(path.join(ROOT, "tests", "fixtures", "packs")), list(FIX).filter((f) => !f.endsWith("registers-twice.js")));
  assert.ok(files.length > 20);
  for (const f of files) assert.doesNotThrow(() => parseStrict(fs.readFileSync(f, "utf8")), path.relative(ROOT, f));
});
