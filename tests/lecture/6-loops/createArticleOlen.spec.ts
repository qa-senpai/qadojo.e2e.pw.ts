import { test, expect, Page } from "@playwright/test";

const URL = "https://demo.learnwebdriverio.com/register";
const articleTitleStablePart = "Some Article and ";

function inputLocatorByPlaceholder(page: Page, placeholder: string) {
  return page.locator(`//*[@placeholder="${placeholder}"]`);
}

async function signUpUser(page: Page) {
  const randomUsername = `user${Date.now()}`;
  const randomEmail = `user${Date.now()}@gmail.com`;
  const randomPassword = `Password${Date.now()}`;

  await inputLocatorByPlaceholder(page, "Username").fill(randomUsername);
  await inputLocatorByPlaceholder(page, "Email").fill(randomEmail);
  await inputLocatorByPlaceholder(page, "Password").fill(randomPassword);
  await clickSignUp(page);
}

async function clickOnNewArticleLink(page: Page) {
  return page.locator('//a[@href="/editor"]').click();
}

async function clickOnPublishArticle(page: Page) {
  return page.locator('//button[@data-qa-id="editor-publish"]').click();
}

async function createArticle(page: Page, title: string) {
  await clickOnNewArticleLink(page);
  await inputLocatorByPlaceholder(page, "Article Title").fill(title);
  await inputLocatorByPlaceholder(page, "What's this article about?").fill(
    "This Article is about"
  );
  await inputLocatorByPlaceholder(
    page,
    "Write your article (in markdown)"
  ).fill("You can read in this Article latest news");
  await inputLocatorByPlaceholder(page, "Enter tags").fill("tag");

  await clickOnPublishArticle(page);

  await expect(
    page.locator(`//h1[contains(text(), "${title}")]`)
  ).toBeVisible();
}

async function createFewArticles(page: Page, titles: string[]) {
  for (let i = 0; i < titles.length; i++) {
    await createArticle(page, titles[i]);
  }
}

function getRandomTitles(count: number) {
  const articlesTitle: string[] = [];

  for (let i = 0; i < count; i++) {
    articlesTitle.push(`art-${Math.random()}`);
  }

  return articlesTitle;
}

async function verifyArticlesExist(page: Page, titles: string[]) {
  for (let i = 0; i < titles.length; i++) {
    await expect(
      page.locator(`//h1[contains(text(), "${titles[i]}")]`)
    ).toBeVisible();
  }
}

async function deleteArticles(page: Page, titles: string[]) {
  for (const title of titles) {
    await page.goto("https://demo.learnwebdriverio.com/");
    await page
      .locator(`[data-qa-type="preview-title"]`, { hasText: title })
      .click();

    await page.locator(`[data-qa-id="article-delete"]`).first().click();
  }
}

async function deleteEachArticles(page: Page, titles: string[]) {
  titles.forEach(async function (title, index, array) {
    await page.goto("https://demo.learnwebdriverio.com/");
    await page
      .locator(`[data-qa-type="preview-title"]`, { hasText: title })
      .click();

    await page.locator(`[data-qa-id="article-delete"]`).first().click();
  });
}

test("Create 3 articles successful flow", async function ({ page }) {
  const articlesTitle: string[] = getRandomTitles(3);

  await page.goto(URL);
  await signUpUser(page);
  await createFewArticles(page, articlesTitle);
  await page
    .locator('//a[contains(@class, "router-link-active")]')
    .first()
    .click();

  await verifyArticlesExist(page, articlesTitle);
  await deleteArticles(page, articlesTitle);
});

const someVar = "safa";
async function clickSignUp(page: Page) {
  return page.locator('//button[contains(text(),"Sign up")]').click();
}
