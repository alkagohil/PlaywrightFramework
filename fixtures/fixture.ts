import { LoginPage } from "../pages/LoginPage"
import { test as base } from "@playwright/test"
import { registerHooks } from "../utils/Hooks"

type Myfixtures={
    loginPage:LoginPage
}
export const test = base.extend<Myfixtures>({
      loginPage: async ({ page }, use) => {
      // Initialize LoginPage object
      const loginPage = new LoginPage(page);
      // Provide LoginPage object to the test
      await use(loginPage);
    }
})
// Register hooks on the extended test object
registerHooks(test);
export  { expect } from '@playwright/test';