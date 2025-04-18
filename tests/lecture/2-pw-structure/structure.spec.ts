import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");

  await expect(
    page.getByRole("button", { name: "Thanks for your purchase." })
  ).toContainText("Thanks for your purchase.");
});
