import { test, expect } from "@playwright/test";
import LoginPage from "../PageObject/loginPage";
import Utils from "../PageObject/utils";

test.describe("Test Scenario 1 - LogInLogOut", () => {
  
  test("TS1 - LogInLogOut", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.logIn("standard_user", "secret_sauce");
  });

  test.only("TS2 - IncorrectLogIn", async ({page}) => {
    const loginPage = new LoginPage(page);
    const utils = new Utils (page);
    await loginPage.visit();
    await loginPage.logIn("incorrect_user", "secret_sauce");
    await utils.isStringVisible("div[class='error-message-container error']", "Epic sadface: Username and password do not match any user in this service");
  })
});

// Epic sadface: Username and password do not match any user in this service

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter incorrect email address and password
// 7. Click 'login' button
// 8. Verify error 'Your email or password is incorrect!' is visible