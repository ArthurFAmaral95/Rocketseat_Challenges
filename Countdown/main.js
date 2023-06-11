const daysText = document.querySelector('#days .number')
const hoursText = document.querySelector('#hours .number')
const minutesText = document.querySelector('#minutes .number')
const secondsText = document.querySelector('#seconds .number')

function countDown() {
  const launchDate = new Date('September 31, 2023 00:00:00')

  const timeToLaunch = launchDate - Date.now()

  const days = Math.floor(timeToLaunch / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeToLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeToLaunch % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeToLaunch % (1000 * 60)) / 1000)

  daysText.textContent = `${days < 10 ? `0${days}` : `${days}`} :`
  hoursText.textContent = `${hours < 10 ? `0${hours}` : `${hours}`} :`
  minutesText.textContent = `${minutes < 10 ? `0${minutes}` : `${minutes}`} :`
  secondsText.textContent = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`
}

setInterval(countDown, 1000)
