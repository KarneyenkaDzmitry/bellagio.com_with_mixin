'use strict';
const logger = require('./logger.conf.js').logger;
const reporter = require('cucumber-json-reporter-to-html');
const getTagsString = require('../utils/tags.string');
const yargs = require('yargs').argv;

exports.config = {
    getPageTimeout: 60000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        "require": ['../features/step_definitions/*steps.js', '../features/step_definitions/hooks.js'],
        "profile": false,
        'no-source': true,
        "format": 'json:./reports/report.json',
        "ignoreUncaughtExceptions": true,
        "tags": getTagsString(yargs.tags)
    },
    specs: ['../features/*.feature'],
    logLevel: 'ERROR',
    // seleniumAddress: 'http://localhost:4444/wd/hub', if seleniumAddress nas no value, null or undefined - server will be run automaticaly
    allScriptsTimeout: 500000,
    onPrepare: () => {
        logger.info('Browser starts in maximize size for running tests');
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(20000);
        browser.waitForAngularEnabled(true);
        global.ec = protractor.ExpectedConditions;
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars', '--test-type']
        }
    },
    beforeLaunch: () => {
        logger.info('Get started!');
    },
    afterLaunch: () => {

        logger.info('Done');
    },
    onComplete: () => {
        reporter.create('./reports/report.json', './reports/Bellagio.html', 'Bellagio.com UI-Tests', 'Tests based on: cucumber with protractor approach ');
    }

    /**
       * A callback function called once tests are finished. onComplete can
       * optionally return a promise, which Protractor will wait for before
       * shutting down webdriver.
       *
       * At this point, tests will be done but global objects will still be
       * available.
       */
};
