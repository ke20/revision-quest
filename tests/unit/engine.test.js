// Unit tests for js/engine.js, run in a fake browser (tests/unit/helpers/env.js).
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const { load, storage, cookieJar, makePack } = require("./helpers/env");

const j = (x) => JSON.parse(JSON.stringify(x)); // objects from the vm realm → plain objects
const PACK = "4e/anglais/test-pack";

/** Fresh engine with one player and a 4-world pack selected. */
function setup(opts = {}) {
  const env = load(opts);
  const E = env.window.Engine;
  if (opts.player !== false) E.createProfile(opts.name || "Léa", "🦊");
  E.setPack(PACK, opts.pack || makePack());
  return { env, E };
}
/** Play a whole world: results = array of { correct, attempts } (default: all right first try). */
function playWorld(E, id, results) {
  const s = E.startWorld(id);
  (results || Array(s.total).fill({ correct: true, attempts: 1 })).forEach((r) => E.answer(r));
  return E.finishWorld();
}

/* ---------- XP, combo, hearts, stars ---------- */

test("XP: 10 at the 1st try, 5 at the 2nd, 0 after; nothing for a wrong answer", () => {
  const { E } = setup({ pack: makePack(1, 10) });
  E.startWorld(1);
  assert.strictEqual(E.answer({ correct: true, attempts: 1 }).xp, 10);
  assert.strictEqual(E.answer({ correct: false, attempts: 1 }).xp, 0);
  assert.strictEqual(E.answer({ correct: true, attempts: 2 }).xp, 5);
  assert.strictEqual(E.answer({ correct: false, attempts: 1 }).xp, 0);
  assert.strictEqual(E.answer({ correct: true, attempts: 3 }).xp, 0);
  assert.strictEqual(E.state.xp, 15);
});

test("combo multipliers: ×1 for 1–2, ×1.5 from 3, ×2 from 6; a mistake resets the combo", () => {
  const { E } = setup({ pack: makePack(1, 10) });
  E.startWorld(1);
  const r = [1, 2, 3, 4, 5, 6, 7].map(() => E.answer({ correct: true, attempts: 1 }));
  assert.deepStrictEqual(r.map((x) => x.multiplier), [1, 1, 1.5, 1.5, 1.5, 2, 2]);
  assert.deepStrictEqual(r.map((x) => x.xp), [10, 10, 15, 15, 15, 20, 20]);
  const w = E.answer({ correct: false, attempts: 1 });
  assert.strictEqual(w.combo, 0);
  assert.strictEqual(E.answer({ correct: true, attempts: 1 }).multiplier, 1);
  assert.strictEqual(E.state.bestCombo, 7);
});

test("hearts: 3 per world, −1 per wrong answer, game over at 0", () => {
  const { E } = setup({ pack: makePack(1, 5) });
  E.setSettings({ freeMistakes: 0 }); // no shield: every wrong answer costs a heart
  E.startWorld(1);
  assert.strictEqual(E.session.hearts, E.MAX_HEARTS);
  assert.strictEqual(E.answer({ correct: false }).hearts, 2);
  assert.strictEqual(E.answer({ correct: false }).gameOver, false);
  const last = E.answer({ correct: false });
  assert.strictEqual(last.hearts, 0);
  assert.strictEqual(last.gameOver, true);
});

test("stars and accuracy: 1★ when finished, 2★ from 70 %, 3★ from 90 %; a 2nd try counts half", () => {
  const ok = { correct: true, attempts: 1 }, half = { correct: true, attempts: 2 }, ko = { correct: false };
  const cases = [
    [[ok, ok, ok, ok, ok, ok, ok, ok, ok, ok], 3, 1],
    [[ok, ok, ok, ok, ok, ok, ok, ok, ok, ko], 3, 0.9],
    [[ok, ok, ok, ok, ok, ok, ok, ko, ko, half], 2, 0.75],
    [[ok, ok, ok, ok, ok, ok, ok, ko, ko, ok], 2, 0.8],
    [[ok, ok, ok, ok, ok, ok, half, ko, ko, half], 2, 0.7],
    [[ok, ok, ok, ok, ok, ko, ko, half, half, half], 1, 0.65]
  ];
  for (const [results, stars, acc] of cases) {
    const { E } = setup({ pack: makePack(1, 10) });
    const sum = playWorld(E, 1, results);
    assert.strictEqual(sum.stars, stars, JSON.stringify(results));
    assert.ok(Math.abs(sum.accuracy - acc) < 1e-9, sum.accuracy + " vs " + acc);
  }
});

test("best stars / accuracy are kept when replaying worse", () => {
  const { E } = setup({ pack: makePack(1, 10) });
  playWorld(E, 1);
  playWorld(E, 1, [{ correct: true }, ...Array(9).fill({ correct: true, attempts: 2 })]);
  assert.deepStrictEqual(j(E.worldProgress(1)), { stars: 3, accuracy: 1, completed: true });
});

test("skipped (broken) exercises give nothing and are left out of the accuracy", () => {
  const { E } = setup({ pack: makePack(1, 3) });
  E.startWorld(1);
  const r = E.answer({ skipped: true, correct: false });
  assert.strictEqual(r.skipped, true);
  assert.strictEqual(r.xp, 0);
  assert.strictEqual(E.session.hearts, 3);
  E.answer({ correct: true, attempts: 1 }); E.answer({ correct: true, attempts: 1 });
  const sum = E.finishWorld();
  assert.strictEqual(sum.accuracy, 1);
  assert.strictEqual(sum.stars, 3);
});

test("unlock rule: world 1 open, next world opens with ≥ 1★ on the previous one", () => {
  const { E } = setup();
  assert.deepStrictEqual([1, 2, 3, 4].map(E.isUnlocked), [true, false, false, false]);
  assert.strictEqual(E.currentWorldId(), 1);
  const sum = playWorld(E, 1);
  assert.strictEqual(sum.unlockedWorld.id, 2);
  assert.deepStrictEqual([1, 2, 3, 4].map(E.isUnlocked), [true, true, false, false]);
  assert.strictEqual(E.currentWorldId(), 2);
});

