const form = document.querySelector('form')
const input = document.querySelector('input')

const emailsDB = JSON.parse(localStorage.getItem('emails')) || []

function formSubmit(e) {
  e.preventDefault()

  alert(`${input.value} submitted`)

  emailsDB.push(input.value)

  localStorage.setItem('emails', JSON.stringify(emailsDB))

  form.reset()
}

form.addEventListener('submit', formSubmit)
