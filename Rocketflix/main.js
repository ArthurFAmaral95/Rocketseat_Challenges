import * as APIData from './api.js'

const btn = document.querySelector('button')
const movieImg = document.querySelector('.movie img')
const movieTitle = document.querySelector('#movie-title')
const movieOverview = document.querySelector('#movie-overview')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${APIData.ACESS_TOKEN}`
  }
}

function randomNumber() {
  const num = Math.floor(Math.random() * 20)
  return num
}

btn.addEventListener('click', () => {
  const page = randomNumber()
  const movie = randomNumber()

  fetch(
    `${APIData.BASE_URL}discover/movie?include_adult=false&include_video=false&${APIData.language}&page=${page}&sort_by=popularity.desc`,
    options
  )
    .then(response => response.json())
    .then(response => {
      movieTitle.textContent = response.results[movie].title
      movieOverview.textContent = response.results[movie].overview

      const movieID = response.results[movie].id

      fetch(`${APIData.BASE_URL}movie/${movieID}/images`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response.posters[0].file_path)
          movieImg.src = `${APIData.IMG_URL}${response.posters[0].file_path}`
        })

        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})
