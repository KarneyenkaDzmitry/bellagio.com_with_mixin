'use strict';
const reporter = require('cucumber-json-reporter-to-html');
const {combineJsonReports} =require('../utils/tags.string');
combineJsonReports('./reports').then(()=>
reporter.create('./reports/report.json', './reports/Bellagio.html', 'Bellagio.com UI-Tests', 'Tests based on: cucumber with protractor approach '));