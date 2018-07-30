// server.js
// where your node app starts

// init project
const express = require('express');
const {search} = require('./spotify')
const app = express();

app.get('/', function(request, response) {
  response.json(search());
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
