const url = 'https://api.github.com/users/ArthurFAmaral95'
const userLogin = document.querySelector('#userLogin')
const avatar = document.querySelector('#avatar')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const repos = document.querySelector('#repos')
const company = document.querySelector('#company')
const place = document.querySelector('#location')

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
