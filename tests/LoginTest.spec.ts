import { FrameworkConstants } from '../constants/constants';
import { test, expect } from '../fixtures/fixture';
import { LoginPage } from '../pages/LoginPage';
import { ExcelReader } from '../utils/ExcelReader';
const data = ExcelReader.readExcelData(
    FrameworkConstants.EXCEL_FILES.LOGIN,
    FrameworkConstants.SHEET_NAMES.LOGIN
);

console.log('Excel Test Data:');
console.log(data);
test.describe('Data Driven Login Tests', () => {

  
test('Verify Login Functionality', async ({ loginPage }) => {
/*await page.getByText("Log in").click()
await page.getByLabel("Email:").fill("111Test@test.com")
await page.getByLabel("Password:").fill("111Test@test")
await page.getByRole("button",{name:'Log in'}).click()
//if the logout button is present the test is marked as passed otherwise fail
await expect(page.getByLabel("Log out")).toBeVisible();*/

await loginPage.navigateToLoginPage();
await loginPage.login("111Test@test.com", "111Test@test");
await loginPage.verifyLoginSuccess();

})
})