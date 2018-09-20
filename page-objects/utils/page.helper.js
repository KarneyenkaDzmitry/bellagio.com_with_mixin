'use strict';

async function get() {
    const currentUrl = await browser.getCurrentUrl();
    const [,appenderUrl] = /^(?:\w+\:\/\/\w+\.?\w+\.?\w+\/)(.*)$/.exec(currentUrl);
    switch (appenderUrl) {
        case 'en.html': return require('../home.page');
        case 'en/hotel.html': return require('../hotel.page');
        case 'en/entertainment.html': return require('../entertainment.page');
        case 'en/restaurants.html': return require('../restaurants.page');
        case 'en/itineraries/find-reservation.html': return require('../reservation.page');
        default: return appenderUrl.includes('search.html')? require('../search.page'): new Error('Wrong page');
    }
}
module.exports.get = get;

