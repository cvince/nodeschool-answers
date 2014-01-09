var fs = require('fs');
var path = process.argv[2];

function readLineCallback(err, data){
	if (err) throw err;
	var contentArr = data.split('\n');
	console.log(contentArr.length-1);	
}

fs.readFile(path, 'utf8', readLineCallback);


