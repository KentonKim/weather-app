import getData from './getData'
import makeDays from './makeDays'
import { DateTime } from 'luxon'
import './style.css'

console.log('hello')

makeDays('Seoul')
  .then((resolve) => {
    console.log(resolve)
  })
  .catch((error) => {
    console.log(error)
  })

