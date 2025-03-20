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
        await homePage.selectProduct(3);
        await productPage.checkIsDetailsVisible()
    })
})

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand