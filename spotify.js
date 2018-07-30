const request = require('request-promise');

function auth() {
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  }; 
  return request.post(authOptions)
    .then(body => body.access_token)
}

function search(q) {
 auth().then(access_token => {
   
 })
  
}


module.exports = {
 search 
}