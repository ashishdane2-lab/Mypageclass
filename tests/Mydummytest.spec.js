import {test,expect} from '@playwright/test';

test('my test dummy',async({page})=>
    {
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
        await page.locator('#username').fill('rahulshettyacademy');
        await page.locator('#password').fill('learning');
        await page.getByRole('button',{name:'Sign In'}).click();

    }
);

test('login with invalid credentials', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    
    // Fill in invalid credentials
    await page.locator('#username').fill('invaliduser');
    await page.locator('#password').fill('wrongpassword');
    await page.getByRole('button',{name:'Sign In'}).click();
    
    // Verify error message appears
    await expect(page.locator('#login-form')).toContainText('Incorrect username/password');
    
    // Verify we're still on the login page
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
});