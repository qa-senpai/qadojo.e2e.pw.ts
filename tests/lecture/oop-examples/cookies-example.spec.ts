// page object model  (обєкт моделі сторінки)
import { test, Locator, Page, expect } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";

// browser
// context
// page -

test("working with cookies", async ({ page, context }) => {
  const signUpPage = new SignUpPage(page);
  const articleEditorPage = new ArticleEditorPage(page);
  const articlesPage = new ArticlesPage(page);

  await context.addCookies([
    {
      name: "qa-dojo",
      value: "this is my cookies from lecture about cookie",
      url: "https://demo.learnwebdriverio.com",
    },
  ]); // create / edit

  await signUpPage.goto();
  await signUpPage.registerUser({
    username: "myusername11asf444afsa",
    email: "some1s215afasf4@ami.co",
    pass: "asfaf",
  });

  let cookies = await context.cookies(); // get

  const cookie = cookies.find((cookie) => cookie.name === "qa-dojo");
  const notValidcookie = cookies.find((cookie) => cookie.name === "qa-dojo11");

  console.log(cookies);

  await context.clearCookies({ name: "qa-dojo" });

  cookies = await context.cookies(); // get

  console.log(cookies);

  await context.storageState();

  // отримати оригінальний токен
  // setTimer 1:55 сек  -> api request refreshToken(оригінальний токен)

  // CRUD
  // CREATE READ UPDATE DELETE
  // CREATE GET EDIT DELETE
  // POST GET PUT DELETE

  // await page.locator(`//a[@href="/editor"]`).click();

  // await articleEditorPage.editArticle({
  //   title: "random title",
  //   description: "random desc",
  //   body: "random body",
  // });

  // await articleEditorPage.publishArticle();

  // const articleHeader = articlesPage.getArticleLocatorByTitle("random title");

  // await expect(articleHeader).toBeVisible();
});
