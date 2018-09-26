'use strict';

class HotelComponent {
    constructor() {
        this['hotel'] = element(by.css('a[class*=hotel]'));
    }

    goToHotelPage() {
        return this.hotel.click();
    }
}
module.exports = HotelComponent;