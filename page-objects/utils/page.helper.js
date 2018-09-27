'use strict';

function get() {
    return browser.getCurrentUrl()
        .then((currentUrl) => {
            const [, appenderUrl,] = /^(?:\w+\:\/\/\w+\.?\w+\.?\w+\/)(.*html)(#.*)?$/.exec(currentUrl);
            //console.log(`Current URL [${currentUrl}], and appender Url [${appenderUrl}]`);
            switch (appenderUrl) {
                case 'en.html': return require('../home.page');
                case 'en/hotel.html': return require('../hotel.page');
                case 'en/entertainment.html': return require('../entertainment.page');
                case 'en/restaurants.html': return require('../restaurants.page');
                case 'en/itineraries/find-reservation.html': return require('../reservation.page');
                case 'en/search.html': return require('../search.page')
                default: throw new Error(`The framework has not included suitable page-object for this url [${appenderUrl}]`);
            }
        });
}

/** The function takes name or number of element that it is supposed to find.
 *  defines current url and works with appropriate page 
 *  finds and returns needed WebElement
 */
function getNeededElement(...args) {
    //console.log(`ARGS: [${args}]`);
    return args[0].includes('#') ? getNeededElementByNumber(args) : getNeededElementByName(args);
}

function getNeededElementByName([name, elements]) {
    name = name.toLowerCase();
    return get().then(page => {
        if (!Array.isArray(elements)) {
            if (page[name] !== undefined) {
                return page[name];
            } else {
                //console.log(page.url);
                throw new Error(`There is no the [${name}] element on the current page.`);
            }
        } else {
            const elems = elements.map(element => element.getText());
            return Promise.all(elems)
                .then((results) => results.findIndex(elem => elem.toLowerCase() === (name.toLowerCase())))
                .then((index) => elements[index])
        }
    });
}

function getNeededElementByNumber([number, elements]) {
    if (Array.isArray(elements)) {
        return elements[Number.parseInt(number.substring(1, number.length))];
    } else {
        throw new Error('Were Passed wrong parameters. The method takes [#numberOfElement, arrayOfWebElements].');
    }
}

async function clickOnReferencesOrButtons(elements, text) {
    const elems = elements.map(element => element.getText());
    return Promise.all(elems)
        .then((results) => results.findIndex(elem => elem.toLowerCase() === (text.toLowerCase())))
        .then((index) => {
            if (index > - 1) {
                return clickOnElement(elements[index])
                    .then(() => true);
            } else {
                return false;
            }
        });
}

function clickOnElement(element) {
    return browser.wait(ec.elementToBeClickable(element))
        .then(() => element.click());
}

function getText(elements) {
    if (Array.isArray(elements)) {
        const results = elements.map(element => element.getText());
        return Promise.all(results);
    } else {
        return elements.getText()
            .then((text) => text);
    }
}

function filter(elements, ...options) {
    if (elements.length === options.length) {
        return browser.wait(ec.presenceOf(...elements), 10000)
            .then(() => options.forEach((option, ind) => {
                if (option !== 'Clear') {
                    const opt = `//li[@role="radio"]/a[text()="${option}"][@class]`;
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
                        .then((element) => element.click());
                }
            }));

    } else {
        throw new Error('There are no equals an amount of elements ');
    }
}

// find() {

// }

module.exports = { clickOnReferencesOrButtons, clickOnElement, getNeededElement, get, getText, filter }