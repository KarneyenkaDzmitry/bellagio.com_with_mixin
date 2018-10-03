# bellagio.com ([AT Lab#19])


## Implementation

### Dependencies

The application needs to have the following dependencies:
1. npm --version 6.1.0
2. node --version 8.11.3

### Deploy

#### $ npm install

Before start the program is supposed to run the command [npm install].<br> 
It downloads needed modules and prepars the programm for start.<br>
There is a list of modules and their versions:

    "gulp": "^3.9.1",
    "gulp-cli": "^2.0.1",
    "gulp-protractor": "^4.1.0",
    "jasmine": "^3.1.0",
    "jasmine-spec-reporter": "^4.2.1",
    "protractor": "^5.4.0",
    "winston": "^3.0.0"
    "eslint": "^5.2.0",
    "gulp-shell": "^0.6.5"

## Usage

 Before start tests it is supposed to run webdriver server. Use the command [webdriver-manager start].
 Or via npm script [npm run wd-st]
 
 After server have started run tests via command [npm start]

### Author
#### Dzmitry_Karneyenka, Republic of Belarus, Minsk 

## N.B.
### How to run tests by using multiple tags with protractor-cucumber-framework
 1. using npm script (e.g. "test": "protractor ./pathToConfig.js") <br>
`$ npm test -- --cucumberOpts.tags='@Search'`<br>
Don't forget use additional '--' dashes because it is the special simbols that say to npm that there are some arguments for running command<br>
 2. using plant command<br>
`$ .\node_modules\.bin\protractor .\configs\conf.js --cucumberOpts.tags='@Search or @Restaurants'`<br>
Set 'cucumberOpts.tags' according to needed tests with related tags.<br>
 Use construction : '@tag1 and @tag2' - for tests that contains these two tags<br>
 -------------------: '@tag1 or @tag2' -- for tests that include or tag1 or tag2<br>

