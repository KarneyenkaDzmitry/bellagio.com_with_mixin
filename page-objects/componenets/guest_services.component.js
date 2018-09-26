'use strict';

class GuestServicesMenu {
    constructor() {
        this.findReservation = element(by.css('#unsignedIn-guest-menu > li:nth-child(1) > a'));
        this.mobileCheckIn = element(by.css('#unsignedIn-guest-menu > li:nth-child(2) > a'));
        this.mobileCheckOut = element(by.css('#unsignedIn-guest-menu > li:nth-child(3) > a'));
        this.offersSingUp = element(by.css('#unsignedIn-guest-menu > li:nth-child(4) > a'));
        this.managePreferences = element(by.css('#unsignedIn-guest-menu > li:nth-child(5) > a'));
        this.contactUs = element(by.css('#unsignedIn-guest-menu > li:nth-child(6) > a'));
    }

    chooseFindReservation() {
        return this.findReservation.click();
    }
}

class GuestServicesComponent extends GuestServicesMenu {
    constructor() {
        super();
        this.guestServices = element(by.css('.nav-services-btn'));
        this['guest services menu'] = element(by.css('#unsignedIn-guest-menu'));
        this['guest services'] = element(by.css('.nav-services-btn'));
    }

    openGuestServicesDropdown() {
        return browser.wait(ec.elementToBeClickable(this.guestServices), 5000)
            .then(() => this.guestServices.click())
    }

    openPageFromMenu(element) {
        return browser.wait(ec.elementToBeClickable(element), 5000)
            .then(() => element.click());
    }

    goToPageFromGuestServiceMenu(text) {
        switch (text.toLowerCase()) {
            case 'find reservation': return this.openPageFromMenu(this.findReservation);
            case 'mobile check-in': return this.openPageFromMenu(this.mobileCheckIn);
            case 'mobile check-out': return this.openPageFromMenu(this.mobileCheckOut);
            case 'offers sing-up': return this.openPageFromMenu(this.offersSingUp);
            case 'manage preferences': return this.openPageFromMenu(this.managePreferences);
            case 'contact us': return this.openPageFromMenu(this.contactUs);
            default: throw new Error('There is not the suitable menu', text);
        }
    }
}

module.exports = GuestServicesComponent;