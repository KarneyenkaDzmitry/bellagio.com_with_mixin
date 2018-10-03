'use strict';

function main() {
    const argv = require('yargs')
        .option('tags').describe('tags', 'run tests with the following tags').alias('t', 'tags')
        .help('h').alias('h', 'help')
        .argv
    if (argv.tags === null) {
        
        console.log(argv);

    } else {
        //console.log(argv);
    }
}

main();
