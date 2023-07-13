import * as APIData from './api.js'

const btn = document.querySelector('button')

function randomNumber() {
  const num = Math.floor(Math.random() * 10) + 1
  return num
}

btn.addEventListener('click', () => {
  const page = randomNumber()
  const movie = randomNumber()

  console.log({ page, movie })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${APIData.ACESS_TOKEN}`
    }
  }

  fetch(
    `${APIData.BASE_URL}discover/movie?include_adult=false&include_video=false&${APIData.language}&page=${page}&sort_by=popularity.desc`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(response.results[movie]))
    .catch(err => console.error(err))
})
