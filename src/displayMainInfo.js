import displayWallpaper from './dom/displayWallpaper'
import isToggledF from './isToggledF'
import { displayData, displayIcon } from './displayCore'


const displayMainTemperature = (dayObj, element) => {
    if (isToggledF()) {
        displayData(`${Math.round(dayObj.day.maxtemp_f)}°`, element)
    } else {
        displayData(`${Math.round(dayObj.day.maxtemp_c)}°`, element)
    }
}

const displayHourCardTemperature = (hourObj, element) => {
    if (isToggledF()) {
        displayData(`${Math.round(hourObj.temp_f)}°`, element)
    } else {
        displayData(`${Math.round(hourObj.temp_c)}°`, element)
    }
}

const displayWindSpeed = (mph, kph, element) => {
    if (isToggledF()) {
        displayData(mph, element)
    } else {
        displayData(kph, element)
    }
}

const displayMainInfo = (dayObj) => {
    displayWallpaper(document.body, dayObj.day.condition.code)

    // Icon
    const mainIcon = document.getElementById('main-icon')
    displayIcon(dayObj.day.condition.icon, mainIcon)
    const mainIconText = document.getElementById('main-icon-text')
    displayData(dayObj.weekdayShort.toUpperCase(), mainIconText)
    // Temperature
    const mainTemperature = document.getElementById('main-temperature')
    displayMainTemperature(dayObj, mainTemperature)

    // Main Content Data
    const sunriseText = document.getElementById('sunrise-text')
    const sunriseData = dayObj.astro.sunrise
    displayData(sunriseData, sunriseText)
    const sunsetText = document.getElementById('sunset-text')
    const sunsetData = dayObj.astro.sunset
    displayData(sunsetData, sunsetText)
    const windText = document.getElementById('wind-text')
    const windMphData = `${Math.round(dayObj.day.maxwind_mph)} mph`
    const windKphData = `${Math.round(dayObj.day.maxwind_kph)} kph`
    displayWindSpeed(windMphData, windKphData, windText)
    const snowText = document.getElementById('snow-text')
    const snowData = `${dayObj.day.daily_chance_of_snow}%`
    displayData(snowData, snowText)
    const rainText = document.getElementById('rain-text')
    const rainData = `${dayObj.day.daily_chance_of_rain}%`
    displayData(rainData, rainText)

    displayHourTemp(dayObj)
}

const displayHourTemp = (dayObj) => {
    const hourCardIconArray = document.querySelectorAll('.hour-card-icon')
    const hourCardTextArray = document.querySelectorAll('.hour-card-text')

    for (let i = 0; i < hourCardIconArray.length; i += 1) {
        displayHourCardTemperature(dayObj.hour[i], hourCardTextArray[i])
        displayIcon(dayObj.hour[i].condition.icon, hourCardIconArray[i])
    }
}



export {displayMainInfo, displayWindSpeed, displayMainTemperature}