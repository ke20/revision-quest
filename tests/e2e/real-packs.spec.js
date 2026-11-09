// Every real pack of packs/catalog.js renders: each exercise of each world is drawn by the real renderer and CSS
// (prompt shown, nothing broken, figure and document present when asked, no horizontal overflow at 390 px).
// Answers are checked in tests/unit/real-packs.test.js; playing a world to 3 stars is covered by gameplay specs
// on the test packs. This spec only renders, so it takes seconds instead of a minute per pack.
"use strict";
const path = require("path");
const { test, expect } = require("@playwright/test");
const H = require("./helpers");

const { catalogUnits, loadCatalog } = require(path.join(H.ROOT, "tools", "validate-pack.js"));
const PACKS = catalogUnits(loadCatalog()).map((u) => u.path);

test(`real packs (${PACKS.length}): every exercise renders at 390 px`, async ({ browser }) => {
  const R = H.makeReporter();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage(); R.watch(page, "real packs");
  await page.goto(H.BASE);
  for (const packId of PACKS) {
    const res = await page.evaluate((id) => new Promise((resolve) => {
      Packs.load(id, (err, pack) => {
        if (err) return resolve({ out: ["load: " + err.code], n: 0 });
        const out = []; let n = 0;
        // inside a play screen, like in the game (same width, same CSS)
        const screen = document.createElement("section"); screen.className = "screen play";
        const box = document.createElement("div"); box.className = "ex-container"; screen.appendChild(box);
        document.getElementById("app").appendChild(screen);
        pack.worlds.forEach((w, wi) => w.exercises.forEach((ex, ei) => {
          const where = `world ${wi + 1} exercise ${ei + 1} (${ex.type})`;
          screen.style.setProperty("--c", w.color || "#7C3AED");
          Exercises.render(ex, box, () => {}, { data: pack });
          n++;
          if (box.querySelector(".ex-broken") || !box.querySelector(".ex-prompt")) out.push(where + ": not rendered");
          if (ex.figure && !box.querySelector(".ex-head svg.fig-svg text")) out.push(where + ": figure missing");
          if (ex.table && !box.querySelector(".ex-head table.conv-table td, .ex-head table.conv-table th")) out.push(where + ": table missing");
          if (ex.type === "write" && (ex.docId != null || ex.letterId != null) && !box.querySelector(".letter-card")) out.push(where + ": document missing");
          // a text to read on another type: above the question (short) or a "back to the text" button (screen: true)
          if (ex.type !== "write" && ex.docId != null && !box.querySelector(".ex-head .read-inline, .ex-head .btn-reread")) out.push(where + ": text to read missing");
          if (box.scrollWidth > box.clientWidth + 1) out.push(where + ": wider than the screen (" + box.scrollWidth + " > " + box.clientWidth + ")");
        }));
        screen.remove();
        resolve({ out, n });
      });
    }), packId);
    R.ok(res.n > 0 && res.out.length === 0, `${packId}: ${res.n} exercises render` + (res.out.length ? " — " + res.out.join("; ") : ""));
  }
  await expect(page.locator(".screen.play")).toHaveCount(0);
  await ctx.close();
  R.done();
});

test("mcq options are shown in a random order (the right answer is not always at the same letter)", async ({ page }) => {
  await page.goto(H.BASE);
  const res = await page.evaluate(() => {
    const box = document.createElement("div"); document.getElementById("app").appendChild(box);
    const ex = { type: "mcq", prompt: "Q ?", options: ["bonne", "b", "c", "d"], answer: 0, explanation: "" };
    const seen = new Set(); let wellBuilt = true;
    for (let k = 0; k < 40; k++) {
      Exercises.render(ex, box, () => {}, {});
      const opts = [...box.querySelectorAll(".option")];
      const pos = opts.findIndex((b) => b.getAttribute("data-i") === "0");
      seen.add(pos);
      const keys = opts.map((b) => b.querySelector(".opt-key").textContent).join("");
      const texts = opts.map((b) => ex.options[+b.getAttribute("data-i")]);
      if (keys !== "ABCD" || opts[pos].textContent.indexOf("bonne") < 0 || new Set(texts).size !== 4) wellBuilt = false;
    }
    box.remove();
    return { positions: seen.size, wellBuilt };
  });
  expect(res.wellBuilt).toBe(true);
  expect(res.positions).toBeGreaterThan(1);
});
