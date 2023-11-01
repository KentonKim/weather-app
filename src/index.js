import './css/style.css'
import * as createDom from './dom/initializeDom'
import { getWeatherData } from './data/getData'
import showNotification from './dom/showNotification'
import formatWeatherData from './data/formatWeatherData'
import {displayCardInfo, displayDayOfWeek, displayTemp} from './displayCardInfo'
import {displayMainInfo, displayMainTemperature, displayWindSpeed } from './displayMainInfo'
import displayLocation from './displayLocation'

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
let formattedWeatherData = []
let selectedCard = document.getElementById('card-0')
let selectedDay
let selectADay

// Check for window width
const mediaQueryList = window.matchMedia('(max-width: 900px)');

// Navbar with search and toggle temperature measurement option
const form = document.getElementById('search-form')
const forminput = document.getElementById('search-input')
const mainTemp = document.getElementById('main-temperature')

// Toggle Temperature
const radioC = document.getElementById('radio-c')
const radioF = document.getElementById('radio-f')


const searchLocation = async (query) => {
  try {
    const weatherData = await getWeatherData(query)
    formattedWeatherData = formatWeatherData(weatherData)

    // fill out the cards with info
    const cardArray = document.querySelectorAll('.card')
    for (let card of cardArray) {
      displayCardInfo(card, formattedWeatherData, mediaQueryList.matches)
    }

    // fill out location
    displayLocation(weatherData.location)
    // display the first day
    displayMainInfo(formattedWeatherData[0])
    selectedDay = formattedWeatherData[0]

    console.log(weatherData)
    console.log(formattedWeatherData)
  } catch (error) {
    if (error.code && error.code === 1006) {
      showNotification('Location not found')
    }
    console.log(error)
  }
}

// Initialize once
searchLocation('Cypress')
  .then(() => {
    selectADay = (card, dataArray) => {
        try {
          selectedCard.classList.remove('selected')
        } catch (error) {
          console.log(error)
          return
        }
        card.classList.add('selected')
        selectedCard = card
        let number = parseInt(card.getAttribute('data-index'), 10)
        let dayData = dataArray[number] 
        displayMainInfo(dayData)
    }
    selectADay(document.getElementById('card-0'), formattedWeatherData)
  })


// New location
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // Reset day data 
  const formValue = forminput.value
  forminput.value = ''
  searchLocation(formValue)
})

// Add event listener for each card
const cardArray = document.querySelectorAll('.card')
for (let card of cardArray) {
  console.log(formattedWeatherData)
  card.addEventListener('mouseup', (e) => selectADay(e.target, formattedWeatherData))
}

const toggleUnits = (dataArray, isShort) => {
  try {
    for (let i = 0; i < dataArray.length; i += 1) {
        let cardTemperature = document.getElementById(`card-temperature-${i}`)
        displayTemp(dataArray[i], cardTemperature, isShort)
    }

    // console.log(selectedDay)
    // For main
    const windText = document.getElementById('wind-text')
    const windMphData = `${Math.round(selectedDay.day.maxwind_mph)} mph`
    const windKphData = `${Math.round(selectedDay.day.maxwind_kph)} kph`
    displayWindSpeed(windMphData, windKphData, windText)
    const mainTemperature = document.getElementById('main-temperature')
    displayMainTemperature(selectedDay, mainTemperature)
  } catch (error) {
    console.log(error)
  }
}

radioC.onclick = () => {
  toggleUnits(formattedWeatherData, mediaQueryList.matches)
//  setDOM(mainTemp, setTemp, [selectedDay, radioF])
}

radioF.onclick = () => {
  toggleUnits(formattedWeatherData, mediaQueryList.matches)
//  setDOM(mainTemp, setTemp, [selectedDay, radioF])
}



// Add an event listener for changing from full weekday name to abbreviated 
mediaQueryList.addEventListener('change', (event) => {
  for (let i = 0; i < formattedWeatherData.length; i += 1) {
    let dayObj = formattedWeatherData[i]
    displayDayOfWeek(dayObj, document.getElementById(`card-weekday-${i}`), event.matches)
    displayTemp(dayObj, document.getElementById(`card-temperature-${i}`), event.matches)
  }
});


// clicks button
// calls executive function 
  // display temperature
    // 
  // display wind
  // display precipitation
  // display uv