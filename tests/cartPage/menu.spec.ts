import { test, expect, Page } from "@playwright/test";

test("exact coffee cup count", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");

  page.locator('[data-test="Espresso"]').click();

  await expect(
    page.locator(".cup-body[data-test]").filter({ visible: true })
  ).toHaveCount(9);
});

test("add more coffee cup on cart", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");

  await page.locator("").check();

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso"]');

  const url = page.url();

  await page.getByRole("link", { name: "Cart page" }).click();
  await page
    .locator('[aria-label="Add one Espresso"]')
    .filter({ visible: true })
    .click();
});

test("add more coffee cup on cart11", async ({ page, context }) => {
  const response = await page.goto("https://coffee-cart.app/");
});

test("add more coffee cup on cart1111", async ({ page, context }) => {
  // const page1 = await context.newPage();
  // const page2 = await context.newPage();
  // const page3 = await context.newPage();
  // const page4 = await context.newPage();
  // const page5 = await context.newPage();

  const [page1, page2, page3, page4, page5] = await Promise.all([
    context.newPage(),
    context.newPage(),
    context.newPage(),
    context.newPage(),
    context.newPage(),
  ]);

  const resultRace = await Promise.race([
    context.newPage(),
    context.newPage(),
    context.newPage(),
    context.newPage(),
    context.newPage(),
  ]);

  const resultAny = await Promise.any([
    context.newPage(),
    context.newPage(),
    context.newPage(),
    context.newPage(),
    context.newPage(),
  ]);

  await Promise.all([
    page1.goto("https://coffee-cart.app/"),
    page2.goto("https://coffee-cart.app/"),
    page3.goto("https://coffee-cart.app/"),
    page4.goto("https://coffee-cart.app/"),
    page5.goto("https://coffee-cart.app/"),
  ]);

  const result = Promise.resolve(page2.locator("").click());
  const numPromise = new Promise<number>(() => 1);
  const res = Promise.resolve(numPromise);
  const res1 = Promise.reject(numPromise);

  const promise = page1.waitForResponse("https://coffee-cart.app/");
  await page2.locator("").click();
  await promise;

  const [response] = await Promise.allSettled([
    page1.waitForResponse("https://coffee-cart.app/"),
    page2.locator("").click(),
  ]);

  if (response.status === "fulfilled") {
    response.value;
  }

  if (response.status === "rejected") {
    response.reason;
  }

  // await page1.goto("https://coffee-cart.app/");
  // await page2.goto("https://coffee-cart.app/");
  // await page3.goto("https://coffee-cart.app/");
  // await page4.goto("https://coffee-cart.app/");
  // await page5.goto("https://coffee-cart.app/");

  await page.waitForTimeout(10 * 1000);
});

// до 10 тестів 200 рядків
