'use strict';

function clickOnReferencesOrButtons(elements, text) {
    if (isPosition(text)) {
        return elements[text.substring(1, text.length)].click();
    } else {
        return elements.map(element => element.getText())
            .then((elements) => Promise.all(elements))
            .then((results) => results.findIndex(elem => elem === text))
            .thex((index) => clickOnElement(elements[index]));
    }
}

function clickOnElement(element) {
    return browser.wait(ec.elementToBeClickable(element))
        .then(() => element.click());
}

function isPosition(text) {
    return text.includes('№');
}

module.exports = {clickOnReferencesOrButtons, clickOnElement}