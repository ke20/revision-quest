// Listening exercises (field `listen` on a fill): the device voice reads the text, nothing leaves the device.
// speechSynthesis is replaced by a fake (headless browsers have no voice): it records what is spoken.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");

const LISTEN = { type: "fill", prompt: "Listen and write the word.", listen: "beautiful", sentence: "___",
  answers: ["beautiful"], hint: "joli", explanation: "**beautiful** = beau" };

/** Fake speechSynthesis with the given voices; every utterance is pushed to window.__spoken. */
async function fakeSpeech(page, voices) {
  await page.addInitScript((list) => {
    window.__spoken = [];
    const listeners = {};
    const synth = {
      getVoices: () => list.map((v) => ({ ...v })), // a fresh list of new objects each time, like Chrome
      // a voice whose name contains "Muette" fails like a voice the browser lists but cannot play
      speak: (u) => {
        window.__spoken.push({ text: u.text, rate: u.rate, voice: u.voice && u.voice.name, lang: u.lang });
        setTimeout(() => {
          if (/Muette/.test(u.voice && u.voice.name)) { if (u.onerror) u.onerror({ error: "synthesis-failed" }); }
          else if (u.onstart) u.onstart();
        }, 10);
      },
      speaking: false, pending: false, resume: () => {},
      cancel: () => {},
      addEventListener: (t, f) => { (listeners[t] = listeners[t] || []).push(f); },
      removeEventListener: (t, f) => { listeners[t] = (listeners[t] || []).filter((g) => g !== f); }
    };
    Object.defineProperty(window, "speechSynthesis", { value: synth, configurable: true });
    window.SpeechSynthesisUtterance = function (text) { this.text = text; };
  }, voices);
}

async function openListen(page, voices) {
  await fakeSpeech(page, voices);
  await H.withTestPacks(page, { body: (p, src) => H.editPack(src, (pack) => { pack.worlds[0].exercises.unshift(LISTEN); }) });
  await page.goto(H.BASE);
  await H.newPlayer(page, "Oreille");
  await H.gotoPack(page, H.SAMPLE);
  await H.startWorld(page, 0);
}

test("listen: local voice reads the text (normal and slow), buttons stay usable after the answer", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "listen");
  await openListen(page, [
    { name: "Online", lang: "en-GB", localService: false, default: true },
    { name: "Daniel", lang: "en-GB", localService: true, default: false }
  ]);
  const play = page.locator(".btn-listen").first(), slow = page.locator(".btn-listen").nth(1);
  await expect(play).toBeEnabled();
  ok(/Listen/.test(await play.innerText()) && /Slower/.test(await slow.innerText()), "English labels with French help");
  await play.click();
  await slow.click();
  const spoken = await page.evaluate(() => window.__spoken);
  ok(spoken.length === 2 && spoken.every((s) => s.text === "beautiful" && s.voice === "Daniel" && s.lang === "en-GB"), "local voice only: " + JSON.stringify(spoken));
  ok(spoken[0].rate === 1 && spoken[1].rate === 0.7, "normal then slow rate");
  ok(await H.hscroll(page) <= 0, "no horizontal scroll");

  await page.fill(".fill-input", "beautiful");
  await H.tap(page, "[data-act=check]");
  await expect(page.locator(".checkbar.ok")).toBeVisible();
  await expect(play).toBeEnabled();
  await play.click();
  ok((await page.evaluate(() => window.__spoken.length)) === 3, "can listen again while reading the correction");
  R.done();
});

test("listen: without a local voice, a message and a neutral Skip (no XP, no heart lost)", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "no-voice");
  await openListen(page, [{ name: "Online", lang: "en-GB", localService: false, default: true }]);
  await expect(page.locator(".listen-none")).toBeVisible();
  const before = await page.evaluate(() => ({ hearts: Engine.session.hearts, xp: Engine.session.xp }));
  await page.locator(".listen-bar .btn-listen").click();
  await expect(page.locator(".checkbar")).toContainText("Listening exercise skipped");
  const after = await page.evaluate(() => ({ hearts: Engine.session.hearts, xp: Engine.session.xp, skipped: Engine.session.skipped }));
  ok(after.hearts === before.hearts && after.xp === before.xp && after.skipped === 1, "neutral: " + JSON.stringify([before, after]));
  ok((await page.evaluate(() => window.__spoken.length)) === 0, "nothing spoken");
  R.done();
});

