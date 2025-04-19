// page object model  (обєкт моделі сторінки)
import { test, Locator, Page, expect } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";
import { ArticleCreationPage } from "./app/pages/ArticleCreationPage";
import { ArticleEditingPage } from "./app/pages/ArticleEditingPage";

test("Create article - it should be created", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleCreationPage = new ArticleCreationPage(page);
  const articlesPage = new ArticlesPage(page);

  await signUpPage.goto();
  await signUpPage.registerUser({
    username: "myusername11asf444afsa",
    email: "some1s215afasf4@ami.co",
    pass: "asfaf",
  });

  await page.locator(`//a[@href="/editor"]`).click();

  await articleCreationPage.createArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  const articleHeader = articlesPage.getArticleLocatorByTitle("random title");

  await expect(articleHeader).toBeVisible();
});

test("Create article - it should be created", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleCreationPage = new ArticleEditorPage(page);

  const articleEditingPage = new ArticleEditingPage(page);

  await articleEditingPage.goto("/asfasf-asfa");

  const articlesPage = new ArticlesPage(page);

  await signUpPage.goto();
  await signUpPage.registerUser({
    username: "myusername11asf444afsa",
    email: "some1s215afasf4@ami.co",
    pass: "asfaf",
  });

  await page.locator(`//a[@href="/editor"]`).click();

  await articleCreationPage.goto();

  await articleCreationPage.editArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  const articleHeader = articlesPage.getArticleLocatorByTitle("random title");

  await expect(articleHeader).toBeVisible();
});
