// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.json({ok: true});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
