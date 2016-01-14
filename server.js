var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );

app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended : true } ) );

var buzzArr = [];

//========== Retrieves the current list of buzzWords that have been posted to the server
app.get( '/buzzwords', function (req, res ) {
  res.send( { buzzWords : buzzArr } );
});

//========== Adds new buzzWords to the array and avoids duplicate entries
app.post( '/buzzword', function ( req, res ) {
  if ( buzzArr.length > 0 ) {
    for( var i = 0; i < buzzArr.length; i++ ) {
      if( buzzArr[i].buzzWord === req.body.buzzWord ) {
        var message = {
          'success' : false,
          'message' : 'buzzWord has already been entered you greedy fuck, move along...'
        };
        return res.send(message);
      }
    }
  }
    buzzArr.push( {
        buzzWord : req.body.buzzWord,
        points : Number( req.body.points ),
        heard : false
      } );
    res.send( { 'success' : true } );
    console.log( buzzArr );
});


var server = app.listen( 7777, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log( 'The server of Chaz has been inititated on', host, port );
});