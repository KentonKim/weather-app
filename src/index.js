import * as nav from './dom/nav'
import {setDay, setDOM, setTemp, setDayOfWeek} from './setInformation'
import './style.css'
import mainDom from './dom/main'
import searchLocation from './searchLocation'
import { initContainers } from './dom/content'

// Setup main page
const [leftmain, rightmain] = mainDom(document.body)

// Check for window width
const mediaQueryList = window.matchMedia('(max-width: 900px)');

// Navbar with search and toggle temperature measurement option
const navbar = nav.initNavbar(leftmain)
const form = nav.navForm(navbar)
const forminput = document.getElementById('search-input')
const [radioC, radioF] = nav.navToggleTemp(navbar)
initContainers(leftmain)
const mainTemp = document.getElementById('main-temperature')
let selectedDay;
const dayArray = []

// New location
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

radioC.onclick = () => {
 dayArray.map((dayObj) => setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF]))
 setDOM(mainTemp, setTemp, [selectedDay, radioF])
}

radioF.onclick = () => {
 dayArray.map((dayObj) => setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF]))
 setDOM(mainTemp, setTemp, [selectedDay, radioF])
}

// Add an event listener for changing from full weekday name to abbreviated 
mediaQueryList.addEventListener('change', (event) => {
  if (event.matches) {
    // The width matches the media query
    dayArray.map(dayObj => {
      setDayOfWeek(dayObj, true)
      setTemp(dayObj, radioF, true)
    } )
  } else {
    // The width does not match the media query
    dayArray.map(dayObj => {
      setDayOfWeek(dayObj)
      setTemp(dayObj, radioF)
    } )
  }
});