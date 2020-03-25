// server.js
// where your node app starts

// init project
const bodyParser = require('body-parser')
const express = require('express');
const {getAlbum} = require('./google-photos')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
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

app.get('/:id', async function(req, res, next) {
  try {
    const results = await getAlbum(req.params.id);
    data.id = req.params.id;
    data.links = results;
    res.render("./id.ejs", data)
  }
  catch(e) {
    res.render("./notfound.ejs");
  }
});

app.post('/api/id', function(req, res) {
  const url = req.body.url;
  const id = url.split("/").pop();
  res.redirect(`/${id}`)
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
