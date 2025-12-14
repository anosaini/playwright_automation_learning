import { Page } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { NewCarsPage } from '../pages/NewCarsPage';
import { BmwCarsPage } from '../pages/BmwCarsPage';
import { HyundaiCarsPage } from '../pages/HyundaiCarsPage';
import { TataCarsPage } from '../pages/TataCarsPage';
import { CarBase } from '../pages/CarBase'; 


export class pageFixtures {

    readonly homePage: HomePage;
    readonly newCarsPage: NewCarsPage;
    readonly bmwCarsPage: BmwCarsPage;
    readonly hyundaiCarsPage: HyundaiCarsPage;
    readonly tataCarsPage: TataCarsPage;
    readonly page: Page;
    readonly carBase: CarBase;

    constructor (page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.newCarsPage = new NewCarsPage(page);
        this.bmwCarsPage = new BmwCarsPage(page);
        this.hyundaiCarsPage = new HyundaiCarsPage(page);
        this.tataCarsPage = new TataCarsPage(page);
        this.carBase = new CarBase(page);
    }

    get basePage(): Page {
        return this.page;
    }

};