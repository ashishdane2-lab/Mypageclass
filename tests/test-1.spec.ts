import { test, expect } from '@playwright/test';
test.use({
  httpCredentials: {
    username: "yourUsername",
    password: "yourPassword"
  }
});
test('test', async ({ page }) => {
  await page.goto('https://uat.parcmotor.innovatedynamic.com/');
  await page.getByRole('link', { name: 'Signup/login' }).click();
  await page.getByRole('link', { name: 'Sign Up Here' }).click();
  await page.getByRole('button', { name: 'Save & Continue' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Hancy');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('root');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'User Name' }).fill('hancy.root');
  await page.getByRole('textbox', { name: 'User Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('ashish.plainsurf@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Contact Number' }).fill('8531313552');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Pass@123');
  await page.getByText('Confirm Password').click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Pass@123');
  await page.getByRole('checkbox', { name: 'I agree to Terms of Service' }).check();
  await page.getByRole('button', { name: 'Save & Continue' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'upload_file Drag & drop files' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'upload_file Drag & drop files' }).click();
});