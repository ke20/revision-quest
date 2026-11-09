// Security: hostile .save files, localStorage and cookies, escaping, CSP, pack loading rules; privacy: self-hosted font.
"use strict";
const { test } = require("@playwright/test");
const fs = require("fs");
const H = require("./helpers");
const { BASE, EN, wait, tap } = H;
// true when no element was injected: no <img>, no inline <script>, no foreign <svg>, no on* attribute anywhere
// the app's own SVGs (map path, geometry figures, GitHub mark, full screen icon) are allowed; any other svg / img / inline script would be injected
const domClean = page => page.evaluate(() => !document.querySelector('img, script:not([src]), svg:not(.map-svg):not(.fig-svg):not(.gh-icon):not([data-act=fullscreen] svg):not(.season-fall svg)') &&
  ![...document.querySelectorAll('*')].some(el => [...el.attributes].some(a => /^on/i.test(a.name))));


test("malicious saves, cookies, storage, CSP and pack loading rules are neutralised", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;

  const ctx = await browser.newContext(); const page = await ctx.newPage();
  R.watch(page, 'sec', { allowCsp: true });
  await page.goto(BASE); await wait(page, 500);

  // 1. Malicious save file built with a valid checksum (attacker knows the format)
  const evilV2 = H.saveFile('RQSAVE', { app: 'revision-quest', version: 3, profile: {
    id: '"><img src=x onerror=alert(1)>', name: '<img src=x onerror=alert(1)>‮evil', avatar: '<svg onload=alert(1)>',
    createdAt: 'x', state: { xp: 1e99, packs: { [EN]: { worlds: { PROTOKEY: { stars: 3 }, '<b>': { stars: 9 }, '1': { stars: 99, accuracy: 7 } } } },
      badges: ['x', 'boss'], translations: ['<script>', 'abc123', 'a'.repeat(5000)], days: ['<x>', '2026-11-01'], bestCombo: 1e50 },
    PROTOKEY: { polluted: true } } });
  const res = await page.evaluate((text) => {
    const r = Engine.parseImport(text);
    if (!r.ok) return { r };
    const p = Engine.importProfile(r.profile, 'copy');
    return { p, polluted: ({}).polluted === true };
  }, evilV2);
  const p = res.p;
  ok(p && /^p[a-z0-9]{4,24}$/.test(p.id), 'save: id sanitized');
  ok(p && p.avatar === '🦊', 'save: avatar whitelisted');
  ok(p && !/‮/.test(p.name), 'save: bidi char stripped');
  ok(p && p.state.xp === 1000000, 'save: xp clamped');
  const w = p && p.state.packs[EN] && p.state.packs[EN].worlds;
  ok(w && Object.keys(w).join() === '1' && w[1].stars === 5 && w[1].accuracy === 1, 'save: world ids filtered, values clamped');
  ok(p && Object.keys(p.state.packs).join() === EN, 'save: pack kept under its path id');
  ok(p && p.state.translations.join() === 'abc123', 'save: translations filtered');
  ok(p && p.state.badges.join() === 'boss', 'save: badges filtered');
  ok(!res.polluted, 'save: no prototype pollution');

  // 2. Malicious v3 save: hostile pack ids, too many packs/worlds, __proto__/constructor keys, bad lastPack
  const packs = { PROTOKEY: { worlds: { 1: { stars: 3 } } }, 'constructor': { worlds: { 1: { stars: 3 } } },
    '<img src=x onerror=alert(2)>': { worlds: { 1: { stars: 3 } } }, '../../evil': { worlds: {} }, 'UPPER': { worlds: {} },
    ['4e/anglais/' + 'a'.repeat(61)]: { worlds: {} }, 'ok-pack': { worlds: {} }, 'ok/pack': { worlds: {} }, '../x/y': { worlds: {} }, 'ok/pack/one': { lastPlayed: 1e20, worlds: { 'constructor': { stars: 3 }, PROTOKEY: { stars: 3 }, '<x>': { stars: 3 }, 'w-1': { stars: -4, accuracy: 'NaN' } } } };
  const manyWorlds = {}; for (let i = 0; i < 500; i++) manyWorlds[i] = { stars: 3, accuracy: 1 };
  packs[EN] = { worlds: manyWorlds, lastPlayed: 5 };
  for (let i = 0; i < 300; i++) packs['filler/x/f' + i] = { worlds: { 1: { stars: 1 } } };
  const evilV3 = H.saveFile('RQSAVE', { app: 'revision-quest', version: 3, profile: {
    name: 'Hacker<script>alert(3)</script>', avatar: '🦊" onclick="alert(4)', state: { xp: -5, packs, lastPack: '<img src=x>', badges: ['explorer', 'explorer', 'PROTOKEY'] } } });
  const r3 = await page.evaluate((text) => {
    const r = Engine.parseImport(text);
    if (!r.ok) return { err: r.error };
    const p = Engine.importProfile(r.profile, 'copy');
    return { p, polluted: ({}).polluted === true || ({}).stars !== undefined, keys: Object.keys(p.state.packs) };
  }, evilV3);
  ok(r3.p, 'v3 malicious file parsed safely (no crash)');
  const keys = r3.keys || [];
  ok(keys.length <= 100, 'v3: number of packs capped at 100 (' + keys.length + ')');
  ok(keys.every(k => /^[a-z0-9-]{1,30}\/[a-z0-9-]{1,30}\/[a-z0-9-]{1,60}$/.test(k)), 'v3: every pack id is a valid <niveau>/<matiere>/<cours> path');
  ok(!keys.includes('__proto__') && !keys.includes('constructor') && !keys.some(k => k.includes('<')), 'v3: hostile pack ids dropped');
  const en3 = r3.p && r3.p.state.packs[EN];
  ok(!en3 || Object.keys(en3.worlds).length <= 100, 'v3: worlds per pack capped at 100');
  const okp = r3.p && r3.p.state.packs['ok/pack/one'];
  ok(!okp || (Object.keys(okp.worlds).join() === 'constructor,w-1' || Object.keys(okp.worlds).join() === 'w-1'), 'v3: hostile world ids dropped: ' + (okp && Object.keys(okp.worlds).join()));
  ok(!okp || (okp.worlds['w-1'].stars === 0 && okp.worlds['w-1'].accuracy === 0 && okp.lastPlayed <= 4102444800000), 'v3: world values and lastPlayed clamped');
  ok(r3.p && r3.p.state.lastPack === null && r3.p.state.xp === 0 && r3.p.avatar === '🦊', 'v3: lastPack/xp/avatar sanitized');
  ok(r3.p && r3.p.state.badges.join() === 'explorer', 'v3: badges deduplicated/filtered');
  ok(!r3.polluted, 'v3: no prototype pollution');

  // 3. Hostile names are rendered escaped on every screen that shows them
  await page.goto(BASE); await wait(page, 600);
  const screens = [], clean = [];
  const snap = async () => { screens.push(await page.evaluate(() => document.body.innerText)); clean.push(await domClean(page)); };
  await snap(); // profiles or home
  await page.evaluate(() => App.showHome()); await wait(page, 200); await snap();
  await page.evaluate(() => { const e = document.querySelector('[data-act=switch]'); if (e) e.click(); }); await wait(page, 300); await snap();
  await page.evaluate(() => { const e = document.querySelector('[data-act=ranking]'); if (e) e.click(); }); await wait(page, 300); await snap();
  ok(clean.every(Boolean), 'names/avatars rendered escaped: no injected element or handler (profiles, home, leaderboard)');
  ok(screens.some(t => t.includes('Hacker<script>alert(')), 'hostile name visible as plain text');

  // 4. Garbage files
  const g = await page.evaluate(() => [
    Engine.parseImport('hello').ok, Engine.parseImport('AAASAVE.<script>.abc').ok, Engine.parseImport('AAASAVE.' + 'A'.repeat(600000) + '.a').ok,
    Engine.parseImport('{"app":"agony-aunt-academy"}').ok, Engine.parseImport('RQSAVE.e30=.' + 'zz').ok]);
  ok(g.every(x => x === false), 'garbage files rejected');
  const wrongApp = H.saveFile('RQSAVE', { app: 'other-app', version: 3, profile: { name: 'X' } });
  const future = H.saveFile('RQSAVE', { app: 'revision-quest', version: 4, profile: { name: 'X' } });
  const g2 = await page.evaluate(([a, f]) => [Engine.parseImport(a).ok, Engine.parseImport(f).error], [wrongApp, future]);
  ok(g2[0] === false && /plus récente/.test(g2[1]), 'other app / newer version rejected');

  // 5. Hostile localStorage (v3 key) is validated on load
  await page.evaluate(() => localStorage.setItem('revisionQuest.v3', JSON.stringify({ version: 3, currentId: '<x>', profiles: [
    // eslint-disable-next-line no-script-url -- hostile data on purpose: a javascript: URL as a player id must be rejected
    { id: 'javascript:alert(1)', name: '<svg/onload=alert(5)>', avatar: '<b>', state: { packs: { '__proto__': { worlds: {} }, 'x y': {}, 'good/one/x': { worlds: { 2: { stars: 2 } } }, 'good-one': { worlds: {} } }, xp: 'lots' } }] })));
  await page.goto(BASE); await wait(page, 500);
  const ls = await page.evaluate(() => { const p = Engine.profiles()[0]; return { id: p.id, av: p.avatar, packs: Object.keys(p.state.packs), xp: p.state.xp, cur: Engine.currentProfile() }; });
  ok(/^p[a-z0-9]{4,24}$/.test(ls.id) && ls.av === '🦊' && ls.packs.join() === 'good/one/x' && ls.xp === 0 && ls.cur === null, 'hostile localStorage sanitized ' + JSON.stringify(ls));
  await page.evaluate(() => App.showHome()); await wait(page, 200);
  ok(await domClean(page) && (await page.evaluate(() => document.body.innerText)).includes('<svg/onload=alert(5)'), 'hostile localStorage name escaped');

  // 6. Cookie attributes
  await page.evaluate(() => { Engine.selectProfile(Engine.profiles()[0].id); });
  const cookies = await ctx.cookies();
  const c = cookies.filter(x => x.name.startsWith('aaa_save'));
  ok(c.length > 0 && c.every(x => x.sameSite === 'Strict'), 'cookies SameSite=Strict (' + c.length + ')');
  ok(c.every(x => x.httpOnly === false && x.path === '/'), 'path = game folder (/ on localhost root)');
  ok(c.every(x => /^[A-Za-z0-9_-]*$/.test(x.value)), 'cookie values URL-safe only');

  // 7. Tampered cookie is ignored safely; hostile (valid) cookie is validated
  await ctx.addCookies([{ name: 'aaa_save', value: '1', url: H.BASE }, { name: 'aaa_save_0', value: 'PHNjcmlwdD4', url: H.BASE }]);
  await page.evaluate(() => localStorage.clear()); await page.goto(BASE); await wait(page, 600);
  ok(await page.evaluate(() => !!window.Engine && Engine.profiles().length === 0), 'tampered cookie: app still boots, nothing restored');
  const evilCookie = Buffer.from(JSON.stringify({ v: 3, c: 'x', p: [['<x>', '<img src=x onerror=alert(6)>', '<b>', 1e12,
    [['__proto__', 1, [[1, 3, 100]]], ['<p>', 1, []], [EN, 99999999999999, [[1, 9, 900], ['<w>', 3, 100]]]], [999, -1, 'x', 0], ['<script>'], ['<d>'], 0, 1e9, 'x', '<lp>']] }), 'utf8')
    .toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  await ctx.addCookies([{ name: 'aaa_save', value: '1', url: H.BASE }, { name: 'aaa_save_0', value: evilCookie, url: H.BASE }]);
  await page.evaluate(() => localStorage.clear()); await page.goto(BASE); await wait(page, 600);
  const ck = await page.evaluate((EN) => { const p = Engine.profiles()[0]; return p && { id: p.id, av: p.avatar, xp: p.state.xp, packs: Object.keys(p.state.packs), w: p.state.packs[EN] && p.state.packs[EN].worlds, lp: p.state.lastPack, b: p.state.badges }; }, EN);
  ok(ck && /^p[a-z0-9]{4,24}$/.test(ck.id) && ck.av === '🦊' && ck.xp === 1000000 && ck.packs.join() === EN && Object.keys(ck.w).join() === '1' && ck.w[1].stars === 5 && ck.w[1].accuracy === 1 && ck.lp === null && ck.b.join() === 'first_step',
    'hostile cookie validated field by field ' + JSON.stringify(ck));
  await page.evaluate(() => App.showHome()); await wait(page, 200);
  ok(await domClean(page), 'hostile cookie name escaped');

  // 8. CSP blocks injected inline script / handlers
  const blocked = await page.evaluate(() => { window.__x = 0; const d = document.createElement('div'); d.innerHTML = '<img src=x onerror="window.__x=1">'; document.body.appendChild(d); return new Promise(r => setTimeout(() => r(window.__x), 300)); });
  ok(blocked === 0, 'CSP blocks inline event handler');
  const blocked2 = await page.evaluate(() => { window.__y = 0; const s = document.createElement('script'); s.textContent = 'window.__y=1'; document.body.appendChild(s); return new Promise(r => setTimeout(() => r(window.__y), 200)); });
  ok(blocked2 === 0, 'CSP blocks inline <script>');
  const csp = await page.getAttribute('meta[http-equiv="Content-Security-Policy"]', 'content');
  ok(/script-src 'self';/.test(csp) && /connect-src 'none'/.test(csp) && !/unsafe-eval/.test(csp), 'CSP meta unchanged (script-src self, no fetch, no eval)');

  // 9. Pack loading rules: unsolicited registerPack ignored, catalogue file paths whitelisted
  const reg = await page.evaluate(() => [window.registerPack({ id: '4e/anglais/giving-advice', worlds: [{ id: 1, exercises: [] }] }), window.registerPack({ id: 'nope', worlds: [] }), !!Packs.loaded('4e/anglais/giving-advice')]);
  ok(reg[0] === false && reg[1] === false && reg[2] === false, 'registerPack ignored when the pack is not being loaded');
  await ctx.close();

  const ctx2 = await browser.newContext(); const p2 = await ctx2.newPage();
  R.watch(p2, 'cat', { allowCsp: true });
  await p2.route('**/packs/catalog.js', async route => {
    const res = await route.fetch(); let body = await res.text();
    body = body.replace('packs: [', `packs: [
      { path: "https://evil.example/x", title: "Evil abs", lang: "fr", worldCount: 1 },
      { path: "../js/app", title: "Evil up", lang: "fr", worldCount: 1 },
      { path: "4e/anglais/../../js/app", title: "Evil up 2", lang: "fr", worldCount: 1 },
      { path: "flat", title: "Evil flat", lang: "fr", worldCount: 1 },
      { path: "//evil.example/packs/x", title: "Evil proto", lang: "fr", worldCount: 1 },
      { path: "4e/anglais/Evil-Id", title: "Bad id", lang: "fr", worldCount: 1 },
      { path: "4e/<img>/y", title: "Bad subject", lang: "fr", worldCount: 1 },
      { path: "zz/anglais/y", title: "Unknown level", lang: "fr", worldCount: 1 },
      { path: "4e/anglais/missing-pack", title: "<img src=x onerror=alert(7)>", description: "<b>d</b>", icon: "<i>", color: "red;background:url(x)", lang: "fr", worldCount: 1 },
      { path: "4e/anglais/grp", title: "Groups", lang: "fr", groups: [{ id: "../../js/app", label: "x", worldCount: 1 }, { id: "a/b", label: "x", worldCount: 1 }, { id: "https://evil.example", label: "x", worldCount: 1 }, { id: "ok-g", label: "<img src=x onerror=alert(8)>", worldCount: 1 }] },`);
    route.fulfill({ response: res, body });
  });
  await p2.goto(BASE); await wait(p2, 400);
  // every playable pack (chapters without groups + each group) loads packs/<id>.js with a safe id
  const listed = await p2.evaluate(() => Packs.units().map(p => p.id + '|' + p.file + '|' + p.color));
  ok(await p2.evaluate(() => Packs.get('4e/anglais/grp').groups.map(g => g.id).join()) === '4e/anglais/grp/ok-g', 'hostile group ids dropped (only ok-g kept)');
  ok(listed.every(x => /^([a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+(?:\/[a-z0-9-]+)?)\|packs\/\1\.js\|#/.test(x) && !/evil|zz\/|\.\./i.test(x)) && listed.some(x => x.startsWith('4e/anglais/missing-pack|')) && listed.some(x => x.startsWith('4e/anglais/giving-advice|')), 'catalogue entries with unsafe path / unknown level or subject are dropped: ' + listed.join(' '));
  await H.newPlayer(p2, 'Sec');
  await tap(p2, '[data-act=catalog]'); await wait(p2, 300);
  const catHtml = await p2.content();
  ok(await domClean(p2) && catHtml.includes('&lt;img src=x onerror=alert(7)&gt;') && !/background:url/.test(catHtml), 'catalogue title/colour escaped and colour whitelisted');
  await tap(p2, '.pack-card[data-pack="4e/anglais/missing-pack"]'); await p2.waitForSelector('.screen.error', { timeout: 5000 });
  ok((await p2.textContent('.screen.error')).includes('Impossible de charger ce chapitre'), 'missing pack file → friendly French error');
  ok(await p2.evaluate(() => [...document.scripts].every(s => !s.src || new URL(s.src).origin === location.origin)), 'only same-origin scripts in the page');
  await ctx2.close();

  R.done();
});

test("self-hosted font, tightened CSP, no third-party request", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext(); const page = await ctx.newPage(); R.watch(page, 'font');
    const foreign = [];
    page.on('request', r => { if (!r.url().startsWith(BASE) && !r.url().startsWith('data:')) foreign.push(r.url()); });
    await page.goto(BASE); await wait(page, 300);
    await H.newPlayer(page, 'Font');
    await page.evaluate(() => document.fonts.ready);
    const f = await page.evaluate(() => ({ loaded: [...document.fonts].some(x => x.family.replace(/"/g, '') === 'Fredoka' && x.status === 'loaded'), check: document.fonts.check('700 16px Fredoka') }));
    ok(f.loaded && f.check, 'Fredoka loaded from the site itself');
    ok(foreign.length === 0, 'no request to another origin ' + JSON.stringify(foreign));
    const csp = await page.getAttribute('meta[http-equiv="Content-Security-Policy"]', 'content');
    ok(/font-src 'self';/.test(csp) && /style-src 'self' 'unsafe-inline';/.test(csp) && !/googleapis|gstatic/.test(csp) && !/googleapis|gstatic/.test(await page.content()), 'CSP font-src self / style-src self, no Google links');
    ok(fs.existsSync(require('path').join(H.ROOT, 'fonts', 'OFL.txt')) && /SIL Open Font License/.test(fs.readFileSync(require('path').join(H.ROOT, 'fonts', 'OFL.txt'), 'utf8')), 'OFL license shipped in fonts/');
    await ctx.close();
  R.done();
});

test("clickjacking: the game refuses to start inside a frame", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext(); const page = await ctx.newPage();
  // a host page (served by routing, same server) that puts the game in an iframe
  await page.route(BASE + "framer.html", (route) => route.fulfill({ status: 200, contentType: "text/html", body: '<iframe src="./" width="600" height="600"></iframe>' }));
  await page.goto(BASE + "framer.html");
  const frame = page.frameLocator("iframe");
  await frame.locator(".screen.error").waitFor();
  ok(/propre onglet/.test(await frame.locator(".result-title").innerText()), "framed game shows « Ouvre Révision Quest dans son propre onglet »");
  ok(await frame.locator("[data-act=catalog], .screen.newplayer, .screen.profiles").count() === 0, "no game screen inside the frame");
  await ctx.close();
});

test("local server: only the game files are served (no .git, notes, resources), DNS rebinding refused", async ({ request }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const status = async (p, headers) => (await request.get(BASE.replace(/\/$/, "") + p, { headers, maxRedirects: 0 })).status();
  for (const p of ["/", "/index.html", "/js/app/main.js", "/css/style.css", "/packs/4e/anglais/giving-advice.js"]) ok(await status(p) === 200, p + " served");
  for (const p of ["/.git/config", "/%2F.git/config", "/.GIT/config", "/x/..%2F.git/config", "/js/%2e%2e/.git/config", "/package.json",
    "/tests/server.js", "/node_modules/.package-lock.json", "/resources/", "/PLAN.md", "/specs/TODO.md", "/.gitignore", "/js/.hidden.js"]) ok(await status(p) === 404, p + " refused");
  ok(await status("/", { host: "evil.example" }) === 421, "unknown Host header refused (DNS rebinding)");
});

test("home: « Code source sur GitHub » link opens a new tab without referrer nor access to the game", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } }); const page = await ctx.newPage(); R.watch(page, "source");
  await page.goto(BASE);
  await H.newPlayer(page, "Lien");
  const a = page.locator(".source-link:not(.voices-link) a");
  await a.waitFor();
  ok(await a.getAttribute("href") === "https://github.com/ke20/revision-quest", "points to the GitHub repository");
  ok(await a.getAttribute("target") === "_blank" && await a.getAttribute("rel") === "noopener noreferrer", "new tab, noopener noreferrer");
  ok(await H.hscroll(page) <= 0, "no horizontal scroll");
  // a broken or foreign address in APP_CONFIG hides the link
  const scriptUrl = ["javascript", "alert(1)"].join(":"); // built at run time: ESLint forbids script URLs in code
  await page.evaluate((u) => { APP_CONFIG.sourceUrl = u; App.showHome(); }, scriptUrl);
  ok(await page.locator(".source-link:not(.voices-link)").count() === 0, "script address refused");
  R.done();
  await ctx.close();
});
