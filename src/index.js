import * as nav from './dom/nav'
import {setDOM, setTemp} from './setInformation'
import './style.css'
import mainDom from './dom/main'
import searchLocation from './searchLocation'
import selectDay from './selectDay'
import { initContainers } from './dom/content'

// Setup main page
const [leftmain, rightmain] = mainDom(document.body)

// Navbar with search and toggle temperature measurement option
const navbar = nav.initNavbar(leftmain)
const form = nav.navForm(navbar)
const forminput = document.getElementById('search-input')
const [radioC, radioF] = nav.navToggleTemp(navbar)

const dayArray = []

// New location
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  dayArray.length = 0
  const arr = await searchLocation(forminput, rightmain, radioF)
  arr.map( (element) => dayArray.push(element))
  console.log(dayArray[0].data.day.condition)
  selectDay(dayArray[0])
})

radioC.onclick = () => dayArray.map((dayObj) => setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF]))
radioF.onclick = () => dayArray.map((dayObj) => setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF]))

// display main page
// 1. select day
// 2. access day data
// 3. get day data
// 4. output day data in dom

// a. add units to setinformation 

initContainers(leftmain)