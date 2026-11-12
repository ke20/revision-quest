// Course editor (js/editor/model/): draft operations, course id, sentence labels, export, messages → plan nodes.
// The editor files are ES modules (js/editor/package.json: "type": "module"), imported here without a browser.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const path = require("path");
const { pathToFileURL } = require("url");
const Rules = require("../../js/core/pack-rules.js");

const ROOT = path.resolve(__dirname, "..", "..");
const load = (rel) => import(pathToFileURL(path.join(ROOT, "js", "editor", "model", rel)).href);

/** Errors of one exercise checked alone by the shared rules. */
function exerciseErrors(ex) {
  const errors = [];
  Rules.validateExercise(ex, "ex", { err: (m) => errors.push(m), warn: () => {} });
  return errors;
}

/** What an author types in each form, field by field. */
const FILL = {
  mcq(e) { e.prompt = "Quelle est la capitale ?"; e.options = ["Paris", "Lyon", "Nice"]; e.answer = 0; },
  sort(e) {
    e.prompt = "Range les mots."; e.categories[0].label = "Noms"; e.categories[1].label = "Verbes";
    e.items = [{ text: "chat", cat: "c1" }, { text: "courir", cat: "c2" }, { text: "table", cat: "c1" }, { text: "manger", cat: "c2" }];
  },
  match(e) { e.prompt = "Relie."; e.pairs = [{ left: "cat", right: "chat" }, { left: "dog", right: "chien" }, { left: "bird", right: "oiseau" }]; },
  order(e, T) { e.prompt = "Remets dans l'ordre."; e.words = T.splitWords("Le chat dort."); e.translation = "The cat sleeps."; },
  fill(e) { e.prompt = "Complète."; e.sentence = "Le chat ___ sur le lit."; e.answers = ["dort", ""]; },
  spot(e, T) { e.prompt = "Touche le mot faux."; e.tokens = T.splitWords("Les élèves écoute la maîtresse."); e.wrongIndex = 2; e.correction = "écoutent"; },
  write(e) {
    e.prompt = "Raconte ta journée."; e.minWords = 5;
    e.requirements = [{ id: "r1", label: "Parle de l'école", pattern: "école" }]; e.minRequirements = 1;
    e.modelAnswer = "Ce matin je suis allé à l'école avec mon frère.";
  }
};

test("every exercise type: the empty template is refused, the filled one passes the pack rules once exported", async () => {
  const { TYPE_LABELS, emptyExercise, typeLabel } = await load("templates.js");
  const T = await load("text.js");
  const D = await load("draft.js");
  const X = await load("export.js");
  assert.deepStrictEqual(TYPE_LABELS.map((t) => t[0]), Rules.TYPES, "the 7 types of the rules, in the same order");
  assert.strictEqual(typeLabel("spot"), "Trouver l'erreur");
  for (const [type] of TYPE_LABELS) {
    const ex = emptyExercise(type);
    assert.strictEqual(ex.type, type);
    assert.ok(exerciseErrors(ex).length > 0, type + ": an empty exercise is not valid yet");
    FILL[type](ex, T);
    ex.explanation = "Parce que.";
    const draft = D.newDraft();
    draft.pack.worlds[0].exercises.push(ex);
    const out = X.exportPack(draft).worlds[0].exercises[0];
    assert.deepStrictEqual(exerciseErrors(out), [], type + " filled");
    assert.ok(!("hint" in out), type + ": the empty hint is not written");
  }
});

test("slugify: course id from a title", async () => {
  const { slugify } = await load("text.js");
  assert.strictEqual(slugify("Les Fractions : moitiés & tiers !"), "les-fractions-moities-tiers");
  assert.strictEqual(slugify("  Œuvre d'été  "), "oeuvre-d-ete");
  assert.strictEqual(slugify("😀"), "");
  assert.ok(slugify("a".repeat(80)).length === 60);
  assert.strictEqual(slugify("a b ".repeat(40)).slice(-1) !== "-", true, "no dash at the end after cutting");
});

test("splitWords: labels like the packs (punctuation alone, apostrophes and decimals kept)", async () => {
  const { splitWords, joinWords } = await load("text.js");
  assert.deepStrictEqual(splitWords("Les élèves écoute la maîtresse."), ["Les", "élèves", "écoute", "la", "maîtresse", "."]);
  assert.deepStrictEqual(splitWords("Qu'elle est belle, l'arbre ?"), ["Qu'elle", "est", "belle", ",", "l'arbre", "?"]);
  assert.deepStrictEqual(splitWords("« Bonjour », dit-il : 0,75 kg."), ["«", "Bonjour", "»", ",", "dit-il", ":", "0,75", "kg", "."]);
  assert.deepStrictEqual(splitWords("   "), []);
  const words = ["Le", "chat", "dort", "."];
  assert.deepStrictEqual(splitWords(joinWords(words)), words, "join then split gives the same labels");
});

