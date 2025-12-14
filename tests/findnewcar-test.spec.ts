import { test, expect } from '../utils/test-base';
import { readCSVData } from '../utils/readCSV';


test.describe('Find New Car Page Tests', () => {

    test.beforeEach(async ({ pages }) => {
        await pages.homePage.navigateToHomePage();
        await pages.carBase.handleConsentPopup();
        
});
    
    type TestData = {
    carBrand: string;
    carTitle: string;
};
    const testData = readCSVData('data/testData.csv') as TestData[];

    test('Parameterized Navigate to Find New Cars page', async ({ pages }) => {
       
        await pages.homePage.findNewCars();
        const currentURL = await pages.newCarsPage.getNewCarsPageURL();
        expect(currentURL).toContain('/new-cars');
        const title = await pages.newCarsPage.getPageTitle();
        expect(title).toContain('New Cars');
        
        for (const data of testData) {
            await pages.homePage.findNewCars();
            if (data.carBrand === 'bmw') {
                await pages.newCarsPage.goToBmwCars();
                //const bmwTitle = await pages.newCarsPage.getPageTitle();
                //expect(bmwTitle).toContain(data.carTitle);
                await expect(pages.page).toHaveURL(/.*bmw-cars.*/);
            
            } else if (data.carBrand === 'tata') {
                await pages.newCarsPage.goToTataCars();
               // const tataTitle = await pages.newCarsPage.getPageTitle();
               // expect(tataTitle).toContain(data.carTitle);
                await expect(pages.page).toHaveURL(/.*tata-cars.*/);
            }

        }
        await pages.basePage.waitForTimeout(5000);


    });


    test.only('Get Car Name and Prices', async ({ pages }) => {

        for (const data of testData) {
            await pages.homePage.findNewCars();
            const currentURL = await pages.newCarsPage.getNewCarsPageURL();
            expect(currentURL).toContain('/new-cars');
            const title = await pages.newCarsPage.getPageTitle();
            
            expect(title).toContain('New Cars');
            if (data.carBrand === 'bmw') {
                await pages.newCarsPage.goToBmwCars();
                const bmwTitle = await pages.bmwCarsPage.getBmwCarsPageTitle();
                expect(bmwTitle).toContain(data.carTitle);
                await expect(pages.page).toHaveURL(/.*bmw-cars.*/);
                console.log("Navigated to BMW Cars Page");
                const cars = await pages.carBase.getCarNameandPrices();
            
            } else if (data.carBrand === 'tata') {
                await pages.newCarsPage.goToTataCars();
                const tataTitle = await pages.tataCarsPage.getTataCarsPageTitle();
                expect(tataTitle).toContain(data.carTitle);
                await expect(pages.page).toHaveURL(/.*tata-cars.*/);
                console.log("Navigated to TATA Cars Page");
                const cars = await pages.carBase.getCarNameandPrices();
            }

           
           //await pages.basePage.waitForTimeout(5000);
           //console.log(cars);

        }
        


    });


});
