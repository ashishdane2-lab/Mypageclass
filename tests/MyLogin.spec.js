import { Loginpage } from '../Pageobject/Loginpage'; 
const {test, expect } = require('@playwright/test');

test('My second test',async ({page})=>
{
       const loginpage =new Loginpage(page);
        await loginpage.gotologin();


        

await loginpage.validlogin('rahulshettyacademy','learning');

}


);