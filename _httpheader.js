// jshint esversion:6

function RFC1123Date () {
  let dateArray = new Date().toUTCString().split(' ');
  dateArray.splice(0, 1);
  let tmp = dateArray[0] + ',';
  dateArray[0] =  dateArray[1];
  dateArray[1] = tmp;
  return dateArray.join(' ');
}

module.exports = `HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: ${RFC1123Date()}
Content-Type: text/html; charset=utf-8
Connection: keep-alive
X-Powered-By: Express`;