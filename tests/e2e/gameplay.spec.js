// English pack fully renderable (all 8 worlds, all 86 exercises) and broken / unknown exercises skipped neutrally.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { BASE, EN, SAMPLE, wait, tap } = H;

for (const [w, h, tag] of [[390, 844, "rm"], [1280, 800, "rd"]]) {
  test(`English pack: every world and every exercise renders (${w} px)`, async ({ browser }) => {
    const R = H.makeReporter();
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') R.errors.push(tag + ' ' + m.text()); });
    page.on('pageerror', e => R.errors.push(tag + ' pageerror ' + e.message));
    await page.goto(H.BASE);
    await page.evaluate((EN) => { // a v3 player with every world unlocked
      const worlds = {}; for (let i = 1; i <= 8; i++) worlds[i] = { stars: 1, accuracy: .5, completed: true };
      localStorage.setItem('revisionQuest.v3', JSON.stringify({ version: 3, currentId: 'pabcdef1', profiles: [{ id: 'pabcdef1', name: 'Smoke', avatar: '🦊', createdAt: 1, state: { xp: 0, packs: { [EN]: { worlds, lastPlayed: 1 } }, badges: [], translations: [], days: [], sound: false, bestCombo: 0, lastPack: EN } }] }));
    }, EN);
    await page.reload();
    await tap(page, '[data-act=continue]');
    await expect(page.locator('.screen.map')).toBeVisible();
    const ids = await page.evaluate(() => Engine.packData().worlds.map(w => w.id + ':' + w.exercises.map(e => e.type).join(',')));
    R.ok(ids.length === 8, tag + ' English pack has 8 worlds');
    let rendered = 0;
    for (let i = 0; i < ids.length; i++) {
      await H.startWorld(page, i);
      const hs = await H.hscroll(page);
      R.ok(hs <= 0, `${tag} world ${i + 1} no hscroll`);
      const res = await page.evaluate((wi) => {
        const out = []; let n = 0;
        const box = document.createElement('div'); box.className = 'ex-container'; document.body.appendChild(box);
        Engine.packData().worlds[wi].exercises.forEach((ex, k) => {
          try {
            Exercises.render(ex, box, () => {}, { data: Engine.packData() });
            if (box.querySelector('.ex-broken') || /Unknown exercise type|Type d'exercice inconnu/.test(box.textContent) || !box.querySelector('.ex-prompt')) out.push(k + ' not rendered');
            if (ex.type === 'write' && (ex.letterId != null || ex.docId != null) && !box.querySelector('.letter-card')) out.push(k + ' document missing');
            n++;
          } catch (e) { out.push(k + ' ' + e.message); }
        });
        box.remove(); return { out, n };
      }, i);
      rendered += res.n;
      R.ok(res.out.length === 0, `${tag} world ${i + 1}: all ${res.n} exercises render` + (res.out.length ? ' ' + res.out.join('; ') : ''));
      await tap(page, '[data-act=quit]'); await tap(page, '[data-act=yes]');
      await expect(page.locator('.screen.map')).toBeVisible();
    }
    R.ok(rendered === 86, `${tag} 86 exercises rendered (${rendered})`);
    await page.close();
    R.done();
  });
}

test("broken / unknown exercises are skipped neutrally", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } }); const page = await ctx.newPage(); R.watch(page, 'broken', { allow: /^Exercise render failed/ }); // deliberate broken exercise
    await H.withTestPacks(page, { body: (p, src) => src.replace('{ type: "match", prompt: "Match the words', '{ type: "boom", prompt: "Match the words').replace('{ type: "mcq", prompt: "What does **to fit in** mean?", options: ["s\'intégrer", "s\'habiller", "se battre", "se cacher"], answer: 0', '{ type: "mcq", prompt: "What does **to fit in** mean?", options: null, answer: 0') });
    await page.goto(BASE);
    await H.newPlayer(page, 'Broke');
    await H.gotoPack(page, SAMPLE);
    await H.startWorld(page, 0); await wait(page, 300);
    let s = await page.evaluate(() => ({ xp: Engine.state.xp, h: Engine.session.hearts, c: Engine.session.combo, sk: Engine.session.skipped, b: Engine.state.badges.length, fb: document.querySelector('.feedback').textContent }));
    ok(s.xp === 0 && s.h === 3 && s.c === 0 && s.sk === 1 && s.b === 0 && /Skipped/.test(s.fb), 'unknown exercise type: skipped neutrally (no XP, no heart, no combo, no badge) ' + JSON.stringify(s));
    await H.shot();
    await tap(page, '[data-act=check]'); await wait(page, 300);
    s = await page.evaluate(() => ({ xp: Engine.state.xp, h: Engine.session.hearts, sk: Engine.session.skipped, broken: !!document.querySelector('.ex-broken') }));
    ok(s.broken && s.xp === 0 && s.h === 3 && s.sk === 2, 'broken exercise (render error): skipped neutrally ' + JSON.stringify(s));
    await tap(page, '[data-act=check]'); await wait(page, 300);
    await H.solve(page, await H.curEx(page, 0)); await wait(page, 700); await H.closeModals(page);
    await tap(page, '[data-act=check]'); await wait(page, 500); await H.closeModals(page);
    const acc = await page.evaluate(() => Engine.state.packs['5e/anglais/sample'].worlds['1']);
    ok(acc && acc.stars === 5 && acc.accuracy === 1, 'skipped exercises are left out of the accuracy (1/1 counted → 5★)');
    await ctx.close();
  R.done();
});
