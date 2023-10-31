const setDOM = (element, func, argsArray) => {
    const elementRef = element 
    elementRef.classList.add('hidden')
    setTimeout(() => {
        func.apply(null, argsArray)
        elementRef.classList.remove('hidden')
    }, 200);
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

export {setDOM, setDayOfWeek, setTemp, setDayOfWeekIcon, setContent}