// Unit tests for packs/catalog.js + js/core/packs.js (catalogue validation, pack paths), run in a fake browser.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const path = require("path");
const { load, ROOT } = require("./helpers/env");
const { validatePack } = require("../../tools/validate-pack.js");

const j = (x) => JSON.parse(JSON.stringify(x)); // objects from the vm realm → plain objects

/** window.Packs built from the real packs/catalog.js, or from a given catalogue. */
const real = () => load({ scripts: ["packs/catalog.js", "js/core/packs.js"] }).window.Packs;
const withCatalog = (CATALOG) => load({ scripts: ["js/core/packs.js"], globals: { CATALOG } }).window.Packs;

const SUBJECTS = [{ id: "anglais", label: "Anglais", icon: "🇬🇧", color: "#EC4899" }, { id: "histoire", label: "Histoire", color: "#B45309" }];
const LEVELS = [{ id: "4e", label: "4e", order: 8 }, { id: "cm2", label: "CM2", order: 5 }];
const entry = (over) => Object.assign({ path: "4e/anglais/ok", title: "OK", lang: "en", worldCount: 2 }, over);
const ids = (P) => j(P.list().map((p) => p.id));

test("the real catalogue: only real packs (no test pack), id = path, level / subject / file derived from it", () => {
  const P = real();
  assert.ok(ids(P).includes("4e/anglais/giving-advice"));
  assert.ok(!ids(P).some((id) => /sample|test-/.test(id)), "no test pack in the real catalogue");
  const p = j(P.get("4e/anglais/giving-advice"));
  assert.strictEqual(p.level, "4e");
  assert.strictEqual(p.subject, "anglais");
  assert.strictEqual(p.file, "packs/4e/anglais/giving-advice.js");
  assert.strictEqual(p.lang, "en");
  assert.strictEqual(p.worldCount, 8);
  assert.strictEqual(P.sampleMode, undefined, "no ?sample=1 mode any more");
  assert.deepStrictEqual(j(P.levels().map((l) => l.order)), j(P.levels().map((l) => l.order)).sort((a, b) => a - b), "levels sorted by order");
});

test("pack paths: only <niveau>/<matiere>/<cours> made of [a-z0-9-] are kept (no URL, no .., no upper case)", () => {
  const hostile = [
    "https://evil.example/x", "//evil.example/packs/x", "../js/app", "4e/anglais/../../js/app", "flat", "4e/anglais",
    "4e/anglais/Evil-Id", "4e/anglais/a b", "4e/<img>/y", "4e/anglais/x.js", "4e/anglais/x/y", "/4e/anglais/x", "4e/anglais/x/",
    "4e/anglais/" + "a".repeat(61), "4e/" + "a".repeat(31) + "/x", "", null, 42
  ];
  const P = withCatalog({ subjects: SUBJECTS, levels: LEVELS, packs: hostile.map((p) => entry({ path: p })).concat([entry({ path: "4e/anglais/" + "a".repeat(60) })]) });
  assert.deepStrictEqual(ids(P), ["4e/anglais/" + "a".repeat(60)]);
});

test("catalogue: unknown level or subject dropped, duplicates dropped (first wins), invalid level / subject ids dropped", () => {
  const P = withCatalog({
    subjects: SUBJECTS.concat([{ id: "Bad Id", label: "x" }, null]),
    levels: LEVELS.concat([{ id: "../x", label: "x" }]),
    packs: [
      entry({ path: "zz/anglais/a" }), entry({ path: "4e/maths/a" }),
      entry({ path: "cm2/histoire/a", title: "first" }), entry({ path: "cm2/histoire/a", title: "second" }), null, "x"
    ]
  });
  assert.deepStrictEqual(ids(P), ["cm2/histoire/a"]);
  assert.strictEqual(P.get("cm2/histoire/a").title, "first");
  assert.deepStrictEqual(j(P.subjects().map((s) => s.id)), ["anglais", "histoire"]);
  assert.deepStrictEqual(j(P.levels().map((l) => l.id)), ["cm2", "4e"], "sorted by order");
});

test("catalogue fields: colours whitelisted (fallback to the subject colour), lang fr by default, texts capped, worldCount clamped", () => {
  const P = withCatalog({
    subjects: SUBJECTS.concat([{ id: "maths", label: "Maths", color: "red" }]),
    levels: LEVELS,
    packs: [
      entry({ path: "4e/anglais/a", color: "red;background:url(x)", lang: "de", worldCount: "abc", title: "T".repeat(200), description: "D".repeat(500) }),
      entry({ path: "4e/anglais/b", color: "#abc", worldCount: 1000 }),
      entry({ path: "4e/maths/c" }),
      entry({ path: "4e/anglais/d", worldCount: -3, icon: "" })
    ]
  });
  const [a, b, c, d] = ["a", "b", "c", "d"].map((k) => j(P.get(k === "c" ? "4e/maths/c" : "4e/anglais/" + k)));
  assert.strictEqual(a.color, "#EC4899", "invalid colour → subject colour");
  assert.strictEqual(a.lang, "fr");
  assert.strictEqual(a.worldCount, 0);
  assert.strictEqual(a.title.length, 80);
  assert.strictEqual(a.description.length, 240);
  assert.strictEqual(b.color, "#abc");
  assert.strictEqual(b.worldCount, 100);
  assert.strictEqual(c.color, "#7C4DFF", "invalid subject colour → default colour");
  assert.strictEqual(d.worldCount, 0);
  assert.strictEqual(d.icon, "📘", "default icon");
});

