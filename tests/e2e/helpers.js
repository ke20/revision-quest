// Shared helpers for the Révision Quest end-to-end specs (@playwright/test).
"use strict";
const fs = require("fs");
const path = require("path");
const Rules = require("../../js/core/pack-rules.js");
const { expect } = require("@playwright/test");

const BASE = process.env.RQ_BASE_URL || "http://127.0.0.1:4173/";
const EN = "4e/anglais/giving-advice";
const SAMPLE = "5e/anglais/sample";
const ROOT = path.resolve(__dirname, "..", "..");
const FIXTURES = path.join(ROOT, "tests", "fixtures");

/** One soft assertion per check (keeps going after a failure, like the original suites) + console error tracking. */
function makeReporter() {
  const errors = [];
  return {
    errors,
    ok(cond, msg) { expect.soft(!!cond, msg).toBe(true); },
    watch(page, tag, { allowCsp = false, allow = null } = {}) {
      page.on("console", m => {
        if (m.type() !== "error") return;
        if (allow && allow.test(m.text())) return;
        if (allowCsp && /Content Security Policy|Failed to load resource|is not executable/.test(m.text())) return; // deliberate blocked / missing files
        errors.push(tag + " " + m.text());
      });
      page.on("pageerror", e => errors.push(tag + " pageerror " + e.message));
      page.on("dialog", d => { errors.push(tag + " DIALOG " + d.message()); d.dismiss(); });
    },
    done() { expect(errors, "no console errors").toEqual([]); }
  };
}

const wait = (p, ms) => p.waitForTimeout(ms);
/** Click, forced because some buttons pulse (never "stable"); first waits for a closing dialog to be gone. */
async function tap(page, sel) {
  await page.locator(".modal-backdrop.out").first().waitFor({ state: "detached" }).catch(() => {});
  await page.click(sel, { force: true });
}

/** Wait until finite CSS animations (entry slide / fade) are over; infinite ones (pulse, bounce) are ignored. */
async function settle(page) {
  await page.evaluate(() => Promise.all(document.getAnimations()
    .filter(a => { const t = a.effect && a.effect.getTiming ? a.effect.getTiming() : {}; return t.iterations !== Infinity; })
    .map(a => a.finished.catch(() => {}))));
}
/** Horizontal overflow in px, measured once the screen is settled. */
async function hscroll(page) { await settle(page); return page.evaluate(() => document.documentElement.scrollWidth - innerWidth); }

/** Screenshots are taken by Playwright only on failure (see playwright.config.js); kept as a hook. */
async function shot() {}

/** Cookie for the test server origin. */
function cookie(name, value) { return { name, value, url: BASE }; }

function fixture(rel) { return fs.readFileSync(path.join(FIXTURES, rel), "utf8"); }

/** Edit a pack file as data: strict format → object → edit(pack) → strict format again. */
function editPack(src, edit) {
  const pack = Rules.parseStrict(src);
  edit(pack);
  return Rules.formatStrict(pack);
}
/** First exercise of a pack that matches test(ex). */
function findExercise(pack, test) {
  for (const w of pack.worlds) for (const e of w.exercises) if (test(e)) return e;
  throw new Error("exercise not found in the test pack");
}

/* Test packs live in tests/fixtures/packs (never in packs/ nor packs/catalog.js): the production app only knows real packs.
   withTestPacks() serves them by routing and injects their catalogue entries into packs/catalog.js. */
const TEST_PACKS = {
  sample: { entry: JSON.parse(fixture("catalog-sample-entry.json")), body: fixture("packs/5e/anglais/sample.js") },
  history: { entry: JSON.parse(fixture("catalog-test-entry.json")), body: fixture("packs/cm2/histoire/test-revolution.js") }
};
const HISTORY = TEST_PACKS.history.entry.path;
/** opts: { sample = true, history = false, entry(e) → e (edit a catalogue entry), body(path, src) → src (edit a pack file) }.
    Can be called again on the same page: the newest routes win. */