test("voix.html: lists the device voices, marks the one the game uses, reads with any of them; linked from home", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "voix");
  await fakeSpeech(page, [
    { name: "Eddy (Français (France))", lang: "fr-FR", voiceURI: "com.apple.eloquence.fr-FR.Eddy", localService: true, default: true },
    { name: "Thomas", lang: "fr-FR", voiceURI: "com.apple.voice.compact.fr-FR.Thomas", localService: true, default: false },
    { name: "Google français", lang: "fr-FR", voiceURI: "Google français", localService: false, default: false },
    { name: "<b>Daniel</b>", lang: "en-GB", voiceURI: "x", localService: true, default: false }
  ]);
  await page.goto(H.BASE);
  await H.newPlayer(page, "Voix");
  await H.tap(page, ".voices-link a");
  await expect(page).toHaveURL(/voix\.html$/);
  await expect(page.locator("#chosen")).toContainText("Thomas");
  await expect(page.locator("#list li")).toHaveCount(3);
  ok(/choisie par le jeu/.test(await page.locator("#list li.chosen").innerText()), "chosen voice marked");
  ok(/jamais utilisée/.test(await page.locator("#list li", { hasText: "Google" }).innerText()), "online voice flagged");
  ok((await page.locator("#list li", { hasText: "Google" }).locator("button").count()) === 0, "an online voice cannot be played (text would leave the device)");
  await page.locator("[data-play=game]").click();
  await page.locator("#list li", { hasText: "Eddy" }).locator("button").click();
  const spoken = await page.evaluate(() => window.__spoken.map((s) => s.voice + "@" + s.rate));
  ok(spoken.join() === "Thomas@1,Eddy (Français (France))@1", "spoken: " + spoken);
  await page.locator("[data-lang=en]").click();
  await expect(page.locator("#chosen")).toContainText("<b>Daniel</b>");
  ok((await page.locator("#list b").count()) === 0, "voice names are text, never HTML");
  ok(await H.hscroll(page) <= 0, "no horizontal scroll");
  R.done();
});

test("listen: a voice that the browser lists but cannot play is replaced by the next best one", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "fallback");
  await openListen(page, [
    { name: "Muette (Premium)", lang: "en-GB", voiceURI: "premium.Muette", localService: true, default: false },
    { name: "Daniel", lang: "en-GB", voiceURI: "compact.Daniel", localService: true, default: true }
  ]);
  const play = page.locator(".btn-listen").first();
  await expect(play).toBeEnabled();
  await play.click();
  await expect.poll(() => page.evaluate(() => window.__spoken.map((s) => s.voice).join())).toBe("Muette (Premium),Daniel");
  await play.click();
  await expect.poll(() => page.evaluate(() => window.__spoken.length)).toBe(3);
  ok((await page.evaluate(() => window.__spoken[2].voice)) === "Daniel", "the silent voice is not tried again");
  R.done();
});

test("voix.html inside another site's frame: no voice controls, only a link to open it in its own tab", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "voix-framed");
  // a host page (served by routing, same server) that puts the page in an iframe
  await page.route(H.BASE + "framer.html", (route) => route.fulfill({ status: 200, contentType: "text/html", body: '<iframe src="voix.html" width="400" height="400"></iframe>' }));
  await page.goto(H.BASE + "framer.html");
  const frame = page.frameLocator("iframe");
  await expect(frame.locator("main a")).toContainText("propre onglet");
  ok((await frame.locator("button, #list").count()) === 0, "no controls inside the frame");
  R.done();
});
