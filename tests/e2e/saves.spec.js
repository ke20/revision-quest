// Saves: .save export/import round-trip, cookie backup restore, data in another (old/unknown) format is ignored.
"use strict";
const { test, expect } = require("@playwright/test");
const fs = require("fs");
const H = require("./helpers");
const { BASE, EN, wait, tap } = H;

test("export/import round-trip is lossless, cookie restore gives back the player", async ({ browser }, testInfo) => {
  const R = H.makeReporter(); const ok = R.ok;

    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
    const page = await ctx.newPage(); R.watch(page, 'C');
    await page.goto(BASE); await wait(page, 300);
    await H.newPlayer(page, 'Inès', 3);
    await page.evaluate(EN => { // a player with progress in two packs, badges, days, translations
      const s = Engine.state;
      s.xp = 512; s.badges.push('first_step', 'combo5', 'perfect', 'translator'); s.translations.push('1a2b3c', 'zz9'); s.days.push('2026-10-30', '2026-10-31'); s.bestCombo = 7; s.correct = 321;
      s.packs[EN] = { worlds: { 1: { stars: 5, accuracy: 1, completed: true }, 2: { stars: 4, accuracy: 0.8, completed: true } }, lastPlayed: 1761900000000 };
      s.lastPack = EN;
    }, EN);
    // give her progress in a second pack, then export (v3)
    await page.evaluate(() => { Engine.state.packs['5e/anglais/sample'] = { worlds: { 1: { stars: 3, accuracy: 0.75, completed: true } }, lastPlayed: 1762000000000 }; Engine.setSound(true); });
    const before = await page.evaluate(() => JSON.stringify(Engine.currentProfile()));
    await tap(page, '[data-act=save]'); await wait(page, 300);
    const [dl] = await Promise.all([page.waitForEvent('download'), tap(page, '[data-act=export]')]);
    const path = testInfo.outputPath('v3-roundtrip.save'); await dl.saveAs(path);
    await tap(page, '[data-act=close]'); await wait(page, 200);
    const file = fs.readFileSync(path, 'utf8');
    const inner = JSON.parse(Buffer.from(file.split('.')[1], 'base64').toString('utf8'));
    ok(file.startsWith('RQSAVE.') && inner.version === 3 && Object.keys(inner.profile.state.packs).sort().join() === [EN, '5e/anglais/sample'].sort().join(), 'v3 export contains both packs');
    // cookie restore (v3): wipe localStorage only
    await page.evaluate(() => localStorage.clear()); await page.reload(); await wait(page, 400);
    const afterCookie = await page.evaluate(() => JSON.stringify(Engine.currentProfile()));
    const strip = s => { const o = JSON.parse(s); Object.values(o.state.packs).forEach(p => { p.lastPlayed = Math.floor(p.lastPlayed / 1000); }); o.state.days = o.state.days.slice(-14); o.state.translations = []; return JSON.stringify(o); };
    ok(strip(afterCookie) === strip(before), 'cookie restore (v3) gives back the profile (all packs, lastPack, badges…; translations are not in the cookie)');
    ok(JSON.parse(afterCookie).state.translations.length === 0, 'translations are never stored in the cookie');
    ok(JSON.parse(afterCookie).state.correct === 321, 'the right answers counter is in the cookie');
    // wipe everything, import the v3 file
    await page.evaluate(() => localStorage.clear()); await ctx.clearCookies(); await page.reload(); await wait(page, 300);
    await tap(page, '[data-act=save]'); await wait(page, 300);
    await page.setInputFiles('.file-input', path); await wait(page, 500);
    const after = await page.evaluate(() => JSON.stringify(Engine.currentProfile()));
    const noId = s => { const o = JSON.parse(s); delete o.id; return JSON.stringify(o); };
    ok(noId(after) === noId(before), 'v3 export → import round-trip is lossless');
    await ctx.close();
    R.done();
});

