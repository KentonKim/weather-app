import makeDays from './makeDays'
import * as nav from './dom/nav'
import Day from './Day'
import {createCard, clearCards } from './dom/card'
import { setTemp, setDay} from './setInformation'
import './style.css'
import mainDom from './dom/main'
import showNotification from './showNotification'
import displayWallpaper from './dom/displayWallpaper'

// Setup main page
const [leftmain, rightmain] = mainDom(document.body)

// Navbar with search and toggle temperature measurement option
const navbar = nav.initNavbar(leftmain)
const form = nav.navForm(navbar)
const forminput = document.getElementById('search-input')
const [radioC, radioF] = nav.navToggleTemp(navbar)
// New location
const dayArray = []
form.addEventListener('submit', (event) => {
  event.preventDefault()
  makeDays(forminput.value)
  .then((resolve) => {
    clearCards(rightmain)
    console.log(resolve)
    // const data = resolve[0]
    const daysdata = resolve[1]
    
    for (let i = 0; i< daysdata.length; i += 1) {
      dayArray.push(new Day(daysdata[i], resolve[0].location, createCard(rightmain)))
    }
    setTemp(dayArray, radioF)
    setDay(dayArray)

    displayWallpaper(dayArray[0],document.body)
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

radioC.onclick = () => {
  setTemp(dayArray, radioF)
}
radioF.onclick = () => {
  setTemp(dayArray, radioF)
}
