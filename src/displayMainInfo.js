import displayWallpaper from './dom/displayWallpaper'
import isToggledF from './isToggledF'

const displayIcon = (data, element) => { // CORE FUNCTION 
    element.src = data
}

const displayData = (data, element) => { // CORE FUNCTION 
    element.textContent = data
}

const displayMainTemperature = (dayObj, element) => {
    if (isToggledF()) {
        displayData(`${dayObj.maxF}°`, element)
    } else {
        displayData(`${dayObj.maxC}°`, element)
    }
}

const displayWindSpeed = (mph, kph, element) => {
    if (isToggledF()) {
        displayData(mph, element)
    } else {
        displayData(kph, element)
    }
}

const displayHours = (dayObj, number) => {

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
}

export {displayMainInfo, displayWindSpeed, displayMainTemperature}