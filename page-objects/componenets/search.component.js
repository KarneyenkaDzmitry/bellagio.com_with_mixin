'use strict';

class SearchComponenet {
    constructor() {
        this['search component'] = element(by.css('ul>li.nav-search.search-expanded'));
        this['search component form'] = element(by.css('form#global-nav-search-form'));
        this['search component button'] = element(by.css('*[aria-label*="Search"]'));
        this['search component field'] = element(by.model('globalSearchKeyword'));
        this['search component cancel'] = element(by.css('span.clear-search.close-search-overlay'));
    }
}
module.exports = SearchComponenet;