// import { test, expect, Page } from "@playwright/test";

// const URL = "https://demo.learnwebdriverio.com/register";
// const articleTitleStablePart = "Some Article and ";

// function inputLocatorByPlaceholder(page: Page, placeholder: string) {
//   const locator = page.locator(`//*[@placeholder="${placeholder}"]`);

//   return locator;
// }

// async function clickSignUp(page: Page): Promise<string> {
//   await page.locator('//button[contains(text(),"Sign up")]').click();
// }

// async function clickOnPublishArticle(page: Page) {
//   await page.locator('//button[@data-qa-id="editor-publish"]').click();

//   const text = await page
//     .locator('//button[@data-qa-id="editor-publish"]')
//     .textContent();
//   return text;
// }

// const articlesPage = {
//   clickOnPublishArticle: async (page: Page) =>
//     await page.locator('//button[@data-qa-id="editor-publish"]').click(),
//   clickSignUpsync: async (page: Page) =>
//     await page.locator('//button[contains(text(),"Sign up")]').click(),
// };

// const signUpPage = {
//   userName: `user${Date.now()}`,
//   email: `user${Date.now()}@gmail.com`,
//   password: `Password${Date.now()}`,
//   signUpUser: async function (page: Page) {
//     await inputLocatorByPlaceholder(page, "Username").fill(this.userName);
//     await inputLocatorByPlaceholder(page, "Email").fill(this.email);
//     await inputLocatorByPlaceholder(page, "Password").fill(this.password);
//     await clickSignUp(page);
//   },
// };

// async function signUpUser(page: Page) {
//   const randomUsername = `user${Date.now()}`;
//   const randomEmail = `user${Date.now()}@gmail.com`;
//   const randomPassword = `Password${Date.now()}`;

//   await inputLocatorByPlaceholder(page, "Username").fill(randomUsername);
//   await inputLocatorByPlaceholder(page, "Email").fill(randomEmail);
//   await inputLocatorByPlaceholder(page, "Password").fill(randomPassword);
//   await clickSignUp(page);
// }

// async function clickOnNewArticleLink(page: Page) {
//   return page.locator('//a[@href="/editor"]').click();
// }

// async function createArticle(page: Page, title: string) {
//   await clickOnNewArticleLink(page);
//   await inputLocatorByPlaceholder(page, "Article Title").fill(title);
//   await inputLocatorByPlaceholder(page, "What's this article about?").fill(
//     "This Article is about"
//   );
//   await inputLocatorByPlaceholder(
//     page,
//     "Write your article (in markdown)"
//   ).fill("You can read in this Article latest news");
//   await inputLocatorByPlaceholder(page, "Enter tags").fill("tag");

//   await clickOnPublishArticle(page);

//   await expect(
//     page.locator(`//h1[contains(text(), "${title}")]`)
//   ).toBeVisible();
// }

// async function createArticleWithData(
//   page: Page,
//   articleData: {
//     title: string;
//     description: string;
//     tags: string;
//     about: string;
//   }
// ) {
//   await clickOnNewArticleLink(page);
//   await inputLocatorByPlaceholder(page, "Article Title").fill(
//     articleData.title
//   );
//   await inputLocatorByPlaceholder(page, "What's this article about?").fill(
//     articleData.description
//   );
//   await inputLocatorByPlaceholder(
//     page,
//     "Write your article (in markdown)"
//   ).fill("You can read in this Article latest news");
//   await inputLocatorByPlaceholder(page, "Enter tags").fill(articleData.tags);

//   await clickOnPublishArticle(page);

//   await expect(
//     page.locator(`//h1[contains(text(), "${articleData.title}")]`)
//   ).toBeVisible();
// }

// // string[]
// // Array<string>

// async function createFewArticles(page: Page, titles: string[]) {
//   for (let i = 0; i < titles.length; i++) {
//     await createArticle(page, titles[i]);
//   }
// }

// function getRandomTitles(count: number) {
//   const articlesTitle: string[] = [];

//   for (let i = 0; i < count; i++) {
//     articlesTitle.push(`art-${Math.random()}`);
//   }

//   return articlesTitle;
// }

// async function verifyArticlesExist(page: Page, titles: string[]) {
//   for (let i = 0; i < titles.length; i++) {
//     await expect(
//       page.locator(`//h1[contains(text(), "${titles[i]}")]`)
//     ).toBeVisible();
//   }
// }

// const testData = [
//   {
//     id: "XYZ-1",
//     articleData: {
//       title: "test title",
//       tags: "test test#2",
//       description: "test description",
//       about: "test description",
//     },
//   },
//   {
//     id: "XYZ-2",
//     articleData: {
//       title: "",
//       tags: "test test#2",
//       description: "",
//       about: "test description",
//     },
//   },
//   {
//     id: "XYZ-3",
//     articleData: {
//       title: "sometitle",
//       tags: "",
//       description: "",
//       about: "",
//     },
//   },
// ];

// for (const data of testData) {
//   test(`Create articles with different data`, ({ page }) => {
//     const articlesTitle: string[] = getRandomTitles(10);

//     // promise 1
//     page.goto(URL).then((response) => {
//       response?.json();
//     });

//     // promise 2

//     signUpUser(page);

//     // promise 3

//     createArticleWithData(page, {
//       title: "",
//       tags: "",
//       description: "",
//       about: "",
//     });

//     // promise 4

//     page.locator('//a[contains(@class, "router-link-active")]').first().click();

//     // promise 5
//     verifyArticlesExist(page, [data.articleData.title]);
//   });
// }

// async function getOrderedCoffeesCount(page: Page) {
//   const count = page.locator("").textContent();
//   return Number(count);
// }

// test("Order all coffees successful flow", async ({ page }) => {
//   await page.goto(URL);

//   const locator = page.locator('//a[contains(@class, "router-link-active")]');

//   const coffeeCount = await getOrderedCoffeesCount(page);

//   expect(coffeeCount).toEqual(9);

//   await expect(
//     page.locator('//a[contains(@class, "router-link-active")]')
//   ).toBeVisible();

//   // expect(Promise).toEqual(9);
// });
