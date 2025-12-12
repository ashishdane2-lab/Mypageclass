import {test,expect} from '@playwright/test';
test('my test dummy',async({page})=>
    {
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
        await page.locator('#username').fill('rahulshettyacademy');
        await page.locator('#password').fill('learning');
        await page.getByRole('button',{name:'Sign In'}).click();
       // Test

    }
);
