// jshint esversion: 6

const _404 = require('./_404');
const _helium = require('./_helium');
const _hydrogen = require('./_hydrogen');
const _index = require('./_index');
const _styles = require('./_styles');
const _httpheader = require('./_httpheader');
const net = require('net');

let server = net.createServer(function(socket) {
	socket.setEncoding('utf8');
	socket.on('data', (chunk) => {
    let line = chunk.split('\n');
    let request = line[0].split(' ');
    console.log(request[0]);
    if (request[0] === 'GET'){
      switch (request[1]){
        case '/':
        case '/index.html':
          socket.write(_httpheader);
          socket.write(_index);
          break;
        case '/hydrogen.html':
          socket.write(_httpheader);
          socket.write(_hydrogen);
          break;
        case 'helium.html':
          socket.write(_httpheader);
          socket.write(_helium);
          break;
        case '404.html':
          socket.write(_httpheader);
          socket.write(_404);
          break;
        case '/css/styles.css':
          socket.write(_httpheader);
          socket.write(_styles);
          break;
      }
    }
    socket.end();
    socket.destroy();
	});
});

server.listen(8080, '0.0.0.0', function() {
	console.log(`Server listening on ${this.address().address}:${this.address().port}`);
});