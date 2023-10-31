const setDOM = (element, func, argsArray) => {
    const elementRef = element 
    elementRef.classList.add('hidden')
    setTimeout(() => {
        functionReturn = func.apply(null, argsArray)
        elementRef.classList.remove('hidden')
    }, 200);
    return functionReturn
}

const setDayOfWeek = (day, isShortened = false) => {
    if (isShortened) {
        day.displayDayShort()
    } else {
        day.displayDayLong()
    }
}

const setTemp = (day, radioF, isShortened = false) => {
    let maxTemp
    let minTemp
    if (radioF.checked) {
        [maxTemp,minTemp] = day.getTempF()
    } else {
        [maxTemp,minTemp] = day.getTempC()
    }

    if (isShortened) {
        day.tempDiv.textContent = `${maxTemp} / ${minTemp}`
    } else {
        day.tempDiv.textContent = `High: ${maxTemp} \r\n Low: ${minTemp}`
    }

    if (day.selected) {
        document.getElementById('main-temperature').textContent = `${maxTemp}˚`
    }
} 

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

export {setDOM, setDay, setDayOfWeek, setTemp, setDayOfWeekIcon, setContent}