import { Page, Locator } from "@playwright/test";
import { randomNumberInRange } from "../../helper/helper";

export class HomePage {
    readonly page: Page; 
    readonly logoDTSA: Locator;
    readonly homeMenu: Locator;
    // Menu
    readonly bannerVideoDesktop: Locator;
    readonly scrollDownButton: Locator;
 
    // Slider
    readonly slider: Locator;
    readonly titleItemSlider: Locator;
    readonly learnMoreButtons: Locator;
    readonly nextSlideButton: Locator;
    readonly previousSlideButton: Locator;

    // What we do (WWD)
    readonly whatWeDoTabs: Locator;
    readonly activeTab: Locator;
    readonly whatWeDoItems: Locator;
    readonly digitalItems: Locator;
    readonly engineeringItems: Locator;
    readonly procurementItems: Locator;
    readonly learnMoreWWD: Locator;

    // What's On
    readonly whatOnTitle: Locator;
    readonly upButton: Locator;
    readonly downButton: Locator;
    readonly itemsWhatOn: Locator;
    readonly activeItemWhatOn: Locator;
    readonly gotoWhatWeDo: Locator;
    readonly gotoConnectWithUs: Locator;
    readonly learnMoreWhatOn: Locator;

    // Connect With Us
    readonly connectWithUsTitle: Locator;
    readonly socialMediaItems: Locator;

    // Footer
    readonly whatWeAreFT: Locator;
    readonly aboutUsFT: Locator;
    readonly DTSABoardFT: Locator;
    readonly DTSAManagementFT: Locator;
    readonly awardsFT: Locator;
    readonly withCommunityFT: Locator;

    readonly whatWeDoFT: Locator;
    readonly digitalFT: Locator;
    readonly engineeringFT: Locator;
    readonly procurementFT: Locator;
    readonly DTSAMediumFT: Locator;

    readonly joinUsFT: Locator;
    readonly studentFT: Locator;
    readonly internshipsFT: Locator;
    readonly scholarshipsFT: Locator;
    readonly youngDefenceScientistsFT: Locator;
    readonly technologyUndergraduateFT: Locator;
    readonly brainHackFT: Locator;
    readonly DTSACareersFT: Locator;
    readonly existingApplicantFT: Locator;

    readonly collaborateWithUsFT: Locator;
    readonly doingBusinessFT: Locator;
    readonly overviewOfDefenceFT: Locator;
    readonly overviewOfFacilitiesFT: Locator;
    readonly partneringTechIndustryFT: Locator;
    readonly introduceYourCompanyFT: Locator;

    readonly whatOnFT: Locator;
    readonly spotlightFT: Locator;
    readonly newsReleaseFT: Locator;
    readonly speechesFT: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoDTSA = page.locator('css=img[aria-label="DSTA-logo"]');
        this.homeMenu = page.locator('css=a[href="/home"]');

        this.bannerVideoDesktop = page.locator('css=#video-desktop');
        this.scrollDownButton = page.locator('css=a[href="#sma-carousel"]');

        this.slider = page.locator('css=section#sma-carousel div.slick-dotted');
        this.titleItemSlider = page.locator('css=#sma-carousel .slick-active .sma__title');
        this.learnMoreButtons = page.locator('css=section#sma-carousel span.buttonArrow__text');
        this.nextSlideButton = page.locator('css=.button-arrow-rectangle--right');
        this.previousSlideButton = page.locator('css=.button-arrow-rectangle--left');

        this.whatWeDoTabs = page.locator('css=a.tabs-v2__item');
        this.activeTab = page.locator('css=a.tabs-v2__item--active span');
        this.whatWeDoItems = page.locator('css=.listing-card');
        this.digitalItems = page.locator('css=a.listing-card__img[style*="digital"]');
        this.engineeringItems = page.locator('css=a.listing-card__img[style*="engineer"]');
        this.procurementItems = page.locator('css=a.listing-card__img[style*="procurement"]');
        this.learnMoreWWD = page.locator('css=a[href*="what-we-do?category"] .buttonArrow__text');

        this.whatOnTitle = page.locator('css=#whats-on div.bigTitle')
        this.upButton = page.locator('css=#whats-on a.carousel-prev');
        this.downButton = page.locator('css=#whats-on a.carousel-next');
        this.itemsWhatOn = page.locator('css=#DivCarousel');
        this.activeItemWhatOn = page.locator('css=div.slick-current.slick-center p');
        this.learnMoreWhatOn = page.locator('css=div.slick-current.slick-center a');
        this.gotoWhatWeDo = page.locator('css=#whats-on a[href="#what-we-do"]');
        this.gotoConnectWithUs = page.locator('css=#whats-on a[href="#connect-with-us"]');

