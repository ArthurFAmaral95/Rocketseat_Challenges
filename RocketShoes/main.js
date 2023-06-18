const smallImgs = document.querySelectorAll('.small-picture img')

function toggleSelectedImg(e) {
  smallImgs.forEach(img => img.classList.remove('selected'))

  e.target.classList.add('selected')


}

smallImgs.forEach(img => img.addEventListener('click', toggleSelectedImg))
