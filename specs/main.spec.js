'use strict';

const { logger } = require('../configs/logger.conf');
const helper = require('../page-objects/utils/page.helper');
const host = 'https://www.bellagio.com/en.html';
let page = require('../page-objects/home.page');

describe('bellagio resource', () => {

    beforeEach(() => {
        browser.get(host).then(() => helper.get())
            .catch(err => {
                logger.err(`Error during loading page [${host}}`);
                return err;
            });
        logger.info(`In block beforeEach. Browser opens page ${host}`);
    });

    describe('Tests of restaurants service', () => {

        beforeEach(async () => {
            page = await helper.get();
            logger.info(`In block beforeEach of tests of restaurants service. Browser opens page of restaurants`);
            page.goToRestaurantsPage();
            page = await helper.get();
        });

        it('should have title "RESTAURANTS" and results wrapper', () => {
            logger.info('In block it. Check title and results wrapper of restaurants` page');
            expect(page.pageTitle.getText()).toEqual('RESTAURANTS');
            expect(page.resultsWrapper.isPresent()).toBe(true);
        });

        it('should show "LAGO by Julian Serrano" in results after choosing filters parameters: cousine = Italian, ' +
            'price = Clear, meal = Breakfast And Brunch', () => {
                logger.info('In block it. fileter of restaurants` page');
                page.filter('Italian', 'Clear', 'Breakfast and Brunch');
                expect(page.pageTitle.getText()).toEqual('RESTAURANTS');
                expect(page.filterResults.count()).toEqual(1);
                page.getListOfRestaurants()
                    .then((list) =>
                        expect(list.indexOf('LAGO BY JULIAN SERRANO') > -1).toEqual(true));
            });
    });

    describe('Reservation service', () => {

        beforeEach(async () => {
            page = await helper.get();
            logger.info(`In block beforeEach of tests of reservation service. Browser opens page of reservation`);
            page.goToReservationPage();
            page = await helper.get();
        });

        it('should have a text - "Find Your Reservation" and form with 5 inputs', () => {
            logger.info('In block it. Reservation page should have a text - "Find Your Reservation" and form with 5 inputs');
            expect(page.accountPageTitle.getText()).toEqual('Find Your Reservation');
            expect(page.accountForm.getAttribute('method')).toEqual('post');
        });

        it('can choose room in field - "reservation"', () => {
            logger.info('In block it. Reservation page, choosing room in field - "reservation"');
            expect(page.roomReservation.isSelected()).toBe(false);
            page.chooseRoomReservation();
            expect(page.roomReservation.isSelected()).toBe(true);
        });
    });

    describe('Search service tests', () => {
        beforeEach(async () => {
            page = await helper.get();
            logger.info(`In block beforeEach of tests of search service. Browser opens page of search`);
            page.openSearchBox();
            page = await helper.get();
        });

        it('should include at least two elements: search field, disabled "Search button"', () => {
            logger.info('In block it. Search page should include at least two elements: search field, disabled "Search button"');
            expect(page.searchField.isPresent()).toEqual(true);
            expect(page.searchButton.isEnabled()).toEqual(false);
        });

        it('if search service doesn\'t find anything, it should show ' +
            '"Sorry, your search for [serched text] did not return any results. Please try different search terms or browse our sitemap."', () => {
                logger.info('In block it. if search service doesn\'t find anything');
                const word = 'dusolei';
                page.find(word)
                    .then(() => browser.refresh())
                    .then(() => helper.get())
                    .then((page) => page.noResult.getText())
                    .then((text) =>
                        expect(text).toEqual(`Sorry, your search for ${word} did not return any results. Please try different search terms or browse our sitemap.`));
            });

        it('When I type "du soleil" I have to see the page of results with the fitst result`s title contains text "CIRQUE DU SOLEIL"', () => {
            logger.info('In block it. Check search results');
            const word = 'du soleil';
            page.find(word)
                .then(() => browser.refresh())
                .then(() => helper.get())
                .then((page) => page.getFirstResultTitle())
                .then((text) =>
                    expect(text.indexOf('CIRQUE DU SOLEIL') > -1).toEqual(true));
        });
    });

    describe('Hotel servise tests', () => {
        beforeEach(async () => {
            page =await  helper.get();
            logger.info(`In block beforeEach of tests of hotel service. Browser opens hotel page`);
            page.goToHotelPage();
            page =await  helper.get();
        });

        it('should have title "HOTEL ROOMS & SUITES" and results wrapper', () => {
            logger.info('In block it. Check name of hotel page');
            expect(page.pageTitle.getText()).toEqual('HOTEL ROOMS & SUITES');
            expect(page.results.isPresent()).toBe(true);
        });
    });

    describe('Entertainment service tests', () => {
        beforeEach(async () => {
            page =await  helper.get();
            logger.info(`In block beforeEach of tests of entertainment service. Browser opens entertainment page`);
            page.goToEntertainmentPage();
            page =await  helper.get();
        });

        it('it should show entertament page with text "ENTERTAINMENT"', () => {
            logger.info('In block it. Check name of entertainment page');
            expect(page.pageTitle.getText()).toEqual('ENTERTAINMENT');
            expect(page.resultsWrapper.isPresent()).toBe(true);
        });

        it('entertainment page should contain default component base with title "WHILE AT BELLAGIO"', () => {
            logger.info('In block it. Check location of  base component on entertainment page with title "WHILE AT BELLAGIO"');
            expect(page.getDefaultComponentTitle()).toEqual('WHILE AT BELLAGIO');
        });
    });
});
