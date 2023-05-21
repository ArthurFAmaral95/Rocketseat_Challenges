const url = 'https://api.github.com/users/ArthurFAmaral95'
const imgs = document.querySelectorAll('img')
const fullName = document.querySelector('#name')
const description = document.querySelector('#description')
const country = document.querySelector('#country')
const company = document.querySelector('#company')
const github = document.querySelector('#github')

fetch(url)
  .then(response => response.json())
  .then(data => {
    imgs.forEach(img => {
      img.src = data.avatar_url
    })
    fullName.textContent = data.name
    description.textContent = data.bio
    country.textContent = data.location
    company.textContent = data.company
    github.textContent = data.login
  })
