const nav = document.querySelector('nav')
const openMenu = document.querySelector('#openMenu')
const closeMenu = document.querySelector('#closeMenu')

function openCloseMenu() {
  nav.classList.toggle('hidden')
  openMenu.classList.toggle('hidden')
  closeMenu.classList.toggle('hidden')
  document.body.classList.toggle('menu')
}

openMenu.addEventListener('click', openCloseMenu)
closeMenu.addEventListener('click', openCloseMenu)
