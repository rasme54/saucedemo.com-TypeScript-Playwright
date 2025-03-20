import { Page, expect } from "playwright/test";

class Utils {
    constructor (private page: Page) {}

    async isStringVisible(selector: string, string: string): Promise<void> {
        const locator = this.page.locator(selector);
        await expect(locator).toContainText(string);
    }
}
export default Utils;