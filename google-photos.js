const axios = require('axios');

const regex = 

async function getAlbum(id) {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`)
  return response.data
}


module.exports = {
 getAlbum 
}