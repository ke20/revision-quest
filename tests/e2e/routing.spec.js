// Routing: the address follows the screen (#/catalogue, #/chapitre/…/monde/n…), so a reload comes back to it.
// A world being played resumes at the same exercise with the same hearts; a locked world stays locked.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");

const hashOf = (page) => page.evaluate(() => location.hash);
async function reload(page) { await page.reload(); await H.settle(page); }

test("routing: catalogue, map, lesson and a world being played survive a reload", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "routing");
  await H.withTestPacks(page);
  await page.goto(H.BASE);
  await H.newPlayer(page, "Route");
  ok((await hashOf(page)) === "", "home: no hash");

  await H.tap(page, "[data-act=catalog]");
  ok((await hashOf(page)) === "#/catalogue", "catalogue address");
  await reload(page);
  await expect(page.locator(".screen.catalog")).toBeVisible();

  await H.tap(page, `.pack-card[data-pack="${H.SAMPLE}"]`);
  await expect(page.locator(".screen.map")).toBeVisible();
  ok((await hashOf(page)) === "#/chapitre/" + H.SAMPLE, "map address: " + (await hashOf(page)));
  await reload(page);
  await expect(page.locator(".screen.map")).toBeVisible();

  await H.openLesson(page, 0);
  ok((await hashOf(page)) === "#/chapitre/" + H.SAMPLE + "/monde/1", "lesson address");
  await reload(page);
  await expect(page.locator(".screen.lesson")).toBeVisible();

  await H.tap(page, "[data-act=go]");
  await expect(page.locator(".screen.play")).toBeVisible();
  ok((await hashOf(page)) === "#/chapitre/" + H.SAMPLE + "/monde/1/jeu", "play address");
  const ex = await H.curEx(page, 0);
  await H.solve(page, ex);
  await expect(page.locator(".checkbar.ok, .checkbar.ko")).toBeVisible();
  await H.closeModals(page);
  const before = await page.evaluate(() => ({ index: Engine.session.index, hearts: Engine.session.hearts, xp: Engine.state.xp }));
  await reload(page);
  await expect(page.locator(".screen.play")).toBeVisible();
  const after = await page.evaluate(() => ({ index: Engine.session.index, hearts: Engine.session.hearts, xp: Engine.state.xp }));
  ok(JSON.stringify(after) === JSON.stringify(before), "resumed at the same exercise: " + JSON.stringify([before, after]));

  // quitting forgets the saved world: a reload of the lesson does not resume it
  await H.tap(page, "[data-act=quit]");
  await page.locator(".modal-backdrop:not(.out) [data-act=yes]").click();
  await expect(page.locator(".screen.map")).toBeVisible();
  ok(await page.evaluate(() => sessionStorage.getItem("revisionQuest.run")) === null, "saved world cleared on quit");
  R.done();
});

test("routing: a link to a locked world shows the map; the back button still works; ghost exercise survives a reload", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "routing-locked");
  await H.withTestPacks(page);
  await page.goto(H.BASE);
  await H.newPlayer(page, "Verrou");
  await page.goto(H.BASE + "#/chapitre/" + H.SAMPLE + "/monde/3");
  await page.reload();
  await expect(page.locator(".screen.map")).toBeVisible();
  ok((await hashOf(page)) === "#/chapitre/" + H.SAMPLE, "locked world: back to the map address");

  await H.openLesson(page, 0);
  await page.goBack();
  await expect(page.locator(".screen.map")).toBeVisible();

  await page.goto(H.BASE + "?fantome#/chapitre/" + H.SAMPLE + "/monde/3/exercice/2");
  await page.reload();
  await expect(page.locator(".screen.ghost")).toBeVisible();
  await expect(page.locator(".ghost-tag")).toContainText("2 /");
  R.done();
});
