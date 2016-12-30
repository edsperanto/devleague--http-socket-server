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
    console.log(chunk);
    let line = chunk.split('\n');
    console.log(line);
    let request = line[0].split(' ');
    console.log(request);
    if (request[0] === 'GET'){
      let responseHeader = `${_httpheader}\n\n`;
      switch (request[1]){
        case '/':
        case '/index.html':
          responseHeader += `${_index}`;
          break;
        case '/hydrogen.html':
          responseHeader += `${_hydrogen}`;
          break;
        case '/helium.html':
          responseHeader += `${_helium}`;
          break;
        case '/404.html':
          responseHeader += `${_404}`;
          break;
        case '/css/styles.css':
          responseHeader += `${_styles}`;
          break;
      }
      console.log(responseHeader);
      socket.write(responseHeader);
    }
    socket.end();
    socket.destroy();
	});
});

server.listen(8080, '0.0.0.0', function() {
	console.log(`Server listening on ${this.address().address}:${this.address().port}`);
});