test("hint costs 3 XP, never below 0", () => {
  const { E } = setup({ pack: makePack(1, 5) });
  E.startWorld(1);
  assert.strictEqual(E.useHint(), 0);
  assert.strictEqual(E.state.xp, 0);
  E.answer({ correct: true, attempts: 1 });
  assert.strictEqual(E.useHint(), 3);
  assert.strictEqual(E.state.xp, 7);
  E.state.xp = 2;
  assert.strictEqual(E.useHint(), 2);
  assert.strictEqual(E.state.xp, 0);
});

test("levels: thresholds and levelInfo", () => {
  const { E } = setup();
  const t = [[0, 1, "Débutant"], [99, 1, "Débutant"], [100, 2, "Apprenti"], [250, 3, "Malin"], [450, 4, "Expert"], [700, 5, "As"], [1000, 6, "Champion"], [1400, 7, "Légende"], [99999, 7, "Légende"]];
  for (const [xp, level, name] of t) {
    const li = E.levelInfo(xp);
    assert.strictEqual(li.level, level, "xp " + xp);
    assert.strictEqual(li.name, name);
  }
  assert.strictEqual(E.levelInfo(175).progress, 0.5);
  assert.strictEqual(E.levelInfo(1400).next, null);
  assert.strictEqual(E.levelInfo(1500).progress, 1);
  E.startWorld(1);
  E.state.xp = 95;
  assert.strictEqual(E.answer({ correct: true, attempts: 1 }).levelUp.name, "Apprenti");
});

/* ---------- badges ---------- */

test("badges: first_step, combo5, combo10", () => {
  const { E } = setup({ pack: makePack(1, 12) });
  E.startWorld(1);
  const got = [];
  for (let i = 0; i < 10; i++) got.push(...E.answer({ correct: true, attempts: 1 }).newBadges.map((b) => b.id));
  assert.deepStrictEqual(got, ["first_step", "combo5", "combo10"]);
});

test("badges: perfect (100 %), not with 90 %", () => {
  let { E } = setup({ pack: makePack(1, 10) });
  playWorld(E, 1, [...Array(9).fill({ correct: true, attempts: 1 }), { correct: false }]);
  assert.strictEqual(E.hasBadge("perfect"), false);
  ({ E } = setup({ pack: makePack(1, 10) }));
  playWorld(E, 1);
  assert.strictEqual(E.hasBadge("perfect"), true);
});

test("badges: translator (Curieux) after 10 different translations", () => {
  const { E } = setup();
  for (let i = 0; i < 9; i++) E.viewTranslation("w" + i + "|t");
  E.viewTranslation("w0|t");
  assert.strictEqual(E.hasBadge("translator"), false);
  assert.deepStrictEqual(j(E.viewTranslation("w9|t")).map((b) => b.id), ["translator"]);
  assert.strictEqual(E.translationsCount(), 10);
});

test("badges: bookworm = second-to-last world, or a world with a document; boss = last world; stars = 3★ everywhere", () => {
  let { E } = setup({ pack: makePack(5, 1) }); // world 3 shows a document
  playWorld(E, 1); playWorld(E, 2);
  assert.strictEqual(E.hasBadge("bookworm"), false);
  playWorld(E, 3);
  assert.strictEqual(E.hasBadge("bookworm"), true, "document world");
  ({ E } = setup({ pack: { worlds: makePack(4, 1).worlds.map((w) => ({ ...w, exercises: [{ type: "mcq" }] })) } })); // no document
  playWorld(E, 1); playWorld(E, 2);
  assert.strictEqual(E.hasBadge("bookworm"), false);
  playWorld(E, 3);
  assert.strictEqual(E.hasBadge("bookworm"), true, "second-to-last world");
  assert.strictEqual(E.hasBadge("boss"), false);
  assert.strictEqual(E.hasBadge("stars"), false);
  playWorld(E, 4);
  assert.strictEqual(E.hasBadge("boss"), true);
  assert.strictEqual(E.hasBadge("stars"), true);
});

test("badges: stars needs 3★ on every world of the chapter", () => {
  const { E } = setup({ pack: { worlds: [{ id: 1, exercises: [{}, {}] }, { id: 2, exercises: [{}, {}] }] } });
  playWorld(E, 1);
  playWorld(E, 2, [{ correct: true, attempts: 1 }, { correct: true, attempts: 2 }]); // 75 % → 2★
  assert.strictEqual(E.hasBadge("stars"), false);
  playWorld(E, 2);
  assert.strictEqual(E.hasBadge("stars"), true);
});

test("badges: streak3 after 3 days in a row; a streak is still alive the day after", () => {
  const { E } = setup({ pack: makePack(1, 5) });
  const pad = (n) => String(n).padStart(2, "0");
  const daysAgo = (n) => { const d = new Date(); d.setDate(d.getDate() - n); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); };
  E.state.days.push(daysAgo(3), daysAgo(1)); // 2 days ago is missing
  assert.strictEqual(E.streak(), 1, "not played today yet: the streak counts from yesterday");
  E.startWorld(1);
  E.answer({ correct: true }); // today → yesterday + today
  assert.strictEqual(E.streak(), 2);
  assert.strictEqual(E.hasBadge("streak3"), false);
  E.state.days.push(daysAgo(2)); // gap filled: 4 days in a row (3 days ago → today)
  E.answer({ correct: true });
  assert.strictEqual(E.streak(), 4);
  assert.strictEqual(E.hasBadge("streak3"), true);
});

