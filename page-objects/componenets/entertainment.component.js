'use strict';

class EntertainmentComponenet {
    constructor() {
        this.entertainment = element(by.css('a[class*=entertainment]'));
    }
    goToEntertainmentPage() {
        return this.entertainment.click();
    }
}
module.exports = EntertainmentComponenet;