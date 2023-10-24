import makeDays from './makeDays'
import './style.css'

console.log('hello')

makeDays('90630')
  .then((resolve) => {
    console.log(resolve)
  })
  .catch((error) => {
    console.log(error)
  })