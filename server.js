var http = require('http');
var express = require('express');

var app = express();

app.use('/', express.static(__dirname));
app.use("/css", express.static(__dirname + '/css'));
app.use('/jQuery', express.static(__dirname + '/jQuery'));


http.createServer(app).listen(9008, function() {
  console.log('web server listening on port 9008');
});