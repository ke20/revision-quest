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


test("trophies: on the catalogue card, on the map with what is missing, a party and a bonus when earned, « Mes trophées »", async ({ page }) => {
  const R = H.makeReporter();
  R.watch(page, "trophies");
  const HISTORY = H.HISTORY;
  await withPlayer(page, { xp: 0, lastPack: HISTORY, packs: { [HISTORY]: { lastPlayed: Date.now(), worlds: {
    1: { stars: 2, accuracy: 0.55, completed: true }, 2: { stars: 4, accuracy: 0.85, completed: true } } } } }, { history: true });
  // bronze: boss at 85 %
  await H.tap(page, "[data-act=catalog]");
  await expect(page.locator(`.pack-card[data-pack="${HISTORY}"] .pack-trophy`)).toHaveText("🥉");
  await expect(page.locator(`.pack-card[data-pack="${H.EN}"] .pack-trophy`)).toHaveCount(0);
  await H.tap(page, `.pack-card[data-pack="${HISTORY}"]`);
  await expect(page.locator(".map-trophy")).toContainText("Trophée Bronze");
  await expect(page.locator(".map-trophy .trophy-next")).toHaveText("Pour 🥈 : encore 1 monde à 3★");
  // replay world 1 perfectly: silver, +100 XP, a party
  await H.startWorld(page, 0);
  await H.playWorld(page, 0);
  const result = page.locator(".screen.complete");
  await expect(result.locator(".trophy-won")).toContainText("Nouveau trophée !");
  await expect(result.locator(".trophy-won")).toContainText("Trophée Argent");
  await expect(result.locator(".trophy-won")).toContainText("+100 XP");
  expect(await page.evaluate((id) => Engine.trophy(id).id, HISTORY)).toBe("silver");
  await H.tap(page, "[data-act=next]"); await H.closeModals(page);
  await expect(page.locator(".map-trophy .trophy-next")).toHaveText("Pour 🥇 : encore 1 monde à 5★ et le boss à 90 %");
  // « Mes trophées »: from the home screen, kept by the address
  await page.evaluate(() => App.showHome());
  await H.tap(page, "[data-act=trophies]");
  await expect(page.locator(".screen.trophies")).toBeVisible();
  const n = await page.evaluate(() => Packs.units().length);
  await expect(page.locator(".screen.trophies .head-right")).toHaveText("1/" + n);
  await expect(page.locator(".trophy-count.trophy-silver b")).toHaveText("1");
  await expect(page.locator(`.trophy-row[data-pack="${HISTORY}"] .trophy-row-cup`)).toHaveText("🥈");
  await page.reload();
  await expect(page.locator(".screen.trophies")).toBeVisible();
  await H.tap(page, `.trophy-row[data-pack="${HISTORY}"]`);
  await expect(page.locator(".screen.map")).toBeVisible();
  R.done();
});

test("tiered badges: earned while playing (right answers counter), shown family by family on the badges screen", async ({ page }) => {
  const R = H.makeReporter();
  R.watch(page, "badges");
  await withPlayer(page, { correct: 99 }, { history: true });
  await H.gotoPack(page, H.HISTORY);
  await H.startWorld(page, 0);
  await H.playWorld(page, 0);
  await expect(page.locator(".screen.complete .new-badges")).toContainText("100 bonnes réponses");
  expect(await page.evaluate(() => Engine.state.correct)).toBe(102);
  await page.evaluate(() => App.showHome());
  await H.tap(page, "[data-act=badges]");
  await expect(page.locator(".screen.badges .cat-section")).toHaveText(["🎖️ Exploits", "🏆 Chapitres terminés", "🥇 Trophées d'or", "⭐ Étoiles", "📅 Jours de suite", "✏️ Bonnes réponses", "🎯 Défis du jour"]);
  const correct = page.locator(".badge-grid.tiers").nth(4);
  await expect(correct.locator(".badge-card.on")).toHaveText(["✏️100 bonnes réponses"]);
  await expect(correct.locator(".badge-card.locked")).toHaveCount(3);
  await expect(page.locator(".badge-count").nth(4)).toHaveText("102 bonnes réponses · prochain : 500 bonnes réponses");
  R.done();
});

test("à réviser: tag on the catalogue card and the map, +50 % XP on the first world played again", async ({ page }) => {
  const R = H.makeReporter();
  R.watch(page, "review");
  const HISTORY = H.HISTORY, old = Date.now() - 20 * 86400000;
  await withPlayer(page, { packs: { [HISTORY]: { lastPlayed: old, worlds: { 1: { stars: 2, accuracy: 0.55, completed: true } } } } }, { history: true });
  await H.tap(page, "[data-act=catalog]");
  await expect(page.locator(`.pack-card[data-pack="${HISTORY}"] .tag-review`)).toHaveText("🔁 à réviser");
  await expect(page.locator(`.pack-card[data-pack="${H.EN}"] .tag-review`)).toHaveCount(0);
  await H.tap(page, `.pack-card[data-pack="${HISTORY}"]`);
  await expect(page.locator(".map-review")).toContainText("+50 % d'XP");
  await H.startWorld(page, 0);
  await H.playWorld(page, 0);
  const sum = page.locator(".screen.complete");
  await expect(sum.locator(".review-won")).toContainText("Bonus de révision : +");
  expect(await page.evaluate((id) => Engine.state.packs[id].worlds["1"].stars, HISTORY)).toBe(5);
  await H.tap(page, "[data-act=next]"); await H.closeModals(page);
  await expect(page.locator(".map-review")).toHaveCount(0);
  R.done();
});

test("daily challenge: 3 goals on the home screen with their progress, +30 XP once when done, a badge", async ({ page }) => {
  const R = H.makeReporter();
  R.watch(page, "daily");
  const day = await (async () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); })();
  await withPlayer(page, { daily: { day, goals: ["worlds2", "combo10", "correct20"], progress: [1, 10, 17], done: false } }, { history: true });
  const card = page.locator(".daily-card");
  await expect(card.locator(".daily-list li")).toHaveCount(3);
  await expect(card.locator(".daily-list li").first()).toContainText("Termine 2 mondes1/2");
  await expect(card.locator("li.ok")).toHaveCount(1);
  await expect(card).toContainText("+30 XP");
  await H.gotoPack(page, H.HISTORY);
  await H.startWorld(page, 0);
  await H.playWorld(page, 0);
  await expect(page.locator(".screen.complete .daily-won")).toContainText("Défi du jour réussi ! +30 XP");
  await expect(page.locator(".screen.complete .new-badges")).toContainText("Défi du jour");
  expect(await page.evaluate(() => [Engine.state.daily.done, Engine.state.dailyDone])).toEqual([true, 1]);
  await page.evaluate(() => App.showHome());
  await expect(page.locator(".daily-card.done")).toContainText("Bravo, défi réussi");
  await expect(page.locator(".daily-card li.ok")).toHaveCount(3);
  R.done();
});