test("badges: explorer after answering in 2 different chapters; lastPack follows", () => {
  const { E } = setup();
  E.startWorld(1); E.answer({ correct: true });
  assert.strictEqual(E.hasBadge("explorer"), false);
  assert.strictEqual(E.lastPack(), PACK);
  E.setPack("5e/anglais/other", makePack(2, 1));
  E.startWorld(1); E.answer({ correct: false });
  assert.strictEqual(E.hasBadge("explorer"), true);
  assert.strictEqual(E.lastPack(), "5e/anglais/other");
});

test("progress is stored per pack; packSummary clamps to worldCount", () => {
  const { E } = setup();
  playWorld(E, 1);
  E.setPack("5e/anglais/other", makePack(2, 1));
  assert.strictEqual(E.worldProgress(1).stars, 0);
  assert.strictEqual(E.totalStars(), 3);
  assert.strictEqual(E.totalStars(PACK), 3);
  assert.deepStrictEqual(j(E.packSummary(PACK, 4)).stars, 3);
  assert.strictEqual(E.packSummary(PACK, 4).progress, 0.25);
  E.state.packs[PACK].worlds = { 1: { stars: 3 }, 2: { stars: 3 }, 9: { stars: 3 } };
  assert.strictEqual(E.packSummary(PACK, 2).stars, 6);
  assert.strictEqual(E.packSummary(PACK, 2).worldsDone, 2);
});

/* ---------- players, names, leaderboard ---------- */

test("names: trimmed, control / bidi characters removed, 20 chars max, unique (case-insensitive)", () => {
  const { E } = setup({ player: false });
  const I = E._internals;
  assert.strictEqual(I.cleanName("  Lé\u0000a‮ ​  B  "), "Léa B");
  assert.strictEqual(E.validateName("   "), "Écris ton prénom ou un pseudo.");
  assert.strictEqual(E.validateName("x".repeat(21)), "20 lettres maximum.");
  assert.ok(E.createProfile("Léa", "🦊").ok);
  assert.match(E.createProfile("lÉA", "🦊").error, /existe déjà/);
  assert.strictEqual(I.suffixName("ABCDEFGHIJKLMNOPQRST", 2), "ABCDEFGHIJKLMNOP (2)");
});

test("leaderboard: global by XP then stars; per chapter by chapter stars (clamped) then XP", () => {
  const { E } = setup({ name: "A" });
  E.state.xp = 50; E.state.packs[PACK] = { worlds: { 1: { stars: 3 } }, lastPlayed: 1 }; E.setSound(false);
  E.createProfile("B", "🐼"); E.state.xp = 50; E.state.packs[PACK] = { worlds: { 1: { stars: 3 }, 2: { stars: 3 }, 3: { stars: 3 } }, lastPlayed: 1 }; E.setSound(false);
  E.createProfile("C", "🐯"); E.state.xp = 80; E.setSound(false);
  assert.deepStrictEqual(j(E.leaderboard()).map((r) => r.name), ["C", "B", "A"]);
  const per = j(E.leaderboard(PACK, 2));
  assert.deepStrictEqual(per.map((r) => [r.name, r.packStars]), [["B", 6], ["A", 3], ["C", 0]]);
});

test("reset clears the progress of the current player only (and bumps its epoch)", () => {
  const { E } = setup();
  playWorld(E, 1);
  const id = E.currentProfile().id;
  E.reset();
  assert.strictEqual(E.state.xp, 0);
  assert.deepStrictEqual(j(E.state.packs), {});
  assert.ok(E.profiles().find((p) => p.id === id).epoch > 0);
});

/* ---------- validation of hostile input ---------- */

test("safeJsonParse drops __proto__ / constructor / prototype keys", () => {
  const { E } = setup({ player: false });
  const o = E._internals.safeJsonParse('{"__proto__":{"polluted":1},"constructor":{"x":1},"a":{"prototype":2,"b":3}}');
  assert.strictEqual(({}).polluted, undefined);
  assert.deepStrictEqual(j(o), { a: { b: 3 } });
  assert.throws(() => E._internals.safeJsonParse("{oops"));
});

test("normalizeProfile: avatar whitelist, id format, clamping, pack paths, world ids, caps", () => {
  const { E } = setup({ player: false });
  const packs = JSON.parse('{"__proto__":{"worlds":{}}}');
  Object.assign(packs, {
    "4e/anglais/ok": { lastPlayed: 1e20, worlds: { 1: { stars: 99, accuracy: 7 }, "w-2": { stars: -3, accuracy: "x" }, "<b>": { stars: 3 }, constructor: { stars: 3 } } },
    "constructor": { worlds: {} }, "UPPER/x/y": { worlds: {} }, "a/b": { worlds: {} }, "../x/y": { worlds: {} }, ["4e/anglais/" + "a".repeat(61)]: { worlds: {} }
  });
  for (let i = 0; i < 150; i++) packs["f/x/p" + i] = { worlds: {} };
  const worlds = {}; for (let i = 0; i < 300; i++) worlds[i] = { stars: 1 };
  packs["4e/anglais/many"] = { worlds };
  const p = j(E._internals.normalizeProfile({
    id: '"><img src=x>', name: "<b>Hacker</b>‮", avatar: "<svg onload=1>", createdAt: "x",
    state: { xp: 1e99, packs, badges: ["boss", "boss", "nope"], translations: ["abc123", "<script>", "a".repeat(400)], days: ["<x>", "2026-11-01"], bestCombo: 1e9, lastPack: "<img>", sound: 0 }
  }));
  assert.match(p.id, /^p[a-z0-9]{4,24}$/);
  assert.strictEqual(p.avatar, "🦊");
  assert.strictEqual(p.name, "<b>Hacker</b>");
  assert.strictEqual(p.state.xp, 1000000);
  assert.strictEqual(p.state.bestCombo, 10000);
  assert.ok(Object.keys(p.state.packs).length <= 100);
  assert.ok(Object.keys(p.state.packs).every((k) => /^[a-z0-9-]{1,30}\/[a-z0-9-]{1,30}\/[a-z0-9-]{1,60}$/.test(k)));
  const ok = p.state.packs["4e/anglais/ok"];
  assert.deepStrictEqual(Object.keys(ok.worlds).sort(), ["1", "constructor", "w-2"].filter((k) => k !== "constructor").concat(Object.keys(ok.worlds).includes("constructor") ? ["constructor"] : []).sort());
  assert.deepStrictEqual(ok.worlds["1"], { stars: 3, accuracy: 1, completed: true });
  assert.deepStrictEqual(ok.worlds["w-2"], { stars: 0, accuracy: 0, completed: false });
  assert.ok(ok.lastPlayed <= 4102444800000);
  if (p.state.packs["4e/anglais/many"]) assert.ok(Object.keys(p.state.packs["4e/anglais/many"].worlds).length <= 100);
  assert.deepStrictEqual(p.state.badges, ["boss"]);
  assert.deepStrictEqual(p.state.translations, ["abc123"]);
  assert.deepStrictEqual(p.state.days, ["2026-11-01"]);
  assert.strictEqual(p.state.lastPack, null);
  assert.strictEqual(p.state.sound, false);
  assert.strictEqual(E._internals.normalizeProfile({ name: " ​ " }), null, "empty name → rejected");
});

