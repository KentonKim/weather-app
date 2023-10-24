import makeDays from './makeDays'
import './style.css'

console.log('hello')

makeDays('Seoul')
  .then((resolve) => {
    console.log(resolve)
  })
  .catch((error) => {
    console.log(error)
  })

