import * as APIData from './api.js'

function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}
