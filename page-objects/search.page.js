'use strict';

const Header = require('./header.page.js');

class SearchPage extends Header {
    constructor() {
        super();
        this['body header h1'] = $('.site-search-header');
        this['body results'] = $('#results-wrapper');
        this.searchResults = $('[class*=search-results]');
        this.noResultMessage = $('div.no-result > p.ng-binding');
        //this.url = 'https://www.bellagio.com/en/search.html#/'// + searchword;
    }

    getFirstResultTitle() {
        return this['body results'].$('h2').getText();
    }

    getHeadersOfResults() {
        return this['body results'].$$('h2')
        .then((elements) => elements.map(element => element.getText()))
        .then((elements) => Promise.all(elements));
    }
}
const search = new SearchPage();
module.exports = search;