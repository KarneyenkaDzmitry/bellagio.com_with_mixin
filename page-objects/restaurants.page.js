'use strict';

const Header = require('./header.page.js');

class Restaurants extends Header {
    constructor() {
        super();
        this.titleH1 = $('h1');
        this.results = $('#results-wrapper');
        this.filterButtons = element.all(by.css('button[id*=tagsFilter]'));
        this.filterResults = $$('div.result');
        this.url = 'https://www.bellagio.com/en/restaurants.html';
    }

    filter(...options) {
         return browser.wait(ec.presenceOf(this.filterButtons), 10000)
            .then(() => options.forEach((option, ind) => {
                if (option !== 'Clear') {
                    const opt = `//a[text()="${options[ind]}"][@class]`;
                    $$('button[id*=tagsFilter]')
                        .then((elements) => {
                            browser.sleep(2000); return elements;
                        })
                        .then((elements) => {
                            browser.wait(ec.visibilityOf(elements[ind]), 5000); return elements;
                        })
                        .then((elements) => {
                            browser.wait(ec.elementToBeClickable(elements[ind]), 5000); return elements;
                        })
                        .then((elements) => {
                            elements[ind].click(); return elements;
                        })
                        .then((elements) => elements[ind].element(by.xpath(opt)))
                        .then((element) => {
                            browser.wait(ec.elementToBeClickable(element), 5000); return element;
                        })
                        .then((element) =>  element.click());
                }
            }));
    }

    getListOfRestaurants() {
        return this.filterResults.$$('h3').map((elem) => elem.getText());
    }
}

const restaurants = new Restaurants();
module.exports = restaurants;