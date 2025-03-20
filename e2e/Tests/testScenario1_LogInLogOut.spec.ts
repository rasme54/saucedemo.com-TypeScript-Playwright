import { test, expect } from "@playwright/test";
import HomePage from "../PageObject/homePage";
import LoginPage from "../PageObject/loginPage";
import Utils from "../PageObject/utils";

test.describe("Test Scenario 1 - LogInLogOut", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let utils: Utils;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    utils = new Utils(page);
  });

  test("TS1 - LogInLogOut", async () => {
    await loginPage.visit();
    await loginPage.logIn("standard_user", "secret_sauce");
  });

  test("TS2 - IncorrectLogIn", async () => {
    await loginPage.visit();
    await loginPage.logIn("incorrect_user", "secret_sauce");
    await utils.isStringVisible(
      "div[class='error-message-container error']",
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("TS3 - LogOut", async () => {
    await loginPage.visit();
    await loginPage.logIn("standard_user", "secret_sauce");
    await homePage.logOut()
    await utils.isUrlValid("https://www.saucedemo.com/")
  });
});


