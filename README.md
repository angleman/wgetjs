# wgetjs [![NPM version](https://badge.fury.io/js/wgetjs.png?branch=master)](http://badge.fury.io/js/wgetjs) [![Build Status](https://travis-ci.org/angleman/wgetjs.png?branch=master)](https://travis-ci.org/angleman/wgetjs) [![Dependency Status](https://gemnasium.com/angleman/wgetjs.png?branch=master)](https://gemnasium.com/angleman/wgetjs)

Ultra simple async retrieval of remote files over http or https


## Install

```
npm install wgetjs
```

## Usage

```
var wget = require('wgetjs');

wget(url);

wget(url, callback);

wget({url: url, dest: destination_folder_or_filename}, callback);
```

## Examples

```
var wget = require('wgetjs');

wget('https://raw.github.com/angleman/wgetjs/master/angleman.png');   // angleman.png saved to current folder

wget({
		url:  'https://raw.github.com/angleman/wgetjs/master/package.json',
		dest: '/tmp/',      // destination path or path with filenname, default is ./
		timeout: 2000       // duration to wait for request fulfillment in milliseconds, default is 2 seconds
	},
	function (error, response, body) {
		if (error) {
			console.log(error);            // error encountered
		} else {
			console.log(response.headers); // response headers
			console.log(body);             // content of package
		}
	}
);
```

## License: MIT