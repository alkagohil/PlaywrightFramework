import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.ts';
class LoginPage extends BasePage
{
  private readonly loginLink:Locator;
  private readonly usernameInput:Locator;
  private readonly passwordInput:Locator;
  private readonly signInButton:Locator;
  private readonly logoutButton:Locator;

  constructor(page: Page)
  {
    super(page);
    this.loginLink = page.getByText("Log in");
    this.usernameInput = page.getByLabel("Email:");
    this.passwordInput = page.getByLabel("Password:");
    this.signInButton = page.getByRole("button",{name:'Log in'});   
    this.logoutButton = page.getByText("Log out");

  }
  async navigateToLoginPage()
  {
    await this.navigateTo('/');
    await this.clickElement(this.loginLink);
  }
  async login(username:string,password:string)
{
   
    await this.enterText(this.usernameInput, username);
    await this.enterText(this.passwordInput, password);
    await this.clickElement(this.signInButton);
}

async verifyLoginSuccess()
{
    await expect(this.logoutButton).toBeVisible();
}
}
export {LoginPage};