const url = 'https://api.github.com/users/ArthurFAmaral95'

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
