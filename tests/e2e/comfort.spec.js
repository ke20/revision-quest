// Comfort settings chosen at profile creation (TDA/H question, answer never stored): pause, shields, animations.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { BASE, SAMPLE, wait, tap } = H;

/** Open "Réglages" once the home screen has finished its entry animation (a click during it can miss under load). */
async function openSettings(page) {
  await expect(page.locator(".screen.home")).toBeVisible();
  await expect(page.locator(".modal-backdrop")).toHaveCount(0);
  await H.settle(page);
  await tap(page, "[data-act=settings]");
  await expect(page.locator(".modal .setting-block")).toHaveCount(3);
}
/** Values shown as selected in the "Réglages" dialog. */
async function shownSettings(page) {
  await openSettings(page);
  const v = await page.evaluate(() => {
    const on = (k) => document.querySelector(`.modal [data-set="${k}"].on`);
    return { pause: on("pauseEvery").textContent, mistakes: on("freeMistakes").textContent, anim: on("animations").textContent };
  });
  await tap(page, ".modal [data-act=close]");
  await expect(page.locator(".screen.home")).toBeVisible();
  return v;
}
async function setSetting(page, key, val) {
  await openSettings(page);
  await tap(page, `.modal [data-set="${key}"][data-val="${val}"]`);
  await expect(page.locator(`.modal [data-set="${key}"][data-val="${val}"]`)).toHaveAttribute("aria-pressed", "true");
  await tap(page, ".modal [data-act=close]");
  await expect(page.locator(".screen.home")).toBeVisible();
}
async function failMatch(page) { // 2 wrong pairs = exercise failed, then finish the board
  for (let k = 0; k < 2; k++) {
    await page.locator('.match-col >> nth=0 >> .match-item:not(.locked)[data-i="0"]').click();
    await page.locator('.match-col >> nth=1 >> .match-item:not(.locked)[data-i="1"]').click();
    await wait(page, 1100);
  }
  const ex = await H.curEx(page, 0);
  await H.solve(page, ex);
  await expect(page.locator(".checkbar.ko")).toBeVisible();
}
async function failMcq(page) {
  const ex = await H.curEx(page, 0);
  await page.locator(".option").nth((ex.answer + 1) % ex.options.length).click();
  await tap(page, "[data-act=check]");
  await expect(page.locator(".checkbar.ko")).toBeVisible();
}
const header = (page) => page.evaluate(() => ({
  hearts: document.querySelectorAll(".play-top .heart:not(.lost)").length,
  shields: document.querySelectorAll(".play-top .shield").length,
  used: document.querySelectorAll(".play-top .shield.used").length,
  fb: document.querySelector(".feedback").textContent
}));

test("creation answer picks the settings, changes persist, the answer is stored nowhere", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage(); R.watch(page, "comfort");
  await page.goto(BASE);
  await tap(page, "[data-act=new]");
  ok(await page.locator('[data-comfort="no"].on[aria-pressed=true]').count() === 1, '"Non" preselected');
  ok((await page.textContent(".screen.newplayer")).includes("As-tu un TDA/H ?"), "question shown");
  await tap(page, "[data-act=back]");
  await H.newPlayer(page, "Ana", 0, { comfort: "yes" });
  ok(JSON.stringify(await shownSettings(page)) === JSON.stringify({ pause: "2 mondes", mistakes: "2", anim: "Renforcées" }), "Oui → 2 mondes / 2 / Renforcées");
  // the answer is stored nowhere: localStorage, cookie, .save
  const stored = await page.evaluate(() => {
    const ls = Object.keys(localStorage).map((k) => k + "=" + localStorage.getItem(k)).join("\n");
    const f = Engine.exportProfile().content;
    const inner = new TextDecoder().decode(Uint8Array.from(atob(f.split(".")[1]), (c) => c.charCodeAt(0)));
    return { ls, cookie: document.cookie, inner, keys: Object.keys(JSON.parse(inner).profile.settings).sort().join() };
  });
  const cookieJson = await page.evaluate(() => {
    const all = Object.fromEntries(document.cookie.split("; ").map((c) => c.split("=")));
    let enc = ""; for (let i = 0; i < +all.aaa_save; i++) enc += all["aaa_save_" + i];
    enc = enc.replace(/-/g, "+").replace(/_/g, "/");
    return new TextDecoder().decode(Uint8Array.from(atob(enc), (c) => c.charCodeAt(0)));
  });
  for (const [where, txt] of Object.entries({ localStorage: stored.ls, cookie: cookieJson, save: stored.inner })) {
    ok(!/tda|adhd|comfort|answer|"oui"|"yes"/i.test(txt), "no trace of the TDA/H answer in " + where);
  }
  ok(stored.keys === "animations,freeMistakes,pauseEvery", "only the 3 settings are exported");
  // Non (preselected, no click) → defaults
  await tap(page, "[data-act=switch]");
  await H.newPlayer(page, "Ben", 1);
  ok(JSON.stringify(await shownSettings(page)) === JSON.stringify({ pause: "4 mondes", mistakes: "1", anim: "Normales" }), "Non → 4 mondes / 1 / Normales");
  // changes persist after a reload
  await setSetting(page, "pauseEvery", 3);
  await setSetting(page, "freeMistakes", 0);
  await setSetting(page, "animations", "none");
  ok(await page.evaluate(() => document.body.classList.contains("anim-none")), "anim-none class on the body");
  await page.reload();
  await expect(page.locator(".screen.home")).toBeVisible();
  ok(JSON.stringify(await shownSettings(page)) === JSON.stringify({ pause: "3 mondes", mistakes: "0", anim: "Aucune" }), "settings kept after reload");
  ok(await page.evaluate(() => document.body.classList.contains("anim-none")), "anim-none class after reload");
  await ctx.close();
  R.done();
});

