const net = require('net');

let server = net.createServer(function(socket) {
	socket.on('data', (chunk) => {
		console.log(chunk);
	})
});

server.listen(8080, '0.0.0.0', function() {
	console.log(`Server listening on ${this.address().address}:${this.address().port}`);
});