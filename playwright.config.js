// Playwright configuration — end-to-end tests of Révision Quest (tests/e2e).
// The app is served by tests/server.js (zero dependency). Port: env PORT (default 4173).
"use strict";
const { defineConfig } = require("@playwright/test");

const PORT = Number(process.env.PORT) || 4173;
const BASE_URL = `http://127.0.0.1:${PORT}/`;
process.env.RQ_BASE_URL = BASE_URL; // read by tests/e2e/helpers.js (workers inherit it)

module.exports = defineConfig({
  testDir: "./tests/e2e",
  outputDir: "./test-results",
  timeout: 240000,              // some specs replay long real user flows
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "off"
  },
  projects: [
    // every spec; most specs open their own 390 px / 1280 px contexts
    { name: "chromium", use: { browserName: "chromium", viewport: { width: 1280, height: 800 } } },
    // layout checks again with a phone-sized viewport
    { name: "mobile-390", testMatch: /layout\.spec\.js/, use: { browserName: "chromium", viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 } }
  ],
  webServer: {
    command: "node tests/server.js",
    url: BASE_URL,
    env: { PORT: String(PORT) },
    reuseExistingServer: !process.env.CI,
    timeout: 30000
  }
});
