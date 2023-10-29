import * as nav from './dom/nav'
import {setDOM, setTemp} from './setInformation'
import './style.css'
import mainDom from './dom/main'
import searchLocation from './searchLocation'
import setDay from './setMainInformation'
import { initContainers } from './dom/content'

// Setup main page
const [leftmain, rightmain] = mainDom(document.body)

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
    arr.map( (element) => dayArray.push(element))
    // Initialize first day as selected date
    selectedDay = setDay(dayArray[0])
  } catch (error) {
    console.log(error)
  } finally {
    forminput.value = ''
  }
})

// initialize
const arr = await searchLocation("Los Angeles", rightmain, radioF)
arr.map( (element) => dayArray.push(element))
// Initialize first day as selected date
selectedDay = setDay(dayArray[0])



radioC.onclick = () => {
 dayArray.map((dayObj) => setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF]))
 setDOM(mainTemp, setTemp, [selectedDay, radioF])
}

radioF.onclick = () => {
 dayArray.map((dayObj) => setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF]))
 setDOM(mainTemp, setTemp, [selectedDay, radioF])
}
// display main page
// 1. select day
// 2. access day data
// 3. get day data
// 4. output day data in dom

// a. add units to setinformation 
