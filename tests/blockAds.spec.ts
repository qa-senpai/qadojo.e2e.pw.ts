import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(new RegExp("ad"), (route) => {
    route.abort(); // Block the request
  });
});

test("block ads", async ({ page }) => {
  await page.goto(`https://demoqa.com/automation-practice-form`);
});
