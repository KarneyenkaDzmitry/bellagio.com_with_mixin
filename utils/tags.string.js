'use strict';
const { logger } = require('../configs/logger.conf.js');

function getStringOfTags(tags) {
    let result = '';
    if (tags !== undefined || tags !== null) {
        tags.split(',').forEach((element, ind, array) => {
            if (element.startsWith('@')) {
                result += (ind < array.length - 1) ? element + ' or ' : element + '';
            } else {
                logger.error(`Was passed wrong parameter [${element}]. Every tag have to start with [@] and seporates with comma`)
                throw new ERROR('Was passed wrong data. Every tag have to start with [@]');
            }
        });
    }
    logger.debug();
    return result;
}

module.exports = getStringOfTags;