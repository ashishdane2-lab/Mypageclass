import {test,expect} from '@playwright/test';

test('Navigate to Google and search for flipkart.com', async({page}) => {
    // Navigate to Google
    await page.goto('https://google.com');
    
    // Wait for the page to load and accept cookies if present
    try {
        await page.waitForTimeout(1000);
        // Try to find and click the "Accept all" or "I agree" button if cookies dialog appears
        const acceptButton = page.getByRole('button', { name: /accept|agree|i agree/i }).first();
        if (await acceptButton.isVisible({ timeout: 2000 })) {
            await acceptButton.click();
        }
    } catch (e) {
        // Cookies dialog might not appear, continue
    }
    
    // Find the search box and enter the search query
    await page.locator('textarea[name="q"], input[name="q"]').fill('flipkart.com');
    
    // Press Enter to search
    await page.locator('textarea[name="q"], input[name="q"]').press('Enter');
    
    // Wait for search results to load
    await page.waitForSelector('div#search', { timeout: 10000 });
    
    // Verify that search results contain flipkart
    await expect(page.locator('div#search')).toContainText('flipkart', { ignoreCase: true });
});

