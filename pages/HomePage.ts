import { Page } from '@playwright/test'
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';


export class HomePage extends BasePage{

    private locators = allLocators.HomePage;

    constructor(page: Page) {
        super(page);
    }

  //  private newCarMenu = () => this.page.locator('//*[@id="root"]/div[1]/header/div/nav/ul/li[1]/div');
  //  private findNewCarsMenu = () => this.page.locator('text=Find New Cars');
    
    async navigateToHomePage() {
        await this.navigateTo('/');
    }

    async findNewCars() {
        await this.hover(this.locators.newCarsMenu);
        await this.click(this.locators.findNewCars);
    }

}