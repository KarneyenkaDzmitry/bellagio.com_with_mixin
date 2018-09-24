'use strict';

const mixin = require('./utils/mixin.js');
const hotelComponenet = require('./componenets/hotel.component.js');
const restaurantsComponenet = require('./componenets/restaurants.component.js');
const searchComponenet = require('./componenets/search.component.js');
const guestServiceComponenet = require('./componenets/guest_services.component.js');
const entertainmentComponenet = require('./componenets/entertainment.component.js');

class Header extends mixin(hotelComponenet, restaurantsComponenet, searchComponenet, guestServiceComponenet, entertainmentComponenet) {
    constructor() {
        super();
    }

    chooseReference(refer) {
        switch (refer.toLowerCase()) {
        case 'hotel': return this.goToHotelPage();
        case 'entertainment': return this.goToEntertainmentPage();
        case 'restaurants': return this.goToRestaurantsPage();
        case 'search' : return this.openSearchBox();
        default: return new Error('There is no the reference. Wrong parameter ', refer);
        }
    }
}

module.exports = Header;