import * as APIData from './api.js'

const btn = document.querySelector('button')
const movieDiv = document.querySelector('#movie')
const movieImg = document.querySelector('#movie img')
const movieTitle = document.querySelector('#movie-title')
const movieOverview = document.querySelector('#movie-overview')
const footer = document.querySelector('footer')
const genreFilter = document.querySelector('#genre-filter')

let selectedGenreID = 0

const genres = [
  {
    id: 0,
    name: 'Escolha o gênero do filme'
  },
  {
    id: 28,
    name: 'Action'
  },
  {
    id: 12,
    name: 'Adventure'
  },
  {
    id: 16,
    name: 'Animation'
  },
  {
    id: 35,
    name: 'Comedy'
  },
  {
    id: 80,
    name: 'Crime'
  },
  {
    id: 99,
    name: 'Documentary'
  },
  {
    id: 18,
    name: 'Drama'
  },
  {
    id: 10751,
    name: 'Family'
  },
  {
    id: 14,
    name: 'Fantasy'
  },
  {
    id: 36,
    name: 'History'
  },
  {
    id: 27,
    name: 'Horror'
  },
  {
    id: 10402,
    name: 'Music'
  },
  {
    id: 9648,
    name: 'Mystery'
  },
  {
    id: 10749,
    name: 'Romance'
  },
  {
    id: 878,
    name: 'Science Fiction'
  },
  {
    id: 10770,
    name: 'TV Movie'
  },
  {
    id: 53,
    name: 'Thriller'
  },
  {
    id: 10752,
    name: 'War'
  },
  {
    id: 37,
    name: 'Western'
  }
]

function fillFilter(array = [], section) {
  section.innerHTML = array.map(item => {
    return `
    <option value="${item.id}">${item.name}</option>
    `
  })
}

function findMovie() {
  const page = randomNumber()
  const movie = randomNumber()

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
    .then(response => {
      const title = response.results[movie].title
      const overview = response.results[movie].overview
      const posterPath = response.results[movie].poster_path

      movieImg.src = `${APIData.IMG_URL}${posterPath}`
      movieTitle.textContent = title
      movieOverview.textContent = overview

      console.log(response.results[movie].genre_ids)

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
}

function updateGenreID() {
  const options = this.querySelectorAll('option')

  options.forEach(option => {
    if (option.selected) {
      selectedGenreID = option.value
    }
  })
}

function randomNumber() {
  const num = Math.floor(Math.random() * 20)
  return num
}

fillFilter(genres, genreFilter)

btn.addEventListener('click', findMovie)

genreFilter.addEventListener('input', updateGenreID)
