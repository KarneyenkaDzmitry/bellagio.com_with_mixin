'use strict';

const { When, Then, Given, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(20 * 5000);
const helper = require('../../page-objects/utils/page.helper.js');
const { expect } = require('chai');
let page;

Given(/^I open home page '([^']*)'$/, async (host) => {
    await browser.get(host);
    page = await helper.get();
});

When(/^I click on '([^']*)' reference on header$/, async (refer) => {
    await page.chooseReference(refer);
});

Then(/^I should see '([^']*)' text as a header of a body$/, async (expectedText) => {
    page = await helper.get();
    expect(await page.titleH1.getText()).to.be.equals(expectedText);
});

Then(/^results wrapper$/, async () => {
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


When('I choose Room in field reservation', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see that in the field', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Given('I choose search component', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see input field with text {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{string} button with text {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I search for {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I see results contains {string} in the body', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
