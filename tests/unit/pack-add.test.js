// Unit tests for the course information (meta, js/core/pack-rules.js) and tools/pack-add.js (node:test, no dependency).
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const Rules = require("../../js/core/pack-rules.js");
const { addPack } = require("../../tools/pack-add.js");
const { buildCatalog, formatCatalog } = require("../../tools/catalog.js");
const { main: writeCatalog } = require("../../tools/catalog.js");
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

/** A throwaway copy of the repo part pack:add touches: packs/. */
function sandbox() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rq-pack-add-test-"));
  fs.cpSync(path.join(ROOT, "packs"), path.join(dir, "packs"), { recursive: true });
  const file = (name, pack, text) => {
    const f = path.join(dir, name);
    fs.writeFileSync(f, text != null ? text : Rules.formatStrict(pack, "Pack de test"));
    return f;
  };
  return {
    dir, file,
    catalog: () => loadCatalog(dir),
    listing: () => fs.readdirSync(path.join(dir, "packs"), { recursive: true }).sort().join("\n"),
    add: (f, opts = {}) => addPack(f, { root: dir, ...opts }),
    done: () => fs.rmSync(dir, { recursive: true, force: true })
  };
}
const newPack = (over = {}) => ({ ...VALID, path: "cm1/maths/ajout-de-test", meta: META, ...over });

test("catalogue: built from the packs, sorted by path; tools/catalog.js writes it for another server", () => {
  const { catalog, errors } = buildCatalog();
  assert.deepStrictEqual(errors, []);
  const paths = catalog.packs.map((p) => p.path);
  assert.deepStrictEqual(paths, [...paths].sort(), "sorted by path: a diff shows only real changes");
  const box = sandbox();
  const log = console.log; console.log = () => {};
  try {
    assert.strictEqual(writeCatalog([], box.dir), 0);
    assert.strictEqual(fs.readFileSync(path.join(box.dir, "packs", "catalog.js"), "utf8"), formatCatalog(catalog));
    fs.writeFileSync(path.join(box.dir, "packs", "levels-subjects.json"), "{ broken");
    fs.rmSync(path.join(box.dir, "packs", "catalog.js"));
    assert.strictEqual(writeCatalog([], box.dir), 1, "broken source: refused");
    assert.ok(!fs.existsSync(path.join(box.dir, "packs", "catalog.js")), "nothing written");
  } finally { console.log = log; box.done(); }
});

test("pack:add: every real pack is already in place (nothing written)", () => {
  const box = sandbox();
  try {
    const before = box.listing();
    for (const p of loadCatalog().packs) {
      for (const id of p.groups ? p.groups.map((g) => p.path + "/" + g.id) : [p.path]) {
        const r = box.add(path.join(box.dir, "packs", id + ".js"));
        assert.deepStrictEqual([r.ok, r.action, r.errors], [true, "déjà à jour", []], id);
      }
    }
    assert.strictEqual(box.listing(), before, "no file written (packs/catalog.js neither)");
  } finally { box.done(); }
});

test("pack:add: a new chapter is copied to packs/ and appears in the catalogue; then updated in place", () => {
  const box = sandbox();
  try {
    const r = box.add(box.file("telecharge.js", newPack()));
    assert.deepStrictEqual([r.ok, r.action, r.target, r.errors], [true, "ajouté", "packs/cm1/maths/ajout-de-test.js", []]);
    assert.ok(fs.existsSync(path.join(box.dir, "packs", "cm1", "maths", "ajout-de-test.js")));
    const cat = box.catalog();
    assert.deepStrictEqual(cat.packs.find((p) => p.path === "cm1/maths/ajout-de-test"), { path: "cm1/maths/ajout-de-test", ...META, lang: "fr", worldCount: 2 });

    assert.strictEqual(box.add(path.join(box.dir, "packs", "cm1", "maths", "ajout-de-test.js")).action, "déjà à jour");

    const r2 = box.add(box.file("v2.js", newPack({ meta: { ...META, title: "Nouveau titre" } })), { replace: true });
    assert.deepStrictEqual([r2.ok, r2.action], [true, "mis à jour"]);
    const cat2 = box.catalog();
    assert.strictEqual(cat2.packs.length, cat.packs.length, "updated, not added twice");
    assert.strictEqual(cat2.packs.find((p) => p.path === "cm1/maths/ajout-de-test").title, "Nouveau titre");
  } finally { box.done(); }
});

