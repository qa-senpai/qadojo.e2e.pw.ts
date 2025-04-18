import { test, expect, Page, Locator } from "@playwright/test";

test("expect testing", async () => {
  // 10 >
  // expect(10).toBeGreaterThan(10);

  // 10 >=
  // expect(10).toBeGreaterThanOrEqual(10);

  // 10 <
  // expect(10).toBeLessThan(10);

  // 10 <=
  // expect(10).toBeLessThanOrEqual(10);

  //false, 0, '', null, undefined or NaN
  expect(0).toBeFalsy();

  expect({ a: 1, b: 2 }).toMatchObject({ b: 3, a: 1 });

  // const response = null;
  // //false, 0, '', null, undefined or NaN
  // expect("").toBeTruthy();
  // expect(response).toBeTruthy();

  // expect(0).toBeTruthy();
});

test("show all tags", async ({ page }) => {
  //
  await page.goto("https://demo.learnwebdriverio.com/", {
    waitUntil: "networkidle",
  });

  const tags = page.locator(".tag-list a");
  const allTags = await tags.all();

  if (allTags.length > 0) {
    for (const tag of allTags) {
      expect(await tag.textContent()).toBeTruthy();
    }
  }

  // створюємо теги

  // повертаємось на сторінку

  //
});
