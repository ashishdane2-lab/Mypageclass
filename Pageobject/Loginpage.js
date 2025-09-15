
export class Loginpage {
    constructor(page) {
        this.page= page;
        this.UsernameTest=page.locator('#username');
        this.PasswordTest=page.locator('input#password');
                this.SignInButton=page.locator('input#signInBtn');

    }
    async gotologin()
    {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    }
   
async validlogin(Username,Password)

{
    await this.UsernameTest.fill(Username);
   await this.PasswordTest.fill(Password);
   await this.SignInButton.click();

}
}