async function withTestPacks(page, { sample = true, history = false, entry = (e) => e, body = (p, src) => src } = {}) {
  const used = [history && TEST_PACKS.history, sample && TEST_PACKS.sample].filter(Boolean);
  const inject = used.map((t) => JSON.stringify(entry({ ...t.entry })) + ",\n").join("");
  await page.route("**/packs/catalog.js", async (route) => {
    const res = await route.fetch();
    const src = await res.text();
    // Keep the e2e tests independent of the real packs added over time: only the English pack stays.
    const others = [...src.matchAll(/"path": "([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== EN);
    const keep = "\nwindow.CATALOG.packs = window.CATALOG.packs.filter(function (p) { return " + JSON.stringify(others) + ".indexOf(p.path) < 0; });\n";
    await route.fulfill({ response: res, body: src.replace('"packs": [', '"packs": [\n' + inject) + keep });
  });
  for (const t of used) {
    await page.route(`**/packs/${t.entry.path}.js`, (route) => route.fulfill({ status: 200, contentType: "text/javascript", body: body(t.entry.path, t.body) }));
  }
}

/** Create a player from the players screen. "Non" is preselected for the comfort question: { comfort: "yes" } answers "Oui".
    { grade: "cm2" } picks the class (none by default). */
async function newPlayer(page, name, av, { comfort = null, grade = null } = {}) {
  await tap(page, "[data-act=new]");
  await page.fill("#np-name", name);
  if (av != null) await page.click(`.avatar-btn >> nth=${av}`);
  if (grade) await page.click(`[data-grade="${grade}"]`);
  if (comfort) await page.click(`[data-comfort="${comfort}"]`);
  await tap(page, "[data-act=create]");
  await expect(page.locator(".screen.home")).toBeVisible();
  await page.evaluate(() => Engine.setSound(false));
}

async function closeModals(page) {
  while (await page.locator(".modal-backdrop:not(.out) [data-act=ok]").count()) {
    await page.locator(".modal-backdrop:not(.out) [data-act=ok]").first().click(); await wait(page, 250);
  }
}

/** From home: catalogue → pack card → world map. */
/** Catalogue → pack map. A group "<niveau>/<matiere>/<cours>/<groupe>" goes through its chapter card and the group choice. */
async function gotoPack(page, packId) {
  await tap(page, "[data-act=catalog]");
  const seg = packId.split("/");
  if (seg.length === 4) {
    await tap(page, `.pack-card[data-pack="${seg.slice(0, 3).join("/")}"]`);
    await expect(page.locator(".screen.groups")).toBeVisible();
  }
  await tap(page, `.pack-card[data-pack="${packId}"]`);
  await expect(page.locator(".screen.map")).toBeVisible();
}
/** Wait until the world map stops moving. 250 ms after it is shown, the map smooth-scrolls to the current world
    when that one is low on the screen (js/app/screens/map.js showMap): a click during that scroll lands on the wrong spot. */
async function mapSettled(page) {
  await expect(page.locator(".screen.map")).toBeVisible();
  await page.waitForFunction(() => new Promise((resolve) => {
    const cur = document.querySelector(".map-node.current");
    const maxY = document.documentElement.scrollHeight - innerHeight;
    // the app scrolls only if the current node starts below 70 % of the screen; done when it is centred (or at the bottom)
    const placed = () => !cur || cur.getBoundingClientRect().top <= innerHeight * 0.7 || scrollY >= maxY - 1;
    // still for 400 ms of real time (not a number of frames: under load a few frames can pass before the app's
    // 250 ms timer starts its smooth scroll, or while it is running)
    let y = scrollY, since = performance.now();
    (function frame() {
      const now = performance.now();
      if (scrollY !== y) { y = scrollY; since = now; }
      if (now - since >= 400) return resolve(placed());
      requestAnimationFrame(frame);
    })();
  }));
}
/** From the map: world i → lesson. */
async function openLesson(page, i) {
  await mapSettled(page);
  await tap(page, `.map-node[data-i="${i}"] .node-btn`);
  await expect(page.locator(".screen.lesson")).toBeVisible();
}
/** From the map: world i → lesson → play. */
async function startWorld(page, i) {
  await openLesson(page, i);
  await tap(page, "[data-act=go]");
  await expect(page.locator(".screen.play")).toBeVisible();
}

const curEx = (page, wi) => page.evaluate(wi => Engine.currentExercise(Engine.packData().worlds[wi]), wi);

/** Answer the current exercise correctly (generic for every type). */
async function solve(page, ex) {
  // a long text is read on its own screen before its first question
  if (await page.locator(".read-go").count()) await tap(page, ".read-go");
  switch (ex.type) {
    case "match":
      for (let i = 0; i < ex.pairs.length; i++) {
        await page.locator(`.match-col >> nth=0 >> .match-item[data-i="${i}"]`).click();
        await page.locator(`.match-col >> nth=1 >> .match-item[data-i="${i}"]`).click();
      }
      return;
    case "mcq": for (const a of [].concat(ex.answer)) await page.locator(`.option[data-i="${a}"]`).click(); break;
    case "sort":
      for (let i = 0; i < ex.items.length; i++) {
        const ci = ex.categories.findIndex(c => c.id === ex.items[i].cat);
        await page.locator(`.chip[data-i="${i}"]`).click();
        // a tall exercise head (figure) can push the boxes under the fixed check bar: centre the box first
        await page.locator(".sort-cat").nth(ci).evaluate((e) => e.scrollIntoView({ block: "center" }));
        await page.locator(".sort-cat").nth(ci).click({ position: { x: 10, y: 10 }, force: true });
      }
      break;
    case "order":
      for (let k = 0; k < ex.words.length; k++) await page.locator(`.order-bank .chip[data-i="${k}"], .order-line .chip[data-i="${k}"]`).first().click();
      break;
    case "fill": await page.fill(".fill-input", ex.answers[0]); break;
    case "spot": await page.locator(".spot-token").nth(ex.wrongIndex).click(); break;
    case "question": await page.fill(".question-input", ex.answers[0]); break;
  }
  await tap(page, "[data-act=check]");
}

/** Play the whole world wi perfectly (session already started). */
async function playWorld(page, wi) {
  const total = await page.evaluate(() => Engine.session.total);
  for (let i = 0; i < total; i++) {
    const ex = await curEx(page, wi);
    await solve(page, ex);
    await expect(page.locator(".checkbar.ok, .checkbar.ko")).toBeVisible();
    await wait(page, 600); // a level-up popup may open 500 ms after the answer
    await closeModals(page);
    await tap(page, "[data-act=check]");
    await wait(page, 250);
    await closeModals(page);
  }
  await closeModals(page);
}

function hash(str) { let h = 0x811c9dc5; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0; } return h.toString(36); }
/** Build a .save file the way the app does (prefix.base64.hash).
    "PROTOKEY" placeholders become real "__proto__" keys in the JSON (an object literal key would set the prototype). */
function saveFile(prefix, obj) {
  const inner = JSON.stringify(obj).replace(/PROTOKEY/g, "__proto__");
  return prefix + "." + Buffer.from(inner, "utf8").toString("base64") + "." + hash(inner);
}

module.exports = { BASE, EN, SAMPLE, HISTORY, ROOT, makeReporter, wait, tap, settle, hscroll, shot, cookie, fixture, editPack, findExercise, withTestPacks, newPlayer, closeModals, gotoPack, mapSettled, openLesson, startWorld, curEx, solve, playWorld, hash, saveFile };
