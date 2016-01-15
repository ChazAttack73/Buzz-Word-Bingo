'use strict'

var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );

app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended : true } ) );


var buzzArr = [];

//========== Retrieves the current list of buzzWords that have been posted to the server
app.get( '/buzzwords', function (req, res ) {
  res.send( { BUZZWORDS : buzzArr } );
});

//========== Adds new buzzWords to the array and avoids duplicate entries
app.post( '/buzzword', function ( req, res ) {
  var newBuzzWord = {
    buzzWord : req.body.buzzWord,
    points : Number( req.body.points ),
    heard : false
  };

  var duplicateMessage = {
    'success' : false,
    'message' : 'buzzWord has already been entered you greedy piggy, move along...'
  };

  var successMessage = {
    'success' : true,
    'message' : 'buzzWord has been added to the array you cheeky monkey!'
  };

  if ( buzzArr.length > 0 ) {
    for( var i = 0; i < buzzArr.length; i++ ) {
      if( buzzArr[i].buzzWord === req.body.buzzWord ) {
        return res.send( duplicateMessage );
      }
    }
  }
    buzzArr.push( newBuzzWord );
    res.send( successMessage );
});


var server = app.listen( 7777, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log( 'The server of Chaz has been inititated on', host, port );
});