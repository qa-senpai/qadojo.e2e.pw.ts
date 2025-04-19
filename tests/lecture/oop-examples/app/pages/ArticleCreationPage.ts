import { ArticleEditorPage } from "./ArticleEditorPage";

import { Page, Locator } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

export class HeaderComponent {
  protected page: Page;
  protected headerNewArticle: Locator;
  headerHomeLink: Locator;
  headerSettingsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerNewArticle = page.locator(`//a[@href="/editor"]`);
    this.headerHomeLink = page.locator(`//a[@href="/"]`);
    this.headerSettingsLink = page.locator(`//a[@href="/settings"]`);
  }

  clickOnNewArticle() {
    await this.headerNewArticle.click();
  }
}

export class ArticleCreationPage extends BasePage {
  header: HeaderComponent;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
  }

  async goto() {
    await this.goto();
  }

  // getArticleID
  // registerArticleForDeletion
}

const articlePage = new ArticleCreationPage();

await homePage.header.clickOnNewArticle();

class BankAccount {
  // call
  call() {}
}

class PremiumBankAccount extends BankAccount {
  // 200 000

  // call private bank manager
  callPrivateManager() {
    // додаткова логіка
    super.call();
  }
}

class RegularBankAccount extends BankAccount {
  // 100 000

  callManager() {
    super.call();
  }

  // call bank manager
}
