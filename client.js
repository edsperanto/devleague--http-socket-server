// jshint esversion: 6

const net = require('net');

if (process.argv.length <= 2) {
    console.log("Usage: client.js www.devleague.com");
    process.exit(-1);
}
 
let param = process.argv[2];
let hostname = param;
let uri = '/';

let client = net.createConnection(8080, 'localhost');
client.setEncoding('utf8');
client.on('connect', () => {
  console.log('connected');
  process.stdin.pipe(client);
  client.write(`GET ${uri} HTTP/1.1
Host: ${hostname}
Content-Type: application/json
Cache-Control: no-cache`);
});

client.on('data', function (chunk) {
  console.log(chunk);
});