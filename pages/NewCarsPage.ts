import { Page } from '@playwright/test'
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';


export class NewCarsPage extends BasePage{

    private locators = allLocators.NewCarsPage;

    constructor(page: Page) {
        super(page);
    }

    async getNewCarsPageURL() {
        return this.page.url();
    }

    async getPageTitle() {
        return await this.getText(this.locators.newCarsPateTitle);
    }

    async goToTataCars() {
        await this.click(this.locators.tataCars);
    }

    async goToHyundaiCars() {
        await this.click(this.locators.hyundaiCars);
    }

    async goToBmwCars() {
        await this.click(this.locators.bmwCars);
    }

}