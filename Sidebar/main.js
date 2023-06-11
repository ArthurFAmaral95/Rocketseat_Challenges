const menuBtn = document.getElementById('menu')
const logo = document.getElementById('logo')
const descriptions = document.querySelectorAll('span')
const user = document.getElementById('user')

function toggleMenu() {
  logo.classList.toggle('hidden')

  descriptions.forEach(description => description.classList.toggle('hidden'))

  user.classList.toggle('hidden')
}

menuBtn.addEventListener('click', toggleMenu)
