// Geometry figures (js/exercises/figures.js): drawn from pack data in the lesson and above an exercise prompt,
// readable at 390 px (no horizontal scroll), built with DOM nodes only (pack text never becomes markup).
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");

const PACK = "cm2/maths/droites-et-segments";

for (const width of [390, 1280]) {
  test(`figures at ${width} px: lesson figures, exercise figure, no scroll, plain text labels`, async ({ browser }) => {
    const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 800 } });
    const page = await ctx.newPage(); R.watch(page, "figures " + width);
    await page.goto(H.BASE);
    await H.newPlayer(page, "Euclide");
    await H.gotoPack(page, PACK);

    await H.openLesson(page, 0);
    const lessonFigs = page.locator(".lesson-figs svg.fig-svg");
    await expect(lessonFigs).toHaveCount(4);
    ok((await page.locator(".lesson-figs figcaption").allInnerTexts()).join() === "Le segment [AB],La droite (AB),La demi-droite [AB),O est le milieu de [AB]", "lesson captions");
    ok(await H.hscroll(page) <= 0, "no horizontal scroll on the lesson");

    await H.tap(page, ".screen.lesson [data-act=go]");
    await expect(page.locator(".screen.play")).toBeVisible();
    const fig = page.locator(".ex-head svg.fig-svg");
    await expect(fig).toHaveCount(1);
    ok(await fig.getAttribute("role") === "img" && /A et B/.test(await fig.getAttribute("aria-label")), "exercise figure has role img + description");
    ok((await page.locator(".ex-head svg text").allTextContents()).join() === "A,B", "point names drawn as text");
    const box = await fig.boundingBox();
    ok(box.width > 150 && box.width <= width, "figure fits the screen: " + box.width);
    ok(await H.hscroll(page) <= 0, "no horizontal scroll on the exercise");

    // hostile labels stay text: no element is created from a pack string
    const injected = await page.evaluate(() => {
      const f = Figures.build({ w: 4, h: 2, caption: "<img src=x onerror=alert(1)>", points: { "<b>": [1, 1] }, draw: [{ segment: ["<b>", "<b>"] }] });
      return { img: f.querySelectorAll("img, b, script, foreignObject").length, cap: f.querySelector("figcaption").textContent };
    });
    ok(injected.img === 0 && injected.cap === "<img src=x onerror=alert(1)>", "captions and names are never parsed as HTML");
    await ctx.close();
  });
}

for (const width of [390, 1280]) {
  test(`figure zoom at ${width} px: a tap shows the figure full screen, ✕ / Escape / a tap close it`, async ({ browser }) => {
    const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 800 } });
    const page = await ctx.newPage(); R.watch(page, "zoom " + width);
    await page.goto(H.BASE);
    await H.newPlayer(page, "Euclide");
    await H.gotoPack(page, PACK);
    await H.openLesson(page, 0);
    const small = page.locator(".lesson-figs svg.fig-svg").first();
    const smallBox = await small.boundingBox();

    await small.click();
    const layer = page.locator(".fig-zoom");
    await expect(layer).toBeVisible();
    ok(await layer.getAttribute("role") === "dialog" && await layer.getAttribute("aria-modal") === "true", "zoom is a modal dialog");
    const bigBox = await layer.locator("svg.fig-svg-big").boundingBox();
    ok(bigBox.width > smallBox.width * 1.3, `figure is bigger: ${Math.round(smallBox.width)} → ${Math.round(bigBox.width)} px`);
    ok(bigBox.width <= width && bigBox.y + bigBox.height <= (width === 390 ? 844 : 800), "zoomed figure fits the screen");
    ok(await layer.locator(".fig-zoom-caption").innerText() === "Le segment [AB]", "caption repeated");
    ok(await page.evaluate(() => document.activeElement && document.activeElement.classList.contains("fig-zoom-close")), "focus on ✕");
    await H.shot(page, "fig-zoom-" + width);
    ok(await H.hscroll(page) <= 0, "no horizontal scroll with the zoom open");

    await page.keyboard.press("Escape");
    await expect(layer).toHaveCount(0);
    ok(await page.locator(".screen.lesson").isVisible(), "Escape closes the zoom, the lesson stays");

    await page.locator(".lesson-figs .fig-zoom-btn").first().click();
    await expect(layer).toBeVisible();
    await page.locator(".fig-zoom-close").click();
    await expect(layer).toHaveCount(0);
    ok(await page.evaluate(() => document.activeElement && document.activeElement.classList.contains("fig-zoom-btn")), "focus back on 🔍");

    await H.tap(page, ".screen.lesson [data-act=go]");
    await expect(page.locator(".screen.play")).toBeVisible();
    await page.locator(".ex-head svg.fig-svg").click();
    await expect(layer).toBeVisible();
    await layer.click({ position: { x: 20, y: 200 } });
    await expect(layer).toHaveCount(0);
    ok(await page.locator(".screen.play").isVisible(), "a tap closes the zoom during an exercise");
    await ctx.close();
  });
}
