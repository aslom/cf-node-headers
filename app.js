//https://stackoverflow.com/questions/11965501/on-cloudfoundry-http-request-headers-seem-to-be-filtered-is-there-a-way-to-rec
var http = require('http');
var util = require('util');

// default for new cf is 8080 not 300
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(util.inspect(req.headers));
}).listen(port);
