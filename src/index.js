import './css/style.css'
import * as createDom from './dom/initializeDom'
import { getUnsplashData, getWeatherData } from './data/getData'
import showNotification from './dom/showNotification'
import formatWeatherData from './data/formatWeatherData'
import {displayCardInfo, displayDayOfWeek, displayTemp} from './dom/displayCardInfo'
import {displayHourPrecip, displayHourTemp, displayHourUV, displayHourWind, displayMainInfo, displayMainTemperature, displayToggleData} from './dom/displayMainInfo'
import displayLocation from './dom/displayLocation'
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
let formattedWeatherData = []
let selectedCard = document.getElementById('card-1') // anything but card-0
let currentButton = document.getElementById('button-uv') // anything but temp button
let selectedDay

// Check for window width
const mediaQueryList = window.matchMedia('(max-width: 900px)');

// Navbar with search and toggle temperature measurement option
const form = document.getElementById('search-form')
const forminput = document.getElementById('search-input')

// Toggle Temperature
const radioC = document.getElementById('radio-c')
const radioF = document.getElementById('radio-f')

// Toggle Hour Information
const temperatureButton = document.getElementById('button-temperature')
const windButton = document.getElementById('button-wind')
const precipitationButton = document.getElementById('button-precipitation')
const uvButton = document.getElementById('button-uv')

// hour buttons
const clickButton = (e) => {
  currentButton = e.target

  // Move Underline
  const buttonRect = currentButton.getBoundingClientRect();
  const underlineOffset = buttonRect.left - document.getElementById('button-temperature').getBoundingClientRect().left;
  underline.style.width = currentButton.offsetWidth + 'px';
  underline.style.transform = `translateX(${underlineOffset}px)`;

  // Display info
  if (e.target === document.getElementById('button-temperature')) {
    displayHourTemp(selectedDay)
  } else if (e.target === document.getElementById('button-wind')) {
    displayHourWind(selectedDay)
  } else if (e.target === document.getElementById('button-precipitation')) {
    displayHourPrecip(selectedDay)
  } else {
    displayHourUV(selectedDay)
  }
}

precipitationButton.onclick = clickButton
temperatureButton.onclick = clickButton
windButton.onclick = clickButton
uvButton.onclick = clickButton 

let selectADay = (card, data) => {
  temperatureButton.click()
  if (card === selectedCard || card.parentElement === selectedCard) {
    return
  }
  let cardref = card
  if (!cardref.classList.contains('card')) {
    cardref = cardref.parentElement
  }
  selectedCard.classList.remove('selected')
  cardref.classList.add('selected')
  selectedCard = cardref
  selectedDay = data 
  displayMainInfo(selectedDay)
}

const searchLocation = async (query) => {
  try {
    const weatherData = await getWeatherData(query)
    formattedWeatherData = await formatWeatherData(weatherData)

    // fill out the cards with info
    const cardArray = document.querySelectorAll('.card')
    for (let card of cardArray) {
      displayCardInfo(card, formattedWeatherData, mediaQueryList.matches)
    }

    // fill out location
    displayLocation(weatherData.location)
    // fill out wallpaper
    displayWallpaper(document.body, weatherData.location.name + " " + weatherData.location.region)
    // display the first day
    selectADay(document.getElementById('card-0'), formattedWeatherData[0])
    selectedDay = formattedWeatherData[0]

    console.log(weatherData)
    console.log(formattedWeatherData)
  } catch (error) {
    if (error.code && error.code === 1006) {
      showNotification('Location not found')
    }
    console.log(error)
  } finally {
    return formattedWeatherData
  }
}

// Initialize once
searchLocation('Cypress')
  .then((resolvedData) => {
    // Add event listener for each card
    const cardArray = document.querySelectorAll('.card')
    for (let i = 0; i < cardArray.length; i += 1) {
      let card = cardArray[i]
      card.addEventListener('mouseup', (e) => selectADay(e.target, resolvedData[i]))
    }
    // Initialize once
    selectADay(document.getElementById('card-0'), resolvedData[0])
  })


// New location
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // Reset day data 
  const formValue = forminput.value
  forminput.value = ''
  searchLocation(formValue)
})

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
    displayToggleData(windMphData, windKphData, windText)
    const mainTemperature = document.getElementById('main-temperature')
    displayMainTemperature(selectedDay, mainTemperature)

    // For hour cards
    if (currentButton === document.getElementById('button-temperature')) {
      displayHourTemp(selectedDay)
    } else if (currentButton=== document.getElementById('button-wind')) {
      displayHourWind(selectedDay)
    } else if (currentButton === document.getElementById('button-precipitation')) {
      displayHourPrecip(selectedDay)
    } else {
      displayHourUV(selectedDay)
    }

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


