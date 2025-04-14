import test, { expect } from "@playwright/test";
import { TestSuiteSetup } from "../hooks/TestSuiteSetup.hooks";
import { HomePage } from "../page/HomePage.page";

test.describe("Sanity Testing - Home Page", () => {
    let testSuiteSetup: TestSuiteSetup;
    let homePage: HomePage;

    test.beforeAll(async ({ }, testInfo) => {   
        testSuiteSetup = new TestSuiteSetup();
        const projectName = testInfo.project.name; 
        await testSuiteSetup.beforeAll(projectName);
        homePage = new HomePage(testSuiteSetup.getPage());
    })

    test.beforeEach(async () => {
        await homePage.goto();
    })

    test("Verify that the DSTA logo should be displayed", async () => {
            await expect(homePage.logoDTSA).toBeVisible();
    })

    test("Verify that the Banner Video should be  displayed", async () => {
        await expect(homePage.bannerVideoDesktop).toBeVisible();
    })

    test("Verify that website should be scroll down to Slider", async () => {
        await homePage.clickOnScrollDownButton();
        await expect(homePage.slider).toBeInViewport();
    })

    test("Verify that the slider should moves to the next item when user click on next button", async () => {
        await homePage.clickOnScrollDownButton();
        const initialStateTitle = await homePage.getItemTitleSlider();
        await homePage.clickOnNextSliderButton();
        const nextItemTitle = await homePage.getItemTitleSlider();
        expect(initialStateTitle).not.toContain(nextItemTitle);
    })

    test("Verify that the slider should moves to the pervious item when user click on pervious button", async () => {
        await homePage.clickOnScrollDownButton();
        const initialStateTitle = await homePage.getItemTitleSlider();
        await homePage.clickOnPreviousSliderButton();
        const nextItemTitle = await homePage.getItemTitleSlider();
        expect(initialStateTitle).not.toContain(nextItemTitle);
    })

    test("Verify that Digital tab should be active as the default tab and display 3 items of digital", async () => {
        const activeTab = await homePage.getWhatWeDoActiveTab();
        expect.soft(activeTab).toEqual("Digital");
        const digitalItemsCount = await homePage.digitalItems.count();
        expect(digitalItemsCount).toEqual(3);
    })

    test("Verify that three Engineering items should be displayed after user clicked on Engineering tab", async () => {
        await homePage.clickOnAWhatWeDoTab("Engineering");
        const engineerItemsCount = await homePage.engineeringItems.count();
        expect(engineerItemsCount).toEqual(3);
    })

    test("Verify that three Procurement & Corporate items should be displayed after user clicked on Procurement & Corporate tab", async () => {
        await homePage.clickOnAWhatWeDoTab("Procurement & Corporate");
        const procurementItemsCount = await homePage.procurementItems.count();
        expect(procurementItemsCount).toEqual(3);
    })

    test("Verify that user can click on [See More Digital] and it should open the [What We Do] page", async () => {
        await homePage.clickOnSeeMoreButtons("Digital");
        const newTabTitle = await testSuiteSetup.getPage().title();
        expect(newTabTitle).toEqual("DSTA | What We Do");
    })
    
    test("Verify that user can click on [See More Engineering] and it should open the [What We Do] page", async () => {
        await homePage.clickOnAWhatWeDoTab("Engineering");
        await homePage.clickOnSeeMoreButtons("Engineering");
        const newTabTitle = await testSuiteSetup.getPage().title();
        expect(newTabTitle).toEqual("DSTA | What We Do");
    })

    test("Verify that user can click on [See More Procurement & Corporate] and it should open the [What We Do] page", async () => {
        await homePage.clickOnAWhatWeDoTab("Procurement & Corporate");
        await homePage.clickOnSeeMoreButtons("Procurement & Corporate");
        const newTabTitle = await testSuiteSetup.getPage().title();
        expect(newTabTitle).toEqual("DSTA | What We Do");
    })

    test("Verify that user can click on the [Learn More] button of What We Do items and go to the details page", async () => {
        const currentURL = testSuiteSetup.getPage().url();
        await homePage.clickLearnMoreButtonWhatWeDo(0);
        const newURL = testSuiteSetup.getPage().url();
        expect(currentURL).not.toEqual(newURL);
    })

    test("Verify that title of What's On Section should be displayed", async () => {
        // await expect(homePage.whatOnTitle).toBeVisible();
       await expect(homePage.itemsWhatOn).toMatchAriaSnapshot(`
         - text: /\\.* \\d+ \\w* \\d+/
         - paragraph: /\\.*/
         - link "Learn More"
         `);
    })  
    
    test("Verify that the user can navigate to the next What's On item by clicking on [Down] button", async () => {
        const currentActiveItems = await homePage.getTitleOfWhatOnActiveItem();
        await homePage.clickOnDownButtonWhatOn();
        const newActiveItems = await homePage.getTitleOfWhatOnActiveItem();
        expect(currentActiveItems).not.toEqual(newActiveItems);
    })

    test("Verify that the user can navigate to the previous What's On item by clicking on [Up] button", async () => {
        const currentActiveItems = await homePage.getTitleOfWhatOnActiveItem();
        await homePage.clickOnUponWhatOn();
        const newActiveItems = await homePage.getTitleOfWhatOnActiveItem();
        expect(currentActiveItems).not.toEqual(newActiveItems);
    })

    test("Verify that user can navigate to details of What's On items by clicking on [Learn More] arrow", async () => {
        const currentURL = testSuiteSetup.getPage().url();
        await homePage.clickOnLearnMoreButtonWhatOn();
        const newURL = testSuiteSetup.getPage().url();
        expect(currentURL).not.toEqual(newURL);
    })
    
    test("Verify that the user can navigate to What We Do section by clicking on [What We Do] arrow", async () => {
        await homePage.clickOnWhatWeDoArrow();
        await expect(homePage.whatWeDoTabs.first()).toBeInViewport();
    })

    test("Verify that the user can navigate to Connect With Us section by clicking on [Connect With Us] arrow", async () => {
        await homePage.clickOnConnectWithUsArrow();
        await expect(homePage.connectWithUsTitle).toBeInViewport();
    })

    test.only("Verify that the user can click on a social media feed in [Connect With Us] section", async () => {
        const homePageTitle = await homePage.getPageTitle();
        const newTab = await homePage.clickOnRandomSocialMedia();
        const socialTitle = await newTab.title();
        console.log(homePageTitle,'===',socialTitle);
        expect(homePageTitle).not.toEqual(socialTitle);
    })
})