test("data in another format (old versions) is ignored", () => {
  const { E } = setup({ player: false });
  const I = E._internals;
  assert.strictEqual(I.parseDb(JSON.stringify({ version: 2, profiles: [{ name: "Old" }] })), null);
  assert.strictEqual(I.parseDb("{oops"), null);
  assert.strictEqual(I.parseDb(JSON.stringify({ version: 3, profiles: [{ name: "" }, 42] })), null, "no valid player = corrupt");
  assert.deepStrictEqual(j(I.parseDb(JSON.stringify({ version: 3, profiles: [] }))).profiles, []);
  assert.deepStrictEqual(j(I.normalizeState({ xp: 5, worlds: { 1: { stars: 3 } } })).packs, {});
  assert.strictEqual(I.uncompact({ v: 2, p: [["pabcd1234", "X", "🦊", 1, [[1, 3, 100]]]] }), null);
});

/* ---------- multi-tab merge ---------- */

test("merge: max xp / stars / accuracy, unions of badges, days, translations, newest lastPack, local current player", () => {
  const { E } = setup({ player: false });
  const I = E._internals;
  const prof = (state, extra) => I.normalizeProfile(Object.assign({ id: "pmerge0001", name: "Ana", avatar: "🦊", createdAt: 5, state }, extra));
  const mine = { currentId: "pmerge0001", deleted: {}, profiles: [prof({ xp: 50, badges: ["combo5"], days: ["2026-11-02"], translations: ["a1"], lastPack: "4e/anglais/x",
    packs: { "4e/anglais/x": { worlds: { 1: { stars: 3, accuracy: 0.6 } }, lastPlayed: 10 }, "5e/anglais/y": { worlds: { 2: { stars: 1, accuracy: 0.5 } }, lastPlayed: 1 } } })] };
  const other = { currentId: "pother0001", deleted: {}, profiles: [
    prof({ xp: 77, badges: ["first_step"], days: ["2026-11-01"], translations: ["b2"], lastPack: "5e/anglais/y",
      packs: { "4e/anglais/x": { worlds: { 1: { stars: 2, accuracy: 0.8 }, 3: { stars: 1, accuracy: 0.5 } }, lastPlayed: 5 }, "5e/anglais/y": { worlds: {}, lastPlayed: 99 } } }),
    I.normalizeProfile({ id: "pother0001", name: "ana", avatar: "🐼", state: {} })] };
  const m = j(I.mergeDb(mine, other));
  const a = m.profiles.find((p) => p.id === "pmerge0001").state;
  assert.strictEqual(a.xp, 77);
  assert.deepStrictEqual(a.packs["4e/anglais/x"].worlds["1"], { stars: 3, accuracy: 0.8, completed: true });
  assert.strictEqual(a.packs["4e/anglais/x"].worlds["3"].stars, 1);
  assert.deepStrictEqual(a.badges, ["first_step", "combo5"]);
  assert.deepStrictEqual(a.days, ["2026-11-01", "2026-11-02"]);
  assert.deepStrictEqual(a.translations.sort(), ["a1", "b2"]);
  assert.strictEqual(a.lastPack, "5e/anglais/y");
  assert.strictEqual(m.currentId, "pmerge0001");
  assert.deepStrictEqual(m.profiles.map((p) => p.name), ["Ana", "ana (2)"], "player created elsewhere kept, name made unique");
});

test("merge: tombstones win, newest epoch wins without merging", () => {
  const { E } = setup({ player: false });
  const I = E._internals;
  const P = (id, xp, epoch) => I.normalizeProfile({ id, name: id, epoch, state: { xp } });
  const m1 = j(I.mergeDb({ currentId: null, deleted: {}, profiles: [P("pkeep00001", 1), P("pdead00001", 9)] }, { currentId: null, deleted: { pdead00001: 123 }, profiles: [] }));
  assert.deepStrictEqual(m1.profiles.map((p) => p.id), ["pkeep00001"]);
  assert.strictEqual(m1.deleted.pdead00001, 123);
  const m2 = j(I.mergeDb({ currentId: null, deleted: {}, profiles: [P("preset0001", 999, 0)] }, { currentId: null, deleted: {}, profiles: [P("preset0001", 0, 50)] }));
  assert.strictEqual(m2.profiles[0].state.xp, 0, "reset (newer epoch) wins over higher stale xp");
});

