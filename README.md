# wgetjs [![NPM version](https://badge.fury.io/js/wgetjs.png?branch=master)](http://badge.fury.io/js/wgetjs) [![Build Status](https://travis-ci.org/angleman/wgetjs.png?branch=master)](https://travis-ci.org/angleman/wgetjs) [![Dependency Status](https://gemnasium.com/angleman/wgetjs.png?branch=master)](https://gemnasium.com/angleman/wgetjs) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](#licensemit)
Ultra simple async retrieval of remote files over http or https inspired by wgetjs

## Install

```
npm install node-wget
```

## Usage

```javascript
var wget = require('node-wget');

wget(url);

wget(url, callback);

wget({url: url, dest: destination_folder_or_filename}, callback);

wget({url: url, dry: true}); // dry run, nothing loaded, callback passing parsed options as data
```

## Examples

```javascript
var wget = require('node-wget');

wget('https://raw.github.com/angleman/wgetjs/master/angleman.png');   // angleman.png saved to current folder

wget({
        url:  'https://raw.github.com/angleman/wgetjs/master/package.json',
        dest: '/tmp/',      // destination path or path with filenname, default is ./
        timeout: 2000       // duration to wait for request fulfillment in milliseconds, default is 2 seconds
    },
    function (error, response, body) {
        if (error) {
            console.log('--- error:');
            console.log(error);            // error encountered
        } else {
            console.log('--- headers:');
            console.log(response.headers); // response headers
            console.log('--- body:');
            console.log(body);             // content of package
        }
    }
);

// dry run
wget({
    url: 'https://raw.github.com/angleman/wgetjs/master/package.json',
    dest: '/tmp/',
    dry: true
    }, function(err, data) {        // data: { headers:{...}, filepath:'...' }
        console.log('--- dry run data:');
        console.log(data); // '/tmp/package.json'
    }
);
```

## CLI

Install:

```bash
$ npm install -g node-wget
```

Use:

```text
Usage: wget [options] <url>

Ultra simple async retrieval of remote files over http or https

Options:

  -h, --help                        output usage information
  -v, --version                     output version number
  -d, --destination <folder>        specify download destination

Usage:

# Download file
$ wget https://github.com/NodeOS/NodeOS/archive/master.zip

# Download file to location
$ wget https://github.com/NodeOS/NodeOS/archive/master.zip -d path/to/here/
```

## License: MIT
