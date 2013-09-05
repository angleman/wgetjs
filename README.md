# wgetjs [![NPM version](https://badge.fury.io/js/wgetjs.png?branch=master)](http://badge.fury.io/js/wgetjs) [![Build Status](https://travis-ci.org/angleman/wgetjs.png?branch=master)](https://travis-ci.org/angleman/wgetjs) [![Dependency Status](https://gemnasium.com/angleman/wgetjs.png?branch=master)](https://gemnasium.com/angleman/wgetjs)

Ultra simple async retrieval of remote files over http or https


## Install

```
npm install wgetjs
```

## Usage

```
var wget = require('wgetjs');  //
var url  = 'http://somedomain.org/someimage.png';

wget(url);  // will save someimage.png in the current path. TODO: if callback is omitted, do this as a sync operation
wget(url, function() {
	console.log('Done'); // take some action when wget has finished
});
```

## License: MIT