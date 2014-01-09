var path = require('path');

var fs = require('fs');
var fpath = process.argv[2];
var ftype = process.argv[3];

function listFiles(err, files){
	if (err) throw err;
	for (var i = 0; i<files.length; i++){
		if (path.extname(files[i]) == '.'+ftype){
			console.log(files[i]);
		}				
	}
}

fs.readdir(fpath, listFiles);