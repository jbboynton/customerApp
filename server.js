/**
 * Back-end configuration file.
 */

/* Import dependencies */
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

/* Environment configuration */
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/')));
app.disable('x-powered-by');

/* Route to the front-end */
app.get('*', function(req, res, next) {
 res.sendFile(path.join(__dirname, 'index.html'));
});

/* Spin up Express and listen on the given port */
http.createServer(app).listen(app.get('port'), function() {
  console.log('>> Express is listening on port ' + app.get('port') + '.');
  console.log('>> Press Ctrl-C to terminate.');
});
