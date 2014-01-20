var http = require('http');
var url = require('url');

function parseTime(time){
	return {
		"hour" : time.getHours(),
		"minute" : time.getMinutes(),
		"second" : time.getSeconds(),
	}
}

function unixTime(time){
	return {
		"unixtime": time.getTime()
	}
}

var server = http.createServer(function(req, res){
	var getURL = url.parse(req.url, true);
	var time = new Date(getURL.query.iso);
	var result;

	var urlPath = getURL.pathname;

	if(urlPath === '/api/parsetime'){
		result = JSON.stringify(parseTime(time));
	}else if(urlPath === '/api/unixtime'){
		result = JSON.stringify(unixTime(time));
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(result);
	}else{
		res.writeHead(404);
		res.end();
	}
})

server.listen(process.argv[2]);