test("draft: plan operations (add, duplicate, delete, move) keep unique world ids", async () => {
  const D = await load("draft.js");
  const d = D.newDraft();
  const p = d.pack;
  assert.strictEqual(p.worlds.length, 1);
  assert.strictEqual(D.addWorld(p), 1);
  assert.strictEqual(D.duplicateWorld(p, 0), 1);
  assert.deepStrictEqual(p.worlds.map((w) => w.id), [1, 3, 2]);
  assert.match(p.worlds[1].title, /\(copie\)$/);
  assert.strictEqual(D.move(p.worlds, 2, -1), 1);
  assert.deepStrictEqual(p.worlds.map((w) => w.id), [1, 2, 3]);
  assert.strictEqual(D.move(p.worlds, 0, -1), 0, "first world cannot go up");
  assert.strictEqual(D.move(p.worlds, 2, 1), 2, "last world cannot go down");
  assert.strictEqual(D.deleteWorld(p, 2), 1);
  assert.strictEqual(p.worlds.length, 2);
  p.worlds[1].id = "fin";
  assert.strictEqual(D.nextWorldId(p.worlds), 2, "text ids are kept, numbers go on");

  const w = p.worlds[0];
  assert.strictEqual(D.addExercise(w, "mcq"), 0);
  assert.strictEqual(D.addExercise(w, "fill"), 1);
  w.exercises[0].prompt = "Q1";
  assert.strictEqual(D.duplicateExercise(w, 0), 1);
  assert.deepStrictEqual(w.exercises.map((e) => e.type), ["mcq", "mcq", "fill"]);
  w.exercises[1].prompt = "Q2";
  assert.strictEqual(w.exercises[0].prompt, "Q1", "a duplicate is a copy, not the same object");
  assert.strictEqual(D.move(w.exercises, 2, -1), 1);
  assert.deepStrictEqual(w.exercises.map((e) => e.type), ["mcq", "fill", "mcq"]);
  assert.strictEqual(D.deleteExercise(w, 2), 1);
  assert.strictEqual(D.deleteExercise(w, 0), 0);
  assert.strictEqual(D.deleteExercise(w, 0), -1, "nothing left to select");
});

test("draft: the id follows the title until it is changed or downloaded; restore and open are defensive", async () => {
  const D = await load("draft.js");
  const d = D.newDraft();
  assert.ok(D.isBlank(d));
  d.pack.worlds[0].lesson.points[0] = "Un point déjà écrit";
  assert.ok(!D.isBlank(d), "a written lesson is worth keeping");
  d.pack.worlds[0].lesson.points[0] = "";
  d.level = "cm1"; d.subject = "maths";
  D.setTitle(d, "Les fractions");
  assert.strictEqual(d.pack.path, "cm1/maths/les-fractions");
  assert.ok(!D.isBlank(d));
  d.locked = true;
  D.setTitle(d, "Autre titre");
  assert.strictEqual(d.slug, "les-fractions", "locked once downloaded");

  const back = D.restoreDraft(JSON.parse(JSON.stringify(d)));
  assert.strictEqual(back.pack.path, "cm1/maths/les-fractions");
  assert.strictEqual(back.locked, true);
  assert.strictEqual(D.restoreDraft({ v: 2 }), null);
  assert.strictEqual(D.restoreDraft("x"), null);

  const opened = D.draftFromPack({ path: "6e/histoire/rome", worlds: [{ id: 1, exercises: "x" }, 5] });
  assert.strictEqual(opened.locked, true, "an existing id is kept");
  assert.strictEqual(opened.slug, "rome");
  assert.deepStrictEqual(opened.pack.worlds[0].exercises, []);
  assert.deepStrictEqual(opened.pack.worlds[1].exercises, []);
  assert.strictEqual(opened.pack.meta.title, "");
  const noPath = D.draftFromPack({});
  assert.strictEqual(noPath.locked, false);
  assert.strictEqual(noPath.autoSlug, true);
});

