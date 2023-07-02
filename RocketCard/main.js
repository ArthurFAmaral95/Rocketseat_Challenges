const url = 'https://api.github.com/users/ArthurFAmaral95'
const userLogin = document.querySelector('#userLogin')
const avatar = document.querySelector('#avatar')

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    userLogin.textContent = data.login
    avatar.src = data.avatar_url
  })
