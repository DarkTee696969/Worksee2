var http = require('http');
var dt = require('./mydatemodeule');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');