// page object model  (обєкт моделі сторінки)
import { test } from "./storageStateFixture";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";
import { faker } from "@faker-js/faker";
import fs from "fs";

// browser
// context
// page

export function createRandomUserData() {
  return {
    username: faker.person.firstName().toLowerCase(),
    email: faker.internet.email(),
    pass: faker.internet.password(),
  };
}

test("saving storage state", async ({ page, context }) => {
  const signUpPage = new SignUpPage(page);

  const userData = createRandomUserData();

  await signUpPage.goto();
  await signUpPage.registerUser({
    username: userData.username,
    email: userData.email,
    pass: userData.pass,
  });

  await page.waitForResponse("**/api/users");

  const storageState = await context.storageState();

  fs.writeFileSync(
    "tests/lecture/oop-examples/.auth/auth.json",
    JSON.stringify(storageState)
  );
});

// test.use({ storageState: "tests/lecture/oop-examples/.auth/auth.json" });

test("using storage state", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/");
  console.log(111);
});

test.use({ authData: createRandomUserData() });

test("using existing or create new storage state", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/");
  console.log(111);
});
