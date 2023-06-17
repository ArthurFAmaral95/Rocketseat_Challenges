const passwordInput = document.getElementById('password')
const eye = document.querySelector('#eye')
const form = document.querySelector('form')

eye.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
  } else {
    passwordInput.type = 'password'
  }
})

form.addEventListener('submit', e => {
  e.preventDefault()
  form.reset()
})
