'use strict';

class SearchComponenet {
    constructor() {
        this.search = element(by.css('ul>li.nav-search.search-expanded'));
        this.searchButton = element(by.css('*[aria-label*="Search"]'));
        this.searchField = element(by.model('globalSearchKeyword'));
        this.searchGoButton = element(by.css('*[aria-label=Search]'));
        this.searchCancel = element(by.css('span.clear-search.close-search-overlay'));
    }

    find(text) {
        return this.searchField.sendKeys(text)
            .then(() => browser.wait(ec.elementToBeClickable(this.searchButton), 5000))
            .then(() => this.searchButton.click())
            .catch(error => {
                return error;
            });
    }

    openSearchBox() {
        return this.search.click();
    }
}
module.exports = SearchComponenet;