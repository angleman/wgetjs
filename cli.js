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
    var destinationIndex = argv.indexOf('--destination') + argv.indexOf('-d') + 2;

    var args = {};
    if(destinationIndex){
      args.dest = argv[destinationIndex];
      argv.splice(destinationIndex-1,2);
    }
    args.url = firstNonFlag(argv);
    if(args.url.length > 0){
      console.log("Downloading...");
      wget(args, callback);
    }else{
      console.log(help());
    }
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

function firstNonFlag(args){
  for(var i = 0; i < args.length; i++){
    if(args[i].charAt(0) != '-'){
      return args[i];
    }
  }
  return "";
}
