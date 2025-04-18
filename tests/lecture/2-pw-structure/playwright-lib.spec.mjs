import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://coffee-cart.app");
  await page.waitForTimeout(10_000);
  await browser.close();
})();
