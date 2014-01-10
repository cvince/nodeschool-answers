var http = require('http');
var bl = require('bl');
var url = process.argv[2];

function processData (response){
	
	// function showData (data) {
	// 	console.log(data)
	// } 
	// response.setEncoding('utf8');	
	// response.on("data", showData)

	response.pipe(bl(function (err, data){
		if (err) return err;
		var dataStr = data.toString();
		console.log(dataStr.length);
		console.log(dataStr);
	}))

}

http.get(url, processData);