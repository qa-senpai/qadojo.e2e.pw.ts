import { test as base, ConsoleMessage } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import fs from "fs";

type Fixture = {
  signUpPage: SignUpPage;
  articleEditorPage: ArticleEditorPage;
  articlesPage: ArticlesPage;
  authData: {
    pass?: string;
    email?: string;
    username?: string;
  };
};

export const test = base.extend<Fixture>({
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);

    await use(signUpPage);
  },

  articleEditorPage: async ({ page }, use) => {
    const articleEditorPage = new ArticleEditorPage(page);

    console.log("Я Зараз виконую цю частину коду");

    await use(articleEditorPage);
  },

  articlesPage: async ({ page }, use) => {
    const articlesPage = new ArticlesPage(page);

    await use(articlesPage);
  },

  authData: {},

  // 1
  browser: async ({ browser }, use) => {
    console.log("browser");

    await use(browser);
  },

  // 2
  storageState: async ({ browser, authData }, use) => {
    console.log("storageState");
    const filePath = "tests/lecture/oop-examples/.auth/auth.json";
    const isFileExist = fs.existsSync(filePath);

    if (isFileExist === false) {
      const page = await browser.newPage();

      await page.goto("https://demo.learnwebdriverio.com/register");

      const signUpPage = new SignUpPage(page);

      await signUpPage.registerUser(authData);

      await page.waitForResponse("**/api/users");

      await page.context().storageState({ path: filePath });

      await page.close();
    }

    await use(filePath);
  },

  // 3
  context: async ({ context }, use) => {
    console.log("context");

    await use(context);
  },

  // 4
  page: async ({ page }, use) => {
    console.log("page");

    await use(page);
  },
});
