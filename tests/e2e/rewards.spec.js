// Rewards: endless levels after Légende, chapter trophies, tiered badges, « à réviser », daily challenge.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { BASE } = H;

/** A saved player (state merged into an empty one), then the page reloaded on the home screen. */
async function withPlayer(page, state, opts = {}) {
  await H.withTestPacks(page, opts);
  await page.goto(BASE);
  await page.evaluate((state) => {
    const base = { xp: 0, packs: {}, badges: [], translations: [], days: [], sound: false, bestCombo: 0, lastPack: null };
    localStorage.setItem("revisionQuest.v3", JSON.stringify({ version: 3, currentId: "prewards1", profiles: [{ id: "prewards1", name: "Rita", avatar: "🦊", createdAt: 1,
      settings: { freeMistakes: 0 }, state: Object.assign(base, state) }] }));
  }, state);
  await page.reload();
  await expect(page.locator(".screen.home")).toBeVisible();
}

test("levels never end: Légende 2 after Légende, with the next level shown on the home screen", async ({ page }) => {
  await withPlayer(page, { xp: 2000 });
  await expect(page.locator(".player-card .rank")).toContainText("Légende 2");
  await expect(page.locator(".player-card .lvl-badge b")).toHaveText("8");
  await expect(page.locator(".player-card .xp-text")).toContainText("2000 / 2400 XP → Légende 3");
});

