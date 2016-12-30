// jshint esversion: 6

const _404 = require('./_404');
const _helium = require('./_helium');
const _hydrogen = require('./_hydrogen');
const _index = require('./_index');
const _styles = require('./_styles');
const net = require('net');

let getHttpHeader = function() {
  let RFC1123Date = '';
  let dateArray = new Date().toUTCString().split(' ');
  dateArray.splice(0, 1);
  let tmp = dateArray[0] + ',';
  dateArray[0] =  dateArray[1];
  dateArray[1] = tmp;
  RFC1123Date = dateArray.join(' ');
  let str = `HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: ${RFC1123Date}
Content-Type: text/html; charset=utf-8
Connection: keep-alive
X-Powered-By: Express`;
  return str;
};

let server = net.createServer(function(socket) {
	socket.setEncoding('utf8');
	socket.on('data', (chunk) => {
    let arrayOfLines = chunk.split('\n');
    let arrayOfFirstLine = arrayOfLines[0].split(' ');
    let httpRequestType = arrayOfFirstLine[0];
    let httpRequestURI = arrayOfFirstLine[1];
    if (httpRequestType === 'GET'){
      let responseHeader = `${getHttpHeader()}\n\n`;
      switch (httpRequestURI){
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
      socket.write(responseHeader);
    }
    socket.end();
    socket.destroy();
	});
});

server.listen(8080, '0.0.0.0', function() {
	console.log(`Server listening on ${this.address().address}:${this.address().port}`);
});