test("save(): a stale copy written by another tab is merged, never overwritten; storage event merges too", () => {
  const ls = storage(), jar = cookieJar();
  const A = load({ localStorage: ls, cookies: jar }).window.Engine;
  A.createProfile("Ana", "🦊");
  const B = load({ localStorage: ls, cookies: jar });
  const EB = B.window.Engine;
  EB.createProfile("Ben", "🐼");          // B writes; A never heard about it
  A.setSound(false);                      // A saves with a stale db
  let d = JSON.parse(ls.getItem("revisionQuest.v3"));
  assert.deepStrictEqual(d.profiles.map((p) => p.name).sort(), ["Ana", "Ben"]);
  // deletion in A, then a stale write from B cannot resurrect
  const benId = d.profiles.find((p) => p.name === "Ben").id;
  A.deleteProfile(benId);
  let called = 0; EB.onExternalChange(() => called++);
  B.storageEvent("revisionQuest.v3", ls.getItem("revisionQuest.v3"));
  assert.strictEqual(called, 1);
  assert.ok(!EB.profiles().some((p) => p.id === benId), "storage event merged the deletion");
  EB.setSound(true);
  d = JSON.parse(ls.getItem("revisionQuest.v3"));
  assert.ok(!d.profiles.some((p) => p.id === benId) && d.deleted[benId] > 0);
  // without another writer: exact (a hint cost is not undone)
  A.state.xp = 10; A.setSound(true); A.useHint();
  assert.strictEqual(JSON.parse(ls.getItem("revisionQuest.v3")).profiles.find((p) => p.name === "Ana").state.xp, 7);
});

/* ---------- storage, cookie backup, .save files ---------- */

test("load: corrupt v3 is backed up and the cookie backup is used", () => {
  const ls = storage(), jar = cookieJar();
  const E = load({ localStorage: ls, cookies: jar }).window.Engine;
  E.createProfile("Fresh", "🐯"); E.state.xp = 321; E.setSound(true);
  ls.setItem("revisionQuest.v3", "{broken");
  const E2 = load({ localStorage: ls, cookies: jar }).window.Engine;
  assert.deepStrictEqual(E2.profiles().map((p) => p.name), ["Fresh"]);
  assert.strictEqual(E2.state.xp, 321);
  assert.strictEqual(ls.getItem("revisionQuest.v3.corrupt"), "{broken");
  assert.ok(JSON.parse(ls.getItem("revisionQuest.v3")).profiles.length === 1, "v3 rewritten");
});

test("cookie backup: round-trip, SameSite=Strict, no translations, ≤ 6 KB and ≤ 2 chunks, current player first", () => {
  const jar = cookieJar();
  const E = load({ cookies: jar }).window.Engine;
  for (let i = 0; i < 12; i++) {
    E.createProfile("Joueur" + i, "🦊");
    for (let t = 0; t < 100; t++) E.viewTranslation(i + "-" + t + "|x");
    for (let q = 0; q < 4; q++) { const w = {}; for (let k = 1; k <= 10; k++) w[k] = { stars: 3, accuracy: 0.97, completed: true }; E.state.packs["4e/anglais/p" + q] = { worlds: w, lastPlayed: 1000 + i }; }
    E.setSound(true);
  }
  const names = [...jar.jar.keys()];
  assert.ok(names.filter((n) => /^aaa_save_\d+$/.test(n)).length <= 2, names.join());
  assert.ok(jar.size() <= E._internals.COOKIE_MAX_BYTES + 100, "cookie header " + jar.size());
  assert.ok([...jar.jar.values()].every((c) => c.sameSite === "Strict" && c.path === "/" && /^[A-Za-z0-9_-]*$/.test(c.value)));
  const R = load({ cookies: jar }).window.Engine; // localStorage empty → restore from cookie
  assert.strictEqual(R.currentProfile().name, "Joueur11");
  assert.ok(R.profiles().length >= 1 && R.profiles().length < 12, "least recent players dropped: " + R.profiles().length);
  assert.strictEqual(R.translationsCount(), 0);
  assert.strictEqual(R.totalStars(), 120);
});

test("cookie backup: small saves round-trip exactly (minus translations)", () => {
  const jar = cookieJar();
  const E = load({ cookies: jar }).window.Engine;
  E.createProfile("Mia", "🐸");
  E.setPack(PACK, makePack());
  playWorld(E, 1);
  E.viewTranslation("a|b");
  const before = j(E.currentProfile());
  const R = load({ cookies: jar }).window.Engine;
  const after = j(R.currentProfile());
  before.state.translations = [];
  Object.values(before.state.packs).forEach((p) => { p.lastPlayed = Math.floor(p.lastPlayed / 1000) * 1000; });
  assert.deepStrictEqual(after, before);
});

test("cookie path is the game folder, Secure on HTTPS; old big chunks are removed", () => {
  const jar = cookieJar();
  jar.set("aaa_save_9=AAAA; path=/repo/");
  const E = load({ cookies: jar, pathname: "/repo/index.html", protocol: "https:" }).window.Engine;
  E.createProfile("Sam", "🐱");
  const c = [...jar.jar.entries()];
  assert.ok(c.every(([, v]) => v.path === "/repo/" && v.secure), JSON.stringify(c));
  assert.ok(!jar.jar.has("aaa_save_9"));
});

