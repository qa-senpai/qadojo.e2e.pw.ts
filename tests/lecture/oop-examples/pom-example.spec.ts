// page object model  (обєкт моделі сторінки)
import { test, Locator, Page, expect } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";

test("pom example1111", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleEditorPage = new ArticleEditorPage(page);
  const articlesPage = new ArticlesPage(page);

  await signUpPage.goto();
  await signUpPage.registerUser({
    username: "myusername11asf444afsa",
    email: "some1s215afasf4@ami.co",
    pass: "asfaf",
  });

  await page.locator(`//a[@href="/editor"]`).click();

  await articleEditorPage.editArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  await articleEditorPage.publishArticle();

  const articleHeader = articlesPage.getArticleLocatorByTitle("random title");

  await expect(articleHeader).toBeVisible();
});
