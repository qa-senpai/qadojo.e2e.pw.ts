import { test, expect, chromium } from "@playwright/test";

test("test111", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("safs");
});

// fixture (фікстури / фікщер)

test("test1121", async ({ page }) => {
  // browser -> context -> page
  await page.goto("");
  await page.locator("//div[@class = 'abra']").click();
});
