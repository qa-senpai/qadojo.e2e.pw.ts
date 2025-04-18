import { test, expect } from "@playwright/test";

test("exact coffee cup count", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");

  await expect(
    page.locator(".cup-body[data-test]").filter({ visible: true })
  ).toHaveCount(9);
});

// до 10 тестів 200 рядків
