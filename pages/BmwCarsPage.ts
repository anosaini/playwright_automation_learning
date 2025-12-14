import { Page } from '@playwright/test'
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';


export class BmwCarsPage extends BasePage{

   // private locators = allLocators.HomePage;

    constructor(page: Page) {
        super(page);
    }

    async getBmwCarsPageTitle(): Promise<string> {
        return await this.getText(allLocators.CarBase.carTitle);
    }

}
