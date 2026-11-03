// Two tabs open at once: storage events, per-player merge, tombstones, reset epoch, exercise not interrupted.
"use strict";
const { test } = require("@playwright/test");
const H = require("./helpers");
const { BASE, EN, wait, tap } = H;
const KEY = 'revisionQuest.v3';
const raw = page => page.evaluate(k => JSON.parse(localStorage.getItem(k)), KEY);

test("two tabs never overwrite each other", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const A = await ctx.newPage(), B = await ctx.newPage();
    R.watch(A, 'tabA'); R.watch(B, 'tabB');
    await A.goto(BASE); await B.goto(BASE); await wait(A, 300);
    await H.newPlayer(A, 'Ana', 0);
    await wait(B, 300);
    ok(await B.evaluate(() => Engine.profiles().map(p => p.name).join()) === 'Ana', 'tab B sees the player created in tab A (storage event)');
    ok((await B.textContent('.profile-list')).includes('Ana'), 'tab B re-rendered its players screen');
    await H.newPlayer(B, 'Ben', 1);
    await wait(A, 300);
    ok((await raw(A)).profiles.map(p => p.name).sort().join() === 'Ana,Ben', 'storage keeps both players');
    ok(await A.evaluate(() => Engine.currentProfile().name) === 'Ana' && await B.evaluate(() => Engine.currentProfile().name) === 'Ben', 'each tab keeps its own current player');
    // stale tab B (writes it never heard about): simulate with a direct write in B's own page (no event in the same tab)
    const anaId = await A.evaluate(() => Engine.currentProfile().id);
    await B.evaluate(([k, anaId]) => {
      const d = JSON.parse(localStorage.getItem(k));
      const ana = d.profiles.find(p => p.id === anaId);
      ana.state.xp = 77; ana.state.badges = ['first_step']; ana.state.days = ['2026-11-01'];
      ana.state.packs = { '5e/anglais/sample': { worlds: { 1: { stars: 2, accuracy: 0.8, completed: true } }, lastPlayed: 1762000000000 } }; ana.state.lastPack = '5e/anglais/sample';
      d.profiles.push({ id: 'pzedzed01', name: 'Zed', avatar: '🐼', createdAt: 1, state: { xp: 5 } });
      localStorage.setItem(k, JSON.stringify(d));
    }, [KEY, anaId]);
    await B.evaluate(() => Engine.setSound(false)); // B saves with a stale db
    let d = await raw(B);
    const ana = d.profiles.find(p => p.id === anaId);
    ok(d.profiles.map(p => p.name).sort().join() === 'Ana,Ben,Zed', 'stale tab save never deletes players created elsewhere');
    ok(ana.state.xp === 77 && ana.state.packs['5e/anglais/sample'].worlds['1'].stars === 2 && ana.state.badges.join() === 'first_step' && ana.state.lastPack === '5e/anglais/sample', 'stale tab save merges the other tab progress (xp, stars, badges, lastPack)');
    // merge rules: max xp / stars, union badges + days, newest lastPack
    await A.evaluate(() => { Engine.state.xp = 50; Engine.state.packs['5e/anglais/sample'] = { worlds: { 1: { stars: 3, accuracy: 0.6, completed: true }, 2: { stars: 1, accuracy: 0.5, completed: true } }, lastPlayed: 1 }; Engine.state.badges.push('combo5'); Engine.state.days.push('2026-11-02'); Engine.state.lastPack = '5e/anglais/sample'; });
    await B.evaluate(([k, anaId]) => { // B writes directly again so that A's next save must merge
      const d = JSON.parse(localStorage.getItem(k)); const a = d.profiles.find(p => p.id === anaId);
      a.state.packs['4e/anglais/giving-advice'] = { worlds: {}, lastPlayed: 1762999999999 }; a.state.lastPack = '4e/anglais/giving-advice';
      localStorage.setItem(k, JSON.stringify(d));
    }, [KEY, anaId]);
    await A.evaluate(() => Engine.setSound(false));
    d = await raw(A);
    const a2 = d.profiles.find(p => p.id === anaId).state;
    ok(a2.xp === 77 && a2.packs['5e/anglais/sample'].worlds['1'].stars === 3 && a2.packs['5e/anglais/sample'].worlds['1'].accuracy === 0.8 && a2.packs['5e/anglais/sample'].worlds['2'].stars === 1, 'merge: max xp, max stars/accuracy per world, worlds union');
    ok(a2.badges.join() === 'first_step,combo5' && a2.days.join() === '2026-11-01,2026-11-02', 'merge: badges and days union');
    ok(a2.lastPack === EN, 'merge: lastPack of the most recently played pack');
    // deletion in A propagates and is not undone by B
    await A.evaluate(() => { const z = Engine.profiles().find(p => p.name === 'Zed'); Engine.deleteProfile(z.id); });
    await wait(B, 200);
    ok(await B.evaluate(() => !Engine.profiles().some(p => p.name === 'Zed')), 'deletion in tab A reaches tab B');
    await B.evaluate(([k]) => { // even a stale write that still contains Zed cannot bring it back
      const d = JSON.parse(localStorage.getItem(k)); d.profiles.push({ id: 'pzedzed01', name: 'Zed', avatar: '🐼', createdAt: 1, state: { xp: 5 } }); delete d.deleted; localStorage.setItem(k, JSON.stringify(d));
    }, [KEY]);
    await B.evaluate(() => Engine.setSound(true));
    d = await raw(B);
    ok(!d.profiles.some(p => p.name === 'Zed') && d.deleted.pzedzed01 > 0, 'tombstone: a stale copy cannot resurrect a deleted player');
    // reset in A wins over B's stale progress
    await A.evaluate(() => Engine.reset());
    await B.evaluate(([k, anaId]) => { const d = JSON.parse(localStorage.getItem(k)); const a = d.profiles.find(p => p.id === anaId); a.epoch = 0; a.state.xp = 999; localStorage.setItem(k, JSON.stringify(d)); }, [KEY, anaId]);
    await A.evaluate(() => Engine.setSound(false));
    ok((await raw(A)).profiles.find(p => p.id === anaId).state.xp === 0, '"Effacer ma progression" wins over a stale copy (epoch)');
    // single tab exactness: a hint is not undone by the merge
    await B.evaluate(() => { Engine.state.xp = 40; Engine.setSound(true); });
    await wait(A, 200);
    await B.evaluate(() => Engine.useHint());
    ok((await raw(B)).profiles.find(p => p.name === 'Ben').state.xp === 37, 'hint cost kept (no merge when nobody else wrote)');
    // an exercise in progress is not interrupted by another tab
    await tap(A, '[data-act=catalog]'); await wait(A, 200);
    await tap(A, `.pack-card[data-pack="${EN}"]`); await A.waitForSelector('.screen.map');
    await H.startWorld(A, 0);
    await B.evaluate(() => App.showHome()); await tap(B, '[data-act=switch]'); await wait(B, 200);
    await H.newPlayer(B, 'Cléo', 3);
    await wait(A, 300);
    ok(await A.locator('.screen.play').count() === 1 && await A.evaluate(() => !!Engine.session && Engine.session.index === 0), 'tab A stays in its exercise while tab B saves');
    await H.solve(A, await H.curEx(A, 0)); await wait(A, 700); await H.closeModals(A);
    d = await raw(A);
    ok(d.profiles.map(p => p.name).sort().join() === 'Ana,Ben,Cléo' && d.profiles.find(p => p.id === anaId).state.xp > 0, 'answer saved after the other tab change, merged (Cléo kept)');
    await ctx.close();
  R.done();
});
