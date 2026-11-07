// Christmas theme: from 1 December to 6 January (setting "christmas": auto / off), preview with ?theme=noel.
// Decoration only: background, far-away village (css/noel-village.svg), light snow; nothing during an exercise.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { BASE, wait, tap } = H;

const themed = (page) => page.evaluate(() => document.body.classList.contains("theme-noel") && !!document.querySelector(".xmas-scene"));

for (const [day, on] of [["2026-11-30T12:00:00", false], ["2026-12-01T08:00:00", true], ["2026-12-25T12:00:00", true],
  ["2027-01-06T20:00:00", true], ["2027-01-07T08:00:00", false]]) {
  test(`christmas theme on ${day.slice(0, 10)}: ${on ? "on" : "off"}`, async ({ page }) => {
    await page.clock.setFixedTime(new Date(day));
    await page.goto(BASE); await wait(page, 200);
    await H.newPlayer(page, "Noé", 1);
    expect(await themed(page)).toBe(on);
    expect(await page.locator(".screen.home .logo").innerText()).toBe(on ? "🎄" : "🎓");
  });
}

test("christmas theme: the setting turns it off for this player; ?theme=noel previews it; nothing during an exercise", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "christmas");
  await page.clock.setFixedTime(new Date("2026-12-15T10:00:00"));
  await page.goto(BASE); await wait(page, 200);
  await H.newPlayer(page, "Lina", 1);
  ok(await themed(page), "on in December");
  const svg = await page.request.get(BASE + "css/noel-village.svg");
  ok(svg.ok() && /^image\/svg\+xml/.test(svg.headers()["content-type"] || ""), "village picture served by the game");
  ok((await page.locator(".xmas-snow span").count()) > 0 && await page.locator(".xmas-snow").isVisible(), "snow on the home screen");
  ok(await H.hscroll(page) <= 0, "no horizontal scroll");

  // during an exercise: no village, no snow
  await H.withTestPacks(page);
  await page.goto(BASE); await wait(page, 200);
  await H.gotoPack(page, H.SAMPLE);
  await H.startWorld(page, 0);
  ok(!(await page.locator(".xmas-scene").isVisible()) && !(await page.locator(".xmas-snow").isVisible()), "plain exercise screen");
  await tap(page, "[data-act=quit]"); await tap(page, "[data-act=yes]"); await wait(page, 300);

  // setting: off
  await page.evaluate(() => App.showHome()); await wait(page, 200);
  await tap(page, "[data-act=settings]"); await wait(page, 300);
  await tap(page, '.modal [data-set="christmas"][data-val="off"]');
  await tap(page, ".modal [data-act=close]"); await wait(page, 300);
  ok(!(await themed(page)), "off for this player");
  ok((await page.locator(".xmas-scene, .xmas-snow").count()) === 0, "decoration removed");

  // preview link: on whatever the date and the setting
  await page.goto(BASE + "?theme=noel"); await wait(page, 300);
  ok(await themed(page), "?theme=noel shows the theme");
  R.done();
});
