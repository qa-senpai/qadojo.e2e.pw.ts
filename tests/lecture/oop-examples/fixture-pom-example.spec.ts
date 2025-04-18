// page object model  (обєкт моделі сторінки)
import { Locator, Page, expect, chromium } from "@playwright/test";
import { test } from "./fixture";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";

// DON'T REPEAT YOURSELF

// page, context, browser,
test.beforeEach(async ({ signUpPage, page }) => {
  // await signUpPage.goto();

  await signUpPage.registerUser({
    username: "myus444afsa",
    email: "somasgsadasf4@ami.co",
    pass: "asfaf",
  });

  await page.locator(`//a[@href="/editor"]`).click();
});

test("pom example21251", async ({ articlesPage, page }) => {
  const articleEditorPage = new ArticleEditorPage(page);

  await articleEditorPage.editArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  await articleEditorPage.publishArticle();

  const articleHeader = articlesPage.getArticleLocatorByTitle("random title");

  await expect(articleHeader).toBeVisible();
});
