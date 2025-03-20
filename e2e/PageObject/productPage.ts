import { Page, expect } from "playwright/test";

class ProductPage {
  constructor(private page: Page) {}

  async checkIsDetailsVisible(): Promise<void> {
    const productName = this.page.locator(
      "div[data-test='inventory-item-name']",
    );
    const description = this.page.locator(
      "div[data-test='inventory-item-desc']",
    );
    const productPrice = this.page.locator(
      "div[data-test='inventory-item-price']",
    );

    const detailArray = [productName, description, productPrice];
    for (const element of detailArray) {
      await expect(element).toBeVisible();
    }
  }
}

export default ProductPage;
