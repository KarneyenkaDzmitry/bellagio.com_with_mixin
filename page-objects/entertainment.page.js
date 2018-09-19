'use strict';
const header = require('./header.page.js');
class EntertainmentPage extends header {
    constructor() {
        super();
        this.pageTitle = $('h1');
        this.resultsWrapper = $('#results-wrapper');
        this.filterButtons = $$('button[id*=tagsFilter]');
        this.filterResults = $$('div.result');
        this.defaultComponent = $('div[class="theme-default component-base"]');
        this.url = 'https://www.bellagio.com/en/entertainment.html'
    }
    getDefaultComponentTitle() {
        return this.defaultComponent.$('span').getText();
    }
}

const entertainment = new EntertainmentPage();
module.exports = entertainment;
