import { Page } from '@playwright/test'
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';


export class HyundaiCarsPage extends BasePage{

   // private locators = allLocators.HomePage;

    constructor(page: Page) {
        super(page);
    }

    async getHyundaiCarsPageTitle(): Promise<string> {
        return await this.getText(allLocators.NewCarsPage.hyundaiCars);
    }

}