test(".save: export → import round-trip; checksum, format, version and size are checked", () => {
  const { E } = setup();
  playWorld(E, 1);
  const f = E.exportProfile();
  assert.match(f.filename, /^Léa-revision-quest\.save$/);
  assert.match(f.content, /^RQSAVE\.[A-Za-z0-9+/]+=*\.[a-z0-9]+$/);
  const E2 = load().window.Engine;
  const r = E2.parseImport(f.content);
  assert.ok(r.ok);
  const p = E2.importProfile(r.profile, "copy");
  assert.deepStrictEqual(j(p.state), j(E.state));
  const parts = f.content.split(".");
  assert.match(E2.parseImport(parts[0] + "." + parts[1] + ".zzz").error, /abîmé ou a été modifié/);
  assert.match(E2.parseImport("hello").error, /n'est pas une sauvegarde/);
  assert.strictEqual(E2.parseImport("RQSAVE." + "A".repeat(600000) + ".a").ok, false);
  const inner = (o) => { const s = JSON.stringify(o); return "RQSAVE." + Buffer.from(s).toString("base64") + "." + E2._internals.hash(s); };
  assert.match(E2.parseImport(inner({ app: "revision-quest", version: 4, profile: { name: "X" } })).error, /plus récente/);
  assert.strictEqual(E2.parseImport(inner({ app: "revision-quest", version: 2, profile: { name: "X" } })).ok, false);
  assert.strictEqual(E2.parseImport(inner({ app: "other", version: 3, profile: { name: "X" } })).ok, false);
  // conflict + copy naming
  const again = E2.parseImport(f.content);
  assert.strictEqual(again.conflict.name, "Léa");
  assert.strictEqual(E2.importProfile(again.profile, "copy").name, "Léa (2)");
  assert.strictEqual(E2.importProfile(again.profile, "replace").name, "Léa");
  assert.strictEqual(E2.profiles().length, 2);
});

/* ---------- comfort settings (pause, free mistakes, animations) ---------- */

const NO = { pauseEvery: 4, freeMistakes: 1, animations: "normal" };
const YES = { pauseEvery: 2, freeMistakes: 2, animations: "boost" };

test("comfort: the creation answer picks the initial settings (yes → 2 / 2 / boost, no → 4 / 1 / normal) and is never stored", () => {
  const ls = storage(), jar = cookieJar();
  const E = load({ localStorage: ls, cookies: jar }).window.Engine;
  assert.deepStrictEqual(j(E.comfortDefaults(true)), YES);
  assert.deepStrictEqual(j(E.comfortDefaults(false)), NO);
  assert.deepStrictEqual(j(E.settings()), NO, "no player selected → defaults");
  E.createProfile("Ana", "🦊", true);
  assert.deepStrictEqual(j(E.settings()), YES);
  assert.ok(E.currentProfile().settingsAt > 0);
  E.createProfile("Ben", "🐼", false);
  assert.deepStrictEqual(j(E.settings()), NO);
  E.createProfile("Cléo", "🐯");
  assert.deepStrictEqual(j(E.settings()), NO, "no answer → like no");
  const raw = ls.getItem("revisionQuest.v3");
  const p = JSON.parse(raw).profiles[0];
  assert.deepStrictEqual(Object.keys(p).sort(), ["avatar", "createdAt", "epoch", "id", "name", "settings", "settingsAt", "state"]);
  assert.deepStrictEqual(Object.keys(p.settings).sort(), ["animations", "freeMistakes", "pauseEvery"]);
  const all = raw + jar.get() + E.exportProfile(p.id).content;
  assert.doesNotMatch(all, /tda|adhd|comfort|answer|oui/i, "no trace of the answer in localStorage, cookie or .save");
});

test("comfort: setSettings whitelists values, bumps settingsAt, saves; missing settings are sanitized to the defaults", () => {
  const ls = storage();
  const env = load({ localStorage: ls });
  const E = env.window.Engine;
  E.createProfile("Léa", "🦊");
  const t0 = E.currentProfile().settingsAt;
  E.setSettings({ pauseEvery: 0, freeMistakes: 3, animations: "none" });
  assert.deepStrictEqual(j(E.settings()), { pauseEvery: 0, freeMistakes: 3, animations: "none" });
  assert.ok(E.currentProfile().settingsAt > t0);
  E.setSettings({ pauseEvery: "2", freeMistakes: 99, animations: "<b>", evil: 1, __proto__: { x: 1 } });
  assert.deepStrictEqual(j(E.settings()), { pauseEvery: 0, freeMistakes: 3, animations: "none" }, "invalid values ignored");
  assert.deepStrictEqual(JSON.parse(ls.getItem("revisionQuest.v3")).profiles[0].settings, { pauseEvery: 0, freeMistakes: 3, animations: "none" });
  const E2 = load({ localStorage: ls }).window.Engine;
  assert.deepStrictEqual(j(E2.settings()), { pauseEvery: 0, freeMistakes: 3, animations: "none" }, "persisted");
  const bare = j(E._internals.normalizeProfile({ name: "Bare", state: {} }));
  assert.deepStrictEqual(bare.settings, NO);
  assert.strictEqual(bare.settingsAt, 0);
});

test("comfort: hostile settings from storage / cookie / .save fall back to the defaults", () => {
  const { E } = setup({ player: false });
  const I = E._internals;
  const hostile = [
    "boost", 42, null, [2, 2, "boost"], { pauseEvery: "2", freeMistakes: "2", animations: "BOOST" },
    { pauseEvery: 1e99, freeMistakes: -1, animations: { toString: 1 } }, { pauseEvery: 2.5, freeMistakes: NaN, animations: ["boost"] },
    JSON.parse('{"__proto__":{"pauseEvery":2,"freeMistakes":2,"animations":"boost"}}'),
    I.safeJsonParse('{"__proto__":{"pauseEvery":2},"constructor":{"animations":"none"}}')
  ];
  for (const h of hostile) {
    assert.deepStrictEqual(j(I.normalizeSettings(h)), NO, JSON.stringify(h));
    const p = j(I.normalizeProfile({ name: "X", settings: h, settingsAt: "soon" }));
    assert.deepStrictEqual(p.settings, NO);
    assert.strictEqual(p.settingsAt, 0);
  }
  assert.strictEqual(j(I.normalizeProfile({ name: "X", settingsAt: 1e99 })).settingsAt, 4102444800000);
  assert.deepStrictEqual(j(I.normalizeSettings({ pauseEvery: 3, freeMistakes: 0, animations: "boost", extra: "x" })), { pauseEvery: 3, freeMistakes: 0, animations: "boost" });
  // localStorage
  const db = I.parseDb(JSON.stringify({ version: 3, profiles: [{ id: "pabcd12345", name: "Ls", settings: { pauseEvery: "4; rm", freeMistakes: 1e9, animations: "<img>" }, settingsAt: -5 }] }));
  assert.deepStrictEqual(j(db.profiles[0].settings), NO);
  assert.strictEqual(db.profiles[0].settingsAt, 0);
  // cookie codes
  assert.strictEqual(I.encodeSettings(YES), "22b");
  assert.strictEqual(I.encodeSettings(NO), "41o");
  assert.deepStrictEqual(j(I.decodeSettings("30n")), { pauseEvery: 3, freeMistakes: 0, animations: "none" });
  for (const bad of ["", "9", "99z", "41o!", "1x?", 410, null, ["4", "1", "o"], { 0: "4" }, "_ _"]) {
    assert.deepStrictEqual(j(I.decodeSettings(bad) || I.normalizeSettings(null)), NO, JSON.stringify(bad));
  }
  assert.deepStrictEqual(j(I.decodeSettings("9zb")), { pauseEvery: 4, freeMistakes: 1, animations: "boost" }, "each field checked on its own");
  const fromCookie = I.uncompact({ v: 3, c: "pcook00001", p: [["pcook00001", "C", "🦊", 0, [], [], [], [], 1, 0, 1, "", "<s>", "x"]] });
  assert.deepStrictEqual(j(fromCookie.profiles[0].settings), NO);
  assert.strictEqual(fromCookie.profiles[0].settingsAt, 0);
});

test("comfort: settings go through the cookie backup and the .save file; hostile .save settings are cleaned", () => {
  const jar = cookieJar();
  const E = load({ cookies: jar }).window.Engine;
  E.createProfile("Mia", "🐸", true);
  E.setSettings({ pauseEvery: 3 });
  const want = { pauseEvery: 3, freeMistakes: 2, animations: "boost" };
  const at = E.currentProfile().settingsAt;
  const R = load({ cookies: jar }).window.Engine; // empty localStorage → cookie
  assert.deepStrictEqual(j(R.settings()), want);
  assert.strictEqual(R.currentProfile().settingsAt, at);
  const f = E.exportProfile();
  const E2 = load().window.Engine;
  const r = E2.parseImport(f.content);
  assert.deepStrictEqual(j(r.profile.settings), want);
  E2.importProfile(r.profile, "copy");
  assert.deepStrictEqual(j(E2.settings()), want);
  const inner = (o) => { const s = JSON.stringify(o).replace(/PROTOKEY/g, "__proto__"); return "RQSAVE." + Buffer.from(s).toString("base64") + "." + E2._internals.hash(s); };
  const bad = E2.parseImport(inner({ app: "revision-quest", version: 3, profile: { name: "Bad", settings: { PROTOKEY: { animations: "none" }, pauseEvery: 1e6, freeMistakes: "3", animations: "<script>" }, settingsAt: "x", state: {} } }));
  assert.ok(bad.ok);
  assert.deepStrictEqual(j(bad.profile.settings), NO);
  assert.strictEqual(({}).animations, undefined, "no prototype pollution");
});

test("comfort: multi-tab merge keeps the most recently changed settings (settingsAt)", () => {
  const { E } = setup({ player: false });
  const I = E._internals;
  const P = (settings, settingsAt, extra) => I.normalizeProfile(Object.assign({ id: "pmerge0001", name: "Ana", settings, settingsAt, state: { xp: 1 } }, extra));
  const A = { pauseEvery: 0, freeMistakes: 3, animations: "none" };
  const m1 = j(I.mergeDb({ currentId: null, deleted: {}, profiles: [P(A, 100)] }, { currentId: null, deleted: {}, profiles: [P(YES, 200)] }));
  assert.deepStrictEqual(m1.profiles[0].settings, YES);
  assert.strictEqual(m1.profiles[0].settingsAt, 200);
  const m2 = j(I.mergeDb({ currentId: null, deleted: {}, profiles: [P(A, 300)] }, { currentId: null, deleted: {}, profiles: [P(YES, 200)] }));
  assert.deepStrictEqual(m2.profiles[0].settings, A);
  const m3 = j(I.mergeDb({ currentId: null, deleted: {}, profiles: [P(A, 300, { epoch: 1 })] }, { currentId: null, deleted: {}, profiles: [P(YES, 200, { epoch: 9, state: { xp: 0 } })] }));
  assert.deepStrictEqual(m3.profiles[0].settings, A, "settings: newest settingsAt wins even when the other copy has a newer epoch");
  assert.strictEqual(m3.profiles[0].state.xp, 0, "progress: newest epoch still wins");
  // through two engines sharing the same storage
  const ls = storage();
  const T1 = load({ localStorage: ls }).window.Engine;
  T1.createProfile("Ana", "🦊");
  const T2 = load({ localStorage: ls }).window.Engine;
  T2.setSettings({ animations: "boost" });
  T1.setSound(false); // T1 writes with a stale copy: merged, T2's newer settings kept
  assert.strictEqual(JSON.parse(ls.getItem("revisionQuest.v3")).profiles[0].settings.animations, "boost");
});

test("comfort: free mistakes (shields) are used before hearts, per world session", () => {
  const { E } = setup({ pack: makePack(1, 8) });
  E.setSettings({ freeMistakes: 2 });
  E.startWorld(1);
  assert.strictEqual(E.session.shields, 2);
  assert.strictEqual(E.session.maxShields, 2);
  E.answer({ correct: true, attempts: 1 });
  let r = E.answer({ correct: false });
  assert.deepStrictEqual([r.shieldUsed, r.shields, r.hearts, r.xp, r.combo], [true, 1, 3, 0, 0], "1st wrong: shield, 0 XP, combo reset");
  r = E.answer({ correct: false });
  assert.deepStrictEqual([r.shieldUsed, r.shields, r.hearts], [true, 0, 3]);
  r = E.answer({ correct: false });
  assert.deepStrictEqual([r.shieldUsed, r.shields, r.hearts], [false, 0, 2], "then hearts");
  E.answer({ correct: false });
  r = E.answer({ correct: false });
  assert.deepStrictEqual([r.hearts, r.gameOver], [0, true]);
  E.startWorld(1);
  assert.deepStrictEqual([E.session.shields, E.session.hearts], [2, 3], "reset on each world start");
  E.setSettings({ freeMistakes: 0 });
  E.startWorld(1);
  assert.strictEqual(E.answer({ correct: false }).hearts, 2, "0 free mistakes: a heart at once");
  const skipped = E.answer({ skipped: true });
  assert.strictEqual(skipped.shieldUsed, false);
  // a 1-shield player still gets accuracy counted normally
  E.setSettings({ freeMistakes: 1 });
  const sum = playWorld(E, 1, [{ correct: false }, ...Array(7).fill({ correct: true, attempts: 1 })]);
  assert.strictEqual(sum.accuracy, 7 / 8);
});

test("comfort: pause suggested after N worlds finished in a row; reset after a pause, a player change, never counted on game over", () => {
  const { E } = setup({ pack: makePack(4, 1) });
  E.setSettings({ pauseEvery: 2 });
  assert.strictEqual(E.worldsInARow(), 0);
  let sum = playWorld(E, 1);
  assert.deepStrictEqual([sum.worldsInARow, sum.pauseSuggested], [1, false]);
  E.startWorld(2); E.setSettings({ freeMistakes: 0 }); // game over does not count
  E.startWorld(2); E.answer({ correct: false }); E.answer({ correct: false }); E.answer({ correct: false }); E.quitWorld();
  assert.strictEqual(E.worldsInARow(), 1);
  sum = playWorld(E, 2);
  assert.deepStrictEqual([sum.worldsInARow, sum.pauseSuggested], [2, true]);
  sum = playWorld(E, 2);
  assert.strictEqual(sum.pauseSuggested, true, "asks again until a choice resets the counter");
  E.resetPauseCount();
  assert.strictEqual(playWorld(E, 1).pauseSuggested, false);
  assert.strictEqual(playWorld(E, 1).pauseSuggested, true, "asks again after N more worlds");
  E.setSettings({ pauseEvery: 0 });
  assert.strictEqual(playWorld(E, 1).pauseSuggested, false, "0 = never");
  E.setSettings({ pauseEvery: 4 });
  assert.strictEqual(E.worldsInARow(), 3);
  E.createProfile("Other", "🐼");
  assert.strictEqual(E.worldsInARow(), 0, "player change resets the counter");
  E.setPack(PACK, makePack(4, 1));
  assert.strictEqual(playWorld(E, 1).worldsInARow, 1);
  const raw = JSON.stringify(E.profiles());
  assert.doesNotMatch(raw, /worldsInARow|inARow/i, "the counter is never saved");
});

test("pause ideas: every school level of the catalogue has its own non-empty list (bands CP–CE2, CM1–6e, collège, lycée)", () => {
  const { window: W } = load();
  const lists = {};
  for (const l of W.CATALOG.levels) {
    const ideas = j(W.I18N.pauseIdeas(l.id));
    assert.ok(ideas.length >= 6, l.id);
    assert.ok(ideas.every((t) => typeof t === "string" && t.length > 5 && t.length < 80), l.id);
    lists[l.id] = ideas.join("|");
  }
  assert.strictEqual(lists.cp, lists.ce2);
  assert.strictEqual(lists.cm1, lists["6e"]);
  assert.strictEqual(lists["5e"], lists["3e"]);
  assert.strictEqual(lists["2nde"], lists.terminale);
  assert.strictEqual(new Set(Object.values(lists)).size, 4, "4 different bands");
  assert.ok(j(W.I18N.pauseIdeas("__proto__")).length > 0 && j(W.I18N.pauseIdeas(undefined)).length > 0, "unknown level → a default list");
});

test("pause: 5 minutes per player, kept in localStorage (survives a reload), hostile values ignored", () => {
  const ls = storage();
  const { E } = setup({ localStorage: ls });
  assert.strictEqual(E.pauseEndsAt(), 0, "no pause at first");
  const before = Date.now();
  const end = E.startPause();
  assert.ok(end >= before + E.PAUSE_MS && end <= Date.now() + E.PAUSE_MS, "ends in 5 minutes");
  assert.strictEqual(E.pauseEndsAt(), end);
  assert.strictEqual(E.startPause(), end, "starting again keeps the running pause (no reset to 5 min)");
  assert.strictEqual(E.worldsInARow(), 0, "a pause resets the worlds counter");
  // reload: same storage, new engine
  const E2 = load({ localStorage: ls }).window.Engine;
  assert.strictEqual(E2.pauseEndsAt(), end, "the pause survives a reload");
  // another player is not paused
  E2.createProfile("Tom", "🐼");
  assert.strictEqual(E2.pauseEndsAt(), 0, "the pause belongs to one player");
  // hostile / expired values
  const id = E2.currentProfile().id;
  for (const v of [JSON.stringify({ [id]: Date.now() + 10 * E.PAUSE_MS }), JSON.stringify({ [id]: Date.now() - 1 }),
    JSON.stringify({ [id]: "9999999999999" }), JSON.stringify({ [id]: { a: 1 } }), '{"__proto__":{"x":1}}', "not json", "[1,2]"]) {
    ls.setItem("revisionQuest.pause", v);
    assert.strictEqual(E2.pauseEndsAt(), 0, "ignored: " + v);
  }
  const fresh = E2.startPause();
  assert.ok(fresh > Date.now() && fresh <= Date.now() + E.PAUSE_MS, "a new pause replaces a bad value");
});
