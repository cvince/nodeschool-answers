var mymodule = require('./modules/ls-module.js');
var fpath = process.argv[2];
var ftype = process.argv[3];
var path = require('path');

function listFiles(err, data){
	for (var i=0; i<data.length; i++){
		if (path.extname(data[i]) == '.'+ftype){
			console.log(data[i]);
		}		
	}
}

mymodule(fpath, ftype, listFiles)
