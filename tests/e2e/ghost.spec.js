// Ghost mode: only in developer mode (local server started with DEV_MODE=true, js/core/dev.js), switched by the 👻
// button of the map. Every world open, free walk through the exercises with the answers shown, nothing saved.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");

test("ghost mode: no button outside developer mode; with it, the 👻 button switches it: any world opens, exercises browse freely, answers shown, nothing saved", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "ghost");
  await H.withTestPacks(page);
  await H.withDevMode(page, false); // as on the published site
  await page.goto(H.BASE);
  await H.newPlayer(page, "Fantome");
  await H.gotoPack(page, H.SAMPLE);
  ok(await page.locator('.map-node[data-i="2"].locked').count() === 1, "normal mode: world 3 is locked");
  ok(await page.locator(".ghost-toggle").count() === 0, "published site: no ghost button");
  await page.evaluate(() => localStorage.setItem("revisionQuest.ghost", "1"));
  await page.goto(H.BASE + "?fantome");
  await H.gotoPack(page, H.SAMPLE);
  ok(await page.locator('.map-node[data-i="2"].locked').count() === 1, "published site: neither the old address nor the stored switch opens it");
  await page.evaluate(() => localStorage.removeItem("revisionQuest.ghost"));

  await H.withDevMode(page);
  await page.goto(H.BASE);
  await H.gotoPack(page, H.SAMPLE);
  await expect(page.locator(".ghost-toggle")).toHaveAttribute("aria-pressed", "false");
  ok(await page.locator('.map-node[data-i="2"].locked').count() === 1, "developer mode, ghost off: world 3 still locked");
  await H.tap(page, ".ghost-toggle");
  await expect(page.locator(".ghost-toggle")).toHaveAttribute("aria-pressed", "true");
  ok(await page.locator(".map-node.locked").count() === 0, "ghost mode: no locked world");
  await H.openLesson(page, 2);
  await H.tap(page, "[data-act=go]");
  await expect(page.locator(".screen.ghost")).toBeVisible();
  await expect(page.locator(".ghost-tag")).toContainText("1 /");
  await expect(page.locator(".ghost-answer")).toContainText("Réponse attendue");
  await expect(page.locator(".ghost-boss")).toContainText("Boss : ces 10 questions"); // world 3 is the boss: the whole pool
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

  await page.reload();
  await expect(page.locator(".screen.map")).toBeVisible();
  ok(await page.locator(".map-node.locked").count() === 0, "a reload keeps the ghost mode");
  await H.tap(page, ".ghost-toggle");
  await expect(page.locator(".ghost-toggle")).toHaveAttribute("aria-pressed", "false");
  ok(await page.locator('.map-node[data-i="2"].locked').count() === 1, "the button switches it off again");
  R.done();
});
