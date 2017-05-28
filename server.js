const port = 3002
var http = require('http');
var app = require('./config/express');

http.createServer(app)
.listen(port, function() {
	console.log(`API is running on port ${port}`);
});