// The sample pack is in English: the texts are « No calculator (sans calculatrice) » / « Calculator allowed (calculatrice autorisée) ».
// A world can say whether the calculator is allowed (calculator: true / false): shown on the lesson card and while playing.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");

/** Opens world 1 of the sample pack, its first world set to `calculator` (undefined: the field is removed). */
async function lessonWith(page, calculator) {
  await H.withTestPacks(page, { body: (p, src) => H.editPack(src, (pack) => {
    if (calculator === undefined) delete pack.worlds[0].calculator; else pack.worlds[0].calculator = calculator;
  }) });
  await page.goto("/");
  await H.newPlayer(page, "Calc", 0);
  await H.gotoPack(page, H.SAMPLE);
  await H.openLesson(page, 0);
}

test("calculator not allowed: on the lesson card and next to the world name while playing", async ({ page }) => {
  await lessonWith(page, false);
  await expect(page.locator(".calc-note.calc-no")).toContainText("sans calculatrice");
  await H.tap(page, "[data-act=go]");
  await expect(page.locator(".play-stats .calc-icon .calc-svg path[stroke='#DC2626']")).toHaveCount(1); // crossed out
  await expect(page.locator(".play-stats .calc-icon")).toHaveAttribute("aria-label", /sans calculatrice/);
});

test("calculator allowed, and nothing shown when the world says nothing", async ({ page }) => {
  await lessonWith(page, true);
  await expect(page.locator(".calc-note")).toContainText("calculatrice autorisée");
  await expect(page.locator(".calc-note.calc-no")).toHaveCount(0);
  await H.tap(page, "[data-act=go]");
  await expect(page.locator(".play-stats .calc-icon .calc-svg")).toHaveCount(1);
  await expect(page.locator(".play-stats .calc-icon .calc-svg path[stroke='#DC2626']")).toHaveCount(0);
});

test("no calculator field: no calculator note", async ({ page }) => {
  await lessonWith(page, undefined);
  await expect(page.locator(".calc-note")).toHaveCount(0);
  await H.tap(page, "[data-act=go]");
  await expect(page.locator(".play-stats .calc-icon")).toHaveCount(0);
});
