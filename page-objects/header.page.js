'use strict';

const mixin = require('./utils/mixin.js');
const hotelComponenet = require('./componenets/hotel.component.js');
const restaurantsComponenet = require('./componenets/restaurants.component.js');
const searchComponenet = require('./componenets/search.component.js');
const guestServiceComponenet = require('./componenets/guest_services.component.js');
const entertainmentComponenet = require('./componenets/entertainment.component.js');

class Header extends mixin(searchComponenet, guestServiceComponenet, hotelComponenet, restaurantsComponenet, entertainmentComponenet) {
    constructor() {
        super();
    }
}

module.exports = Header;