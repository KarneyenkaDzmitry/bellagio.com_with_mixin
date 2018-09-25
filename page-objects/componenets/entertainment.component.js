'use strict';

class EntertainmentComponenet {
    constructor() {
        this.entertainment = element(by.css('a[class*=entertainment]'));
    }
    async goToEntertainmentPage() {
        return await this.entertainment.click();
    }
}
module.exports = EntertainmentComponenet;