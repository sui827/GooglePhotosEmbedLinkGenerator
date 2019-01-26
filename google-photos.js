const axios = require('axios');

async function getAlbum(id) {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`)
  return response.data
}


module.exports = {
 getAlbum 
}