import makeDays from './makeDays'
import nav from './dom/nav'
import Day from './Day'
import {createCard, clearCards } from './dom/card'
import { setTemp, setDay } from './setInformation'
import './style.css'
import mainDom from './dom/main'
import showNotification from './showNotification'
import toggleCF from './dom/toggleCF'

// Setup main page
const [leftmain, rightmain] = mainDom(document.body)
const form = document.getElementById('search-form')
const forminput = document.getElementById('search-input')

// Navbar with search and toggle temperature measurement option
const navbar = nav(leftmain)
toggleCF(navbar)

// New location
form.addEventListener('submit', (event) => {
  event.preventDefault()
  makeDays(forminput.value)
  .then((resolve) => {
    clearCards(rightmain)
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
      showNotification('Location not found')
      console.log('location not found')
    } else {
    console.log(error)
    }
  })
  .finally (() => forminput.value = '')
})
