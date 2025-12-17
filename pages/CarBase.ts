import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import alllocators from "../locators/locators.json";


export class CarBase extends BasePage {
    private locators = alllocators.CarBase;
    constructor(page: Page) {
        super(page);
    }

    async getCarTitle(): Promise<string> {
        return await this.getText(this.locators.carTitle);
    }

    async getCarNames() {
        return this.page.locator(this.locators.CarName);
    }

    async getCarPrices() {
        return this.page.locator(this.locators.carPrice);
    }  
    
    async handleConsentPopup() {
        this.page.addLocatorHandler(
            this.page.getByRole('button', { name: 'Consent', exact: true }),
            async (acceptButton) => {
                await acceptButton.click();
            }
        );
    }
    
    async getCarNameandPrices(): Promise<{ name: string; price: string }[]> {
        const carNames =  this.page.locator(this.locators.CarName);
        const carPrices = this.page.locator(this.locators.carPrice);
        const carCount = await carPrices.count();
        console.log(`Total Cars Found: ${carCount}`);

        let carDetails: { name: string; price: string }[] = [];

        for (let i = 0; i < carCount; i++) {
            const carName = await carNames.nth(i).innerText();
            const carPrice = await carPrices.nth(i).innerText();
            carDetails.push({name: carName, price: carPrice});
            console.log(`${carName},${carPrice}`);
        }
        return carDetails;
    }
}