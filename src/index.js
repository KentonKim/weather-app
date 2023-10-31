import * as createDom from './dom/initializeDom'
import {setDay, setDOM, setTemp, setDayOfWeek} from './setInformation'
import './style.css'
import { getWeatherData } from './getData'
import showNotification from './showNotification'
import formatWeatherData from './formatWeatherData'

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

// Check for window width
const mediaQueryList = window.matchMedia('(max-width: 900px)');

// Navbar with search and toggle temperature measurement option
const form = document.getElementById('search-form')
const forminput = document.getElementById('search-input')
const mainTemp = document.getElementById('main-temperature')
let selectedDay;
let dayArray

// New location
/*
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const formValue = forminput.value
  dayArray.length = 0
  try {
    const arr = await searchLocation(formValue, rightmain, radioF)
    arr.map( element => dayArray.push(element))
    // Initialize first day as selected date
    selectedDay = setDay(dayArray[0])

    // Make days selectable
    dayArray.forEach( dayObj => {
      dayObj.element.addEventListener('mouseup', () => {
        // selectedDay = setDOM(, setDay, dayObj)
        // TODO SPLIT UP SETDAY
      })
    })
  } catch (error) {
    console.log(error)
  } finally {
    forminput.value = ''
  }
})
*/

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  // Reset day data 
  const formValue = forminput.value
  forminput.value = ''
  try {
    // just get the damn data
    const weatherData = await getWeatherData(formValue)
    const formattedWeatherData = formatWeatherData(weatherData)

    // function that takes formatted data and
      // outputs day class array
    console.log(weatherData)
    console.log(formattedWeatherData)
  } catch (error) {
    if (error.code && error.code === 1006) {
      showNotification('Location not found')
    }
    console.log(error)
    return
  }
})

/*
Form should search for data
- if it finds data, call function with resolve 
- if it doesnt, notify 
*/ 








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