test("catalogue: a chapter « par groupes » is built from its chapter.json and its group files", () => {
  const box = sandbox();
  try {
    const dir = path.join(box.dir, "packs", "cm1", "maths", "groupes");
    fs.mkdirSync(dir, { recursive: true });
    const info = { title: "Par groupes", description: "Deux groupes.", icon: "👥", groups: [{ id: "b", label: "Groupe B", difficulty: 2 }, { id: "a", label: "Groupe A" }] };
    fs.writeFileSync(path.join(dir, "chapter.json"), JSON.stringify(info));
    for (const id of ["a", "b"]) fs.writeFileSync(path.join(dir, id + ".js"), Rules.formatStrict({ ...VALID, path: "cm1/maths/groupes/" + id, meta: undefined }, "Groupe"));
    const { catalog, errors } = buildCatalog(box.dir);
    assert.deepStrictEqual(errors, []);
    assert.deepStrictEqual(catalog.packs.find((p) => p.path === "cm1/maths/groupes"), {
      path: "cm1/maths/groupes", title: "Par groupes", description: "Deux groupes.", icon: "👥", lang: "fr",
      groups: [{ id: "b", label: "Groupe B", difficulty: 2, worldCount: 2 }, { id: "a", label: "Groupe A", worldCount: 2 }]
    }, "groups in chapter.json order");
    fs.writeFileSync(path.join(dir, "a.js"), Rules.formatStrict({ ...VALID, path: "cm1/maths/groupes/a", lang: "en" }, "Groupe"));
    assert.match(buildCatalog(box.dir).errors.join(" | "), /même lang/);
    fs.writeFileSync(path.join(box.dir, "packs", "cm1", "maths", "groupes.js"), Rules.formatStrict(newPack({ path: "cm1/maths/groupes" }), "x"));
    assert.match(buildCatalog(box.dir).errors.join(" | "), /aussi un dossier/);
    fs.rmSync(path.join(dir, "chapter.json"));
    assert.match(buildCatalog(box.dir).errors.join(" | "), /chapter\.json : fichier introuvable/);
  } finally { box.done(); }
});

test("pack:add: refusals write nothing", () => {
  const box = sandbox();
  try {
    const before = box.listing();
    const refused = (f, re, opts) => {
      const r = box.add(f, opts);
      assert.strictEqual(r.ok, false, f);
      assert.match(r.errors.join(" | "), re);
      assert.strictEqual(box.listing(), before, "nothing written");
    };
    refused(box.file("a.js", null, "window.registerPack({ path: \"x\" });"), /JSON pur/);
    refused(box.file("b.js", null, "window.registerPack(" + JSON.stringify(newPack()) + "); alert(1);"), /format strict/);
    refused(box.file("c.js", newPack({ meta: undefined })), /meta manquant/);
    refused(box.file("d.js", newPack({ meta: { ...META, basedOn: "cm2/francais/mots-invariables" } })), /copie privée/);
    refused(box.file("e.js", newPack({ path: "cm2/francais/dictee-statue-de-la-liberte/g9" })), /absent du catalogue \(ajoute le groupe/);
    refused(box.file("f.js", newPack({ path: "cm2/francais/dictee-statue-de-la-liberte" })), /aussi un dossier/);
    refused(box.file("g.js", newPack({ path: "ms/maths/ajout" })), /niveau "ms" inconnu/);
    refused(box.file("h.js", newPack({ path: "cm1/latin/ajout" })), /matière "latin" inconnue/);
    refused(box.file("i.js", newPack({ worlds: [] })), /worlds doit être un tableau non vide/);
    refused(box.file("j.js", newPack({ lang: "de" })), /lang doit être/);
    // an existing different file needs --replace
    assert.ok(box.add(box.file("k.js", newPack())).ok);
    const after = box.listing();
    const r = box.add(box.file("l.js", newPack({ meta: { ...META, title: "Autre" } })));
    assert.match(r.errors.join(" | "), /existe déjà et il est différent : relance avec --replace/);
    assert.strictEqual(box.listing(), after);
  } finally { box.done(); }
});

test("validator: meta must match the catalogue entry", () => {
  const box = sandbox();
  try {
    const f = box.file("m.js", newPack());
    const cat = { subjects: [{ id: "maths", label: "Maths" }], levels: [{ id: "cm1", label: "CM1", order: 4 }],
      packs: [{ path: "cm1/maths/ajout-de-test", ...META, title: "Ancien titre", lang: "fr", worldCount: 1 }] };
    const r = validatePack(f, cat, { rel: "packs/cm1/maths/ajout-de-test.js" });
    assert.match(r.errors.join(" | "), /catalogue : title "Ancien titre" ≠ meta\.title "Ajout de test"/);
  } finally { box.done(); }
});
