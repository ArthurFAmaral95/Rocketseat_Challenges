const url = 'https://api.github.com/users/ArthurFAmaral95'
const img = document.querySelector('img')

fetch(url)
  .then(response => response.json())
  .then(data => {
    img.src = data.avatar_url
  })
