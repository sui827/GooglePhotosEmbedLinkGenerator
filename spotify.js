const axios = require('axios');

function auth() {
 var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
  return axios.post('https://accounts.spotify.com/api/token', {grant_type: 'client_credentials'})
}