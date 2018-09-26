'use strict';

const helper = require('../utils/page.helper.js');


/** The function takes name or number of element that it is supposed to find.
 *  defines current url and works with appropriate page 
 *  finds and returns needed WebElement
 */
function getNeededElement(...args) {
    return args[0].includes('#') ? getNeededElementByNumber(args) : getNeededElementByName(args);
}

function getNeededElementByName([name, elements]) {
    const page = helper.get();
    if (Array.isArray(elements)) {
        if (page.name !== undefined) {
            return page.name;
        } else {
            throw new Error(`There is not the [${name}] element on the current page.`);
        }
    } else {
        const elems = elements.map(element => element.getText());
        return Promise.all(elems)
            .then((results) => results.find(elem => elem.toLowerCase() === (name.toLowerCase())))
    }
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

module.exports = { clickOnReferencesOrButtons, clickOnElement, getNeededElement }