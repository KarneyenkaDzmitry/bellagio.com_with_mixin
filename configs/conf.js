'use strict';
const logger = require('./logger.conf.js').logger;
const reporter = require('cucumber-json-reporter-to-html');

exports.config = {
    getPageTimeout: 60000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        "require": ['../features/step_definitions/*steps.js', '../features/step_definitions/hooks.js'],
        "tags": false,
        "profile": false,
        'no-source': true,
        "format": 'json:./reports/report.json',
        "ignoreUncaughtExceptions": true
        //   tags: ['~@wip', '~@manual']
    },
    specs: ['../features/*.feature'],
    logLevel: 'ERROR',
    seleniumAddress: 'http://localhost:4444/wd/hub',
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
        reporter.create('./reports/report.json', './reports/Bellagio.html', 'The Best title of the world', 'DESCRIPTION');
        logger.info('Done');
    }
};
