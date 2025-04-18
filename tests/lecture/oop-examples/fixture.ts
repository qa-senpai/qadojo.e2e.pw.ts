import { test as base, ConsoleMessage } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";

type Fixture = {
  signUpPage: SignUpPage;
  articleEditorPage: ArticleEditorPage;
  articlesPage: ArticlesPage;
};

export const test = base.extend<Fixture>({
  page: async ({ page }, use) => {
    await page.setViewportSize({ height: 915, width: 412 });

    await page.route(new RegExp("ad"), (route) => {
      route.abort(); // Block the request
    });

    page.on("console", async (msg: ConsoleMessage) => {
      if (msg.type() === "error") {
        throw Error(msg.text());
      }
    });

    const signUpPage = new SignUpPage(page);
    await signUpPage.goto();

    await use(page);
  },

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
});
