// jshint esversion: 6

const net = require('net');

let client = net.createConnection(8080, 'localhost');
client.setEncoding('utf8');
client.on('connect', () => {
  console.log('connected');
  process.stdin.pipe(client);
  client.write(`GET / HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 3072a901-9099-6bbb-e8c6-edde158f5c5a`);

});

client.on('data', function (chunk) {
  console.log(chunk);
});