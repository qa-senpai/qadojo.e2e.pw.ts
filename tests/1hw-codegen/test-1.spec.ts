import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();

  const textbox = page.getByRole("textbox", { name: "Name" });
  // await page.getByRole("textbox", { name: "Name" }).fill("testname");
  // await page.getByRole("textbox", { name: "Name" }).press("Tab");
  // await page.getByRole("textbox", { name: "Email" }).fill("test@gm.com");

  // await expect(page.getByRole("textbox", { name: "Email" })).toHaveValue(
  //   "test@gm.com"
  // );

  await page.getByRole("button", { name: "Submit" }).click();

  const validationMessage = await textbox.evaluate((element) => {
    const input = element as HTMLInputElement;
    return input.validationMessage;
  });

  await expect(
    page.getByRole("button", { name: "Thanks for your purchase." })
  ).toContainText("Thanks for your purchase.");
});

test("thankfulness", async ({ page }) => {
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("Taya");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("test@gmail.com");
  await page.getByLabel("Promotion message").click();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator("#app")).toContainText(
    "Thanks for your purchase. Please check your email for payment."
  );
});
