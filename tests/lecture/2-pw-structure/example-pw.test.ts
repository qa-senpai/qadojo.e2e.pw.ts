import { test, expect } from "@playwright/test";

test("promotion message buttons showed", async ({ page }) => {
  // Arrange
  await page.goto("https://coffee-cart.app/");

  const espresso = page.locator('[data-test="Espresso"]');

  await espresso.click({
    clickCount: 1,
    delay: 500,
  });

  await espresso.fill("", { force: false });
  await espresso.pressSequentially("");

  await page.waitForTimeout(10_000);

  await page.locator('[data-test="Cappuccino"]').click();

  // Act
  await page.locator('[data-test="Cappuccino"]').click();

  // Assert
  await expect(
    page.getByRole("button", { name: "Yes, of course!" })
  ).toBeVisible();

  await expect(
    page.getByRole("button", { name: "Nah, I'll skip." })
  ).toBeVisible();
});
