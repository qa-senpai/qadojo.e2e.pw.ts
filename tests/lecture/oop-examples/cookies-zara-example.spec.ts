// page object model  (обєкт моделі сторінки)
import { test, Locator, Page, expect } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";

// browser
// context
// page -

test("working with cookies - zara", async ({ page, context }) => {
  let cookies = await context.cookies();

  await page.goto("https://zara.com");

  cookies = await context.cookies();

  console.log(cookies);
});
