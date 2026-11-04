// Multi-pack platform: fresh start, lazy loading, per-pack progress, test packs, explorer badge, French-only chrome,
// catalogue filters, catalogue lang, load failures. The test packs come from tests/fixtures (routing only).
"use strict";
const { test } = require("@playwright/test");
const H = require("./helpers");
const { BASE, EN, SAMPLE, wait, tap } = H;

// test packs (tests/fixtures/packs) are served by routing (H.withTestPacks): never in packs/ or js/catalog.js

async function noHs(page, where) { const d = await H.hscroll(page); H.makeReporter().ok(d <= 0, 'no hscroll at ' + (page.viewportSize().width) + ' on ' + where + ' (' + d + ')'); }
const textOf = (page, sel) => page.evaluate(s => { const e = document.querySelector(s); return e ? e.innerText : ''; }, sel);
const ENGLISH_CHROME = /\b(Check|Continue|Tap|Lesson|World map|Let's go|Hint|Correct answer|Submit|words|needed|Examples)\b/;


test("fresh start, lazy pack loading, per-pack progress, test pack, explorer, chapter leaderboard", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;

    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage(); R.watch(page, 'A');
    await page.goto(BASE); await wait(page, 300);
    ok(await page.title() === 'Révision Quest', '<title> is Révision Quest');
    ok(await page.locator('.screen.profiles').count() === 1, 'fresh start → profile screen');
    await H.newPlayer(page, 'Zoé', 2);
    ok(await page.locator('.screen.home').count() === 1 && (await textOf(page, '.title')).replace(/\s+/g, ' ').trim() === 'Révision Quest', 'home shows app name');
    ok(await page.locator('[data-act=continue]').count() === 0 && await page.locator('[data-act=catalog]').count() === 1, 'no continue button; "Choisir un chapitre" shown');
    const homeBtns = await page.$$eval('.home-row .btn', b => b.map(x => x.textContent.trim()));
    ok(['Badges', 'Classement', 'Ma sauvegarde', 'Réglages'].every(l => homeBtns.some(t => t.includes(l))), 'home buttons: Badges, Classement, Ma sauvegarde, Réglages');
    await tap(page, '[data-act=catalog]'); await wait(page, 300);
    const realPacks = await page.$$eval('.pack-card', c => c.map(x => x.getAttribute('data-pack')));
    ok(realPacks.includes(EN) && !realPacks.some(p => /sample|test-/.test(p)), 'the production catalogue lists the real packs only (no test pack): ' + realPacks.join());
    ok(!(await page.evaluate(() => [...document.scripts].some(s => /packs\//.test(s.src)))), 'no pack script loaded before choosing one (lazy)');
    const card = await textOf(page, `.pack-card[data-pack="${EN}"]`);
    ok(/Anglais/.test(card) && /4e/.test(card) && /Dear Agony Aunt/.test(card) && /0\/40/.test(card), 'pack card: subject, level, title, stars 0/40');
    await tap(page, `.pack-card[data-pack="${EN}"]`); await page.waitForSelector('.screen.map');
    ok(await page.evaluate(() => [...document.scripts].filter(s => /packs\/4e\/anglais\/giving-advice\.js$/.test(s.src)).length === 1), 'pack loaded with a single <script src="packs/...">');
    ok((await textOf(page, '.screen-head h2')).includes('World map'), 'English pack: bilingual chrome on map');
    await tap(page, '[data-act=back]'); await wait(page, 250);
    ok(await page.locator('.screen.catalog').count() === 1, 'map back → catalogue');
    await tap(page, '[data-act=back]'); await wait(page, 250);
    ok(await page.locator('.screen.home').count() === 1, 'catalogue back → home');

    // test pack injected by routing
    await H.withTestPacks(page);
    await page.goto(BASE); await wait(page, 300);
    await tap(page, '[data-act=catalog]'); await wait(page, 300);
    const withSample = await page.$$eval('.pack-card', c => c.map(x => x.getAttribute('data-pack')));
    ok(withSample.includes('5e/anglais/sample') && withSample.includes(EN), 'the routed test pack is listed next to the real one');
    await H.shot();
    await noHs(page, 'catalogue');
    // play sample world 1 perfectly
    await tap(page, `.pack-card[data-pack="${SAMPLE}"]`); await page.waitForSelector('.screen.map');
    await H.shot();
    await H.startWorld(page, 0);
    await H.playWorld(page, 0);
    ok(await page.locator('.screen.complete').count() === 1, 'sample world 1 completed');
    const st = await page.evaluate(() => JSON.parse(JSON.stringify(Engine.state)));
    ok(st.packs['5e/anglais/sample'] && st.packs['5e/anglais/sample'].worlds['1'].stars === 5 && st.packs['5e/anglais/sample'].lastPlayed > 0, 'progress stored in state.packs.sample.worlds[1]');
    ok(!st.packs[EN] || Object.keys(st.packs[EN].worlds).length === 0, 'English pack progress untouched');
    ok(st.lastPack === '5e/anglais/sample', 'lastPack = sample');
    ok(!st.badges.includes('explorer'), 'no explorer badge after a single chapter');
    await tap(page, '[data-act=next]'); await wait(page, 300);
    await tap(page, '[data-act=back]'); await wait(page, 300);
    const sCard = await textOf(page, `.pack-card[data-pack="${SAMPLE}"]`);
    const width = await page.$eval(`.pack-card[data-pack="${SAMPLE}"] .pack-bar-fill`, e => e.style.width);
    ok(/5\/15/.test(sCard) && width === '33%', 'catalogue card shows stars 5/15 and progress 33% (' + width + ')');
    await tap(page, '[data-act=back]'); await wait(page, 300);
    ok((await textOf(page, '[data-act=continue]')).includes('Pack de test'), 'home: "Continuer : Pack de test"');
    await H.shot();
    await noHs(page, 'home');
    await tap(page, '[data-act=continue]'); await page.waitForSelector('.screen.map');
    ok(await page.evaluate(() => Engine.currentPackId()) === '5e/anglais/sample' && await page.locator('.map-node.current[data-i="1"]').count() === 1, 'continue opens the sample map at world 2');
    await tap(page, '[data-act=back]'); await wait(page, 250);
    // play one exercise in the English pack → explorer
    await tap(page, `.pack-card[data-pack="${EN}"]`); await page.waitForSelector('.screen.map');
    await H.startWorld(page, 0);
    await H.solve(page, await H.curEx(page, 0)); await wait(page, 700); await H.closeModals(page);
    ok(await page.evaluate(() => Engine.hasBadge('explorer')), 'explorer badge after playing 2 chapters');
    ok(await page.evaluate(() => Engine.state.lastPack) === EN, 'lastPack follows the last chapter played');
    await tap(page, '[data-act=check]'); await wait(page, 300);
    await tap(page, '[data-act=quit]'); await tap(page, '[data-act=yes]'); await wait(page, 300);
    // per-chapter leaderboard filter
    await tap(page, '[data-act=back]'); await wait(page, 200); await tap(page, '[data-act=back]'); await wait(page, 200);
    await tap(page, '[data-act=ranking]'); await wait(page, 300);
    await tap(page, `[data-lb="${SAMPLE}"]`); await wait(page, 250);
    ok((await textOf(page, '.lb-row .lb-stats b')) === '⭐ 5/15', 'leaderboard filtered on the sample chapter');
    await H.shot();
    await noHs(page, 'leaderboard filter');
    await ctx.close();
    R.done();
});

for (const [vw, vh, tag] of [[390, 844, "m"], [1280, 800, "d"]]) {
  test(`French-only chrome, catalogue filters, catalogue lang, load failures (${vw} px)`, async ({ browser }) => {
    const R = H.makeReporter(); const ok = R.ok;

    const ctx = await browser.newContext({ viewport: { width: vw, height: vh } });
    const page = await ctx.newPage(); R.watch(page, 'F' + tag, { allowCsp: true });
    await H.withTestPacks(page, { history: true });
    await page.goto(BASE); await wait(page, 300);
    await H.newPlayer(page, 'Lou');
    await page.evaluate(() => Engine.setSettings({ freeMistakes: 0 })); // no shield: a wrong answer shows the heart-lost text
    await H.shot();
    await tap(page, '[data-act=catalog]'); await wait(page, 300);
    const all = await page.$$eval('.pack-card', c => c.map(x => x.getAttribute('data-pack')));
    ok(all.length === 3, tag + ' catalogue lists 3 packs (with routed test pack)');
    const levelChips = await page.$$eval('[data-level]', c => c.map(x => x.textContent));
    ok(levelChips.join() === 'Toutes,CM2,5e,4e', tag + ' class chips only for used levels, ordered CM2→4e (no class set for this player): ' + levelChips.join());
    await H.shot();
    await noHs(page, 'catalogue (3 packs)');
    // filters
    await tap(page, '[data-level="4e"]'); await wait(page, 200);
    ok((await page.$$eval('.pack-card', c => c.map(x => x.getAttribute('data-pack')))).join() === EN, tag + ' filter level 4e → English only');
    ok((await page.$$eval('[data-subject]', c => c.map(x => x.getAttribute('data-subject')))).join() === ',anglais', tag + ' 4e: only the subjects of 4e are offered');
    await H.shot();
    await tap(page, '[data-level=""]'); await wait(page, 200);
    await tap(page, '[data-subject="histoire"]'); await wait(page, 200);
    ok((await page.$$eval('.pack-card', c => c.map(x => x.getAttribute('data-pack')))).join() === 'cm2/histoire/test-revolution', tag + ' filter Histoire → test pack only');
    ok(await page.locator('[data-subject="histoire"].on').count() === 1, tag + ' active chip highlighted');
    await H.shot();
    await tap(page, '[data-subject=""]'); await wait(page, 200);
    ok(await page.locator('.pack-card').count() === 3, tag + ' "Toutes" resets the subject filter');
    // French pack chrome
    await tap(page, '.pack-card[data-pack="cm2/histoire/test-revolution"]'); await page.waitForSelector('.screen.map');
    ok(await page.evaluate(() => I18N.lang()) === 'fr', tag + ' lang fr for the French pack');
    ok((await textOf(page, '.screen-head h2')) === 'Carte des mondes' && (await textOf(page, '.here')) === 'Tu es ici !', tag + ' map chrome in French');
    await H.shot();
    await noHs(page, 'French map');
    await H.openLesson(page, 0);
    const lesson = await page.evaluate(() => document.querySelector('.screen.lesson').innerText);
    ok(/Leçon/.test(lesson) && /3 exercices/.test(lesson) && /C'est parti/.test(lesson) && /mots soulignés/.test(lesson) && !ENGLISH_CHROME.test(lesson), tag + ' lesson chrome French only');
    await H.shot();
    await tap(page, '[data-act=go]'); await wait(page, 350);
    let play = await page.evaluate(() => document.querySelector('.screen.play').innerText);
    ok(/Vérifier/.test(play) && /Indice/.test(play) && !ENGLISH_CHROME.test(play), tag + ' mcq chrome French only (Vérifier, Indice)');
    await page.locator('.option[data-i="1"]').click(); await tap(page, '[data-act=check]'); await wait(page, 300);
    play = await page.evaluate(() => document.querySelector('.screen.play').innerText);
    ok(/Bonne réponse/.test(play) && /Continuer/.test(play) && /Oups/.test(play) && !ENGLISH_CHROME.test(play), tag + ' feedback French only');
    await H.shot();
    await tap(page, '[data-act=check]'); await wait(page, 300);
    play = await page.evaluate(() => document.querySelector('.screen.play').innerText);
    ok(/Touche une carte/.test(play) && !ENGLISH_CHROME.test(play), tag + ' sort chrome French only');
    await H.solve(page, await H.curEx(page, 0)); await wait(page, 600); await H.closeModals(page);
    await tap(page, '[data-act=check]'); await wait(page, 300);
    ok((await page.$eval('.order-line', e => getComputedStyle(e, '::before').content)).includes('Touche les mots'), tag + ' order placeholder French');
    await H.shot();
    await H.solve(page, await H.curEx(page, 0)); await wait(page, 600); await H.closeModals(page);
    await tap(page, '[data-act=check]'); await wait(page, 500); await H.closeModals(page);
    const comp = await page.evaluate(() => document.querySelector('.screen.complete').innerText);
    ok(/Monde terminé/.test(comp) && /Rejouer/.test(comp) && !ENGLISH_CHROME.test(comp), tag + ' result screen French only');
    await H.shot();
    await tap(page, '[data-act=next]'); await wait(page, 300);
    await H.startWorld(page, 1);
    const wr = await page.evaluate(() => document.querySelector('.screen.play').innerText);
    ok(/Le serment du Jeu de paume/i.test(wr) && /mots/.test(wr) && /requis/.test(wr) && /Valider/.test(wr) && !ENGLISH_CHROME.test(wr), tag + ' write + document (docId) chrome French only');
    await H.shot();
    await noHs(page, 'French write');
    await page.click('.letter-card .tr'); await wait(page, 200);
    ok((await textOf(page, '.tr-bubble')).includes('💡') && (await textOf(page, '.tr-bubble')).includes('ensemble de lois'), tag + ' definition bubble with 💡 (not 🇫🇷)');
    await page.mouse.click(5, 5);
    await tap(page, '[data-act=quit]'); await wait(page, 200);
    ok((await textOf(page, '.modal')).includes('Quitter ce monde ?'), tag + ' quit dialog French');
    await tap(page, '[data-act=yes]'); await wait(page, 200);
    // pack file says lang "fr" but the catalogue says "en": the catalogue wins
    await H.withTestPacks(page, { history: true, body: (p, src) => p === SAMPLE ? src.replace('lang: "en"', 'lang: "fr"') : src });
    await tap(page, '[data-act=back]'); await wait(page, 200);
    await tap(page, `.pack-card[data-pack="${SAMPLE}"]`); await page.waitForSelector('.screen.map');
    ok(await page.evaluate(() => I18N.lang()) === 'en' && (await textOf(page, '.screen-head h2')).includes('World map'), tag + ' catalogue lang wins over the pack file lang');
    // now the catalogue also says "fr" for the sample pack
    await H.withTestPacks(page, { history: true, entry: e => e.path === SAMPLE ? { ...e, lang: 'fr' } : e });
    await page.goto(BASE); await wait(page, 300);
    await tap(page, '[data-act=catalog]'); await wait(page, 200);
    await tap(page, `.pack-card[data-pack="${SAMPLE}"]`); await page.waitForSelector('.screen.map');
    await H.startWorld(page, 0);
    // the sample content itself is English: only the chrome (helper, hint bar, check button) is checked
    play = await page.evaluate(() => ['.ex-help', '.fb-hint', '.match-rule', '[data-act=check]'].map(s => document.querySelector(s).textContent).join(' | '));
    ok(/Touche un élément à gauche/.test(play) && /Associe toutes les paires/.test(play) && /Vérifier/.test(play) && !ENGLISH_CHROME.test(play), tag + ' sample pack switched to fr → French chrome (match) ' + JSON.stringify(play));
    await tap(page, '[data-act=quit]'); await tap(page, '[data-act=yes]'); await wait(page, 200);
    // back to the English pack → bilingual again
    await tap(page, '[data-act=back]'); await wait(page, 200);
    await tap(page, `.pack-card[data-pack="${EN}"]`); await page.waitForSelector('.screen.map');
    await H.startWorld(page, 0);
    play = await page.evaluate(() => ['.ex-help', '.fb-hint', '[data-act=check]'].map(s => document.querySelector(s).textContent).join(' | '));
    ok(/Check \(Vérifier\)/.test(play) && /Tap a word on the left/.test(play) && /Match all the pairs/.test(play), tag + ' English pack keeps bilingual chrome ' + JSON.stringify(play));
    await H.shot();
    await tap(page, '[data-act=quit]'); await tap(page, '[data-act=yes]'); await wait(page, 200);
    await tap(page, '[data-act=back]'); await wait(page, 200); await tap(page, '[data-act=back]'); await wait(page, 200);
    await H.shot();
    await noHs(page, 'home with continue');
    await tap(page, '[data-act=ranking]'); await wait(page, 300);
    await H.shot();
    await noHs(page, 'leaderboard');
    await tap(page, '[data-act=back]'); await wait(page, 200);
    await tap(page, '[data-act=badges]'); await wait(page, 300);
    await H.shot();
    await noHs(page, 'badges');
    await tap(page, '[data-act=back]'); await wait(page, 200);
    await tap(page, '[data-act=settings]'); await wait(page, 300);
    ok((await textOf(page, '.modal')).includes('Réglages') && (await textOf(page, '.modal')).includes('Effacer ma progression'), tag + ' settings in French');
    await H.shot();
    await tap(page, '.modal [data-act=close]'); await wait(page, 300);

    // H. load failure → friendly error, then retry works
    await page.route('**/packs/4e/anglais/giving-advice.js', route => route.abort());
    await page.goto(BASE); await wait(page, 300);
    await tap(page, '[data-act=catalog]'); await wait(page, 200);
    await tap(page, `.pack-card[data-pack="${EN}"]`); await page.waitForSelector('.screen.error', { timeout: 5000 });
    const errTxt = await textOf(page, '.screen.error');
    ok(/Impossible de charger ce chapitre/.test(errTxt) && /Réessayer/.test(errTxt) && /Retour aux chapitres/.test(errTxt), tag + ' load failure → friendly French error with retry');
    await H.shot();
    await noHs(page, 'load error');
    await page.unroute('**/packs/4e/anglais/giving-advice.js');
    await tap(page, '[data-act=retry]'); await page.waitForSelector('.screen.map', { timeout: 5000 });
    ok(await page.evaluate(() => Engine.currentPackId()) === EN, tag + ' retry after failure loads the pack');
    // broken pack file (registers nothing) → invalid error
    await page.route('**/packs/cm2/histoire/test-revolution.js', route => route.fulfill({ status: 200, contentType: 'text/javascript', body: 'window.registerPack({ path: "cm2/histoire/test-revolution", lang: "fr", worlds: [] });' }));
    await tap(page, '[data-act=back]'); await wait(page, 200);
    await tap(page, '.pack-card[data-pack="cm2/histoire/test-revolution"]'); await page.waitForSelector('.screen.error', { timeout: 5000 });
    ok(/abîmé ou incomplet/.test(await textOf(page, '.screen.error')), tag + ' invalid pack → "abîmé ou incomplet" error');
    await tap(page, '[data-act=back]'); await wait(page, 200);
    ok(await page.locator('.screen.catalog').count() === 1, tag + ' error "Retour aux chapitres" → catalogue');
    await ctx.close();
      R.done();
  });
}

test("class of the player: chosen at creation, pre-filters the catalogue, « Voir toutes les classes », changed in Réglages", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage(); R.watch(page, 'grade');
  await H.withTestPacks(page, { history: true });
  await page.goto(BASE); await wait(page, 300);
  await tap(page, '[data-act=new]');
  ok(await page.locator('[data-grade]').count() === 13 && await page.locator('[data-grade=""].on').count() === 1, 'creation: 12 classes + « Plus tard » (selected by default)');
  await tap(page, '[data-act=back]');
  await H.newPlayer(page, 'Léo', 0, { grade: 'cm2' });
  ok(await page.evaluate(() => Engine.settings().grade) === 'cm2', 'class saved with the player');
  await tap(page, '[data-act=catalog]'); await wait(page, 300);
  const packs = () => page.$$eval('.pack-card', c => c.map(x => x.getAttribute('data-pack')));
  ok((await packs()).join() === 'cm2/histoire/test-revolution', 'only the chapters of CM2');
  ok(await page.locator('[data-level]').count() === 0 && (await textOf(page, '.grade-pill')).includes('CM2'), 'no class chips, « 🎒 CM2 » shown instead');
  ok((await page.$$eval('[data-subject]', c => c.map(x => x.getAttribute('data-subject')))).join() === ',histoire', 'only the subjects of CM2');
  await noHs(page, 'catalogue with a class');
  await tap(page, '[data-act=all-grades]'); await wait(page, 200);
  ok((await packs()).length === 3 && await page.locator('[data-level]').count() === 4, '« Voir toutes les classes » → every chapter and the class chips');
  await tap(page, '[data-act=my-grade]'); await wait(page, 200);
  ok((await packs()).join() === 'cm2/histoire/test-revolution', '« Seulement ma classe » → back to CM2');
  // change the class in Réglages
  await tap(page, '[data-act=back]'); await wait(page, 200);
  await H.settle(page);
  await tap(page, '[data-act=settings]'); await wait(page, 300);
  ok(await page.locator('.modal [data-set-grade="cm2"].on').count() === 1, 'Réglages: current class selected');
  await tap(page, '.modal [data-set-grade="4e"]');
  ok(await page.evaluate(() => Engine.settings().grade) === '4e', 'class changed');
  await H.settle(page);
  await tap(page, '.modal [data-act=close]'); await wait(page, 300);
  await tap(page, '[data-act=catalog]'); await wait(page, 300);
  ok((await packs()).join() === EN && (await textOf(page, '.grade-pill')).includes('4e'), 'catalogue follows the new class');
  // a class without any chapter: friendly message, way out
  await page.evaluate(() => Engine.setSettings({ grade: 'cp' }));
  await tap(page, '[data-act=back]'); await wait(page, 200);
  await tap(page, '[data-act=catalog]'); await wait(page, 300);
  ok((await textOf(page, '.pack-list')).includes('Pas encore de chapitre pour la classe CP'), 'no chapter for CP → message');
  // « Aucune » → everything, as before
  await page.evaluate(() => Engine.setSettings({ grade: '' }));
  await tap(page, '[data-act=back]'); await wait(page, 200);
  await tap(page, '[data-act=catalog]'); await wait(page, 300);
  ok((await packs()).length === 3 && await page.locator('.grade-pill').count() === 0, 'no class → every chapter');
  await ctx.close();
  R.done();
});
