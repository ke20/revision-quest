// Hosting in a subfolder (like https://<user>.github.io/<repo>/), emulated with routing: relative pack paths, cookie path.
"use strict";
const { test } = require("@playwright/test");
const H = require("./helpers");
const { BASE } = H;
const SUB = BASE + 'english/';

test("subfolder hosting: relative pack path and cookie scoped to the folder", async ({ browser }) => {
  const R = H.makeReporter();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } }); const page = await ctx.newPage();
  R.watch(page, 'sub');
  await page.route(SUB + '**', async route => {
    const res = await route.fetch({ url: route.request().url().replace('/english/', '/') });
    route.fulfill({ response: res });
  });
  await page.goto(SUB); await page.waitForTimeout(400);
  await H.newPlayer(page, 'Zoe');
  await H.gotoPack(page, H.EN);
  const src = await page.evaluate(() => [...document.scripts].map(s => s.src).filter(s => /packs\//.test(s)));
  R.ok(src.length === 1 && src[0] === SUB + 'packs/4e/anglais/giving-advice.js', 'pack loaded relative to the subfolder ' + src);
  const c = (await ctx.cookies()).filter(x => x.name.startsWith('aaa_save'));
  R.ok(c.length >= 2 && c.every(x => x.path === '/english/' && x.sameSite === 'Strict'), 'cookies scoped to /english/ ' + JSON.stringify(c.map(x => [x.name, x.path])));
  R.done();
});
