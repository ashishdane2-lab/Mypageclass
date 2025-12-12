import { test, expect } from '@playwright/test';

test('Sign in with invalid credentials and verify error message', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    // Verify we're on the correct page
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    
    // Fill in invalid credentials
    await page.locator('#username').fill('invaliduser');
    await page.locator('#password').fill('wrongpassword');
    
    // Click the Sign In button
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Verify the error message appears
    await expect(page.locator('body')).toContainText('Incorrect username/password.');
    
    // Verify we're still on the login page (not redirected)
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
    
    // Additional verification that the error message is visible
    const errorMessage = page.locator('text=Incorrect username/password.');
    await expect(errorMessage).toBeVisible();
    
    // Verify the form fields are still present and can be interacted with
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});
