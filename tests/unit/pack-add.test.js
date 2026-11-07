// Unit tests for the course information (meta, js/pack-rules.js) and tools/pack-add.js (node:test, no dependency).
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const Rules = require("../../js/pack-rules.js");
const { addPack, writeEntry } = require("../../tools/pack-add.js");
const { loadCatalog, validatePack } = require("../../tools/validate-pack.js");

const ROOT = path.resolve(__dirname, "..", "..");
const VALID = Rules.parseStrict(fs.readFileSync(path.join(ROOT, "tests", "fixtures", "unit", "valid.js"), "utf8"));
const META = { title: "Ajout de test", description: "Un chapitre ajouté par pack:add.", icon: "🧪", color: "#2563EB" };

const metaErrors = (meta) => { const e = []; Rules.validateMeta(meta, (m) => e.push(m)); return e.join(" | "); };

test("meta: required fields, limits, plain text, licence, pseudonym, basedOn", () => {
  assert.strictEqual(metaErrors(META), "");
  assert.strictEqual(metaErrors({ ...META, license: "CC-BY-SA-4.0", author: "Mamie Jo", basedOn: "cm2/francais/mots-invariables" }), "");
  assert.match(metaErrors(undefined), /meta manquant/);
  assert.match(metaErrors([]), /meta doit être un objet/);
  assert.match(metaErrors({ ...META, title: "" }), /meta\.title manquant/);
  assert.match(metaErrors({ ...META, description: "x".repeat(241) }), /meta\.description trop long \(241/);
  assert.match(metaErrors({ ...META, title: "Les **fractions**" }), /meta\.title : texte simple/);
  assert.match(metaErrors({ ...META, color: "red" }), /meta\.color "red" invalide/);
  assert.match(metaErrors({ ...META, license: "MIT" }), /meta\.license "MIT" inconnue/);
  assert.match(metaErrors({ ...META, author: "x".repeat(41) }), /meta\.author/);
  assert.match(metaErrors({ ...META, basedOn: "cm2/francais" }), /meta\.basedOn/);
  assert.match(metaErrors({ ...META, level: "cm1" }), /champ "level" inconnu/);
});

test("meta: catalogue entry built from the pack", () => {
  const pack = { path: "cm1/maths/x", lang: "fr", meta: META, worlds: [{}, {}] };
  assert.deepStrictEqual(Rules.catalogEntry(pack), { path: "cm1/maths/x", ...META, lang: "fr", worldCount: 2 });
  const noColor = { ...META }; delete noColor.color;
  assert.ok(!("color" in Rules.catalogEntry({ ...pack, meta: noColor })), "no colour: the subject colour is used");
});

/** A throwaway copy of the repo parts pack:add touches: js/catalog.js and packs/. */
function sandbox() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rq-pack-add-test-"));
  fs.mkdirSync(path.join(dir, "js"));
  fs.copyFileSync(path.join(ROOT, "js", "catalog.js"), path.join(dir, "js", "catalog.js"));
  fs.cpSync(path.join(ROOT, "packs"), path.join(dir, "packs"), { recursive: true });
  const file = (name, pack, text) => {
    const f = path.join(dir, name);
    fs.writeFileSync(f, text != null ? text : Rules.formatStrict(pack, "Pack de test"));
    return f;
  };
  return {
    dir, file,
    catalogFile: path.join(dir, "js", "catalog.js"),
    catalogText: () => fs.readFileSync(path.join(dir, "js", "catalog.js"), "utf8"),
    add: (f, opts = {}) => addPack(f, { root: dir, catalogFile: path.join(dir, "js", "catalog.js"), ...opts }),
    done: () => fs.rmSync(dir, { recursive: true, force: true })
  };
}
const newPack = (over = {}) => ({ ...VALID, path: "cm1/maths/ajout-de-test", meta: META, ...over });

test("pack:add: every real chapter is already up to date (nothing written)", () => {
  const box = sandbox();
  try {
    const before = box.catalogText();
    for (const p of loadCatalog().packs.filter((e) => !e.groups)) {
      const r = addPack(path.join(ROOT, "packs", p.path + ".js"), { root: ROOT, catalogFile: box.catalogFile });
      assert.deepStrictEqual([r.ok, r.action, r.errors], [true, "déjà à jour", []], p.path);
    }
    assert.strictEqual(box.catalogText(), before);
  } finally { box.done(); }
});

