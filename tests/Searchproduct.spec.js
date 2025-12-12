import { test, expect } from '@playwright/test';

test('Complete shopping flow: Login, Search iPhone X, Add to Cart, and Checkout', async ({ page }) => {
    // Step 1: Navigate to login page and login with valid credentials
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    
    // Login with valid credentials as specified
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Wait for successful login and page load
    await page.waitForLoadState('networkidle');
    
    // Step 2: Navigate to shop page and click Add button for iPhone X
    await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
    await page.waitForLoadState('networkidle');
    
    // Look for iPhone X product and click its Add button
    const iphoneXCard = page.locator('div.card').filter({ hasText: 'iphone X' });
    await expect(iphoneXCard).toBeVisible();
    
    const addButton = iphoneXCard.locator('button:has-text("Add")');
    await expect(addButton).toBeVisible();
    await addButton.click();
    
    // Step 3: Click checkout button
    await page.locator('a:has-text("Checkout")').click();
    
    // Wait for checkout page to load
    await page.waitForLoadState('networkidle');
    
    // Step 4: Verify product name is iPhone X
    await expect(page.locator('body')).toContainText('iphone X');
    
    // Additional verification - check if the product name appears in the cart/checkout area
    const productName = page.locator('text=iphone X').first();
    await expect(productName).toBeVisible();
    
    // Verify we're on the checkout page
    await expect(page).toHaveURL(/.*checkout.*/);
    
    console.log('✅ Test completed successfully: iPhone X found in checkout');
});
