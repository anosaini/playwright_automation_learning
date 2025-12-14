import { Page } from "@playwright/test";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async click(locator: string) {
        await this.page.click(locator);
    }

    async hover(locator: string) {
        await this.page.hover(locator);
    }

    async typeText(locator: string, text: string) {
        await this.page.fill(locator, text);
    }

    async getText(locator: string): Promise<string> {
        return await this.page.locator(locator).innerText();
    }

    async waitFotTmeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }


}