import * as createDom from './dom/initializeDom'
import {setDay, setDOM, setTemp, setDayOfWeek} from './setInformation'
import './css/style.css'
import { getWeatherData } from './data/getData'
import showNotification from './dom/showNotification'
import formatWeatherData from './data/formatWeatherData'
import displayWallpaper from './dom/displayWallpaper'

// Setup main page
const [leftmain, rightmain] = createDom.createMainDom()
document.body.appendChild(leftmain)
document.body.appendChild(rightmain)

// Setup Navbar
const navbar = createDom.createNavbarDom()
leftmain.appendChild(navbar)

// Setup Main Content
const mainContent = createDom.createMainContentDom()
leftmain.appendChild(mainContent)

// Setup Cards
for (let i = 0; i < 7; i += 1) {
  let cardDiv = createDom.createCardDom(i)
  rightmain.appendChild(cardDiv)
}

// Setup data
let formattedWeatherData

// Check for window width
const mediaQueryList = window.matchMedia('(max-width: 900px)');

// Navbar with search and toggle temperature measurement option
const form = document.getElementById('search-form')
const forminput = document.getElementById('search-input')
const mainTemp = document.getElementById('main-temperature')

const searchLocation = async (query) => {
  try {
    const weatherData = await getWeatherData(query)
    formattedWeatherData = formatWeatherData(weatherData)
    /*
    call selectDay function for the first day
    make days selectable for selectDay
    FOR EACH DAY
      - set day of week, icon, temperature
        - consider toggled F
        - consider media width
     */

    console.log(weatherData)
    console.log(formattedWeatherData)
  } catch (error) {
    if (error.code && error.code === 1006) {
      showNotification('Location not found')
    }
    console.log(error)
  }
}

// New location
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // Reset day data 
  const formValue = forminput.value
  forminput.value = ''
  searchLocation(formValue)
})

// Add event listener for each card
// const cardArray = document.querySelectorAll('.card')
// for (let card of cardArray) {
//   let number = parseInt(card.getAttribute('data-index'), 10)
//   console.log(formattedWeatherData)
//   let dayData = formattedWeatherData[number] 
//   card.addEventListener('mouseup', () => {
//     displayWallpaper(document.body, dayData.day.condition.code)
//   })
// }


// radioC.onclick = () => {
//  dayArray.map((dayObj) => setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF]))
//  setDOM(mainTemp, setTemp, [selectedDay, radioF])
// }

// radioF.onclick = () => {
//  dayArray.map((dayObj) => setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF]))
//  setDOM(mainTemp, setTemp, [selectedDay, radioF])
// }

// // Add an event listener for changing from full weekday name to abbreviated 
// mediaQueryList.addEventListener('change', (event) => {
//   if (event.matches) {
//     // The width matches the media query
//     dayArray.map(dayObj => {
//       setDayOfWeek(dayObj, true)
//       setTemp(dayObj, radioF, true)
//     } )
//   } else {
//     // The width does not match the media query
//     dayArray.map(dayObj => {
//       setDayOfWeek(dayObj)
//       setTemp(dayObj, radioF)
//     } )
//   }
// });