test("shields are shown and used before hearts", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "shields");
  await H.withTestPacks(page);
  await page.goto("./");
  await H.newPlayer(page, "Bouclier", 0, { comfort: "yes" });
  await H.gotoPack(page, SAMPLE);
  await H.openLesson(page, 0);
  ok(await page.locator(".lesson-meta .shield").count() === 2, "lesson shows 2 shields");
  await tap(page, "[data-act=go]");
  let h = await header(page);
  ok(h.hearts === 3 && h.shields === 2 && h.used === 0, "play header: 3 hearts + 2 shields " + JSON.stringify(h));
  await failMatch(page);
  h = await header(page);
  ok(h.hearts === 3 && h.used === 1 && /bouclier te protège/.test(h.fb), "1st failure: shield used, no heart lost " + JSON.stringify(h));
  ok(/on apprend en se trompant|Presque/.test(h.fb), "Renforcées: kind message on a wrong answer");
  await tap(page, "[data-act=check]");
  await failMcq(page);
  h = await header(page);
  ok(h.hearts === 3 && h.used === 2, "2nd failure: 2nd shield " + JSON.stringify(h));
  await tap(page, "[data-act=quit]"); await tap(page, "[data-act=yes]");
  // one shield only
  await tap(page, "[data-act=back]"); await tap(page, "[data-act=back]");
  await setSetting(page, "freeMistakes", 1);
  await H.gotoPack(page, SAMPLE);
  await H.startWorld(page, 0);
  h = await header(page);
  ok(h.hearts === 3 && h.shields === 1 && h.used === 0, "shields reset on a new world session " + JSON.stringify(h));
  await failMatch(page);
  await tap(page, "[data-act=check]");
  await failMcq(page);
  h = await header(page);
  ok(h.hearts === 2 && h.used === 1 && /Oops|Oups/.test(h.fb) && !/bouclier/.test(h.fb), "no shield left: a heart is lost " + JSON.stringify(h));
  R.done();
});

