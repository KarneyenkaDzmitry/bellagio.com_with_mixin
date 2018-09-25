'use strict';

const additionalHelper = require('./utils/additional.helper');

const mixin = require('./utils/mixin.js');
const hotelComponenet = require('./componenets/hotel.component.js');
const restaurantsComponenet = require('./componenets/restaurants.component.js');
const searchComponenet = require('./componenets/search.component.js');
const guestServiceComponenet = require('./componenets/guest_services.component.js');
const entertainmentComponenet = require('./componenets/entertainment.component.js');
//const headerElements = 

class Header extends mixin(hotelComponenet, restaurantsComponenet, searchComponenet, guestServiceComponenet, entertainmentComponenet) {
    constructor() {
        super();
    }

    chooseReference(referText) {
        //additionalHelper.clickOnReferencesOrButtons(headerElements, referText);
        switch (referText.toLowerCase()) {
        case 'hotel': return this.goToHotelPage();
        case 'entertainment': return this.goToEntertainmentPage();
        case 'restaurants': return this.goToRestaurantsPage();
        case 'search' : return this.openSearchBox();
        case 'guest services' : return this.openGuestServicesDropdown();
        default: return new Error('There is no the reference. Wrong parameter ', referText);
        }
    }
}

module.exports = Header;