var net = require('net');
var port = Number(process.argv[2]);

var date = new Date();

var server = net.createServer(function(socket) {
	var year = date.getFullYear().toString();
    var month = date.getMonth().toString()+1;     // starts at 0
    var day = date.getDate().toString();    // returns the day of month
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();

	socket.write(year+'-'+month+'-'+day+' '+hours+':'+minutes+'\n');
	socket.end();
});

server.listen(port);