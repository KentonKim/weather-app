import getData from './getData';
import './style.css'

console.log('hello')

let days
getData('90630')
  .then((resolve) => {
    console.log(resolve)
    days = resolve
  })
  .catch((error) => {
    console.log(error)
  })