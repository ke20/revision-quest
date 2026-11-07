// Seasonal themes (js/app.js SEASONS): Halloween 20 October – 2 November, Christmas 1 December – 6 January.
// One setting "seasonal" (auto / off) for all; preview with ?theme=<id>. Decoration only: background, far-away
// landscape (css/<id>-village.svg), a few falling flakes or leaves; nothing during an exercise.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { BASE, wait, tap } = H;

const theme = (page) => page.evaluate(() => {
  const t = ["halloween", "noel"].filter((id) => document.body.classList.contains("theme-" + id));
  const scene = document.querySelector(".season-scene");
  return t.join() + "|" + (scene ? scene.getAttribute("data-theme") : "");
});

for (const [day, want, logo] of [
  ["2026-10-19T12:00:00", "|", "🎓"], ["2026-10-20T08:00:00", "halloween|halloween", "🎃"], ["2026-10-31T20:00:00", "halloween|halloween", "🎃"],
  ["2026-11-02T20:00:00", "halloween|halloween", "🎃"], ["2026-11-03T08:00:00", "|", "🎓"], ["2026-11-30T12:00:00", "|", "🎓"],
  ["2026-12-01T08:00:00", "noel|noel", "🎄"], ["2026-12-25T12:00:00", "noel|noel", "🎄"], ["2027-01-06T20:00:00", "noel|noel", "🎄"],
  ["2027-01-07T08:00:00", "|", "🎓"]]) {
  test(`seasonal theme on ${day.slice(0, 10)}: ${want.split("|")[0] || "none"}`, async ({ page }) => {
    await page.clock.setFixedTime(new Date(day));
    await page.goto(BASE); await wait(page, 200);
    await H.newPlayer(page, "Noé", 1);
    expect(await theme(page)).toBe(want);
    expect(await page.locator(".screen.home .logo").innerText()).toBe(logo);
  });
}

test("seasonal themes: one setting turns them off; ?theme= previews; landscape served; nothing during an exercise", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "seasons");
  await page.clock.setFixedTime(new Date("2026-12-15T10:00:00"));
  await page.goto(BASE); await wait(page, 200);
  await H.newPlayer(page, "Lina", 1);
  ok((await theme(page)) === "noel|noel", "Christmas in December");
  for (const id of ["noel", "halloween"]) {
    const svg = await page.request.get(BASE + "css/" + id + "-village.svg");
    ok(svg.ok() && /^image\/svg\+xml/.test(svg.headers()["content-type"] || ""), id + " landscape served by the game");
  }
  ok((await page.locator(".season-fall span").count()) > 0 && await page.locator(".season-fall").isVisible(), "falling flakes on the home screen");
  ok(await H.hscroll(page) <= 0, "no horizontal scroll");

  // during an exercise: no landscape, nothing falling
  await H.withTestPacks(page);
  await page.goto(BASE); await wait(page, 200);
  await H.gotoPack(page, H.SAMPLE);
  await H.startWorld(page, 0);
  ok(!(await page.locator(".season-scene").isVisible()) && !(await page.locator(".season-fall").isVisible()), "plain exercise screen");
  await tap(page, "[data-act=quit]"); await tap(page, "[data-act=yes]"); await wait(page, 300);

  // one setting for every seasonal theme
  await page.evaluate(() => App.showHome()); await wait(page, 200);
  await tap(page, "[data-act=settings]"); await wait(page, 300);
  await tap(page, '.modal [data-set="seasonal"][data-val="off"]');
  await tap(page, ".modal [data-act=close]"); await wait(page, 300);
  ok((await theme(page)) === "|", "off for this player");
  ok((await page.locator(".season-scene, .season-fall").count()) === 0, "decoration removed");

  // preview links: on whatever the date and the setting
  await page.goto(BASE + "?theme=halloween"); await wait(page, 300);
  ok((await theme(page)) === "halloween|halloween", "?theme=halloween");
  ok((await page.locator(".season-fall .bat").count()) === 3, "a few bats at Halloween");
  await page.goto(BASE + "?theme=noel"); await wait(page, 300);
  ok((await theme(page)) === "noel|noel", "?theme=noel");
  R.done();
});
