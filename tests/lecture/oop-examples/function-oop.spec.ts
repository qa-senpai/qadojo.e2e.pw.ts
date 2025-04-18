import { Page } from "@playwright/test";

export function getLocators(page: Page) {
  this.page = page;
  this.usernameLocator = this.page.locator('[placeholder="Username"]');
  this.passwordLocator = this.page.locator('[placeholder="Password"]');
  this.emailLocator = this.page.locator('[placeholder="Email"]');
  this.signUpButtonLocator = this.page.locator(".btn");
}

export async function setUsername(username: string) {
  await this.usernameLocator.fill(username);
}

export async function setPassword(password: string) {
  await this.passwordLocator.fill(password);
}

export async function setEmail(email: string) {
  await this.emailLocator.fill(email);
}

export async function clickSignUp() {
  await this.signUpButtonLocator.click();
}

export async function registerUser(
  pass: string,
  email: string,
  username: string
) {
  await this.setUsername(username);
  await this.setEmail(email);
  await this.setPassword(pass);
  await this.clickSignUp();
}
