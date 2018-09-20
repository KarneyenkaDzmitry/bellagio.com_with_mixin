'use strict';

const PAGE_MAP = {
    search: '../search.page',
    //header: '../header.page',
    hotel: '../hotel.page',
    entertainment: '../entertainment.page',
    reservation: '../reservation.page',
    restaurants: '../restaurants.page',
    home: '../home.page'
};

async function get() {
    let currentUrl = await browser.getCurrentUrl();
    currentUrl = 'https://www.bellagio.com/en.html';
    let [,appenderUrl] = /^(?:\w+\:\/\/\w+\.?\w+\.?\w+\/)(.*)$/.exec(currentUrl);
    switch (appenderUrl) {
        case 'en.html': return getPage('home');
        case 'en/hotel.html': return getPage('hotel');
        case 'en/entertainment.html': return getPage('entertainment');
        case 'en/restaurants.html': return getPage('restaurants');
        case 'en/itineraries/find-reservation.html': return getPage('reservation');
        default: return appenderUrl.includes('search.html')? getPage('search'): new Error('Wrong way');
    }
}
//module.exports = get;
module.exports.getPage = (pageName) => require(PAGE_MAP[pageName]);
