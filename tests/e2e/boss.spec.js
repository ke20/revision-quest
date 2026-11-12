// The boss (last world): questions typed by the pupil, one try each, no heart lost, a medal on the result screen
// and on the map; the chapter is validated from 80 %.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { BASE, SAMPLE, wait, tap } = H;

/** A player with worlds 1 and 2 of the sample pack done: its boss (world 3, ten questions) is open. */
async function setup(page) {
  await H.withTestPacks(page);
  await page.goto(BASE);
  await page.evaluate((SAMPLE) => {
    const worlds = { 1: { stars: 5, accuracy: 1, completed: true }, 2: { stars: 5, accuracy: 1, completed: true } };
    localStorage.setItem("revisionQuest.v3", JSON.stringify({ version: 3, currentId: "pabcdef1", profiles: [{ id: "pabcdef1", name: "Boss", avatar: "🦊", createdAt: 1,
      settings: { freeMistakes: 0 }, state: { xp: 0, packs: { [SAMPLE]: { worlds, lastPlayed: 1 } }, badges: [], translations: [], days: [], sound: false, bestCombo: 0, lastPack: SAMPLE } }] }));
  }, SAMPLE);
  await page.reload();
  await H.gotoPack(page, SAMPLE);
}

test("boss: no hearts, one try per question with the answer shown, a medal, 80 % to validate the chapter", async ({ page }) => {
  await setup(page);
  await H.openLesson(page, 2);
  await expect(page.locator(".lesson-meta")).toContainText("Boss");
  await expect(page.locator(".lesson-meta .heart")).toHaveCount(0);
  await tap(page, "[data-act=go]");
  await expect(page.locator(".screen.play .boss-tag")).toBeVisible();
  expect((await page.evaluate(() => Engine.session.order)).slice().sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // 10 questions in a random order: 3 wrong (no heart lost, the answer is shown, one try only), 7 right → 70 % → gold
  const seen = new Set();
  for (let i = 0; i < 10; i++) {
    await expect(page.locator(".question-input, .read-go").first()).toBeVisible();
    if (await page.locator(".read-go").count()) await tap(page, ".read-go");
    const ex = await H.curEx(page, 2);
    seen.add(ex.prompt);
    await expect(page.locator("[data-act=check]")).toBeDisabled();
    const wrong = i < 3;
    await page.fill(".question-input", wrong ? "nope" : ex.answers[ex.answers.length - 1].toUpperCase().replace(/\./g, " "));
    await tap(page, "[data-act=check]");
    if (wrong) {
      await expect(page.locator(".checkbar.ko")).toContainText("Wrong answer");
      await expect(page.locator(".checkbar.ko")).toContainText(ex.answers[0]);
      await expect(page.locator(".question-input")).toBeDisabled();
      expect(await page.evaluate(() => [Engine.session.hearts, Engine.session.over])).toEqual([3, false]);
    } else await expect(page.locator(".checkbar.ok")).toBeVisible();
    await wait(page, 600); await H.closeModals(page);
    await tap(page, "[data-act=check]"); await wait(page, 300); await H.closeModals(page);
  }
  expect(seen.size).toBe(10);
  const result = page.locator(".screen.complete");
  await expect(result.locator(".medal-name")).toHaveText("Or");
  await expect(result.locator(".medal-score")).toContainText("70 %");
  await expect(result).toContainText("80 %");
  expect(await page.evaluate(() => Engine.hasBadge("boss"))).toBe(false);
  // replay: 100 % → platinum, chapter validated, best medal on the map
  await tap(page, "[data-act=replay]");
  await expect(page.locator(".screen.play")).toBeVisible();
  for (let i = 0; i < 10; i++) {
    await expect(page.locator(".question-input, .read-go").first()).toBeVisible(); // a long text is read first
    await H.solve(page, await H.curEx(page, 2));
    await expect(page.locator(".checkbar.ok")).toBeVisible();
    await wait(page, 600); await H.closeModals(page); // a level-up popup may open 500 ms after the answer
    await tap(page, "[data-act=check]"); await wait(page, 300); await H.closeModals(page);
  }
  await expect(result.locator(".medal-name")).toHaveText("Platine");
  expect(await page.evaluate(() => Engine.hasBadge("boss"))).toBe(true);
  await tap(page, "[data-act=next]"); await H.closeModals(page);
  await expect(page.locator('.map-node[data-i="2"] .node-medal')).toHaveText("🏆");
});
