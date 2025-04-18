// page object model  (обєкт моделі сторінки)
import { test, Locator, Page, expect } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";
import { faker } from "@faker-js/faker";

// browser
// context
// page -

export function createRandomUserData() {
  return {
    name: faker.person.firstName().toLowerCase(),
    email: faker.internet.email(),
    pass: faker.internet.password(),
  };
}

test("working with cookies", async ({ page, context }) => {
  const signUpPage = new SignUpPage(page);
  const articleEditorPage = new ArticleEditorPage(page);
  const articlesPage = new ArticlesPage(page);

  const userData = createRandomUserData();

  await signUpPage.goto();
  await signUpPage.registerUser({
    username: userData.name,
    email: userData.email,
    pass: userData.pass,
  });

  await page.waitForResponse("**/api/users");

  const storageState = await context.storageState();

  const storage = storageState.origins.find((value) =>
    value.localStorage.find((value) => value.name === "id_token")
  );

  const token = storage?.localStorage.find(
    (value) => value.name === "id_token"
  );

  setInterval(() => {
    //token = await axios.get(token.value);
  });

  console.log(token?.value);

  // отримати оригінальний токен
  // setTimer 1:55 сек  -> api request refreshToken(оригінальний токен)
  //

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
