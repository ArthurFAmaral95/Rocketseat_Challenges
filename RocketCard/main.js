import { toJpeg } from 'html-to-image'

const url = 'https://api.github.com/users/ArthurFAmaral95'
const userLogin = document.querySelector('#userLogin')
const avatar = document.querySelector('#avatar')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const repos = document.querySelector('#repos')
const company = document.querySelector('#company')
const place = document.querySelector('#location')
const btns = document.querySelectorAll('.buttons button')
const bgCard = document.querySelector('.bgCard')

fetch(url)
  .then(response => response.json())
  .then(data => {
    userLogin.textContent = data.login
    avatar.src = data.avatar_url
    followers.textContent = `${data.followers} Followers`
    following.textContent = `${data.following} Following`
    repos.textContent = `${data.public_repos} Repositories`
    company.textContent = data.company
    place.textContent = data.location
  })

function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}

function randomRGB() {
  return `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(
    0,
    255
  )})`
}

function handleClick(e) {
  console.log(e.target.id)
  if (e.target.id === 'bg') {
    bgCard.style.backgroundColor = randomRGB()
  } else if (e.target.id === 'download') {
    toJpeg(document.querySelector('.card'), { quality: 0.95 }).then(function (
      dataUrl
    ) {
      const link = document.createElement('a')
      link.download = 'myCard.jpeg'
      link.href = dataUrl
      link.click()
      link.remove()
    })
  }
}

btns.forEach(btn => btn.addEventListener('click', handleClick))
