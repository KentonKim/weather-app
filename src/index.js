import getData from './getData';
import './style.css'

console.log('hello')

let days
getData('90630')
  .then((resolve) => {
    console.log(resolve)
    days = resolve.forecast.forecastday
    console.log(days)
    days.forEach(element => {
      const date = new Date(element.date_epoch*1000)
      console.log(date, date.getUTCDate())
    });
  })
  .catch((error) => {
    console.log(error)
  })