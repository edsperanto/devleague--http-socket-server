// jshint esversion: 6

const net = require('net');

let client = net.createConnection(8080, 'localhost');
client.on('connect', () => {
  console.log('connected');
  process.stdin.pipe(client);
});

client.on('data', function (chunk) {
  process.stdout.write(chunk);
});