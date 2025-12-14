import {test as baseTest, expect, Page} from '@playwright/test';
import { pageFixtures } from '../fixtures/page-fixtures';

type Fixtures = {
    pages : pageFixtures;
};

export const test = baseTest.extend<Fixtures>({
    pages: async ({ page }, use) => {
        const pages = new pageFixtures(page);
        await use(pages);
    },
});

export { expect };
