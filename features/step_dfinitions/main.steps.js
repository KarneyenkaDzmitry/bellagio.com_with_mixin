'use strict';

const { When, Then, Given, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(20 * 5000);
const helper = require('../../page-objects/utils/page.helper.js');
const { expect } = require('chai');
let page;

Given(/^I open home page '([^']*)'$/, async (host) => {
    return await browser.get(host);
});

When(/^I click on '([^']*)' reference on header$/, async (refer) => {
    return (await helper.getNeededElement(refer)).click();
});

Then(/^I should see '([^']*)' text as a header of a body$/, async (expectedText) => {
    expect(await (await helper.getNeededElement('body header h1')).getText()).to.be.equals(expectedText);
});

Then(/^results wrapper should be present$/, async () => {
    expect(await (await helper.getNeededElement('body')).isPresent()).to.be.true;
});

When(/^choose options cousine = '([^']*)', price = '([^']*)', meal = '([^']*)'$/, async (cousine, price, meal) => {
    page = await helper.get();
    return await page.filter(cousine, price, meal);
});

Then(/^I see '([^']*)' in results$/, async (shouldContainsText) => {
    const results = await page.getListOfRestaurants();
    expect(results.indexOf(shouldContainsText) > -1).to.be.true;
    // const resultsHeaders =await  helper.getNeededElement('body results headers');
    // const headersText = await helper.getText(resultsHeaders);
    // console.log(headersText);
});

Then(/^Only One choice option$/, async () => {
    const results = await page.getListOfRestaurants();
    expect(results.length).to.be.equals(1);
});

When(/^choose the option '([^']*)'$/, async (string) => {
    return (await helper.getNeededElement(string, await helper.getNeededElement('guest services menu'))).click();
  });

When(/^I choose Room in field reservation$/, async () => {
    return (await helper.getNeededElement('room option')).click();
});

Then(/^I see selected '([^']*)' in the reservation type$/, async (text) => {
    expect(await (await helper.getNeededElement('room option')).isSelected()).to.be.true;
});

Given(/^I choose search component$/, async () => {
    return await (await helper.getNeededElement('search component')).click();
});

Then(/^I see input field with text '([^']*)'$/, async (text) => {
    expect(await (await helper.getNeededElement('search component field')).isPresent()).to.be.true;
    expect(await (await helper.getNeededElement('search component field')).getAttribute('placeholder')).to.be.equals(text);
});

Then(/^'([^']*)' button with text '([^']*)'$/, async (option, text) => {
    expect(await (await helper.getNeededElement('search component button')).isEnabled()).to.be.equals(option === 'disabled' ? false : true);
    expect(await (await helper.getNeededElement('search component button')).getText()).to.be.equals(text);
});

When(/^I search for '([^']*)'$/, async (text) => {
    page = await helper.get();
    return await page.find(text);
});

Then(/^I see results contains '([^']*)' in the body$/, async (expectedText) => {
    await browser.refresh();
    page = await helper.get();
    expect((await page.getHeadersOfResults()).includes(expectedText)).to.be.true;
});

Then(/^I see message '([^']*)' in the body of the page$/, async (expectedMessage) => {
    await browser.refresh();
    page = await helper.get();
    expect(await page.noResultMessage.getText()).to.be.equals(expectedMessage);
});