test("data in an old or unknown format is ignored: the app starts fresh, never crashes", async ({ browser }, testInfo) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext(); const page = await ctx.newPage(); R.watch(page, "old");
  await page.goto(BASE);
  const oldState = { xp: 512, worlds: { 1: { stars: 3, accuracy: 1, completed: true } }, badges: ["first_step"] };
  await page.evaluate((st) => {
    localStorage.clear();
    localStorage.setItem("agonyAuntAcademy.v1", JSON.stringify(st));                                         // oldest app
    localStorage.setItem("agonyAuntAcademy.v2", JSON.stringify({ version: 2, profiles: [{ id: "pold00001", name: "Old", state: st }] }));
  }, oldState);
  const v2cookie = Buffer.from(JSON.stringify({ v: 2, c: "pcook0001", p: [["pcook0001", "Cookie", "🐼", 300, [[1, 3, 100]], [0], [], [], 1, 4, 1]] }), "utf8")
    .toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  await ctx.addCookies([H.cookie("aaa_save", "1"), H.cookie("aaa_save_0", v2cookie)]);
  await page.reload();
  await expect(page.locator(".screen.profiles .empty-card")).toBeVisible();
  ok(await page.evaluate(() => Engine.profiles().length) === 0, "old localStorage keys and old cookie format ignored: fresh start");
  // a v3 key holding another version is ignored too
  await page.evaluate((st) => localStorage.setItem("revisionQuest.v3", JSON.stringify({ version: 2, profiles: [{ id: "pold00002", name: "Old2", state: st }] })), oldState);
  await page.reload();
  await expect(page.locator(".screen.profiles .empty-card")).toBeVisible();
  ok(await page.evaluate(() => Engine.profiles().length) === 0, "save with another version number ignored");
  // old .save files are refused with a friendly message
  const oldFile = H.saveFile("AAASAVE", { app: "agony-aunt-academy", version: 2, profile: { name: "Inès", avatar: "🦄", state: oldState } });
  const v2InNew = H.saveFile("RQSAVE", { app: "revision-quest", version: 2, profile: { name: "Inès", state: oldState } });
  const r = await page.evaluate(([a, b]) => [Engine.parseImport(a), Engine.parseImport(b)], [oldFile, v2InNew]);
  ok(!r[0].ok && /n'est pas une sauvegarde/.test(r[0].error) && !r[1].ok, "old .save formats refused");
  fs.writeFileSync(testInfo.outputPath("old.save"), oldFile);
  await tap(page, "[data-act=save]");
  await page.setInputFiles(".file-input", testInfo.outputPath("old.save"));
  await expect(page.locator(".modal", { hasText: "Import impossible" })).toBeVisible();
  // a current state carrying an old "worlds" field keeps only the current fields
  const mixed = await page.evaluate((f) => Engine.parseImport(f), H.saveFile("RQSAVE", { app: "revision-quest", version: 3, profile: { name: "Mix", state: { xp: 5, worlds: { 1: { stars: 3 } } } } }));
  ok(mixed.ok && Object.keys(mixed.profile.state.packs).length === 0 && mixed.profile.state.xp === 5, "old-format fields inside a current save are ignored");
  await ctx.close();
  R.done();
});

test("a save from before the rewards (no right answers counter, 14-field cookie) still loads, badges kept", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext(); const page = await ctx.newPage(); R.watch(page, "pre-rewards");
  await page.goto(BASE);
  // cookie written by the previous version: 14 fields, badges boss (6) and streak3 (8) by index
  const old = Buffer.from(JSON.stringify({ v: 3, c: "pprev0001", p: [["pprev0001", "Avant", "🐼", 300, [[EN, 1762000000, [[1, 5, 100]]]], [0, 6, 8], [], ["20261101"], 1, 4, 1, EN, "41ono", 0]] }), "utf8")
    .toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  await page.evaluate(() => localStorage.clear());
  await ctx.addCookies([H.cookie("aaa_save", "1"), H.cookie("aaa_save_0", old)]);
  await page.reload();
  await expect(page.locator(".screen.home")).toBeVisible();
  const st = await page.evaluate(() => Engine.state);
  ok(st.xp === 300 && st.correct === 0 && st.badges.join() === "first_step,boss,streak3" && !("daily" in st && st.daily), "cookie of the previous version: counter 0, badges kept " + JSON.stringify(st));
  // a .save of the previous version (state without the new fields)
  const file = H.saveFile("RQSAVE", { app: "revision-quest", version: 3, profile: { name: "Ancien", state: { xp: 40, packs: {}, badges: ["perfect"], translations: [], days: [], sound: true, bestCombo: 2, lastPack: null } } });
  const r = await page.evaluate((f) => Engine.parseImport(f), file);
  ok(r.ok && r.profile.state.correct === 0 && r.profile.state.badges.join() === "perfect", ".save of the previous version imports");
  await ctx.close();
  R.done();
});
