// jshint esversion: 6

const _404 = require('./_404');
const _helium = require('./_helium');
const _hydrogen = require('./hydrogen');
const _index = require('./index');
const _styles = require('./styles');
const net = require('net');

let server = net.createServer(function(socket) {
	socket.setEncoding('utf8');
	socket.on('data', (chunk) => {
		console.log(chunk);
    socket.write('<html><head><title>TESTING</title></head><body</body></html>');
    socket.end();
    socket.destroy();
	});
});

server.listen(8080, '0.0.0.0', function() {
	console.log(`Server listening on ${this.address().address}:${this.address().port}`);
});