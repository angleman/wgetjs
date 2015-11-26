#!/usr/bin/env node
'use strict';

/* eslint-disable no-process-exit */

/*
 * Dependencies.
 */

var wget = require('./');
var pack = require('./package.json');

/*
 * Arguments.
 */

var argv = process.argv.slice(2);

/*
 * Command.
 */

var command = Object.keys(pack.bin)[0];

/**
 * Help.
 *
 * @return {string}
 */
function help() {
    return [
        '',
        'Usage: ' + command + ' [options] [url]...',
        '',
        pack.description,
        '',
        'Options:',
        '',
        '  -h, --help           output usage information',
        '  -v, --version        output version number',
        '',
        'Usage:',
        '',
        '# Download file',
        '$ ' + command + ' https://github.com/NodeOS/NodeOS/archive/master.zip',
        ''
    ].join('\n  ') + '\n';
}

/*
 * Program.
 */

if (
    argv.indexOf('--help') !== -1 ||
    argv.indexOf('-h') !== -1
) {
    console.log(help());
} else if (
    argv.indexOf('--version') !== -1 ||
    argv.indexOf('-v') !== -1
) {
    console.log(pack.version);
} else if (argv.length) {
    console.log("Downloading...");
    wget(argv[0], callback);
} else {
    console.log(help());
}
function callback(error, response, body){
  if(error){
    console.log('--- error:');
    console.log(error);
  }else{
    console.log('Done!');
  }
}
