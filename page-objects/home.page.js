'use strict';
const mixin = require('./utils/mixin.js');
const header = require('./header.page.js');
//const footer = {};extends mixin(header, footer)

class HomePage  extends header{
    constructor() {
        super();
        this.url = 'https://www.bellagio.com';
    }
}

const homePage = new HomePage();

module.exports = homePage;
