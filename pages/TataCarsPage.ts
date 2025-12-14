import { Page } from '@playwright/test'
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';


export class TataCarsPage extends BasePage{

   // private locators = allLocators.HomePage;

    constructor(page: Page) {
        super(page);
    }

    async getTataCarsPageTitle(): Promise<string> {
        return await this.getText(allLocators.CarBase.carTitle);
    }

}