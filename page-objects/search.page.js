'use strict';

const Header = require('./header.page.js');

class SearchPage extends Header {
    constructor() {
        super();
        this['body header h1'] = element(by.css('.site-search-header'));
        this.body = element(by.css('#results-wrapper'));
        this['body results headers'] = element.all(by.css('#results-wrapper h2'));
        this['body no result message'] = element(by.css('div.no-result > p.ng-binding'));
        this.path = 'en/search.html';
    }
}
const search = new SearchPage();
module.exports = search;