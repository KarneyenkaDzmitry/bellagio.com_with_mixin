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
    }

    openGuestServicesDropdown() {
        return this.guestServices.click();
    }
    goToReservationPage() {
        return browser.wait(ec.elementToBeClickable(this.guestServices), 5000)
            .then(() => this.guestServices.click())
            .then(() => browser.wait(ec.elementToBeClickable(this.findReservation), 5000))
            .then(() => this.findReservation.click());
    }
}

module.exports = GuestServicesComponent;