test("pack:add: a new chapter is copied to packs/ and appended to the catalogue, comments kept; then updated in place", () => {
  const box = sandbox();
  try {
    const before = box.catalogText();
    const r = box.add(box.file("telecharge.js", newPack()));
    assert.deepStrictEqual([r.ok, r.action, r.target, r.errors], [true, "ajouté", "packs/cm1/maths/ajout-de-test.js", []]);
    assert.ok(fs.existsSync(path.join(box.dir, "packs", "cm1", "maths", "ajout-de-test.js")));
    const text = box.catalogText();
    assert.ok(text.startsWith(before.slice(0, before.indexOf("window.CATALOG"))), "header comment kept");
    assert.strictEqual((text.match(/\/\*/g) || []).length, (before.match(/\/\*/g) || []).length, "every comment kept");
    const cat = loadCatalog(box.catalogFile);
    const last = cat.packs[cat.packs.length - 1];
    assert.deepStrictEqual(JSON.parse(JSON.stringify(last)), { path: "cm1/maths/ajout-de-test", ...META, lang: "fr", worldCount: 1 });

    assert.strictEqual(box.add(path.join(box.dir, "packs", "cm1", "maths", "ajout-de-test.js")).action, "déjà à jour");

    const r2 = box.add(box.file("v2.js", newPack({ meta: { ...META, title: "Nouveau titre" } })), { replace: true });
    assert.deepStrictEqual([r2.ok, r2.action], [true, "mis à jour"]);
    const cat2 = loadCatalog(box.catalogFile);
    assert.strictEqual(cat2.packs.length, cat.packs.length, "updated in place, not added twice");
    assert.strictEqual(cat2.packs[cat2.packs.length - 1].title, "Nouveau titre");
  } finally { box.done(); }
});

test("pack:add: refusals write nothing", () => {
  const box = sandbox();
  try {
    const before = box.catalogText();
    const refused = (f, re, opts) => {
      const r = box.add(f, opts);
      assert.strictEqual(r.ok, false, f);
      assert.match(r.errors.join(" | "), re);
      assert.strictEqual(box.catalogText(), before, "catalogue untouched");
    };
    refused(box.file("a.js", null, "window.registerPack({ path: \"x\" });"), /JSON pur/);
    refused(box.file("b.js", null, "window.registerPack(" + JSON.stringify(newPack()) + "); alert(1);"), /format strict/);
    refused(box.file("c.js", newPack({ meta: undefined })), /meta manquant/);
    refused(box.file("d.js", newPack({ meta: { ...META, basedOn: "cm2/francais/mots-invariables" } })), /copie privée/);
    refused(box.file("e.js", newPack({ path: "cm2/francais/dictee-statue-de-la-liberte/g9" })), /est un groupe/);
    refused(box.file("f.js", newPack({ path: "cm2/francais/dictee-statue-de-la-liberte" })), /par groupes/);
    refused(box.file("g.js", newPack({ path: "ms/maths/ajout" })), /niveau "ms" inconnu/);
    refused(box.file("h.js", newPack({ path: "cm1/latin/ajout" })), /matière "latin" inconnue/);
    refused(box.file("i.js", newPack({ worlds: [] })), /worlds doit être un tableau non vide/);
    refused(box.file("j.js", newPack({ lang: "de" })), /lang doit être/);
    assert.ok(!fs.existsSync(path.join(box.dir, "packs", "cm1")), "no pack file copied");
    // an existing different file needs --replace
    assert.ok(box.add(box.file("k.js", newPack())).ok);
    const after = box.catalogText();
    const r = box.add(box.file("l.js", newPack({ meta: { ...META, title: "Autre" } })));
    assert.match(r.errors.join(" | "), /existe déjà et il est différent : relance avec --replace/);
    assert.strictEqual(box.catalogText(), after);
  } finally { box.done(); }
});

test("pack:add: writeEntry keeps the layout and refuses an unusual catalogue", () => {
  const src = 'window.CATALOG = {\n  packs: [\n    {\n      path: "a/b/c",\n      title: "A"\n    },\n    {\n      path: "a/b/d",\n      title: "D"\n    }\n  ]\n};\n';
  const updated = writeEntry(src, { path: "a/b/c", title: "Z" });
  assert.strictEqual(updated, src.replace('title: "A"', 'title: "Z"'));
  const added = writeEntry(src, { path: "a/b/e", title: "E" });
  assert.ok(added.endsWith('    {\n      path: "a/b/d",\n      title: "D"\n    },\n    {\n      path: "a/b/e",\n      title: "E"\n    }\n  ]\n};\n'));
  assert.throws(() => writeEntry("window.CATALOG = { packs: [] };", { path: "a/b/e" }), /introuvable/);
});

test("validator: meta must match the catalogue entry", () => {
  const box = sandbox();
  try {
    const f = box.file("m.js", newPack());
    const cat = { subjects: [{ id: "maths", label: "Maths" }], levels: [{ id: "cm1", label: "CM1", order: 4 }],
      packs: [{ path: "cm1/maths/ajout-de-test", ...META, title: "Ancien titre", lang: "fr", worldCount: 1 }] };
    const r = validatePack(f, cat, { rel: "packs/cm1/maths/ajout-de-test.js" });
    assert.match(r.errors.join(" | "), /catalogue : title "Ancien titre" ≠ meta\.title "Ajout de test" \(lance : mise run pack:add/);
  } finally { box.done(); }
});
