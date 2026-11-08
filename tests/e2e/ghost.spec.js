// Ghost mode (?fantome): every world open, free walk through the exercises with the answers shown, nothing saved.
// Without the parameter, nothing of it shows.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");

test("ghost mode: hidden without ?fantome; with it, any world opens, exercises browse freely, answers shown, nothing saved", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "ghost");
  await H.withTestPacks(page);
  await page.goto(H.BASE);
  await H.newPlayer(page, "Fantome");
  await H.gotoPack(page, H.SAMPLE);
  ok(await page.locator('.map-node[data-i="2"].locked').count() === 1, "normal mode: world 3 is locked");
  ok((await page.content()).indexOf("fantome") < 0, "normal mode: no trace of the ghost mode in the page");

  await page.goto(H.BASE + "?fantome");
  await H.gotoPack(page, H.SAMPLE);
  ok(await page.locator(".map-node.locked").count() === 0, "ghost mode: no locked world");
  await H.openLesson(page, 2);
  await H.tap(page, "[data-act=go]");
  await expect(page.locator(".screen.ghost")).toBeVisible();
  await expect(page.locator(".ghost-tag")).toContainText("1 /");
  await expect(page.locator(".ghost-answer")).toContainText("Réponse attendue");
  const n = await page.locator(".ghost-jump option").count();
  ok(n > 1, "the jump list lists every exercise");
  await H.tap(page, "[data-act=next]");
  await expect(page.locator(".ghost-tag")).toContainText("2 / " + n);
  await page.selectOption(".ghost-jump", String(n - 1));
  await expect(page.locator(".ghost-tag")).toContainText(n + " / " + n);
  ok(await page.locator("[data-act=next]").isDisabled(), "last exercise: no next");
  await H.tap(page, "[data-act=prev]");
  await expect(page.locator(".ghost-tag")).toContainText((n - 1) + " / " + n);
  ok(await H.hscroll(page) <= 0, "no horizontal scroll");
  const saved = await page.evaluate(() => ({ xp: Engine.state.xp, session: !!Engine.session }));
  ok(saved.xp === 0 && !saved.session, "nothing recorded: " + JSON.stringify(saved));
  await H.tap(page, "[data-act=back]");
  await expect(page.locator(".screen.map")).toBeVisible();
  R.done();
});
