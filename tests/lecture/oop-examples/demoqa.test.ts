import { test, expect, Page } from "@playwright/test";

const testFormData = [
  {
    id: "1",
    fullName: "Test1",
    email: "test@gmail.com",
    currentAddress: "Kyiv",
    permanentAddress: "Kherson",
  },
  {
    id: "2",
    fullName: "Test2",
    email: "test2@gmail.com",
    currentAddress: "2Kyiv",
    permanentAddress: "2Kherson",
  },
];

const gotoTextBoxPage = async (page: Page) => {
  await page.goto("https://demoqa.com/text-box");
};

//#region "Fill texbox page "
async function fillFullName(page: Page, fullName: string) {
  await page.locator("#userName").fill(fullName);
}

async function fillEmail(page: Page, email: string) {
  await page.locator("#userEmail").fill(email);
}

async function fillCurrentAddress(page: Page, currentAddress: string) {
  await page.locator("#currentAddress").fill(currentAddress);
}

async function fillPermanentAddress(page: Page, permanentAddress: string) {
  await page.locator("#permanentAddress").fill(permanentAddress);
}

const submit = async (page: Page) => {
  await page.locator("#submit").click();
};

async function fillForm(
  page: Page,
  fullName: string,
  email: string,
  currentAddress: string,
  permanentAddress: string
) {
  await fillFullName(page, fullName);
  await fillEmail(page, email);
  await fillCurrentAddress(page, currentAddress);
  await fillPermanentAddress(page, permanentAddress);
  await submit(page);
}
//#endregion "Fill texbox page"

const resultFullName = async (page: Page) => {
  const value = await page.locator("p#name").textContent();
  return value?.split(":")[1].trim();
};
const resultEmail = async (page: Page) => {
  const value = await page.locator("p#email").textContent();
  return value?.split(":")[1].trim();
};
const resultCurrentAddress = async (page: Page) => {
  const value = await page.locator("p#currentAddress").textContent();
  return value?.split(":")[1].trim();
};
const resultPermanentAddress = async (page: Page) => {
  const value = await page.locator("p#permanentAddress").textContent();
  return value?.split(":")[1].trim();
};

for (const data of testFormData) {
  test(`${data.id} Validate results`, async ({ page }) => {
    await gotoTextBoxPage(page);

    await fillForm(
      page,
      data.fullName,
      data.email,
      data.currentAddress,
      data.permanentAddress
    );

    const resultData = {
      id: `${data.id}`,
      fullName: await resultFullName(page),
      email: await resultEmail(page),
      currentAddress: await resultCurrentAddress(page),
      permanentAddress: await resultPermanentAddress(page),
    };

    const result = {
      email: data.email,
      currentAddress: data.currentAddress,
      permanentAddress: data.permanentAddress,
    };

    for (const key in result) {
      // key = email  'p#email'
      // value = result[email]

      // key = currentAddress 'p#currentAddress'
      // value = result[currentAddress]

      // key = permanentAddress 'p#permanentAddress'
      // value = result[permanentAddress]

      const loc = page.locator(`p#${key}`);
      await expect(loc).toContainText(result[key]);
    }
  });
}
