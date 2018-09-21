'use strict';

const Header = require('./header.page.js');

class SearchPage extends Header {
    constructor() {
        super();
        this.searchTitle = $('.site-search-header');
        this.resultsWrapper = $('#results-wrapper');
        this.searchResults = $('[class*=search-results]');
        this.noResult = $('.no-result');
        // this.url = 'https://www.bellagio.com/en/search.html#/' + searchword;
    }

    getFirstResultTitle() {
        return this.searchResults.$('h2').getText();
    }
}
const search = new SearchPage();
module.exports = search;