var http = require('http');
var url = process.argv[2];

function processData (response){
	
	var dataArr = [];

	function showData (data) {
		dataArr.push(data);
	}

	function dataInfo (data) {
		var dataStr = dataArr.join("");
		var count = dataStr.length;
		console.log(count);		
		console.log(dataStr);
	}

	response.setEncoding('utf8');	
	response.on("data", showData);
	response.on("end", dataInfo);
}

http.get(url, processData);