        this.connectWithUsTitle = page.locator('css=#connect-with-us .bigTitle');
        this.socialMediaItems = page.locator('css=#HypWhatsOn');

        this.whatWeAreFT = page.locator('css=');
        this.aboutUsFT = page.locator('css=');
        this.DTSABoardFT = page.locator('css=');
        this.DTSAManagementFT = page.locator('css=');
        this.awardsFT = page.locator('css=');
        this.withCommunityFT = page.locator('css=');

        this.whatWeDoFT = page.locator('css=');
        this.digitalFT = page.locator('css=');
        this.engineeringFT = page.locator('css=');
        this.procurementFT = page.locator('css='); 
        this.DTSAMediumFT = page.locator('css=');

        this.joinUsFT = page.locator('css=');
        this.studentFT = page.locator('css=');
        this.internshipsFT = page.locator('css=');
        this.scholarshipsFT = page.locator('css=');
        this.youngDefenceScientistsFT = page.locator('css=');
        this.technologyUndergraduateFT = page.locator('css=');
        this.brainHackFT = page.locator('css=');
        this.DTSACareersFT = page.locator('css=');
        this.existingApplicantFT = page.locator('css=');

        this.collaborateWithUsFT = page.locator('css=');
        this.doingBusinessFT = page.locator('css=');
        this.overviewOfDefenceFT = page.locator('css=');
        this.overviewOfFacilitiesFT = page.locator('css=');
        this.partneringTechIndustryFT = page.locator('css=');
        this.introduceYourCompanyFT = page.locator('css=');

        this.whatOnFT = page.locator('css=');
        this.spotlightFT = page.locator('css=');
        this.newsReleaseFT = page.locator('css=');
        this.speechesFT = page.locator('css=');
    }

    async getPageTitle(): Promise<string>{
        return this.page.title()
    }

    async goto() {
        await this.page.goto('/', { timeout: 60000 });
    }

    async clickOnScrollDownButton() {
        await this.scrollDownButton.click();
    }

    // Slider
    async getItemTitleSlider():Promise<string> {
        return this.titleItemSlider.innerText();
    }

    async clickOnNextSliderButton() {
        await this.nextSlideButton.click();
    }

    async clickOnPreviousSliderButton() {
        await this.previousSlideButton.click();
    }
    
    async getWhatWeDoActiveTab():Promise<string>{
        return this.activeTab.innerText();
    }

    async clickOnAWhatWeDoTab(tabName: string){
        let tabIndex = 2;
        if(tabName == 'Digital')
            tabIndex = 0;
        else if(tabName == 'Engineering')
            tabIndex = 1;
        await this.whatWeDoTabs.nth(tabIndex).click();
    }

    async clickOnSeeMoreButtons(tabName: string){
        let tabIndex = 2;
        if(tabName == 'Digital')
            tabIndex = 0;
        else if(tabName == 'Engineering')
            tabIndex = 1;
        await this.learnMoreWWD.nth(tabIndex).click();
    }

    async clickLearnMoreButtonWhatWeDo(index: number){
        await this.whatWeDoItems.nth(index).hover();
        await this.learnMoreWWD.nth(index).click();
    }

    async clickOnDownButtonWhatOn(){
        await this.downButton.click();
    }

    async clickOnUponWhatOn(){
        await this.upButton.click();
    }

    async getTitleOfWhatOnActiveItem():Promise<string>{
        return this.activeItemWhatOn.innerText();
    }

    async clickOnLearnMoreButtonWhatOn(){
        await this.learnMoreWhatOn.click();
    }

    async clickOnWhatWeDoArrow(){
        await this.gotoWhatWeDo.click();
    }

    async clickOnConnectWithUsArrow(){
        await this.gotoConnectWithUs.click();
    }

    async clickOnRandomSocialMedia(): Promise<Page>{
        const numberOfSocialMedia: number = await this.socialMediaItems.count();
        const randomIndex: number = randomNumberInRange(0, numberOfSocialMedia);
        const [newTab] = await Promise.all(
            [
                this.page.waitForEvent('popup'),
                await this.socialMediaItems.nth(randomIndex).click()
            ]
        )
        return newTab;
    }   
}