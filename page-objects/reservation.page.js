'use strict';

const Header = require('./header.page.js');

class ReservationPage extends Header {
    constructor() {
        super();
        this.accountPageTitle = element(by.css('.account-page-title'));
        this.accountForm = element(by.css('#find-reservation-form'));
        this.roomReservation = element(by.xpath('//select/option[@value="room"]'));
        this.url = 'https://www.bellagio.com/en/itineraries/find-reservation.html'
    }
    chooseRoomReservation() {
        this.roomReservation.click();
    }
}

const reservation = new ReservationPage();
module.exports = reservation;