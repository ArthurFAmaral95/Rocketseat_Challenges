import * as APIData from './api.js'

const btn = document.querySelector('button')
const movieDiv = document.querySelector('#movie')
const movieImg = document.querySelector('#movie img')
const movieTitle = document.querySelector('#movie-title')
const movieOverview = document.querySelector('#movie-overview')
const footer = document.querySelector('footer')

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
      const movieID = response.results[movie].id
      const title = response.results[movie].title
      const overview = response.results[movie].overview

      fetch(`${APIData.BASE_URL}movie/${movieID}/images`, options)
        .then(response => response.json())
        .then(response => {
          const imgPath = response.posters[0].file_path

          movieImg.src = `${APIData.IMG_URL}${imgPath}`
          movieTitle.textContent = title
          movieOverview.textContent = overview

          movieDiv.classList.remove('hidden')
          footer.classList.remove('initial')
        })

        .catch(err => {
          console.error(err)
          movieImg.src = `./assets/Poster.png`
          movieTitle.textContent =
            'Ops, hoje não é dia de assitir filme. Bora codar! 🚀'
          movieOverview.textContent = ''
          movieDiv.classList.remove('hidden')
          footer.classList.remove('initial')
        })
    })
    .catch(err => {
      console.error(err)
      movieImg.src = `./assets/Poster.png`
      movieTitle.textContent =
        'Ops, hoje não é dia de assitir filme. Bora codar! 🚀'
      movieDiv.classList.remove('hidden')
      footer.classList.remove('initial')
    })
})