test("after N worlds in a row « Continuer » opens the static pause screen; back and « Je reprends » go to the map", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "pause");
  await H.withTestPacks(page);
  await page.goto("./");
  await H.newPlayer(page, "Pause", 0, { comfort: "yes" }); // pause after 2 worlds
  await H.gotoPack(page, SAMPLE);
  const finish = async (i) => { await H.startWorld(page, i); await H.playWorld(page, i); await expect(page.locator(".screen.complete")).toBeVisible(); };
  await finish(0);
  ok(await page.locator(".pause-card").count() === 0, "no pause card after 1 world");
  await tap(page, "[data-act=next]");
  await finish(1);
  await expect(page.locator(".pause-card")).toBeVisible();
  ok((await page.textContent(".pause-card")).includes("Tu as fini 2 mondes d'affilée"), "pause card text");
  ok(await page.evaluate(() => App.Confetti.launched()) > 0, "Renforcées: confetti shown");
  ok(await page.locator("[data-act=pause], [data-act=more]").count() === 0, "no extra pause buttons: « Continuer » leads to the pause");
  await tap(page, "[data-act=next]");
  await expect(page.locator(".screen.pause")).toBeVisible();
  await wait(page, 1200);
  const p = await page.evaluate(() => ({
    text: document.querySelector(".screen.pause").textContent,
    idea: document.querySelector(".pause-idea").textContent,
    ideas: I18N.pauseIdeas("5e"),
    running: document.getAnimations().filter((a) => a.playState === "running").map((a) => (a.effect.target.className || a.effect.target.tagName) + ":" + a.animationName),
    count: Engine.worldsInARow()
  }));
  ok(/Pause !/.test(p.text) && /reviens dans 5 minutes/.test(p.text), "pause screen text");
  ok(p.ideas.includes(p.idea), "idea from the band of the pack level (5e → collège): " + p.idea);
  ok(p.running.length === 0 && !/\d:\d\d/.test(p.text), "pause screen is static: no countdown, no running animation (" + p.running.join() + ")");
  ok(p.count === 0, "taking a pause resets the counter");
  ok(await page.locator("[data-act=resume]").isDisabled(), "« Je reprends » is disabled during the pause");
  ok(/Le jeu reprend à \d{1,2}h\d\d/.test(p.text), "shows the time the game resumes (no countdown)");
  await page.goBack();
  await expect(page.locator(".screen.pause")).toBeVisible(); // the back button does not leave the pause
  await page.reload();
  await expect(page.locator(".screen.pause")).toBeVisible(); // nor does a reload
  ok(await page.locator("[data-act=resume]").isDisabled(), "still disabled after a reload");
  await page.evaluate(() => App.showCatalog());
  await expect(page.locator(".screen.pause")).toBeVisible(); // every way into the game leads back to the pause
  // another player can play during the pause; coming back to the paused player shows the pause again
  await tap(page, ".screen.pause [data-act=switch]");
  await expect(page.locator(".screen.profiles")).toBeVisible();
  await tap(page, "[data-act=new]");
  await page.fill("#np-name", "Frère");
  await tap(page, "[data-act=create]");
  await expect(page.locator(".screen.home")).toBeVisible(); // not paused
  await tap(page, "[data-act=switch]");
  await expect(page.locator(".screen.profiles")).toBeVisible();
  await page.locator(".profile-row", { hasText: "Pause" }).locator(".profile-pick").click({ force: true });
  await expect(page.locator(".screen.pause")).toBeVisible();
  // 5 minutes later (fake clock): the button becomes clickable and leads back to the game
  await page.clock.install();
  await page.evaluate(() => App.showPause()); // re-arm the button timer on the fake clock
  await page.clock.fastForward("04:50");
  ok(await page.locator("[data-act=resume]").isDisabled(), "still disabled after 4 min 50");
  await page.clock.fastForward("00:15");
  await expect(page.locator("[data-act=resume]")).toBeEnabled();
  await tap(page, "[data-act=resume]");
  await expect(page.locator(".screen.home, .screen.map")).toBeVisible();
  R.done();
});

test("animations « Aucune »: no confetti at all", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "anim");
  await H.withTestPacks(page);
  await page.goto("./");
  await H.newPlayer(page, "Calme", 0);
  await setSetting(page, "animations", "none");
  await H.gotoPack(page, SAMPLE);
  await H.startWorld(page, 0);
  ok(await page.evaluate(() => document.body.classList.contains("anim-none")), "anim-none class during play");
  await H.playWorld(page, 0);
  await expect(page.locator(".screen.complete")).toBeVisible();
  await wait(page, 1000);
  ok(await page.evaluate(() => App.Confetti.launched()) === 0, "no confetti burst");
  R.done();
});

test("full screen button: on home and in Réglages, toggles full screen; hidden where unsupported (iPhone)", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext();
  const page = await ctx.newPage(); R.watch(page, "fs");
  await page.goto("./");
  await H.newPlayer(page, "Plein");
  await expect(page.locator(".fs-btn")).toBeVisible();
  await tap(page, ".fs-btn");
  await expect.poll(() => page.evaluate(() => !!document.fullscreenElement)).toBe(true);
  await expect(page.locator(".fs-btn.on")).toBeVisible();
  await tap(page, ".fs-btn");
  await expect.poll(() => page.evaluate(() => !!document.fullscreenElement)).toBe(false);
  ok(await page.locator(".fs-btn.on").count() === 0, "home button back to « enter »");
  await H.settle(page);
  await tap(page, "[data-act=settings]");
  const toggle = page.locator(".modal [data-act=fullscreen]");
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect.poll(() => page.evaluate(() => !!document.fullscreenElement)).toBe(true);
  await expect(page.locator(".modal [data-act=fullscreen].on")).toBeVisible();
  await page.evaluate(() => document.exitFullscreen()); // like the Esc key
  await expect(page.locator(".modal [data-act=fullscreen].on")).toHaveCount(0);
  R.done();
  await ctx.close();

  // a browser without the Fullscreen API (iPhone Safari): no button at all
  const ctx2 = await browser.newContext();
  const p2 = await ctx2.newPage();
  await p2.addInitScript(() => {
    Object.defineProperty(Document.prototype, "fullscreenEnabled", { get: () => false });
    Object.defineProperty(Document.prototype, "webkitFullscreenEnabled", { get: () => false });
  });
  await p2.goto("./");
  await H.newPlayer(p2, "iPhone");
  ok(await p2.locator(".fs-btn").count() === 0, "no full screen button when unsupported");
  await H.settle(p2);
  await tap(p2, "[data-act=settings]");
  await expect(p2.locator(".modal")).toBeVisible();
  ok(await p2.locator(".modal [data-act=fullscreen]").count() === 0, "no full screen row in Réglages when unsupported");
  await ctx2.close();
});
