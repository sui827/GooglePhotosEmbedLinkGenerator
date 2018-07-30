// server.js
// where your node app starts

// init project
const express = require('express');
const {search} = require('./spotify')
const app = express();

app.get('/', async function(request, response) {
  try {
  const results = await search(request.query.q)
  response.json(results);
  }
  catch(e) {
   response.status(500) 
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
