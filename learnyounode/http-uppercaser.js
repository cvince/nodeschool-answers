var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){

	if(req.method == 'POST'){
		req.pipe(map(function(input){
			return input.toString().toUpperCase();
		})).pipe(res);		
	}else{
		return res.end("need to send a post");
	}

})

server.listen(process.argv[2]);