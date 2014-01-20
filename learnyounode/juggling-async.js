var http = require('http');
var bl = require('bl');
var urlArr = process.argv;
var urls = urlArr.slice(2, urlArr.length);

var callbackDepth = 0;

function processData (response){

	response.pipe(bl(function (err, data){
		
		if (err) console.error(data);

		var dataStr = data.toString();
		console.log(dataStr);

		if(callbackDepth<urls.length-1){
			callbackDepth++;
			http.get(urls[callbackDepth], processData)
		}
		
	}))

}

http.get(urls[0], processData)