// Cookie backup size cap and content, corrupt v3 handling, renamed legacy keys.
"use strict";
const { test } = require("@playwright/test");
const H = require("./helpers");
const { BASE, wait } = H;

test("cookie backup capped at ~6 KB, ≤ 2 chunks, leftovers cleared", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext(); const page = await ctx.newPage(); R.watch(page, 'cookie');
    await page.goto(BASE);
    await ctx.addCookies([{ name: 'aaa_save_7', value: 'A'.repeat(3000), url: H.BASE }, { name: 'aaa_save_2', value: 'B'.repeat(3000), url: H.BASE }]);
    await page.evaluate(() => {
      localStorage.clear();
      for (let i = 0; i < 11; i++) {
        Engine.createProfile('Joueur' + i, '🦊');
        for (let j = 0; j < 500; j++) Engine.viewTranslation('w' + i + '_' + j + '|t');
        for (let q = 0; q < 4; q++) { const w = {}; for (let k = 1; k <= 10; k++) w[k] = { stars: 3, accuracy: 0.97, completed: true }; Engine.state.packs['pack-' + q] = { worlds: w, lastPlayed: Date.now() - (11 - i) * 1000 }; }
        Engine.setSound(true);
      }
    });
    const ck = (await ctx.cookies()).filter(c => c.name.startsWith('aaa_save'));
    const total = ck.reduce((n, c) => n + c.name.length + c.value.length + 1, 0);
    ok(total <= 6200 && ck.filter(c => /_\d+$/.test(c.name)).length <= 2, 'cookie backup ≤ ~6 KB and ≤ 2 chunks (' + total + ' bytes, ' + ck.length + ' cookies)');
    ok(!ck.some(c => c.name === 'aaa_save_7' || c.name === 'aaa_save_2'), 'leftover old chunks cleared');
    const r = await page.goto(BASE);
    ok(r.status() === 200, 'reload works (status ' + r.status() + ')');
    await page.evaluate(() => localStorage.clear()); await page.reload(); await wait(page, 300);
    const rest = await page.evaluate(() => ({ n: Engine.profiles().length, cur: Engine.currentProfile() && Engine.currentProfile().name, tr: Engine.translationsCount(), names: Engine.profiles().map(p => p.name) }));
    ok(rest.cur === 'Joueur10' && rest.n >= 1 && rest.n < 11 && rest.tr === 0, 'cookie keeps the current player first, drops the least recently played ones, no translations ' + JSON.stringify(rest));
    await ctx.close();
  R.done();
});

test("cookie stress: 10 heavy players", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext(); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(BASE);
  await p.evaluate(() => {
    for (let i = 0; i < 10; i++) {
      Engine.createProfile('Joueur stress ' + i, Engine.AVATARS[i]);
      for (let k = 0; k < 150; k++) Engine.viewTranslation('word' + k + i + '|trad' + k);
      Engine.state.xp = 100 * i;
      for (let q = 0; q < 6; q++) { const w = {}; for (let k = 1; k <= 10; k++) w[k] = { stars: 3, accuracy: 0.97, completed: true }; Engine.state.packs['4e/anglais/pack-numero-' + q + '-un-peu-long'] = { worlds: w, lastPlayed: Date.now() }; }
      Engine.setSound(true); // triggers save
    }
  });
  const n = await p.evaluate(() => document.cookie.split(';').filter(c => c.trim().startsWith('aaa_save_')).length);
  await p.evaluate(() => localStorage.clear()); await p.reload(); await p.waitForTimeout(300);
  const r = await p.evaluate(() => ({ n: Engine.profiles().length, tr: Engine.translationsCount(), xp: Engine.state.xp, name: Engine.currentProfile().name, packs: Object.keys(Engine.state.packs).length, stars: Engine.totalStars() }));
  ok(errs.length === 0, 'no page error');
  ok(n <= 2, 'cookie written in at most 2 chunks (' + n + ')');
  ok(r.n >= 1 && r.name === 'Joueur stress 9' && r.xp === 900 && r.packs === 6 && r.stars === 180, 'cookie restore keeps the current heavy player (6 packs, 180 stars) ' + JSON.stringify(r));
  ok(r.tr === 0, 'no translations in the cookie');
  await ctx.close();
  R.done();
});

test("corrupt v3: restored from the cookie, corrupt value backed up", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext(); const page = await ctx.newPage(); R.watch(page, 'corrupt');
    await page.goto(BASE);
    await page.evaluate(() => { localStorage.clear(); Engine.createProfile('Fresh', '🐯'); Engine.state.xp = 321; Engine.setSound(true); });
    await page.evaluate(() => {
      localStorage.setItem('revisionQuest.v3', '{"profiles": [oops');
    });
    await page.reload(); await wait(page, 300);
    const c = await page.evaluate(() => ({ names: Engine.profiles().map(p => p.name).join(), xp: Engine.state.xp, bak: localStorage.getItem('revisionQuest.v3.corrupt'), ok: !!JSON.parse(localStorage.getItem('revisionQuest.v3')) }));
    ok(c.names === 'Fresh' && c.xp === 321, 'corrupt v3 → restored from the cookie ' + JSON.stringify(c.names));
    ok(c.bak === '{"profiles": [oops', 'corrupt v3 value backed up to revisionQuest.v3.corrupt');
    ok(c.ok, 'v3 rewritten after restore');
    // invalid (parsable but unusable) v3 is treated as corrupt too
    await page.evaluate(() => localStorage.setItem('revisionQuest.v3', JSON.stringify({ version: 3, profiles: [{ name: '' }, 42] })));
    await page.reload(); await wait(page, 300);
    ok(await page.evaluate(() => Engine.profiles().map(p => p.name).join()) === 'Fresh', 'unusable v3 (no valid player) → cookie backup');
    await ctx.close();
  R.done();
});
