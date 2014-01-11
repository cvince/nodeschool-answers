var net = require('net')
var port = Number(process.argv[2]);

var server = net.createServer(function (socket) {
	var data;
	socket.write(data);
    socket.end(data)
})
server.listen(port)
