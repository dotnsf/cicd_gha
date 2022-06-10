//. app.js
var express = require( 'express' ),
    app = express();

app.get( '/', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );

  var message = 'Hello World!';
  if( req.query.message ){
    message = req.query.message;
  }

  res.write( JSON.stringify( { status: true, message: message }, null, 2 ) );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
