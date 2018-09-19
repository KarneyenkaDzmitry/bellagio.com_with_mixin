'use strict';

class RestaurantsComponenet{
    constructor() {
        this.restaurants = $('a[class*=restaurants]');
    }

    goToRestaurantsPage() {
        return this.restaurants.click();
    }
}
module.exports = RestaurantsComponenet;