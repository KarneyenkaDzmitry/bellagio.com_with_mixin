'use strict';

const mixin = require('./utils/mixin.js');
const hotelComponenet = require('./componenets/hotel.component.js');
const restaurantsComponenet = require('./componenets/restaurants.component.js');
const searchComponenet = require('./componenets/search.component.js');
const guestServiceComponenet = require('./componenets/guest_services.component.js');
const entertainmentComponenet = require('./componenets/entertainment.component.js');

class Header extends mixin(hotelComponenet, restaurantsComponenet, searchComponenet, guestServiceComponenet, entertainmentComponenet) {};

module.exports = Header;

// class Header {
//     constructor() {
//         this.guestServicesButton = $('.nav-services-btn');
//         this.findReservationReference = $('#unsignedIn-guest-menu > li:nth-child(1) > a');
//         this.hotel = $('a[class*=hotel]');
//         this.restaurants = $('a[class*=restaurants]');
//         this.searchButton = $('*[aria-label*="open search"]');
//         this.entertainment = $('a[class*=entertainment]');
//     }
//     goToReservation() {
//         return browser.wait(ec.elementToBeClickable(this.guestServicesButton), 5000)
//             .then(() => this.guestServicesButton.click())
//             .then(() => browser.wait(ec.elementToBeClickable(this.findReservationReference), 5000))
//             .then(() => this.findReservationReference.click());
//     }
//     chooseHotel() {
//         return this.hotel.click();
//     }
//     chooseRestaurants() {
//         return browser.wait(ec.presenceOf(this.guestServicesButton), 5000)
//             .then(() => this.restaurants.click());
//     }

//     chooseEntertainment() {
//         return this.entertainment.click();
//     }
//     openSearchBox() {
//         return this.searchButton.click();
//     }
// }

// module.exports = new Header();