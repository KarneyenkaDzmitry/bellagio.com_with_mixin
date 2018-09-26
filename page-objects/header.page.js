'use strict';

const additionalHelper = require('./utils/page.helper');

const mixin = require('./utils/mixin.js');
const hotelComponenet = require('./componenets/hotel.component.js');
const restaurantsComponenet = require('./componenets/restaurants.component.js');
const searchComponenet = require('./componenets/search.component.js');
const guestServiceComponenet = require('./componenets/guest_services.component.js');
const entertainmentComponenet = require('./componenets/entertainment.component.js');

class TopHeader extends mixin(searchComponenet, guestServiceComponenet) {
    constructor() {
        super();
        //this.topHeaderFrame = element(by.css('ul.nav-util,ul.nav-secondary'));
        this.topHeaderReferences = element.all(by.css('ul.nav-util>li[role=menuitem]:not(.nav-language), ul.nav-secondary>li[role=menuitem],ul.nav-util>li[role=search]'));
    }
    async chooseTopHeaderReference(text) {
        text = text.toLowerCase() === 'search' ? '' : text;
        return await additionalHelper.clickOnReferencesOrButtons(await this.topHeaderReferences, text);
    }
}

class LowHeader extends mixin(TopHeader, hotelComponenet, restaurantsComponenet, entertainmentComponenet) {
    constructor() {
        super();
        this.lowHeaderFrame = element(by.css('ul.nav-main.nav-items-8'));
        this.lowHeaderReferences = this.lowHeaderFrame.all(by.css('li[role=menuitem]>button,li[role=menuitem]>a'));
    }
    async chooseLowHeaderReference(text) {
        return await additionalHelper.clickOnReferencesOrButtons(await this.lowHeaderReferences, text);
    }
}

class Header extends LowHeader {
    constructor() {
        super();
        this.headerElements = element(by.css('div[ng-controller=GlobalNavController]'));
    }

    async chooseReference(referText) {
        return (await this.chooseTopHeaderReference(referText) || await this.chooseLowHeaderReference(referText)) ? true : new Error('There is no the reference. Wrong parameter ', referText);
    }
}

module.exports = Header;