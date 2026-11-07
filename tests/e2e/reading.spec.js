// Reading comprehension: a text (docId) on any exercise. A short text sits above the question; a long one
// (screen: true) is read on its own screen first, then each question offers "back to the text".
// Also the mcq with several answers (answer: [..]): right only with exactly the right boxes.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");

const DOCS = [
  { id: "short", title: "Une phrase", text: "Nina range sa **lampe** dans son sac." },
  { id: "long", title: "Le secret", screen: true, text: "Malo trouve une boîte.\nGros Bec crie : Mobilis !\nNina ouvre la boîte." }
];
const EXS = [
  { type: "mcq", prompt: "Que range Nina ?", docId: "short", options: ["une lampe", "un livre", "une pomme"], answer: 0, explanation: "Une **lampe**." },
  { type: "mcq", prompt: "Qui parle ou agit ?", docId: "long", options: ["Malo", "Gros Bec", "le facteur", "la maîtresse"], answer: [0, 1], explanation: "Malo et Gros Bec." },
  { type: "mcq", prompt: "Qui ouvre la boîte ?", docId: "long", options: ["Malo", "Nina", "Gros Bec"], answer: [1], showCount: false, explanation: "Nina." }
];

async function open(page) {
  await H.withTestPacks(page, { body: (p, src) => H.editPack(src, (pack) => {
    pack.letters.unshift(...DOCS);
    pack.worlds[0].exercises.unshift(...EXS);
  }) });
  await page.goto(H.BASE);
  await H.newPlayer(page, "Lecteur");
  await H.gotoPack(page, H.SAMPLE);
  await H.startWorld(page, 0);
}

async function next(page) {
  await H.tap(page, "[data-act=check]");
  await H.wait(page, 250);
  await H.closeModals(page);
}

test("reading: short text above the question, long text on its own screen then 'back to the text'", async ({ page }) => {
  const R = H.makeReporter(); const ok = R.ok;
  R.watch(page, "reading");
  await open(page);

  // 1. short text: above the question, no reading screen
  await expect(page.locator(".ex-head .read-inline")).toContainText("Nina range sa lampe");
  ok((await page.locator(".read-go, .btn-reread").count()) === 0, "no reading screen for a short text");
  await H.solve(page, EXS[0]);
  await expect(page.locator(".checkbar.ok")).toBeVisible();
  await next(page);

  // 2. long text: reading screen first, check button hidden, question not shown yet
  await expect(page.locator(".ex-reading .read-card")).toContainText("Gros Bec crie");
  await expect(page.locator(".checkbar")).toBeHidden(); // the bar would cover the button
  await expect(page.locator(".read-go")).toBeInViewport();
  ok((await page.locator(".option").count()) === 0, "questions come after the reading");
  ok(await H.hscroll(page) <= 0, "no horizontal scroll on the reading screen");
  await H.tap(page, ".read-go");
  await expect(page.locator(".multi-help")).toContainText("choisis 2 réponses");
  ok((await page.locator(".ex .read-card").count()) === 0, "the long text is not repeated above the question");

  // back to the text keeps the boxes already ticked
  await page.locator('.option[data-i="0"]').click();
  await H.tap(page, ".btn-reread");
  await expect(page.locator(".read-layer .read-card")).toContainText("Nina ouvre la boîte");
  await page.locator(".read-close").click();
  await expect(page.locator(".read-layer")).toHaveCount(0);
  ok(await page.locator('.option[data-i="0"]').evaluate((b) => b.classList.contains("selected")), "answer in progress kept");

  // one box missing = wrong, the right boxes are shown
  await H.tap(page, "[data-act=check]");
  await expect(page.locator(".checkbar.ko")).toBeVisible();
  await expect(page.locator(".checkbar")).toContainText("Malo · Gros Bec");
  ok(await page.locator('.option[data-i="1"]').evaluate((b) => b.classList.contains("missed")), "missed box marked");
  await expect(page.locator(".btn-reread")).toBeEnabled(); // still usable while reading the correction
  await next(page);

  // 3. same text: no second reading screen; count not announced; a single right answer is accepted
  await expect(page.locator(".multi-help")).toContainText("plusieurs réponses possibles");
  ok((await page.locator(".read-go").count()) === 0, "the text is read once for its questions");
  await page.locator('.option[data-i="1"]').click();
  await H.tap(page, "[data-act=check]");
  await expect(page.locator(".checkbar.ok")).toBeVisible();
  R.done();
});

test("reading: Escape closes the text, leaving the world closes it too", async ({ page }) => {
  const R = H.makeReporter();
  R.watch(page, "reading-close");
  await open(page);
  await H.solve(page, EXS[0]);
  await next(page);
  await H.tap(page, ".read-go");
  await H.tap(page, ".btn-reread");
  await page.keyboard.press("Escape");
  await expect(page.locator(".read-layer")).toHaveCount(0);
  await H.tap(page, ".btn-reread");
  await H.tap(page, ".read-close");
  await H.tap(page, "[data-act=quit]");
  await H.closeModals(page);
  await expect(page.locator(".read-layer")).toHaveCount(0);
  R.done();
});
