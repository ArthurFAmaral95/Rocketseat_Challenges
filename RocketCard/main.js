const url = 'https://api.github.com/users/ArthurFAmaral95'
const userLogin = document.querySelector('#userLogin')

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    userLogin.textContent = data.login
  })
