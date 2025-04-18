import { expect, Page, test } from "@playwright/test";

test("order all existing coffees", async ({ page }) => {
  await page.goto(`https://coffee-cart.app/`);
  const count = await page.locator(".cup-body").count();

  for (let i = 0; i < count; i++) {
    await page.locator(".cup-body").nth(i).click();
  }
});

async function registerUser(
  page: Page,
  username: string,
  randomNumber: number
) {
  await page.locator('//a[@href="/register"]').click();
  await page.locator('//input[@placeholder="Username"]').fill(username);
  await page
    .locator('//input[@placeholder="Email"]')
    .fill(`${randomNumber}coach@gm.com`);
  await page.locator('//input[@placeholder="Password"]').fill("12345");
  await page.locator(`//button[contains(text(), 'Sign up')]`).click();
}

async function createArticle(page: Page, articleCount: number) {
  for (let i = 0; i < articleCount; i++) {
    await page
      .getByRole("textbox", { name: "Article Title" })
      .fill(`Test article ${i}`);
    await page
      .getByRole("textbox", { name: "What's this article about?" })
      .fill("Test description");
    await page.getByRole("button", { name: "Publish Article" }).click();
  }
}

test("WL-1 user registration, should be successful", async ({ page }) => {
  const randomNumber = Math.floor(Math.random() * 9999);
  const username = `coach${randomNumber}`; // Coach1214

  await page.goto("https://demo.learnwebdriverio.com/", {
    timeout: 60_000,
  });

  await registerUser(page, username, randomNumber);

  await expect(
    page.locator(`//a[contains(text(), '${username}')]`)
  ).toBeVisible();

  await page.goto("https://demo.learnwebdriverio.com/editor");

  for (let i = 0; i < 10; i++) {
    await page
      .getByRole("textbox", { name: "Article Title" })
      .fill(`Test article ${i}`);
    await page
      .getByRole("textbox", { name: "What's this article about?" })
      .fill("Test description");
    await page.getByRole("button", { name: "Publish Article" }).click();
  }
});

// test("WL-1 user registration, should be successful", async ({ page }) => {
//   const randomNumber = Math.floor(Math.random() * 9999);
//   const username = `coach${randomNumber}`; // Coach1214

//   async function registerUser() {
//     await page.locator('//a[@href="/register"]').click();
//     await page.locator('//input[@placeholder="Username"]').fill(username);
//     await page
//       .locator('//input[@placeholder="Email"]')
//       .fill(`${randomNumber}coach@gm.com`);
//     await page.locator('//input[@placeholder="Password"]').fill("12345");
//     await page.locator(`//button[contains(text(), 'Sign up')]`).click();
//   }

//   await page.goto("https://demo.learnwebdriverio.com/", {
//     timeout: 60_000,
//   });

//   await registerUser();

//   await expect(
//     page.locator(`//a[contains(text(), '${username}')]`)
//   ).toBeVisible();

//   await page.goto("https://demo.learnwebdriverio.com/editor");

//   await createArticle(page, 10);
// });

test("WL-1 user registration, should be successful12451", async ({ page }) => {
  const randomNumber = Math.floor(Math.random() * 9999);
  const username = `coach${randomNumber}`; // Coach1214

  page.locator('//a[@href="/register"]');
  page.locator('//input[@placeholder="Username"]');
  page.locator('//input[@placeholder="Email"]');
  page.locator('//input[@placeholder="Password"]');
  page.locator(`//button[contains(text(), 'Sign up')]`);
});
