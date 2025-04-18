import test, { expect, Page } from "@playwright/test";
import path from "path";

function RegistrationForm(page: Page) {
  this.setFirstName = async (firstName: string) => {
    await page.locator("#firstName").fill(firstName);
  };

  this.setLastName = async (lastName: string) => {
    await page.locator("#lastName").fill(lastName);
  };

  this.uploadFile = async (path: string) => {
    await page.locator("#uploadPicture").setInputFiles(path);
  };
}

export function checkSubmittedFormRegistration(page: Page) {
  this.page = page;

  this.getBaseLocator = (label: string) =>
    page.locator(`//td[text()="${label}"]/following-sibling::td`);

  this.checkStudentName = async (firstName: string, lastName: string) => {
    await expect(this.getBaseLocator("Student Name")).toContainText(
      `${firstName} ${lastName}`
    );
  };

  this.checkGender = async (gender: string) => {
    await expect(
      page.locator('//td[text()="Gender"]/following-sibling::td')
    ).toContainText(`${gender}`);
  };

  this.checkMobile = async (mobile: number) => {
    await expect(
      page.locator('//td[text()="Mobile"]/following-sibling::td')
    ).toContainText(`${mobile}`);
  };

  this.checkPicture = async (fullPath: string) => {
    const fileName = path.basename(fullPath);
    await expect(
      page.locator('//td[text()="Picture"]/following-sibling::td')
    ).toContainText(`${fileName}`);
  };
}

test.beforeEach(async ({ page }) => {
  await page.route(new RegExp("ad"), (route) => {
    route.abort(); // Block the request
  });
});

test("MQA-1215 registration form", async ({ page }) => {
  const data = {
    "First Name": "Pavlo",
    "Last Name": "Safonov",
  };

  const registerForm = new RegistrationForm(page);
  await page.goto("https://demoqa.com/automation-practice-form");

  await registerForm.setFirstName("Pavlo");
  await registerForm.setLastName("Safonov");
  //   await registerForm.uploadFile(`tests/lecture/oop-examples/`);

  await page.locator("#dateOfBirthInput").fill("17 May 2025");
  await page.locator("#dateOfBirthInput").press("Enter");

  await page.locator("#subjectsInput").pressSequentially("Maths");
  await page.keyboard.press("Tab");

  //   for (const key in data) {
  //     const tableLine = page.locator(
  //       `//td[text()="${key}"]/following-sibling::td[text() = '${data[key]}']`
  //     );
  //     expect(tableLine).toBeVisible();
  //   }
});

// formData: {
//   firstName: string;
//   lastName: string;
//   email: string;
//   gender: string;
//   mobileNumber: number;
//   dateOfBirth: string;
//   hobby: string;
//   fileName: string;
//   address: string;
//   state: string;
//   city: string;
// }

//   this.email = () => page.locator("#userEmail");
//   this.genderRadioBtn = (gender: string) =>
//     page.locator(`//label[text()='${gender}']`);
//   this.mobileNumber = () => page.locator("#userNumber");
//   this.dateOfBirthInput = () => page.locator("#dateOfBirthInput");
//   this.hobbiesCheckbox = (label: string) =>
//     page.locator(`//label[text()='${label}']`);
//   this.selectFile = () => page.locator("#uploadPicture");
//   this.currentAddress = () => page.locator("#currentAddress");
//   this.state = () => page.locator("#state");
//   this.city = () => page.locator("#city");
//   this.submitBtn = () => page.locator("#submit");

//   (this.setEmail = async (page: Page) => {
//     await formLocators.email(page).fill(formData.email);
//   }),
//     (this.selectGender = async (page: Page) => {
//       const genderLabel = formLocators.genderRadioBtn(page, formData.gender);
//       await genderLabel.scrollIntoViewIfNeeded();
//       await genderLabel.click();
//     }),
//     (this.setMobile = async (page: Page) => {
//       await formLocators
//         .mobileNumber(page)
//         .fill(formData.mobileNumber.toString());
//     }),
//     (this.setBirthDate = async (page: Page) => {
//       await formLocators.dateOfBirthInput(page).fill(formData.dateOfBirth);
//     }),
//     (this.selectHobbies = async (page: Page) => {
//       await formLocators.hobbiesCheckbox(page, formData.hobby).check();
//     });
//   this.uploadFile = async (page: Page) => {
//     await formLocators
//       .selectFile(page)
//       .setInputFiles(path.join(__dirname, formData.fileName));
//   };
//   (this.setAddress = async (page: Page) => {
//     await formLocators.currentAddress(page).fill(formData.address);
//   }),
//     (this.selectState = async (page: Page, option: string) => {
//       await formLocators.state(page).click();
//       await page.getByText(formData.state, { exact: true }).click();
//     });
//   this.selectCity = async (page: Page, option: string) => {
//     await formLocators.city(page).click();
//     await page.getByText(formData.city, { exact: true }).click();
//   };
