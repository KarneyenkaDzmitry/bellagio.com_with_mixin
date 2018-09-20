'use strict';

const Header = require('./header.page.js');

class HomePage extends Header {
    constructor() {
        super();
        this.url = 'https://www.bellagio.com';
    }
}

const homePage = new HomePage();

module.exports = homePage;
