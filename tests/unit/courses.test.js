// Unit tests for js/core/courses.js (« Mes cours »: private courses kept in the browser) and their loading through
// js/core/packs.js, run in a fake browser. A private course is JSON: checked when saved and when read back, never run.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const { load, storage, ROOT } = require("./helpers/env");
const Rules = require("../../js/core/pack-rules.js");

const KEY = "revisionQuest.courses";
const SCRIPTS = ["packs/catalog.js", "js/core/packs.js", "js/core/pack-rules.js", "js/core/courses.js"];
const j = (x) => JSON.parse(JSON.stringify(x)); // objects from the vm realm → plain objects

/** A fake browser with the catalogue, Packs, PackRules and MyCourses. ls: a shared storage() (one browser). */
const env = (ls) => load({ scripts: SCRIPTS, localStorage: ls || storage() });

/** A valid private course, made from a real chapter. */
function course(over) {
  const real = Rules.parseStrict(fs.readFileSync(path.join(ROOT, "packs/cm2/francais/mots-invariables.js"), "utf8"));
  return Object.assign(real, { path: "cm2/francais/mon-cours", meta: { title: "Mon cours", description: "Fait à la maison.", icon: "✏️" } }, over);
}

test("the game page loads the pack rules and « Mes cours » after the pack loader", () => {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const at = (s) => html.indexOf('<script src="' + s + '"></script>');
  assert.ok(at("js/core/packs.js") > 0 && at("js/core/packs.js") < at("js/core/pack-rules.js") && at("js/core/pack-rules.js") < at("js/core/courses.js"));
});

test("save, list, get, load: a private course is played like a chapter, with its own id", async () => {
  const { window: w, localStorage: ls } = env();
  assert.deepStrictEqual(j(w.MyCourses.list()), []);
  const r = j(w.MyCourses.save(course()));
  assert.deepStrictEqual(r, { ok: true, replaced: false, id: "cm2/francais/mon-cours" });
  assert.ok(ls.getItem(KEY), "kept in localStorage");

  const card = j(w.MyCourses.get("cm2/francais/mon-cours"));
  assert.strictEqual(card.title, "Mon cours");
  assert.strictEqual(card.level, "cm2");
  assert.strictEqual(card.subject, "francais");
  assert.strictEqual(card.file, null, "no file: never loaded with <script>");
  assert.strictEqual(card.mine, true);
  assert.strictEqual(card.color, j(w.Packs.subject("francais")).color, "no meta.color: the subject colour");
  assert.strictEqual(card.worldCount, course().worlds.length);
  assert.deepStrictEqual(j(w.Packs.get("cm2/francais/mon-cours")), card, "Packs.get finds it after the catalogue");
  assert.ok(!j(w.Packs.list()).some((p) => p.mine) && !j(w.Packs.units()).some((p) => p.mine), "the official lists stay official");

  const data = await new Promise((resolve, reject) => w.Packs.load("cm2/francais/mon-cours", (e, d) => (e ? reject(e) : resolve(d))));
  assert.strictEqual(data.id, "cm2/francais/mon-cours");
  assert.strictEqual(data.lang, "fr");
  assert.deepStrictEqual(j(data.worlds), course().worlds);
  data.worlds.length = 0; // the game gets a copy: changing it changes nothing stored
  assert.strictEqual(j(w.MyCourses.data("cm2/francais/mon-cours")).worlds.length, course().worlds.length);
});

test("an unknown id is still unknown; an official id loads the official chapter, not the private copy", async () => {
  const { window: w } = env();
  const official = "cm2/francais/mots-invariables";
  assert.ok(j(w.MyCourses.save(course({ path: official }))).ok);
  assert.ok(!j(w.Packs.get(official)).mine, "the catalogue wins");
  const err = await new Promise((resolve) => w.Packs.load("cm2/francais/nulle-part", (e) => resolve(e)));
  assert.strictEqual(j(err).code, "unknown");
});

