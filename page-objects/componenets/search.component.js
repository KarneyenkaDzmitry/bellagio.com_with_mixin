'use strict';

class SearchComponenet {
    constructor() {
        this['search component'] = element(by.css('ul>li.nav-search.search-expanded'));
        this['search component button'] = element(by.css('*[aria-label*="Search"]'));
        this['search component field'] = element(by.model('globalSearchKeyword'));
        this.searchGoButton = element(by.css('*[aria-label=Search]'));
        this.searchCancel = element(by.css('span.clear-search.close-search-overlay'));
    }

    find(text) {
        return this['search component field'].sendKeys(text)
            .then(() => browser.wait(ec.elementToBeClickable(this['search component button']), 5000))
            .then(() => this['search component button'].click())
            .catch(error => {
                return error;
            });
    }

    openSearchBox() {
        return this.search.click();
    }
    
    getPlaceholderText(){
        return this.searchField.getAttribute('placeholder');
    }
}
module.exports = SearchComponenet;