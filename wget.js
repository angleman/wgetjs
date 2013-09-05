var fs      = require('fs')
  , request = require('request')
  , sync    = require('synchronize')
;

function wget(options, cb) {
	if (typeof options === 'string') {
		options  = { url: options };
	}
	options      = options || {};
	var src      = options.url || options.uri || options.src
	  , parts    = src.split('/')
	  , file     = parts[parts.length-1]
	;
	parts        = file.split('?');
	file         = parts[0];
	parts        = file.split('#');
	file         = parts[0];
	if (options.dest && options.dest.substr(options.dest.length-1,1) == '/') { // append name if path passed
		options.dest = options.dest + file;
	}
	options.dest = options.dest || file;

	request(options, cb).pipe(fs.createWriteStream(options.dest));
}

module.exports = wget;