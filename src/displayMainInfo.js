import displayWallpaper from './dom/displayWallpaper'
import isToggledF from './isToggledF'

const displayMainIcon = (dayObj, element) => {
    element.src = dayObj.day.condition.icon
}

const displayMainTemperature = (dayObj, element) => {
    let maxTemp
    if (isToggledF()) {
        maxTemp = dayObj.maxF
    } else {
        maxTemp = dayObj.maxC
    }
    element.textContent = `${maxTemp}°`
}

const displayData = (data, element) => {
    element.textContent = data
}

const displayWindSpeed = (mph, kph, element) => {
    if (isToggledF()) {
        element.textContent = mph
    } else {
        element.textContent = kph
    }
}

const displayMainInfo = (dayObj) => {
    displayWallpaper(document.body, dayObj.day.condition.code)

    const mainIcon = document.getElementById('main-icon')
    displayMainIcon(dayObj, mainIcon)
    const mainTemperature = document.getElementById('main-temperature')
    displayMainTemperature(dayObj, mainTemperature)

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

    // display info on main content
}


const setDay = (dayObj) => {
    dayObj.element.classList.add('selected')
    dayObj.selected = true
}

export {displayMainInfo, displayWindSpeed, displayMainTemperature}