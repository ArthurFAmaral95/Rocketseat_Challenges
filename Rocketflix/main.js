const moduleAPI = require('./api')

function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${moduleAPI.ACESS_TOKEN}`
  }
}

fetch(
  `${moduleAPI.BASE_URL}/discover/movie?include_adult=false&include_video=false&${moduleAPI.language}&page=1&sort_by=popularity.desc`,
  options
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))
