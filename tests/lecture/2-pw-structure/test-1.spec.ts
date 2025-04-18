import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="Cappuccino"]').click();

  await expect(
    page.getByRole("button", { name: "Yes, of course!" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Nah, I'll skip." }).click();
});