test("save again with the same id: replaced, not added", () => {
  const { window: w } = env();
  w.MyCourses.save(course());
  const r = j(w.MyCourses.save(course({ meta: { title: "Nouveau titre", description: "x", icon: "📗" } })));
  assert.deepStrictEqual(r, { ok: true, replaced: true, id: "cm2/francais/mon-cours" });
  assert.strictEqual(w.MyCourses.list().length, 1);
  assert.strictEqual(w.MyCourses.get("cm2/francais/mon-cours").title, "Nouveau titre");
});

test("the courses are shared by the tabs of the browser, and read again when another tab changed them", () => {
  const ls = storage();
  const a = env(ls).window, b = env(ls).window;
  assert.strictEqual(b.MyCourses.list().length, 0);
  a.MyCourses.save(course());
  assert.strictEqual(b.MyCourses.list().length, 1);
  assert.ok(b.MyCourses.remove("cm2/francais/mon-cours"));
  assert.strictEqual(a.MyCourses.get("cm2/francais/mon-cours"), null);
  assert.strictEqual(ls.getItem(KEY), null, "nothing left: the key is removed");
  assert.strictEqual(a.MyCourses.remove("cm2/francais/mon-cours"), false);
});

test("refused: invalid course, group path, unknown level or subject; the errors are in French", () => {
  const { window: w, localStorage: ls } = env();
  const refuse = (data, re) => {
    const r = j(w.MyCourses.save(data));
    assert.strictEqual(r.ok, false, JSON.stringify(r));
    assert.ok(r.errors.some((m) => re.test(m)), r.errors.join(" | "));
  };
  refuse(null, /objet/);
  refuse([], /objet/);
  refuse(course({ path: "cm2/francais/mon-cours/groupe" }), /path .* invalide/);
  refuse(course({ path: "../../js/app" }), /path .* invalide/);
  refuse(course({ path: "zz/francais/x" }), /niveau "zz" inconnu/);
  refuse(course({ path: "cm2/chinois/x" }), /matière "chinois" inconnue/);
  refuse(course({ lang: "de" }), /lang/);
  refuse(course({ meta: undefined }), /meta manquant/);
  refuse(course({ worlds: [] }), /worlds/);
  refuse(course({ worlds: [{ id: 1, title: "W", exercises: [{ type: "eval" }] }] }), /type/);
  assert.strictEqual(ls.getItem(KEY), null, "nothing written");
});

test("limits: size of one course, number of courses", () => {
  const { window: w } = env();
  const big = course();
  big.worlds[0].lesson = { points: ["x".repeat(w.MyCourses.MAX_COURSE_CHARS)] };
  assert.match(j(w.MyCourses.save(big)).errors[0], /trop gros/);
  for (let i = 0; i < w.MyCourses.MAX_COURSES; i++) assert.ok(j(w.MyCourses.save(course({ path: "cm2/francais/c" + i }))).ok);
  const r = j(w.MyCourses.save(course({ path: "cm2/francais/de-trop" })));
  assert.strictEqual(r.ok, false);
  assert.match(r.errors[0], /30 cours au plus/);
  assert.ok(j(w.MyCourses.save(course({ path: "cm2/francais/c3" }))).ok, "replacing one is still possible");
});

test("a full browser storage: refused with a message, the courses already there stay", () => {
  const ls = storage();
  const { window: w } = env(ls);
  w.MyCourses.save(course());
  const before = ls.getItem(KEY);
  ls.setItem = () => { throw new Error("QuotaExceededError"); };
  const r = j(w.MyCourses.save(course({ path: "cm2/francais/autre" })));
  assert.strictEqual(r.ok, false);
  assert.match(r.errors[0], /plus de place/);
  assert.strictEqual(ls.getItem(KEY), before);
  assert.strictEqual(w.MyCourses.list().length, 1);
});

