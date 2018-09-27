'use strict';

const Header = require('./header.page.js');

class SearchPage extends Header {
    constructor() {
        super();
        this['body header h1'] = $('.site-search-header');
        this['body'] = $('#results-wrapper');
        this['body results headers'] = element.all(by.css('#results-wrapper h2'));
        this.searchResults = $('[class*=search-results]');
        this['body no result message'] = $('div.no-result > p.ng-binding');
        //this.url = 'https://www.bellagio.com/en/search.html#/'// + searchword;
    }

    getFirstResultTitle() {
        return this['body results headers'].$('h2').getText();
    }

    getHeadersOfResults() {
        return this['body results headers'].map(element => element.getText())
        .then((elements) => Promise.all(elements));
    }
}
const search = new SearchPage();
module.exports = search;