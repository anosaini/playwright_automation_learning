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
    carsPageURL: string;
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
                const bmwTitle = await pages.newCarsPage.getPageTitle();
                expect(bmwTitle).toContain(data.carTitle);
                await expect(pages.page).toHaveURL(data.carsPageURL);
            
            } else if (data.carBrand === 'tata') {
                await pages.newCarsPage.goToTataCars();
                const tataTitle = await pages.newCarsPage.getPageTitle();
                expect(tataTitle).toContain(data.carTitle);
                await expect(pages.page).toHaveURL(data.carsPageURL);
            }

        }
        await pages.basePage.waitForTimeout(5000);


    });


    test('Get Car Name and Prices', async ({ pages }) => {

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
                console.log("data.carsPageURL:",data.carsPageURL);
                const bmwUrl = pages.page.url();
                expect(bmwUrl).toContain(data.carsPageURL);
                console.log("Navigated to BMW Cars Page");
                const cars = await pages.carBase.getCarNameandPrices();
            
            } else if (data.carBrand === 'tata') {
                await pages.newCarsPage.goToTataCars();
                const tataTitle = await pages.tataCarsPage.getTataCarsPageTitle();
                expect(tataTitle).toContain(data.carTitle);
                const tataUrl = pages.page.url();
                expect(tataUrl).toContain(data.carsPageURL);
                console.log("Navigated to TATA Cars Page");
                const cars = await pages.carBase.getCarNameandPrices();
            }


        }
        


    });

        test.only('Verify Bmw car Names and Prices', async ({ pages }) => {

            await pages.homePage.findNewCars();
            const currentURL = await pages.newCarsPage.getNewCarsPageURL();
            expect(currentURL).toContain('/new-cars');
            await pages.newCarsPage.goToBmwCars();
            const bmwTitle = await pages.bmwCarsPage.getBmwCarsPageTitle();
            expect(bmwTitle).toContain(testData[0].carTitle);
            const bmwUrl = pages.page.url();
            expect(bmwUrl).toContain(testData[0].carsPageURL);
            const allBmwcars = await pages.carBase.getCarNameandPrices();
            console.log(`Total Cars Found: ${allBmwcars.length}`);
            type CarData = {
                    carModel: string;
                    carPrice: string;
            }
            const bmwCarData = readCSVData('data/bmwCarsModelPrice.csv') as CarData[];
            for (const car of bmwCarData) {
                console.log(`${car.carModel},${car.carPrice}`);
                const match = allBmwcars.find(c => c.name === car.carModel && c.price === car.carPrice);
                expect(match).toBeDefined
                
            }


    });


});
