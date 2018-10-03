# bellagio.com ([AT Lab#19])


## Implementation

### Dependencies

The application needs to have the following dependencies:
1. npm --version 6.1.0
2. node --version 8.*.*

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
1. `$ .\node_modules\.bin\protractor .\configs\conf.js --tags '@Restaurants,@Search'`<br>
2. `$ npm test -- --tags '@Restaurants,@Search'`<br>

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
 -------------------: '@tag1 or @tag2' --- for tests that include or tag1 or tag2<br>
 -------------------: '@tag1 or not @tag2' - fortests that includes @tag1 or doesn't include @tag2<br>
 [see documentation](https://docs.cucumber.io/cucumber/tag-expressions/)<br>

