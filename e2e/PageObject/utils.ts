import { Page, expect } from "playwright/test";

class Utils {
  constructor(private page: Page) {}

  async isStringVisible(selector: string, string: string): Promise<void> {
    const locator = this.page.locator(selector);
    await expect(locator).toContainText(string);
  }
  async isUrlValid(expectedUrl: string): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).toBe(expectedUrl);
  }
}
export default Utils;
