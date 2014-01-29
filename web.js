var http = require('http');
var fs = require('fs');

fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    } 

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
}).listen(80);

console.log('Server running on port 80');

});