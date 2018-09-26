'use strict';

const Header = require('./header.page.js');

class HotelPage extends Header {
    constructor() {
        super();
        this['body header h1'] = element(by.css('*[class*=title] h1'));
        this['body results'] = $('#results-wrapper');
        this.url = 'https://www.bellagio.com/en/hotel.html';
    }
}

const hotel = new HotelPage();
module.exports = hotel;