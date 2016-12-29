const net = require('net');

let server = net.createServer(function(socket) {
	socket.setEncoding('utf8');
	socket.on('data', (chunk) => {
		console.log(chunk);
    socket.write('<html><head><title>TESTING</title></head><body</body></html>');
	})
});

server.listen(8080, '0.0.0.0', function() {
	console.log(`Server listening on ${this.address().address}:${this.address().port}`);
});