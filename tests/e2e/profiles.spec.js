// Players, validation, secret badges, match rule, leaderboard, export / import, cookie fallback (one long real user flow).
"use strict";
const { test } = require("@playwright/test");
const fs = require("fs");
const H = require("./helpers");
const { BASE: URL, EN, wait, tap } = H;

function setup() {
  const R = H.makeReporter();
  const ok = R.ok;
  const sess = page => page.evaluate(() => Engine.session && { index: Engine.session.index, hearts: Engine.session.hearts, combo: Engine.session.combo });
  const curEx = page => H.curEx(page, 0);
  const enStars = (page, w) => page.evaluate(([EN, w]) => { const p = Engine.state.packs[EN]; return p && p.worlds[w] ? p.worlds[w].stars : 0; }, [EN, String(w)]);

  async function hscroll(page, where) { const d = await H.hscroll(page); ok(d <= 0, 'no hscroll on ' + where + ' (' + d + ')'); }
  async function startWorld1(page) { await H.gotoPack(page, EN); await H.startWorld(page, 0); }
  async function backHome(page) { // map → catalogue → home
    await tap(page, '[data-act=back]'); await wait(page, 250);
    await tap(page, '[data-act=back]'); await wait(page, 250);
  }
  async function solveMatch(page, n) {
    for (let i = 0; i < n; i++) {
      await page.locator(`.match-col >> nth=0 >> .match-item[data-i="${i}"]`).click();
      await page.locator(`.match-col >> nth=1 >> .match-item[data-i="${i}"]`).click();
    }
  }
  async function wrongPair(page) {
    await page.locator('.match-col >> nth=0 >> .match-item:not(.locked)[data-i="0"]').click();
    await page.locator('.match-col >> nth=1 >> .match-item:not(.locked)[data-i="1"]').click();
  }
  async function answerCurrent(page) {
    const ex = await curEx(page);
    if (ex.type === 'match') await solveMatch(page, ex.pairs.length);
    else { await page.locator('.option').nth(ex.answer).click(); await tap(page, '[data-act=check]'); }
    await wait(page, 150);
  }
  async function next(page) { await tap(page, '[data-act=check]'); await wait(page, 350); }
  const closeModals = H.closeModals;


  return { R, ok, sess, curEx, enStars, hscroll, startWorld1, backHome, solveMatch, wrongPair, answerCurrent, next, closeModals };
}

