'use strict';

const Header = require('./header.page.js');

class EntertainmentPage extends Header {
    constructor() {
        super();
        this['body header h1'] = element(by.css('h1'));
        this['body'] = element(by.css('#results-wrapper'));
        this['path'] = 'en/entertainment.html';
    }
}

const entertainment = new EntertainmentPage();
module.exports = entertainment;
