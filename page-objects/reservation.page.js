'use strict';

const Header = require('./header.page.js');

class ReservationPage extends Header {
    constructor() {
        super();
        this['body header h1'] = element(by.css('h1.account-page-title'));
        this.accountForm = element(by.css('#find-reservation-form'));
        this['room option'] = element(by.xpath('//select/option[@value="room"]'));
        this.typeOfReservation = element(by.model('rType'));
        this.url = 'https://www.bellagio.com/en/itineraries/find-reservation.html';
    }
    chooseRoomReservation() {
        this['room option'].click();
    }
}

const reservation = new ReservationPage();
module.exports = reservation;