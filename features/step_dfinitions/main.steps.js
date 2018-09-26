'use strict';

const { When, Then, Given, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(20 * 5000);
const helper = require('../../page-objects/utils/page.helper.js');
const additionalHelper = require('../../page-objects/utils/additional.helper');
const { expect } = require('chai');
let page;

Given(/^I open home page '([^']*)'$/, async (host) => {
    await browser.get(host);
    page = await helper.get();
});

When(/^I click on '([^']*)' reference on header$/, async (refer) => {
    return (await additionalHelper.getNeededElement(refer)).click();
    //await page.chooseReference(refer);
});

Then(/^I should see '([^']*)' text as a header of a body$/, async (expectedText) => {
    page = await helper.get();
    expect(await page.titleH1.getText()).to.be.equals(expectedText);
});

Then(/^results wrapper should be present$/, async () => {
    expect(await page.results.isPresent()).to.be.true;
});

When(/^choose options cousine = '([^']*)', price = '([^']*)', meal = '([^']*)'$/, async (cousine, price, meal) => {
    page = await helper.get();
    await page.filter(cousine, price, meal);
});

Then(/^I see '([^']*)' in results$/, async (shouldContainsText) => {
    const results = await page.getListOfRestaurants();
    expect(await results.indexOf(shouldContainsText) > -1).to.be.true;
});

Then(/^Only One choice option$/, async () => {
    expect(await page.filterResults.count()).to.be.equals(1);
});

When(/^choose the option '([^']*)'$/, async (string) => {
    await page.goToPageFromGuestServiceMenu(string);
  });

When(/^I choose Room in field reservation$/, async () => {
    page = await helper.get();
    await page.chooseRoomReservation();
});

Then(/^I see selected '([^']*)' in the reservation type$/, async (text) => {
    expect(await page.roomReservation.isSelected()).to.be.true;
});

Given(/^I choose search component$/, async () => {
    await page.chooseReference('search');
});

Then(/^I see input field with text '([^']*)'$/, async (text) => {
    page = await helper.get();
    expect(await page.searchField.isPresent()).to.be.true;
    expect(await page.getPlaceholderText()).to.be.equals(text);
});

Then(/^'([^']*)' button with text '([^']*)'$/, async (option, text) => {
    expect(await page.searchButton.isEnabled()).to.be.equals(option === 'disabled' ? false : true);
    expect(await page.searchButton.getText()).to.be.equals(text)
});

When(/^I search for '([^']*)'$/, async (text) => {
    await page.find(text);
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