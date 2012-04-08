(function() {
  var fs, http, server;

  fs = require('fs');

  http = require('http');

  server = http.createServer(req, res)(function() {});

  fs.readFile("" + __dirname + "/socket.io.demo.html", function(err, data) {});

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.end(data, 'utf8');

  server.listen(1337);

}).call(this);
