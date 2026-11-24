
import { expect, Page, TestInfo } from '@playwright/test';

export function registerHooks(test: any) {

    test.beforeEach(async ({ page }: { page: Page }) => {

        console.log('Before Each: Launch application');

        await page.goto('/');

    });

    test.afterEach(async ({ page }: { page: Page }, testInfo: TestInfo) => {

        console.log('After Each: Test completed');

        if (testInfo.status !== 'passed') {

            await page.screenshot({
                path: testInfo.outputPath('failure.png')
            });

        }

    });

}
