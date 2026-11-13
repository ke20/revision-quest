// « ✏️ Mes cours »: a course added from the editor shows in the game catalogue (above the official chapters, tagged
// « fait maison »), is played like a chapter (JSON, never a <script>), and can be deleted from the device.
"use strict";
const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const H = require("./helpers");
const Rules = require("../../js/core/pack-rules.js");

/** A valid private course: a real chapter under another id and title. */
function course() {
  const pack = Rules.parseStrict(fs.readFileSync(path.join(H.ROOT, "packs/cm2/francais/mots-invariables.js"), "utf8"));
  return Object.assign(pack, { path: "cm2/francais/mon-cours-maison", meta: { title: "Mon cours maison", description: "Fait à la maison.", icon: "🏠" } });
}

test("Mes cours: added from the editor, shown in the catalogue, played without <script>, deleted", async ({ page }) => {
  const R = H.makeReporter(); R.watch(page, "mine");
  // the editor: a course with errors is refused, a valid one is added
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(H.BASE + "editeur.html");
  await page.click("[data-act=mine]");
  await expect(page.locator(".toast").last()).toContainText("Corrige d'abord");
  const [chooser] = await Promise.all([page.waitForEvent("filechooser"), page.click("[data-act=open]")]);
  await chooser.setFiles({ name: "mon-cours-maison.js", mimeType: "text/javascript", buffer: Buffer.from(Rules.formatStrict(course())) });
  await expect(page.locator(".ed-tree .badge.err")).toHaveCount(0);
  await page.click("[data-act=mine]");
  await expect(page.locator(".toast").last()).toContainText("Ajouté à « Mes cours »");
  await page.click("[data-act=mine]");
  await expect(page.locator(".toast").last()).toContainText("mis à jour");

  // the game: « Mes cours » above the official chapters
  await page.goto(H.BASE);
  await H.newPlayer(page, "Maison");
  await H.tap(page, "[data-act=catalog]");
  await expect(page.locator(".cat-section").first()).toHaveText("✏️ Mes cours");
  const card = page.locator('.mine-list .pack-card[data-pack="cm2/francais/mon-cours-maison"]');
  await expect(card).toContainText("Mon cours maison");
  await expect(card.locator(".tag-mine")).toHaveText("fait maison");
  const scripts = await page.evaluate(() => [...document.scripts].map((s) => s.src).filter((s) => /packs\//.test(s)).length);
  await card.click();
  await expect(page.locator(".screen.map")).toBeVisible();
  await expect(page.locator(".map-pack")).toContainText("Mon cours maison");
  expect(await page.evaluate(() => [...document.scripts].map((s) => s.src).filter((s) => /packs\//.test(s)).length)).toBe(scripts);
  // played like a chapter: the progress is saved under its id
  await H.startWorld(page, 0);
  await H.playWorld(page, 0);
  expect(await page.evaluate(() => Engine.packSummary("cm2/francais/mon-cours-maison", 6).stars)).toBeGreaterThan(0);
  await H.closeModals(page);

  // deleted from the device (confirmation); the stars stay in the save
  await page.goto(H.BASE);
  await H.closeModals(page);
  await H.tap(page, "[data-act=catalog]");
  await page.click('[data-del="cm2/francais/mon-cours-maison"]');
  await H.tap(page, "[data-act=yes]");
  await expect(page.locator(".mine-list")).toHaveCount(0);
  await expect(page.locator(".cat-section")).toHaveCount(0);
  expect(await page.evaluate(() => Engine.packSummary("cm2/francais/mon-cours-maison", 6).stars)).toBeGreaterThan(0);
  R.done();
});