test("export: optional empty fields removed, other keys kept in the usual order", async () => {
  const D = await load("draft.js");
  const X = await load("export.js");
  const d = D.draftFromPack({
    lang: "fr", path: "cm2/histoire/x", worlds: [{ id: 1, title: "A", subtitle: "", lesson: { title: "", points: ["p", ""], examples: [""] },
      exercises: [{ type: "order", prompt: "p", words: ["a", "b"], distractors: [""], alternatives: [[]], hint: " ", docId: "" }] }],
    meta: { title: "T", description: "D", icon: "📘", author: "" }, documents: [{ id: "d", text: "x" }], figures: 1
  });
  const out = X.exportPack(d);
  assert.deepStrictEqual(Object.keys(out), ["path", "lang", "meta", "documents", "figures", "worlds"]);
  assert.ok(!("author" in out.meta));
  const w = out.worlds[0];
  assert.ok(!("subtitle" in w));
  assert.deepStrictEqual(w.lesson, { points: ["p"] });
  assert.deepStrictEqual(Object.keys(w.exercises[0]), ["type", "prompt", "words"]);
  assert.strictEqual(d.pack.worlds[0].subtitle, "", "the draft itself is not changed");
});

test("report: every message of the rules goes to its plan node", async () => {
  const D = await load("draft.js");
  const X = await load("export.js");
  const d = D.newDraft();
  d.level = "cm2"; d.subject = "histoire";
  D.setTitle(d, "Mon cours");
  d.pack.meta.description = "Un cours.";
  D.addWorld(d.pack);
  d.pack.worlds[1].title = "Monde (2) ex 9 piège";
  D.addExercise(d.pack.worlds[1], "mcq");
  D.addExercise(d.pack.worlds[1], "fill");
  d.pack.worlds[1].color = "rouge";
  const pack = X.exportPack(d);
  const r = X.buildReport(pack, Rules);
  const keys = new Set(r.list.map((m) => m.key));
  assert.ok(keys.has("w:0"), "world 1 has no exercise");
  assert.ok(keys.has("l:0"), "world 1: empty lesson");
  assert.ok(keys.has("w:1"), "world 2: bad colour");
  assert.ok(keys.has("e:1:0") && keys.has("e:1:1"), "both exercises of world 2, despite its title");
  assert.ok(!keys.has("course"), "the course itself is fine: " + r.list.filter((m) => m.key === "course").map((m) => m.msg));
  assert.strictEqual(r.errors + r.warnings, r.list.length);
  const t = X.worldTotals(r, 1);
  assert.strictEqual(t.err, r.byKey["w:1"].err + r.byKey["e:1:0"].err + r.byKey["e:1:1"].err);

  assert.strictEqual(X.locate("meta.title manquant", pack), "course");
  assert.strictEqual(X.locate("documents[0] : text manquant", pack), "d:0", "a text to read has its own node");
  assert.strictEqual(X.locate("monde 1 leçon : ** (gras) non fermé", pack), "l:0");
  assert.strictEqual(X.locate("monde 1 : 7 points dans la leçon (5 max conseillé, reste court)", pack), "l:0");
  assert.strictEqual(X.locate("monde 1 : exercises doit être un tableau non vide", pack), "w:0");
  assert.strictEqual(X.locate("monde 2 (Monde (2) ex 9 piège) ex 2 [fill] : answers…", pack), "e:1:1");

  const noPath = X.buildReport(pack, Rules, { path: false, extra: [{ level: "err", msg: "Choisis un niveau", key: "course" }] });
  assert.strictEqual(noPath.byKey.course.err, 1);
});

test("texts to read: add with a free id, count and delete (the exercises lose the link), export and plan node", async () => {
  const D = await load("draft.js");
  const X = await load("export.js");
  const d = D.newDraft();
  const pack = d.pack;
  assert.strictEqual(D.addDocument(pack), 0);
  assert.strictEqual(pack.documents[0].id, "texte-1");
  pack.documents.push({ id: "texte-2", text: "x" });
  assert.strictEqual(D.addDocument(pack), 2);
  assert.strictEqual(pack.documents[2].id, "texte-3", "an id not used yet");
  pack.worlds[0].exercises.push({ type: "fill", docId: "texte-1" }, { type: "fill", docId: "texte-3" });
  assert.strictEqual(D.docUses(pack, "texte-1"), 1);
  assert.strictEqual(D.deleteDocument(pack, 0), 0);
  assert.ok(!("docId" in pack.worlds[0].exercises[0]), "the exercise no longer points to a deleted text");
  assert.strictEqual(pack.worlds[0].exercises[1].docId, "texte-3");
  pack.documents[1].title = "Titre";
  pack.documents[1].from = " ";
  pack.documents[1].screen = false;
  const out = X.exportPack(d);
  assert.deepStrictEqual(out.documents[1], { id: "texte-3", title: "Titre", text: "" }, "empty from and screen: false not written");
  assert.strictEqual(X.locate("documents[1] : text manquant", pack), "d:1");
  const letters = { worlds: [], letters: [{ id: 1, text: "Dear…" }] };
  assert.strictEqual(D.docsOf(letters), letters.letters, "an old file keeps its letters");
});
