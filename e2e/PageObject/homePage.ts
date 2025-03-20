import { Page, expect } from "playwright/test";

class HomePage {
  constructor(private page: Page) {}

  async logOut(): Promise<void> {
    await this.page.locator("button[id='react-burger-menu-btn']").click();
    await this.page.locator("a[id='logout_sidebar_link']").click();
  }
  async selectProduct(productIndex: number): Promise<void> {
    await this.page
      .locator("div[class='inventory_item_name ']")
      .nth(productIndex)
      .click();
  }
}

export default HomePage;
