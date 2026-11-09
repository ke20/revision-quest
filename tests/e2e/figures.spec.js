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