test("players, match rule, leaderboard, export/import, cookie fallback", async ({ browser }, testInfo) => {
  const { R, ok, sess, curEx, enStars, hscroll, startWorld1, backHome, solveMatch, wrongPair, answerCurrent, next, closeModals } = setup();

  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
  const page = await ctx.newPage();
  R.watch(page, 'main');
  await page.goto(URL);
  await wait(page, 400);

  // 1. first launch → profile screen
  ok(await page.locator('.screen.profiles').count() === 1, 'first launch shows profile screen');
  ok((await page.textContent('.empty-card h3')).includes('Révision Quest'), 'welcome uses the app name');
  await hscroll(page, 'welcome');

  // 2. validation
  await tap(page, '[data-act=new]');
  await hscroll(page, 'new player');
  await page.fill('#np-name', '   ');
  await tap(page, '[data-act=create]');
  ok((await page.textContent('.field-error')).length > 0, 'empty name rejected');
  await tap(page, '[data-act=back]');
  await H.newPlayer(page, '  Léa  ', 0);
  await page.evaluate(() => Engine.setSettings({ freeMistakes: 0 })); // no shield: the match rule below costs a heart at once
  ok((await page.textContent('.who-name')) === 'Léa', 'home shows trimmed name Léa');
  ok(await page.locator('[data-act=continue]').count() === 0, 'no "Continuer" button before playing');
  ok((await page.textContent('.rank')).includes('Débutant'), 'generic French rank "Débutant"');
  await hscroll(page, 'home');

  // 3. badges hidden
  await tap(page, '[data-act=badges]'); await wait(page, 200);
  let btxt = await page.textContent('.badge-grid');
  ok(!/Premier pas|Combo|Curieux|👣/.test(btxt) && (btxt.match(/\?\?\?/g) || []).length === 10, 'all 10 badges hidden initially');
  ok(btxt.includes('Badge secret'), 'secret teaser shown');
  await tap(page, '[data-act=back]');

  // 4. Léa plays world 1 perfectly
  await startWorld1(page);
  ok((await page.textContent('.match-rule')).includes("plus d'1 erreur"), 'match rule shown');
  ok((await page.textContent('.match-count')).includes('Erreurs : 0 / 1 autorisée'), 'match counter shown');
  const total = await page.evaluate(() => Engine.session.total);
  for (let i = 0; i < total; i++) { await answerCurrent(page); await wait(page, 500); await closeModals(page); await next(page); await closeModals(page); }
  ok(await page.locator('.screen.complete').count() === 1, 'world 1 complete');
  await closeModals(page);
  await tap(page, '[data-act=next]'); await wait(page, 300);
  await backHome(page);
  ok((await page.textContent('[data-act=continue]')).includes('Dear Agony Aunt'), 'home shows "Continuer : Dear Agony Aunt"');
  await tap(page, '[data-act=badges]'); await wait(page, 200);
  btxt = await page.textContent('.badge-grid');
  ok(btxt.includes('Premier pas') && btxt.includes('Sans faute'), 'earned badges revealed (French names)');
  ok(!btxt.includes('Grand lecteur') && !btxt.includes('Chapitre terminé') && !btxt.includes('Explorateur'), 'unearned badges still hidden');
  await tap(page, '[data-act=back]');

  // 5. match rule
  await startWorld1(page);
  let ex = await curEx(page);
  ok(ex.type === 'match', 'first exercise is match');
  await wrongPair(page);
  ok((await page.textContent('.match-count')).includes('Erreurs : 1 / 1'), 'counter = 1 after a wrong pair');
  ok(await page.locator('.match-grid.board-locked').count() === 1, 'board locked after wrong pair');
  await page.locator('.match-col >> nth=0 >> .match-item[data-i="0"]').click({ force: true });
  await page.locator('.match-col >> nth=1 >> .match-item[data-i="2"]').click({ force: true });
  ok((await page.textContent('.match-count')).includes('Erreurs : 1 / 1'), 'spam clicks during lock ignored');
  ok(await page.locator('.match-item.selected').count() === 0, 'no selection during lock');
  await wait(page, 1100);
  ok(await page.locator('.match-grid.board-locked').count() === 0, 'board unlocked after ~1s');
  const xpBefore = await page.evaluate(() => Engine.state.xp);
  await solveMatch(page, ex.pairs.length); await wait(page, 150);
  let s = await sess(page);
  const xpAfter = await page.evaluate(() => Engine.state.xp);
  ok(xpAfter - xpBefore === 5 && s.hearts === 3, '1 mistake → +5 XP, no heart lost (got ' + (xpAfter - xpBefore) + ', hearts ' + s.hearts + ')');
  ok(await page.locator('.checkbar.ok').count() === 1 && (await page.textContent('.feedback')).includes('XP réduite'), '1 mistake feedback says reduced XP');
  await next(page);
  while ((await curEx(page)).type !== 'match') { await answerCurrent(page); await next(page); }
  ex = await curEx(page);
  await wrongPair(page); await wait(page, 1100);
  await wrongPair(page);
  ok((await page.textContent('.match-count')).includes('raté'), 'counter shows failed after 2 errors');
  await wait(page, 1100);
  const xpB2 = await page.evaluate(() => Engine.state.xp);
  await solveMatch(page, ex.pairs.length); await wait(page, 150);
  s = await sess(page);
  ok(s.hearts === 2 && s.combo === 0, '2 mistakes → heart lost, combo reset');
  ok((await page.evaluate(() => Engine.state.xp)) === xpB2, '2 mistakes → 0 XP');
  ok(await page.locator('.checkbar.ko').count() === 1, '2 mistakes → failure bar');
  await next(page);
  await closeModals(page);
  await tap(page, '[data-act=quit]'); await tap(page, '[data-act=yes]'); await wait(page, 300);
  await backHome(page);
  const leaXp2 = await page.evaluate(() => Engine.state.xp);

  // 6. second player
  await tap(page, '[data-act=switch]'); await wait(page, 300);
  await tap(page, '[data-act=new]');
  await page.fill('#np-name', 'lÉa');
  await tap(page, '[data-act=create]');
  ok((await page.textContent('.field-error')).includes('existe'), 'duplicate name (case-insensitive) rejected');
  await page.fill('#np-name', 'Tom');
  await page.click('.avatar-btn >> nth=4');
  await tap(page, '[data-act=create]'); await wait(page, 300);
  ok((await page.textContent('.who-name')) === 'Tom', 'switched to Tom');
  ok((await page.evaluate(() => Engine.state.xp)) === 0, 'Tom starts with 0 XP');
  await page.evaluate(() => Engine.setSound(false));
  await startWorld1(page);
  for (let i = 0; i < 3; i++) { await answerCurrent(page); await next(page); }
  await tap(page, '[data-act=quit]'); await tap(page, '[data-act=yes]'); await wait(page, 300);
  await backHome(page);
  const tomXp = await page.evaluate(() => Engine.state.xp);
  ok(tomXp > 0 && tomXp < leaXp2, 'Tom has some XP, less than Léa (' + tomXp + ' vs ' + leaXp2 + ')');

  // 7. leaderboard (global + per chapter)
  await tap(page, '[data-act=ranking]'); await wait(page, 300);
  const rows = await page.$$eval('.lb-row', r => r.map(x => ({ name: x.querySelector('.lb-main b').textContent, me: x.classList.contains('me'), pos: x.querySelector('.lb-pos').textContent })));
  ok(rows.length === 2 && rows[0].name.startsWith('Léa') && rows[0].pos === '🥇' && rows[1].name.startsWith('Tom') && rows[1].me, 'leaderboard order + highlight: ' + JSON.stringify(rows));
  await hscroll(page, 'leaderboard');
  await tap(page, `[data-lb="${EN}"]`); await wait(page, 250);
  const prow = await page.$$eval('.lb-row .lb-stats b', r => r.map(x => x.textContent));
  ok(prow[0] === '⭐ 5/40' && prow[1] === '⭐ 0/40', 'per-chapter leaderboard shows chapter stars ' + JSON.stringify(prow));
  await hscroll(page, 'leaderboard per chapter');
  await tap(page, '[data-act=back]'); await wait(page, 200);

  // 8. switch back to Léa keeps separate progress
  await tap(page, '[data-act=switch]'); await wait(page, 300);
  await hscroll(page, 'profiles');
  await page.locator('.profile-pick', { hasText: 'Léa' }).click(); await wait(page, 300);
  ok((await page.evaluate(() => Engine.state.xp)) === leaXp2 && (await page.textContent('.who-name')) === 'Léa', 'Léa progress kept after switch');
  ok((await enStars(page, 1)) === 5, 'Léa keeps 5 stars on world 1 of the English pack');

  // 9. export (v3)
  await tap(page, '[data-act=save]'); await wait(page, 300);
  const [dl] = await Promise.all([page.waitForEvent('download'), tap(page, '[data-act=export]')]);
  const fname = dl.suggestedFilename();
  const savePath = testInfo.outputPath('export-test.save');
  await dl.saveAs(savePath);
  const content = fs.readFileSync(savePath, 'utf8');
  ok(fname === 'Léa-revision-quest.save', 'export filename ' + fname);
  ok(content.startsWith('RQSAVE.') && !content.includes('Léa'), 'export content encoded (RQSAVE)');
  const inner = JSON.parse(Buffer.from(content.split('.')[1], 'base64').toString('utf8'));
  ok(inner.version === 3 && inner.app === 'revision-quest' && inner.profile.state.packs[EN].worlds['1'].stars === 5, 'export is version 3 with per-pack progress');
  await tap(page, '[data-act=close]'); await wait(page, 300);

  // 10. cookie fallback: clear localStorage only
  await page.evaluate(() => localStorage.clear());
  await page.reload(); await wait(page, 400);
  ok((await page.textContent('.who-name')) === 'Léa' && (await page.evaluate(() => Engine.state.xp)) === leaXp2, 'cookie fallback restored Léa');
  ok((await page.evaluate(() => Engine.profiles().length)) === 2, 'cookie fallback restored both players');
  ok((await enStars(page, 1)) === 5 && (await page.evaluate(() => Engine.lastPack())) === EN, 'cookie fallback restored per-pack stars + last pack');
  ok((await page.evaluate(() => !!localStorage.getItem('revisionQuest.v3'))), 'localStorage re-written after cookie restore');

  // 11. clear everything, then import
  await page.evaluate(() => localStorage.clear());
  await ctx.clearCookies();
  await page.reload(); await wait(page, 400);
  ok(await page.locator('.screen.profiles .empty-card').count() === 1, 'empty after clearing storage');
  await tap(page, '[data-act=save]'); await wait(page, 300);
  ok(await page.locator('[data-act=export]').count() === 0, 'no export without a player');
  fs.writeFileSync(testInfo.outputPath('bad.save'), 'hello world');
  await page.setInputFiles('.file-input', testInfo.outputPath('bad.save')); await wait(page, 400);
  ok((await page.textContent('.modal')).includes('Import impossible'), 'invalid file → friendly error');
  await page.click('.modal [data-act=ok]'); await wait(page, 300);
  const parts = content.split('.');
  fs.writeFileSync(testInfo.outputPath('tampered.save'), parts[0] + '.' + parts[1] + '.zzz');
  await tap(page, '[data-act=save]'); await wait(page, 300);
  await page.setInputFiles('.file-input', testInfo.outputPath('tampered.save')); await wait(page, 400);
  ok((await page.textContent('.modal')).includes('modifié'), 'tampered file → checksum error');
  await page.click('.modal [data-act=ok]'); await wait(page, 300);
  await tap(page, '[data-act=save]'); await wait(page, 300);
  await page.setInputFiles('.file-input', savePath); await wait(page, 500);
  ok((await page.textContent('.who-name')) === 'Léa' && (await page.evaluate(() => Engine.state.xp)) === leaXp2, 'import restored Léa XP');
  ok((await enStars(page, 1)) === 5 && (await page.evaluate(() => Engine.hasBadge('perfect'))), 'import restored stars & badges');
  await tap(page, '[data-act=save]'); await wait(page, 300);
  await page.setInputFiles('.file-input', savePath); await wait(page, 500);
  ok((await page.textContent('.modal')).includes('existe déjà'), 'conflict dialog shown');
  await page.click('.modal [data-act=copy]'); await wait(page, 400);
  ok((await page.textContent('.who-name')) === 'Léa (2)', 'imported as copy "Léa (2)"');
  await tap(page, '[data-act=save]'); await wait(page, 300);
  await page.setInputFiles('.file-input', savePath); await wait(page, 500);
  await page.click('.modal [data-act=replace]'); await wait(page, 400);
  ok((await page.evaluate(() => Engine.profiles().length)) === 2 && (await page.textContent('.who-name')) === 'Léa', 'replace keeps 2 players, switches to Léa');

  // 12. delete profile
  await tap(page, '[data-act=switch]'); await wait(page, 300);
  await page.locator('.profile-row', { hasText: 'Léa (2)' }).locator('.btn-del').click(); await wait(page, 300);
  await page.click('.modal [data-act=yes]'); await wait(page, 400);
  ok((await page.evaluate(() => Engine.profiles().map(p => p.name).join())) === 'Léa', 'profile deleted');

  // desktop navigation (screens at 1280 px)
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.click('.profile-pick'); await wait(page, 300);
  await tap(page, '[data-act=ranking]'); await wait(page, 300);
  await tap(page, '[data-act=back]'); await wait(page, 200);
  await tap(page, '[data-act=badges]'); await wait(page, 300);
  await tap(page, '[data-act=back]'); await wait(page, 200);
  await tap(page, '[data-act=save]'); await wait(page, 300);
  await tap(page, '[data-act=close]'); await wait(page, 300);
  await tap(page, '[data-act=switch]'); await tap(page, '[data-act=new]'); await wait(page, 300);
  await tap(page, '[data-act=back]'); await wait(page, 200);
  await page.click('.profile-pick'); await wait(page, 300);
  await startWorld1(page);
  await wrongPair(page);
  await ctx.close();

  R.done();
});
