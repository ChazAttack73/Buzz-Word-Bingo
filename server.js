var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');

app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended : true } ) );

var buzzWords = [];
  console.log( buzzWords );

app.get( '/buzzwords', function (req, res ) {
  res.send( { buzzWords : buzzWords } );
});

app.post( '/buzzword', function ( req, res ) {
  buzzWords.push( {
    buzzWord : req.body.buzzWord,
    points : req.body.points,
    heard : false
  });
  res.send( { 'success' : true } );
  console.log( buzzWords );
});

var server = app.listen( 7777, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log( 'The server of Chaz has been inititated on', host, port );
});