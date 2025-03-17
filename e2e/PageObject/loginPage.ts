import { Page } from "playwright";

class LoginPage {
  constructor(private page: Page) {}

  async visit(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.waitForSelector("body", { state: "visible" });
  }
  async logIn(username: string, password: string): Promise<void> {
    await this.page.locator("input[data-test='username']").fill(username);
    await this.page.locator("input[data-test='password']").fill(password);
    await this.page.locator("input[data-test='login-button']").click();
  }
}
export default LoginPage;
