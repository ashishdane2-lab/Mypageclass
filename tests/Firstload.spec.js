const {test, expect } = require('@playwright/test');

test("My test",async({page})=>{
await page.goto("https://www.demoblaze.com/");
const mytitle =page.title();
console.log(mytitle);
await expect(page).toHaveTitle('STORE');
await page.locator('#login2').click();
await page.locator('#loginusername').fill('Tested');


}

)


