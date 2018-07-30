const request = require('request-promise');

function auth() {
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  }; 
  return request.post(authOptions)
    .then(body => body.access_token)
}

async function search(q) {
  const access_token = await auth()
  const searchOptions = {
    url: 'https://api.spotify.com/v1/search',
    qs: {
      q,
      type: 'track'
    },
    headers: {
      Authorization: `Bearer ${access_token}`
    },
    json: true
  }
  return request.get(searchOptions)
}


module.exports = {
 search 
}