test("only plain JSON is kept: unknown keys dropped, no function, no prototype key, letters → documents", () => {
  const { window: w, localStorage: ls } = env();
  const c = course({ script: "alert(1)", onload: "x", letters: [{ id: "l1", title: "Lettre", text: "Bonjour." }] });
  delete c.documents;
  c.worlds[0].run = () => { throw new Error("must never run"); };
  assert.ok(j(w.MyCourses.save(c)).ok);
  const stored = JSON.parse(ls.getItem(KEY)).courses[0].pack;
  assert.deepStrictEqual(Object.keys(stored).sort(), ["documents", "lang", "meta", "path", "worlds"]);
  assert.strictEqual(stored.documents[0].id, "l1");
  assert.ok(!("run" in stored.worlds[0]));

  // a stored value with __proto__ keys does not pollute anything
  ls.setItem(KEY, ls.getItem(KEY).replace('"meta":{', '"meta":{"__proto__":{"polluted":true},"constructor":{"x":1},'));
  assert.strictEqual(w.MyCourses.get("cm2/francais/mon-cours").title, "Mon cours");
  assert.deepStrictEqual(Object.keys(j(w.MyCourses.pack("cm2/francais/mon-cours").meta)).sort(), ["description", "icon", "title"]);
  assert.strictEqual(({}).polluted, undefined);
  assert.strictEqual(w.Object.prototype.polluted, undefined);
});

test("damaged storage: a broken value is kept aside and ignored; a damaged course is left out, the others stay", () => {
  const ls = storage({ [KEY]: "{not json" });
  const { window: w } = env(ls);
  assert.deepStrictEqual(j(w.MyCourses.list()), []);
  assert.strictEqual(ls.getItem(KEY + ".corrupt"), "{not json");

  const good = course();
  const bad = course({ path: "cm2/francais/abime", worlds: "nope" });
  const evil = course({ path: "cm2/francais/piege" });
  evil.worlds[0].exercises[0] = { type: "mcq", prompt: "<img src=x onerror=alert(1)>", options: ["a"], answer: 9 };
  ls.setItem(KEY, JSON.stringify({ version: 1, courses: [{ pack: good, saved: 5 }, { pack: bad, saved: 6 }, { pack: evil, saved: 7 }, { pack: good, saved: 8 }, "x", null] }));
  assert.deepStrictEqual(j(w.MyCourses.list().map((c) => c.id)), ["cm2/francais/mon-cours"], "checked again when read back; first copy wins");
  assert.strictEqual(w.MyCourses.data("cm2/francais/piege"), null);

  ls.setItem(KEY, JSON.stringify({ version: 2, courses: [{ pack: good, saved: 1 }] }));
  assert.deepStrictEqual(j(w.MyCourses.list()), [], "unknown version: ignored");
});

test("a private course is never executed: no <script> is created to load it", async () => {
  const { window: w } = env();
  w.MyCourses.save(course());
  // the fake document throws on createElement: Packs.load must answer without it
  const data = await new Promise((resolve, reject) => w.Packs.load("cm2/francais/mon-cours", (e, d) => (e ? reject(e) : resolve(d))));
  assert.ok(data.worlds.length);
  assert.strictEqual(w.registerPack({ path: "cm2/francais/mon-cours", worlds: data.worlds }), false, "registerPack ignores a private id");
});

test("most recently saved first", () => {
  const { window: w } = env();
  const now = Date.now;
  try {
    let t = 1000;
    w.Date.now = () => t;
    w.MyCourses.save(course({ path: "cm2/francais/a" }));
    t = 3000; w.MyCourses.save(course({ path: "cm2/francais/b" }));
    t = 2000; w.MyCourses.save(course({ path: "cm2/francais/c" }));
  } finally { Date.now = now; }
  assert.deepStrictEqual(j(w.MyCourses.list().map((c) => c.id)), ["cm2/francais/b", "cm2/francais/c", "cm2/francais/a"]);
});
