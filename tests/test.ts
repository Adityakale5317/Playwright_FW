import test from "../base/utils/fixtures"

test  ("test", async ({page, LoginPage, base}) => {
    
    await page.goto("https://letcode.in/signin");
    await page.LoginPage.enterUsername("aditya@test.com");
    await page.LoginPage.enterPassword("Sai#2023");
});