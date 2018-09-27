'use strict';

const { When, Then, Given, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(20 * 5000);
const helper = require('../../page-objects/utils/page.helper.js');
const actions = require('../../page-objects/utils/page.actions.js');
const { expect } = require('chai');

Given(/^I open home page '([^']*)'$/, async (host) => {
    return await browser.get(host);
});

When(/^I click on '([^']*)' reference on header$/, async (refer) => {
    return (await helper.getNeededElement(refer)).click();
});

Then(/^I should see '([^']*)' text as a header of a body$/, async (expectedText) => {
    return expect(await actions.getText(await helper.getNeededElement('body header h1'))).to.be.equals(expectedText);
});

Then(/^results wrapper should be present$/, async () => {
    return expect(await (await helper.getNeededElement('body')).isPresent()).to.be.true;
});

When(/^choose options cousine = '([^']*)', price = '([^']*)', meal = '([^']*)'$/, async (cousine, price, meal) => {
    const elementsButtons = await helper.getNeededElement('body filter buttons');
    return await actions.filter(elementsButtons, cousine, price, meal);
});

Then(/^I see '([^']*)' in results$/, async (shouldContainsText) => {
    return expect((await actions.getText(await  helper.getNeededElement('body results headers'))).indexOf(shouldContainsText) > -1).to.be.true;
});

Then(/^Only One choice option$/, async () => {
    return expect((await actions.getText(await  helper.getNeededElement('body results headers'))).length).to.be.equals(1);
});

When(/^choose the option '([^']*)'$/, async (string) => {
    return await actions.clickOnElement(await helper.getNeededElement(string, await helper.getNeededElement('guest services menu')));
  });

When(/^I choose Room in field reservation$/, async () => {
    return await actions.clickOnElement(await helper.getNeededElement('room option'));
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
    expect(await actions.getText(await helper.getNeededElement('search component button'))).to.be.equals(text);
});

When(/^I search for '([^']*)'$/, async (text) => {
    return await actions.find(await helper.getNeededElement('search component form'), text);
});

Then(/^I see results contains '([^']*)' in the body$/, async (expectedText) => {
    await browser.refresh();
    expect((await actions.getText(await helper.getNeededElement('body results headers'))).includes(expectedText)).to.be.true;
});

Then(/^I see message '([^']*)' in the body of the page$/, async (expectedMessage) => {
    await browser.refresh();
    return expect(await actions.getText(await helper.getNeededElement('body no result message'))).to.be.equals(expectedMessage);
});