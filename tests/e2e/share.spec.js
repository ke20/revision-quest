// Sharing a game: "Partager ma partie" shows a QR code and sends / copies a link (#partie=<code>).
// Opening the link (or scanning the QR code) asks before importing, then removes the code from the address.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { BASE, EN, wait, tap } = H;

/** navigator.share replaced by a recorder (desktop headless browsers have none). */
async function fakeShare(page) {
  await page.addInitScript(() => {
    window.__shared = [];
    Object.defineProperty(navigator, "share", { configurable: true, value: (d) => { window.__shared.push(d); return Promise.resolve(); } });
  });
}

/** A player with progress, then the share panel; returns the link. */
async function shareFrom(page, name) {
  await fakeShare(page);
  await page.goto(BASE); await wait(page, 300);
  await H.newPlayer(page, name, 2);
  await page.evaluate((EN) => {
    const s = Engine.state;
    s.xp = 640; s.badges.push("first_step", "perfect");
    s.packs[EN] = { worlds: { 1: { stars: 5, accuracy: 1, completed: true }, 2: { stars: 3, accuracy: 0.7, completed: true } }, lastPlayed: 1762000000000 };
    Engine.setSound(true); // saves
  }, EN);
  await tap(page, "[data-act=save]"); await wait(page, 300);
  await tap(page, "[data-act=share]");
  await expect(page.locator("svg.share-qr")).toBeVisible();
  await tap(page, "[data-act=sendlink]");
  const shared = await page.evaluate(() => window.__shared[0]);
  return shared.url;
}

