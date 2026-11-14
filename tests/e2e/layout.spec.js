// Layout on the project's viewport (1280 px "chromium" and 390 px "mobile-390"): main screens render without
// horizontal scroll and without console errors.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { EN, SAMPLE, tap } = H;

test("main screens have no horizontal scroll", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "layout");
  const check = async (where) => { const d = await H.hscroll(page); ok(d <= 0, `no hscroll on ${where} (${d} px)`); };
  await H.withTestPacks(page);
  await page.goto("./");
  await expect(page.locator(".screen.profiles")).toBeVisible();
  await check("welcome");
  await tap(page, "[data-act=new]");
  await expect(page.locator(".screen.newplayer")).toBeVisible();
  await check("new player");
  await tap(page, "[data-act=back]");
  await H.newPlayer(page, "Mise en page", 1);
  await check("home");
  await tap(page, "[data-act=settings]");
  await expect(page.locator(".modal .setting-block")).toHaveCount(7);
  await check("settings");
  await tap(page, ".modal [data-act=close]");
  await tap(page, "[data-act=catalog]");
  await expect(page.locator(".pack-card")).toHaveCount(2);
  await check("catalogue");
  for (const pack of [EN, SAMPLE]) {
    await tap(page, `.pack-card[data-pack="${pack}"]`);
    await expect(page.locator(".screen.map")).toBeVisible();
    await check("map " + pack);
    await H.openLesson(page, 0);
    await check("lesson " + pack);
    await tap(page, "[data-act=go]");
    await expect(page.locator(".screen.play")).toBeVisible();
    await check("exercise " + pack);
    if (pack === SAMPLE) { // pause screen (normally reached from the complete screen)
      await page.evaluate(() => App.showPause());
      await expect(page.locator(".screen.pause")).toBeVisible();
      await check("pause");
      await page.evaluate(() => { localStorage.removeItem("revisionQuest.pause"); App.showMap(); }); // end the 5-min pause
      await expect(page.locator(".screen.map")).toBeVisible();
      await H.startWorld(page, 0);
    }
    await tap(page, "[data-act=quit]"); await tap(page, "[data-act=yes]");
    await expect(page.locator(".screen.map")).toBeVisible();
    await expect(page.locator(".modal-backdrop")).toHaveCount(0); // quit dialog fully closed
    await tap(page, "[data-act=back]");
    await expect(page.locator(".screen.catalog")).toBeVisible();
  }
  await tap(page, "[data-act=back]");
  await tap(page, "[data-act=badges]"); await expect(page.locator(".badge-grid").first()).toBeVisible(); await check("badges");
  await tap(page, "[data-act=back]");
  await tap(page, "[data-act=trophies]"); await expect(page.locator(".trophy-counts")).toBeVisible(); await check("trophies");
  await tap(page, "[data-act=back]");
  await tap(page, "[data-act=ranking]"); await expect(page.locator(".lb-list")).toBeVisible(); await check("leaderboard");
  R.done();
});
