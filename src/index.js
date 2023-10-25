import makeDays from './makeDays'
import nav from './dom/nav'
import {createCard, clearCards } from './dom/card'
import './style.css'
import mainDom from './dom/main'

console.log('hello')

const [leftmain, rightmain] = mainDom(document.body)
const navbar = nav(leftmain)
const form = document.getElementById('search-form')
const forminput = document.getElementById('search-input')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  makeDays(forminput.value)
  .then((resolve) => {
    clearCards(rightmain)
    const data = resolve[0]
    const daysdata = resolve[1]
    console.log(daysdata)
    
    for (let i = 1; i< daysdata.length; i += 1) {
      createCard(rightmain, daysdata[i].weekdayLong, `${daysdata[i].day.mintemp_f} / ${daysdata[i].day.maxtemp_f}`)
    }
    console.log(resolve)


    forminput.value = ''
  })
  .catch((error) => {
    throw new Error(error)
  })
})




// const cardContainer = document.createElement('div')
// cardContainer.classList.add('card-container')
// document.body.appendChild(cardContainer)
// let weathercard 
// for (let i = 0; i < 7; i += 1) {
//   weathercard = card(cardContainer)
//   if (i == 6) {
//     console.log(weathercard)
//     weathercard.classList.add('selected')
//   }
// }
