// Chapters "par groupes": one catalogue card, a group choice screen, one pack per group (packs/<cours>/<groupe>.js),
// back navigation (← and browser back) and stars added up on the chapter card. Test packs are served by routing only.
"use strict";
const { test, expect } = require("@playwright/test");
const H = require("./helpers");
const { wait, tap } = H;

const CH = "cm2/histoire/test-groupes";
const ENTRY = {
  path: CH, title: "Groupes (test)", description: "Chapitre de test par groupes.", icon: "🗽", color: "#7C3AED", lang: "fr",
  groups: [
    { id: "g1", label: "Groupe 1", difficulty: 1, worldCount: 2 },
    { id: "g2", label: "Groupe 2", difficulty: 2, worldCount: 2 }
  ]
};
const BODY = H.fixture("packs/cm2/histoire/test-revolution.js");

async function withGroups(page) {
  await page.route("**/js/catalog.js", async (route) => {
    const res = await route.fetch();
    const src = await res.text();
    // only the English pack + the grouped test chapter: independent of the real packs added over time
    const others = [...src.matchAll(/path: "([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== H.EN);
    const keep = "\nwindow.CATALOG.packs = window.CATALOG.packs.filter(function (p) { return " + JSON.stringify(others) + ".indexOf(p.path) < 0; });\n";
    await route.fulfill({ response: res, body: src.replace("packs: [", "packs: [\n" + JSON.stringify(ENTRY) + ",\n") + keep });
  });
  for (const g of ENTRY.groups) {
    await page.route(`**/packs/${CH}/${g.id}.js`, (route) => route.fulfill({
      status: 200, contentType: "text/javascript", body: H.editPack(BODY, (pack) => { pack.path = CH + "/" + g.id; })
    }));
  }
}

for (const width of [390, 1280]) {
  test(`chapter par groupes at ${width} px: one card, group choice, own progress per group, back navigation`, async ({ browser }) => {
    const R = H.makeReporter(); const ok = R.ok;
    const ctx = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 800 } });
    const page = await ctx.newPage(); R.watch(page, "groups " + width);
    await withGroups(page);
    await page.goto(H.BASE);
    await H.newPlayer(page, "Gaby");
    await page.evaluate(() => Engine.setSettings({ pauseEvery: 0 }));

    // catalogue: a single card for the chapter, no card per group
    await tap(page, "[data-act=catalog]");
    const cards = await page.$$eval(".pack-card", (c) => c.map((x) => x.getAttribute("data-pack")));
    ok(cards.includes(CH) && !cards.some((c) => c.startsWith(CH + "/")), "one catalogue card for the grouped chapter: " + cards.join());
    const card = page.locator(`.pack-card[data-pack="${CH}"]`);
    ok(/2 groupes/.test(await card.innerText()) && /⭐ 0\/20/.test(await card.innerText()), "card shows 2 groupes and ⭐ 0/20 (2 groups × 2 worlds × 5)");

    // group choice
    await tap(page, `.pack-card[data-pack="${CH}"]`);
    await expect(page.locator(".screen.groups")).toBeVisible();
    const groups = await page.$$eval(".screen.groups .pack-card", (c) => c.map((x) => x.getAttribute("data-pack")));
    ok(groups.join() === `${CH}/g1,${CH}/g2`, "group choice lists g1, g2: " + groups.join());
    ok((await page.locator(".tag-difficulty").allInnerTexts()).join() === "●,●●", "difficulty dots");
    ok(await H.hscroll(page) <= 0, "no horizontal scroll on the group choice");
    ok(await page.evaluate(() => [...document.scripts].every((s) => !/test-groupes/.test(s.src))), "no pack loaded before a group is chosen");

    // play group 2, world 1
    await tap(page, `.pack-card[data-pack="${CH}/g2"]`);
    await expect(page.locator(".screen.map")).toBeVisible();
    ok(/Groupes \(test\) · Groupe 2/.test(await page.locator(".map-pack").innerText()), "map shows chapter · group");
    ok(await page.evaluate(() => Engine.currentPackId()) === `${CH}/g2`, "engine plays the group pack");
    await H.startWorld(page, 0);
    await H.playWorld(page, 0);
    await expect(page.locator(".screen.complete")).toBeVisible();
    await H.closeModals(page);
    await tap(page, ".screen.complete [data-act=next]");
    await expect(page.locator(".screen.map")).toBeVisible();
    ok(await page.evaluate((id) => !!Engine.state.packs[id] && !Engine.state.packs[id.replace(/\/g2$/, "")], `${CH}/g2`), "progress saved under the group id only");

    // ← from the map goes back to the group choice, with the stars of g2
    await tap(page, ".screen.map [data-act=back]");
    await expect(page.locator(".screen.groups")).toBeVisible();
    ok(/⭐ 5\/10/.test(await page.locator(`.pack-card[data-pack="${CH}/g2"]`).innerText()), "group 2 card: ⭐ 5/10");
    ok(/⭐ 0\/10/.test(await page.locator(`.pack-card[data-pack="${CH}/g1"]`).innerText()), "group 1 card untouched: ⭐ 0/10");

    // browser back from the group choice → catalogue, stars added up on the chapter card
    await page.goBack(); await wait(page, 200);
    await expect(page.locator(".screen.catalog")).toBeVisible();
    ok(/⭐ 5\/20/.test(await page.locator(`.pack-card[data-pack="${CH}"]`).innerText()), "chapter card adds up the groups: ⭐ 5/20");

    // home "Continuer" opens the last group directly; its map ← returns to the group choice
    await page.evaluate(() => App.showHome());
    ok(/Groupe 2/.test(await page.locator("[data-act=continue]").innerText()), "continue button names the group");
    await tap(page, "[data-act=continue]");
    await expect(page.locator(".screen.map")).toBeVisible();
    await page.goBack(); await wait(page, 200);
    await expect(page.locator(".screen.groups")).toBeVisible();
    await ctx.close();
  });
}
