const menuBtn = document.getElementById('menu')
const logo = document.getElementById('logo')
const descriptions = document.querySelectorAll('span')
const user = document.getElementById('user')
const sidebar = document.getElementById('sidebar')

function toggleMenu() {
  if (document.body.classList.contains('compact')) {
    logo.classList.remove('hidden')

    descriptions.forEach(description => description.classList.remove('hidden'))

    user.classList.remove('hidden')

    sidebar.classList.remove('hidden')

    user.classList.remove('absolute')

    descriptions.forEach(description => description.classList.remove('none'))

    setTimeout(() => {
      user.classList.remove('noText')
    }, 300)
  } else {
    logo.classList.add('hidden')

    descriptions.forEach(description => description.classList.add('hidden'))

    user.classList.add('hidden')

    sidebar.classList.add('hidden')

    setTimeout(() => {
      user.classList.add('absolute')

      descriptions.forEach(description => description.classList.add('none'))

      user.classList.add('noText')
    }, 500)
  }

  document.body.classList.toggle('compact')
}

menuBtn.addEventListener('click', toggleMenu)
