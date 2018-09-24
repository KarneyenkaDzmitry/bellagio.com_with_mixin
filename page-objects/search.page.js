'use strict';

const Header = require('./header.page.js');

class SearchPage extends Header {
    constructor() {
        super();
        this.searchTitle = $('.site-search-header');
        this.resultsWrapper = $('#results-wrapper');
        this.searchResults = $('[class*=search-results]');
        this.noResultMessage = $('div.no-result > p.ng-binding');
        // this.url = 'https://www.bellagio.com/en/search.html#/' + searchword;
    }

    getFirstResultTitle() {
        return this.searchResults.$('h2').getText();
    }

    getHeadersOfResults() {
        return this.searchResults.$$('h2')
        .then((elements) => elements.map(element => element.getText()))
        .then((elements) => Promise.all(elements));
    }
}
const search = new SearchPage();
module.exports = search;