'use strict';

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

function isPosition(text) {
    return text.includes('№');
}

module.exports = { clickOnReferencesOrButtons, clickOnElement }