import {test, expect} from 'playwright/test'
import HomePage from '../PageObject/homePage'
import LoginPage from '../PageObject/loginPage'
import Utils from '../PageObject/utils'
import ProductPage from '../PageObject/productPage'

test.describe("Test Scenario 2 - ValidProductPage", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;
    let utils: Utils;
    let productPage: ProductPage;

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        utils = new Utils(page);
        productPage = new ProductPage(page);
        await loginPage.visit()
        await loginPage.logIn("standard_user", "secret_sauce")
    })

    test("TS4 - CheckingProductDetails", async ({page}) => {
        await utils.isPageVisible()
        await homePage.selectProduct(0);
        await utils.isPageVisible()
        await productPage.checkIsDetailsVisible()
    })
})
