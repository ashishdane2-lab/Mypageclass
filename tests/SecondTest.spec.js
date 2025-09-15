const {test, expect } = require('@playwright/test');
test("My second test",async ({page})=>
    {
        const Username = page.locator('#username');
        const Password =page.locator('input#password');
        const Signin = page.locator('input#signInBtn');
        const cardtitle =  page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const mytitle = page.title();
console.log(mytitle);
await Username.fill('rahulshettyacademy');
await Password.fill('leaarning');
await Signin.click();
console.log(await page.locator("[style*='block']").textContent());
await Password.fill("");
await Password.fill('learning');
await Signin.click();
console.log(cardtitle.nth(0).textContent());
const alltest =await cardtitle.allTextContents();
console.log(alltest);
}

);
test("My dropdown value",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const Username = page.locator('#username');
        const Password =page.locator('input#password');
        const Dropdown =page.locator('Select.form-control');
     await Dropdown.selectOption('teach');
});