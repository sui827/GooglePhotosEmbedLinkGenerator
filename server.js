// server.js
// where your node app starts

// init project
const express = require('express');
const {getAlbum} = require('./google-photos')
const app = express();

app.set("view engine", "ejs");

// authorize CORS (for demo only)
app.use(function(req, res, next) {
  const origin = req.headers.origin;
  if(origin){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let data = {};
data.title = "Google Photos Embed Link Generator";

app.get('/', function(req, res, next) {
  res.render("./index.ejs", data)
});

app.get('/:id', function(req, res, next) {
  data.id = req.params.id;
  res.render("./id.ejs", data)
});

app.get('/api/:id', async function(request, response) {
  try {
    const results = await getAlbum(request.params.id)
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
