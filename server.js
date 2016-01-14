var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');


app.get( '/', function (req, res ) {
  res.send( 'What up Chaz');
});

var server = app.listen( 7777, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log( 'The server of Chaz has been inititated on', host, port );
});