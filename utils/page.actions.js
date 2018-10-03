'use strict'

const { logger } = require('../configs/logger.conf.js');

function clickOnElement(element) {
    return browser.wait(ec.elementToBeClickable(element))
        .then(() => element.click())
        .catch((error) => {
            logger.error(`Has been thrown the error withing performing the action [${element}]click()`, error);
            throw error;
        });
}

function getText(elements) {
    if (Array.isArray(elements)) {
        const results = elements.map(element => element.getText());
        return Promise.all(results)
            .catch((error) => {
                logger.error(`Has been thrown the error withing performing the action getText([${elements}]) all elements`, error);
                throw error;
            });
    } else {
        return elements.getText()
            .then((text) => text)
            .catch((error) => {
                logger.error(`Has been thrown the error withing performing the action getText([${elements}])`, error);
                throw error;
            });
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
                        .then(elements => {
                            browser.wait(ec.visibilityOf(elements[ind]), 5000); return elements;
                        })
                        .then(elements => {
                            clickOnElement(elements[ind]); return elements;
                        })
                        .then(elements => elements[ind].element(by.xpath(opt)))
                        .then(element => clickOnElement(element))
                        .catch((error)=>{
                            logger.error(`Has been thrown the error withing performing the action filter([${elements}, ${options}])`, error);
                            throw error; 
                        });
                }
            }));

    } else {
        const error = new Error('There are no equals an amount of elements ');
        logger.error(`Has been thrown the error withing performing the action filter([${elements}, ${options}])`, error);
        throw error;
    }
}

function find(form, text) {
    return browser.wait(ec.presenceOf(form), 5000)
        .then(() => form.element(by.css('input')))
        .then((field) => field.sendKeys(text))
        .then(() => form.element(by.css('button')))
        .then((button) => { clickOnElement(button); })
        .catch((error)=>{
            logger.error(`Has been thrown the error withing performing the action find([${form}, ${text}])`, error);
            throw error;
        });
}

module.exports = { find, filter, getText, clickOnElement }