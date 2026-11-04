// Loading screen exit + stale callback, browser back button, chapter leaderboard clamp, imported copy names.
"use strict";
const { test } = require("@playwright/test");
const H = require("./helpers");
const { BASE, EN, SAMPLE, wait, tap } = H;

test("loading screen, back button, leaderboard clamp, copy names", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } }); const page = await ctx.newPage(); R.watch(page, 'nav');
    await page.route('**/packs/4e/anglais/giving-advice.js', async route => { await new Promise(r => setTimeout(r, 2500)); route.continue(); }); // slow pack
    await H.withTestPacks(page); // the leaderboard clamp below uses the sample chapter
    await page.goto(BASE); await wait(page, 300);
    await H.newPlayer(page, 'Nav');
    await tap(page, '[data-act=catalog]'); await wait(page, 200);
    await tap(page, `.pack-card[data-pack="${EN}"]`); await wait(page, 400);
    ok(await page.locator('.screen.loading [data-act=cancel]').count() === 1, 'loading screen has a "Retour" button');
    await H.shot();
    await tap(page, '.screen.loading [data-act=cancel]'); await wait(page, 200);
    ok(await page.locator('.screen.catalog').count() === 1, 'Retour leaves the loading screen');
    await wait(page, 2600);
    ok(await page.locator('.screen.catalog').count() === 1 && await page.evaluate(() => Engine.currentPackId()) === null, 'late load callback ignored (no hijack)');
    // pack is now cached: open it, then history navigation
    await tap(page, `.pack-card[data-pack="${EN}"]`); await page.waitForSelector('.screen.map');
    await page.goBack(); await wait(page, 300);
    ok(await page.locator('.screen.catalog').count() === 1 && page.url().startsWith(BASE), 'back button on the map → catalogue (still in the app)');
    await page.goBack(); await wait(page, 300);
    ok(await page.locator('.screen.home').count() === 1, 'back button on the catalogue → home');
    await tap(page, '[data-act=catalog]'); await wait(page, 200);
    await tap(page, `.pack-card[data-pack="${EN}"]`); await page.waitForSelector('.screen.map');
    await H.startWorld(page, 0);
    await page.goBack(); await wait(page, 300);
    ok(await page.locator('.screen.play').count() === 1 && (await page.textContent('.modal')).includes('Quit this world?'), 'back during an exercise asks the quit confirmation');
    await page.goBack(); await wait(page, 400);
    ok(await page.locator('.modal-backdrop:not(.out)').count() === 0 && await page.locator('.screen.play').count() === 1 && await page.evaluate(() => !!Engine.session), 'back again closes the dialog, exercise continues');
    await tap(page, '[data-act=quit]'); await tap(page, '[data-act=yes]'); await wait(page, 300);
    ok(await page.locator('.screen.map').count() === 1, 'quit still works');
    // 8a. per-pack leaderboard clamp
    await page.evaluate((SAMPLE) => { const w = {}; for (let i = 1; i <= 10; i++) w[i] = { stars: 5, accuracy: 1, completed: true }; Engine.state.packs[SAMPLE] = { worlds: w, lastPlayed: Date.now() }; Engine.setSound(false); }, SAMPLE);
    await page.evaluate(() => App.showHome()); await wait(page, 200);
    await tap(page, '[data-act=ranking]'); await wait(page, 200);
    await tap(page, `[data-lb="${SAMPLE}"]`); await wait(page, 200);
    ok((await page.textContent('.lb-row .lb-stats b')) === '⭐ 15/15', 'per-pack leaderboard clamped to worldCount × 5');
    // 8b. imported copy names stay ≤ 20 chars and unique
    const file = H.saveFile('RQSAVE', { app: 'revision-quest', version: 3, profile: { name: 'ABCDEFGHIJKLMNOPQRST', avatar: '🦊', state: {} } });
    const names = await page.evaluate(f => { const out = []; for (let i = 0; i < 3; i++) { const r = Engine.parseImport(f); out.push(Engine.importProfile(r.profile, 'copy').name); } return out; }, file);
    ok(names[0] === 'ABCDEFGHIJKLMNOPQRST' && names[1] === 'ABCDEFGHIJKLMNOP (2)' && names[2] === 'ABCDEFGHIJKLMNOP (3)' && names.every(n => n.length <= 20), 'copy names ≤ 20 chars and unique ' + JSON.stringify(names));
    await ctx.close();
  R.done();
});
