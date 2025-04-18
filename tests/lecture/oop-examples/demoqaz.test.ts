// import { test, Page, expect } from "@playwright/test";
// import { pageUrlPracticeForm } from "./demoqa-practice-form-functions";
// import { RegistrationForm } from "./form-function";
// import { checkSubmittedFormRegistration } from "./check-submited-form-registration";

// /*
// №12
// Напишіть тест де ви б переходили на сторінку https://demoqa.com/automation-practice-form

// Вводили обовʼязкові поля і
// ЗАВАНТАЖУВАЛИ ФАЙЛ

// Перевіряєте що назва файлу зʼявилась поряд з кнопкою

// і самбітите форму.
// перевіряєте чи всі данні введені коректно.

// */
// const testData = [
//   {
//     firstName: "Ivan",
//     LastName: "Shevchenko",
//     dayOfBirth: 2,
//     monthOfBirth: "June",
//     yearOfBirth: "1987",
//     email: "ivan.shevchenko@example.com",
//     mobile: 9876543210,
//     currentAddress: "123 Main Street, Kyiv",
//     subjects: "Math",
//     gender: "Male",
//     hobbies: ["Music", "Reading", "Sports"],
//     filePath: "C:/Users/38096/OneDrive/Изображения/coolCat.jpg",
//     state: "Rajasthan",
//     city: "Jaiselmer",
//     nameFile: "coolCat.jpg",
//   },
//   {
//     firstName: "Oleg",
//     LastName: "Koval",
//     dayOfBirth: 2,
//     monthOfBirth: "June",
//     yearOfBirth: "1987",
//     email: "olena.kovalchuk@example.com",
//     mobile: 9123876789,
//     currentAddress: "45 Bohdan Khmelnytsky St, Lviv",
//     subjects: "English",
//     gender: "Female",
//     hobbies: ["Reading", "Music"],
//     filePath: "C:/Users/38096/OneDrive/Изображения/coolCat.jpg",
//     state: "Haryana",
//     city: "Panipat",
//     nameFile: "coolCat.jpg",
//   },
//   {
//     firstName: "Olena",
//     LastName: "Kovalchuk",
//     dayOfBirth: 2,
//     monthOfBirth: "June",
//     yearOfBirth: "1965",
//     email: "olena.kovalchuk@example.com",
//     mobile: 9123456789,
//     currentAddress: "45 Bohdan Khmelnytsky St, Lviv",
//     subjects: "Spain",
//     gender: "Other",
//     hobbies: ["Sports", "Music"],
//     filePath: "C:/Users/38096/OneDrive/Изображения/coolCat.jpg",
//     state: "Uttar Pradesh",
//     city: "Lucknow",
//     nameFile: "coolCat.jpg",
//   },
// ];

// for (const data of testData) {
//   test(`Registration form for students ${data.LastName}`, async ({ page }) => {
//     await pageUrlPracticeForm(page);

//     const form = new RegistrationForm(page);

//     await form.setName(data.firstName);
//     await form.setLastName(data.LastName);
//     await form.setEmail(data.email);
//     await form.setMobile(data.mobile);
//     await form.setCurrentAddress(data.currentAddress);
//     // await form.setDateOfBirth('09 Apr 2001');

//     //await form.setSubject('Some subject');
//     await form.checkGender(data.gender);
//     await form.setHobbies(data.hobbies);
//     await form.uploadFile(data.filePath);
//     await form.setDateOfBirthByClick(
//       data.dayOfBirth,
//       data.monthOfBirth,
//       data.yearOfBirth
//     );
//     await form.setState(data.state);
//     await form.setCity(data.city);
//     await form.submitButton();

//     const checkResult = new checkSubmittedFormRegistration(page);
//     await checkResult.checkGender(data.gender);
//     await checkResult.checkStudentName(data.firstName, data.LastName);
//     await checkResult.checkStudentEmail(data.email);
//     await checkResult.checkHobbies(data.hobbies);
//     await checkResult.checkDateOfBirth(
//       data.dayOfBirth,
//       data.monthOfBirth,
//       data.yearOfBirth
//     );
//     await checkResult.checkMobile(data.mobile);
//     await checkResult.checkPicture(data.nameFile);
//     await checkResult.checkAddress(data.currentAddress);
//     await checkResult.checkStateAndCity(data.state, data.city);

//     await page
//       .locator(`//*[@class="modal-footer"]/button[@id="closeLargeModal"]`)
//       .click();
//   });
// }