test("share: QR code + link; the link imports the game on another device, after confirmation", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const a = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const pa = await a.newPage(); R.watch(pa, "sender");
  const link = await shareFrom(pa, "Nina");
  ok(/#partie=z\.[A-Za-z0-9_-]+\.[a-z0-9]+$/.test(link) && link.startsWith(BASE), "link to the game with the code after #: " + link);
  ok(link.length < 1000, "short link: " + link.length);
  const cells = await pa.locator("svg.share-qr path").getAttribute("d");
  ok(cells && cells.split("M").length > 100, "QR code drawn");
  ok(await H.hscroll(pa) <= 0, "no horizontal scroll");

  // another device: empty browser
  const b = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const pb = await b.newPage(); R.watch(pb, "receiver");
  await pb.goto(link);
  await expect(pb.locator(".modal-backdrop:not(.out) .modal h3")).toContainText("Récupérer une partie");
  await expect(pb.locator(".modal-backdrop:not(.out) .modal")).toContainText("Nina");
  await expect(pb.locator(".modal-backdrop:not(.out) .modal")).toContainText("640 XP");
  ok(!/#/.test(pb.url()), "code removed from the address right away: " + pb.url());
  await pb.locator(".modal-backdrop:not(.out) .modal [data-act=yes]").click();
  await expect(pb.locator(".toast").last()).toContainText("importée");
  const got = await pb.evaluate((EN) => ({ name: Engine.currentProfile().name, xp: Engine.state.xp, w: Engine.state.packs[EN].worlds[2].stars }), EN);
  ok(got.name === "Nina" && got.xp === 640 && got.w === 3, "progress imported: " + JSON.stringify(got));

  // same link again on this device: same name → replace or keep both
  await pb.goto(link);
  await pb.locator(".modal-backdrop:not(.out) .modal [data-act=yes]").click();
  await expect(pb.locator(".modal-backdrop:not(.out) .modal [data-act=replace]")).toBeVisible();
  await pb.locator(".modal-backdrop:not(.out) .modal [data-act=copy]").click();
  ok((await pb.evaluate(() => Engine.profiles().map((p) => p.name).sort().join())) === "Nina,Nina (2)", "kept both");

  // cancel imports nothing
  await pb.goto(link);
  await pb.locator(".modal-backdrop:not(.out) .modal [data-act=no]").click();
  ok((await pb.evaluate(() => Engine.profiles().length)) === 2, "cancel: nothing imported");

  // a link cut by a messaging app
  await pb.goto(link.slice(0, -12) + link.slice(-4));
  await expect(pb.locator(".modal-backdrop:not(.out) .modal")).toContainText("incomplet ou abîmé");
  await a.close(); await b.close();
  R.done();
});

test("share: copy the link when the device has no share sheet", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.grantPermissions(["clipboard-read", "clipboard-write"]);
  const page = await ctx.newPage(); R.watch(page, "copy");
  await page.goto(BASE); await wait(page, 300);
  await H.newPlayer(page, "Malo", 1);
  await tap(page, "[data-act=save]"); await wait(page, 300);
  await tap(page, "[data-act=share]");
  await expect(page.locator("svg.share-qr")).toBeVisible();
  ok((await page.locator("[data-act=sendlink]").count()) === (await page.evaluate(() => navigator.share ? 1 : 0)), "send button only with a share sheet");
  await tap(page, "[data-act=copylink]");
  await expect(page.locator(".toast").last()).toContainText("copié");
  ok(/#partie=z\./.test(await page.evaluate(() => navigator.clipboard.readText())), "link in the clipboard");
  await ctx.close();
  R.done();
});

test("scan: the camera reads the QR code (browser detector), then the same confirmation", async ({ browser }) => {
  const R = H.makeReporter(); const ok = R.ok;
  const a = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const link = await shareFrom(await a.newPage(), "Lou");
  await a.close();

  const b = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await b.newPage(); R.watch(page, "scan");
  // a real MediaStream (from a canvas) for the camera, and a detector that "sees" the link after a few frames
  await page.addInitScript((link) => {
    window.__tracksStopped = 0;
    navigator.mediaDevices.getUserMedia = () => {
      const c = document.createElement("canvas"); c.width = 64; c.height = 64;
      const s = c.captureStream(5);
      s.getTracks().forEach((t) => { const stop = t.stop.bind(t); t.stop = () => { window.__tracksStopped++; stop(); }; });
      return Promise.resolve(s);
    };
    let n = 0;
    window.BarcodeDetector = function () {};
    window.BarcodeDetector.prototype.detect = () => Promise.resolve(++n < 3 ? [] : [{ rawValue: link }]);
  }, link);
  await page.goto(BASE); await wait(page, 300);
  await H.newPlayer(page, "Moi", 1);
  await tap(page, "[data-act=save]"); await wait(page, 300);
  await tap(page, "[data-act=scan]");
  await expect(page.locator(".modal-backdrop:not(.out) .modal h3")).toContainText("Récupérer une partie");
  await expect(page.locator(".modal-backdrop:not(.out) .modal")).toContainText("Lou");
  ok((await page.evaluate(() => window.__tracksStopped)) >= 1, "camera stopped once the code is read");
  await page.locator(".modal-backdrop:not(.out) .modal [data-act=yes]").click();
  await expect(page.locator(".toast").last()).toContainText("importée");
  await b.close();
  R.done();
});

test("scan: no button without the browser's QR detector", async ({ page }) => {
  await page.addInitScript(() => { delete window.BarcodeDetector; });
  await page.goto(BASE); await wait(page, 300);
  await H.newPlayer(page, "Sans", 1);
  await tap(page, "[data-act=save]"); await wait(page, 300);
  await expect(page.locator("[data-act=share]")).toBeVisible();
  await expect(page.locator("[data-act=scan]")).toHaveCount(0);
});

test("share: the QR code drawn on screen reads back as the link (browser detector, where available)", async ({ page }) => {
  await page.goto(BASE);
  const has = await page.evaluate(async () => "BarcodeDetector" in window && (await BarcodeDetector.getSupportedFormats()).includes("qr_code"));
  test.skip(!has, "no native QR detector in this browser");
  await shareFrom(page, "Relecture");
  // a big game (every pack of the catalogue, 8 worlds each, all stars): the QR code must still be readable
  await page.evaluate(() => {
    Packs.list().forEach((u) => { const w = {}; for (let i = 1; i <= 8; i++) w[i] = { stars: 5, accuracy: 1, completed: true }; Engine.state.packs[u.path || u.id] = { worlds: w, lastPlayed: Date.now() }; });
    Engine.setSound(true);
  });
  await page.locator(".modal-backdrop:not(.out) [data-act=close]").click();
  await tap(page, "[data-act=save]"); await wait(page, 300);
  await tap(page, "[data-act=share]");
  await expect(page.locator("svg.share-qr")).toBeVisible();
  await tap(page, "[data-act=sendlink]");
  const link = await page.evaluate(() => window.__shared[window.__shared.length - 1].url);
  const read = await page.evaluate(async () => {
    const svg = document.querySelector("svg.share-qr");
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    await img.decode();
    const c = document.createElement("canvas"); c.width = c.height = 600;
    c.getContext("2d").drawImage(img, 0, 0, 600, 600);
    const codes = await new BarcodeDetector({ formats: ["qr_code"] }).detect(c);
    return codes.map((x) => x.rawValue);
  });
  expect(read).toEqual([link]);
});
