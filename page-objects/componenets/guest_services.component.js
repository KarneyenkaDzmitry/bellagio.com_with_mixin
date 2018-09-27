'use strict';

class GuestServicesComponent {
    constructor() {
        this['guest services menu'] = element.all(by.css('#unsignedIn-guest-menu > li'));
        this['guest services'] = element(by.css('.nav-services-btn'));
    }
}

module.exports = GuestServicesComponent;