import isToggledF from "./isToggledF";

const setDOM = (element, func, argsArray) => {
    const elementRef = element 
    elementRef.classList.add('hidden')
    setTimeout(() => {
        functionReturn = func.apply(null, argsArray)
        elementRef.classList.remove('hidden')
    }, 200);
    return functionReturn
}

const displayDayOfWeek = (dayObj, element, isLong = true) => {
    if (isLong) {
        element.textContent = dayObj.weekdayLong
    } else {
        element.textContent = dayObj.weekdayShort
    }
}

const displayTemp = (dayObj, element, isLong = true) => {
    let maxTemp
    let minTemp

    if (isToggledF()) {
        maxTemp = dayObj.maxF
        minTemp = dayObj.minF
    } else {
        maxTemp = dayObj.maxC
        minTemp = dayObj.minC
    }

    if (isLong) {
        element.textContent = `High: ${maxTemp} \r\n Low: ${minTemp}`
    } else {
        element.textContent = `${maxTemp} / ${minTemp}`
    }
} 

const displayCardInfo = (card, dataArray) => {
    const number = card.getAttribute('data-index')
    const dayData = dataArray[number]
    displayTemp(dayData, card.lastChild)
    displayDayOfWeek(dayData, card.firstChild)
}

// who knows what works down there


const setDay = (dayObj) => {
    dayObj.element.classList.add('selected')
    dayObj.selected = true

    // Weather Icon
    const mainIcon = document.getElementById('main-icon')
    mainIcon.src = dayObj.data.day.condition.icon
    // Location
    const locationData = dayObj.location
    let locationString = `${locationData.name}`
    if (locationData.region !== '') {
        locationString += `, ${locationData.region}`
    }
    document.getElementById('location-name').textContent = locationString
    document.getElementById('location-country').textContent = `${locationData.country}`


    // Sunset Sunrise

    return dayObj
}



const setDayOfWeekIcon = (day) => {
    day.element.style.backgroundImage = `url(http:${day.data.day.condition.icon})`
    day.element.style.backgroundPosition = "center"
    day.element.style.backgroundRepeat = "no-repeat"
}

const setContent = (day) => {
    // set icon
}

const setTab = (day) => {
    // displays temp / precipitation / wind hourly
}

export default displayCardInfo
