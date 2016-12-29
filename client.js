// jshint esversion: 6

const net = require('net');

let client = net.createConnection(8080, 'localhost');
client.on('connect', () => {
  console.log('connected');
  process.stdin.pipe(client);
  client.write('HEAD / HTTP/1.1\nHost: localhost:8080\nUser-Agent: curl/7.51.0\nAccept: */*');
});

client.on('data', function (chunk) {
  process.stdout.write(chunk);
});