test("no catalogue at all: empty lists, no crash", () => {
  const P = withCatalog(undefined);
  assert.deepStrictEqual([P.list().length, P.subjects().length, P.levels().length], [0, 0, 0]);
});

test("registerPack is ignored unless that pack is being loaded; unknown pack → \"unknown\" error", () => {
  const env = load({ scripts: ["packs/catalog.js", "js/core/packs.js"] });
  const W = env.window;
  assert.strictEqual(W.registerPack({ path: "4e/anglais/giving-advice", worlds: [{ id: 1, exercises: [] }] }), false);
  assert.strictEqual(W.registerPack(null), false);
  assert.strictEqual(W.Packs.loaded("4e/anglais/giving-advice"), null);
  let err = null;
  W.Packs.load("../js/app", (e) => { err = e; });
  assert.strictEqual(err && err.code, "unknown");
  assert.match(err.message, /n'existe pas/);
});

test("the e2e test packs (tests/fixtures/packs) are valid packs for their catalogue entries", () => {
  const FIX = path.join(ROOT, "tests", "fixtures");
  for (const [file, entryFile] of [["packs/5e/anglais/sample.js", "catalog-sample-entry.json"], ["packs/cm2/histoire/test-revolution.js", "catalog-test-entry.json"]]) {
    const e = require(path.join(FIX, entryFile));
    const catalog = { subjects: SUBJECTS, levels: LEVELS.concat([{ id: "5e", label: "5e", order: 7 }]), packs: [e] };
    const r = validatePack(path.join(FIX, file), catalog, { rel: "packs/" + e.path + ".js" });
    assert.deepStrictEqual(r.errors, [], file + ": " + r.errors.join(" | "));
  }
});

test("catalogue groups: one card per chapter, each group is a playable pack <cours>/<groupe> with its own file", () => {
  const P = withCatalog({ subjects: SUBJECTS, levels: LEVELS, packs: [
    entry({ path: "cm2/histoire/dictee", title: "Dictée", lang: "fr", worldCount: 99, groups: [
      { id: "g1", label: "Groupe 1", difficulty: 1, worldCount: 3 },
      { id: "g2", label: "Groupe 2", difficulty: 9, worldCount: 5 },
      { id: "G 3", label: "bad id" }, { id: "g1", label: "duplicate" }, { id: "../x" }, null
    ] }),
    entry({ path: "cm2/histoire/empty", groups: [] }),
    entry({ path: "4e/anglais/plain" })
  ] });
  assert.deepStrictEqual(ids(P), ["cm2/histoire/dictee", "4e/anglais/plain"], "a chapter without valid group is dropped");
  const ch = j(P.get("cm2/histoire/dictee"));
  assert.strictEqual(ch.file, null, "a grouped chapter has no file");
  assert.strictEqual(ch.worldCount, 8, "worldCount = sum of the groups");
  assert.deepStrictEqual(ch.groups.map((g) => g.id), ["cm2/histoire/dictee/g1", "cm2/histoire/dictee/g2"]);
  const g2 = j(P.get("cm2/histoire/dictee/g2"));
  assert.strictEqual(g2.file, "packs/cm2/histoire/dictee/g2.js");
  assert.strictEqual(g2.parent, "cm2/histoire/dictee");
  assert.strictEqual(g2.title, "Dictée · Groupe 2");
  assert.strictEqual(g2.difficulty, 5, "difficulty clamped to 1-5");
  assert.strictEqual(g2.lang, "fr");
  assert.deepStrictEqual(j(P.units().map((u) => u.id)), ["cm2/histoire/dictee/g1", "cm2/histoire/dictee/g2", "4e/anglais/plain"]);
});

test("catalogue groups: only a group can be registered and loaded, never the chapter itself", () => {
  const { window: W } = load({ scripts: ["js/core/packs.js"], globals: { CATALOG: { subjects: SUBJECTS, levels: LEVELS, packs: [
    entry({ path: "cm2/histoire/dictee", groups: [{ id: "g1", label: "Groupe 1", worldCount: 1 }] })
  ] } } });
  const errs = [];
  W.Packs.load("cm2/histoire/dictee", (e) => errs.push(e && e.code));
  assert.deepStrictEqual(errs, ["unknown"]);
  assert.strictEqual(W.registerPack({ path: "cm2/histoire/dictee", worlds: [{ id: 1, exercises: [] }] }), false);
});
