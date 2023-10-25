import makeDays from './makeDays'
import nav from './dom/nav'
import Day from './Day'
import {createCard, clearCards } from './dom/card'
import { setTemp, setDay } from './setInformation'
import './style.css'
import mainDom from './dom/main'

console.log('hello')

const [leftmain, rightmain] = mainDom(document.body)
const navbar = nav(leftmain)
const form = document.getElementById('search-form')
const forminput = document.getElementById('search-input')


// New location
form.addEventListener('submit', (event) => {
  event.preventDefault()
  clearCards(rightmain)
  makeDays(forminput.value)
  .then((resolve) => {
    forminput.value = ''
    // const data = resolve[0]
    const daysdata = resolve[1]
    const dayArray = []
    
    for (let i = 0; i< daysdata.length; i += 1) {
      dayArray.push(new Day(daysdata[i], createCard(rightmain)))
    }
    setTemp(dayArray)
    setDay(dayArray)
  })
  .catch((error) => {
    if (error.code && error.code === 1006) {
      // displayNoLocation();
      console.log('location not found')
    } else {
    console.log(error)
    }
  })
})