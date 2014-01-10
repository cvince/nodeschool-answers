var http = require('http');
var url = process.argv[2];

function processData (response){
	
	function showData (data) {
		console.log(data)
	} 
	response.setEncoding('utf8');	
	response.on("data", showData)
}

http.get(url, processData);