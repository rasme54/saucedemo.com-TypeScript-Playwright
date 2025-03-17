import { test, expect } from "@playwright/test";
import LoginPage from "../PageObject/loginPage";

test.describe("Test Scenario 1 - LogInLogOut", () => {
  
  test("TS1 - LogInLogOut", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.visit();
    await loginPage.logIn("standard_user", "secret_sauce");
  });
});