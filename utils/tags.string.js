'use strict';
const { logger } = require('../configs/logger.conf.js');

function getTagsString(tags) {
    let result = '';
    if ((tags !== undefined) && (tags !== null)) {
        tags.split(',').forEach((element, ind, array) => {
            if (element.startsWith('@')) {
                result += (ind < array.length - 1) ? element + ' or ' : String(element);
            } else {
                logger.error(`Was passed wrong parameter [${element}]. Every tag have to start with [@] and seporates with comma`);
                throw new Error('Was passed wrong data. Every tag have to start with [@]');
            }
        });
    }
    logger.debug(`The result string of tags is [${result}]`);
    return result;
}

const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const unlink = util.promisify(fs.unlink);
const path = require('path');

async function deleteAllFiles(directory) {
    try {
        const files = await readdir(directory);
        const unlinkPromises = files.map(filename => {
            const filePath = `${directory}/${filename}`;
            fs.statSync(filePath).isDirectory() ? deleteAllFiles(filePath) : unlink(filePath);
        });
        return await Promise.all(unlinkPromises);
    } catch (err) {
        console.log(err);
    }
}

async function combineJsonReports(directory) {
    try {
        const files = await readdir(directory);
        let data = [];
        files.forEach(filename => {
            const filePath = path.resolve(`${directory}/${filename}`);
            if (filePath.endsWith('.json')) {
                const filedata = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                data = [...data, ...filedata];
            }
        });
        const resultFile = path.resolve(`${directory}/report.json`);
        return fs.writeFileSync(resultFile, JSON.stringify(data), 'utf8')
    } catch (err) {
        console.log(err);
    }
}


module.exports = { getTagsString, deleteAllFiles, combineJsonReports };