'use strict';

function getStringOfTags(tags) {
    let result = '';
    if (tags !== undefined || tags !== null) {
        tags.split(',').forEach((element, ind, array) => {
            if (element.startsWith('@')) {
                result += (ind < array.length-1) ?  element + ' or ' :  element + '';
            } else {
                throw new ERROR('Was passed wrong data. Every tag have to start with [@]');
            }
        });
    }
    return result;
}

module.exports = getStringOfTags;