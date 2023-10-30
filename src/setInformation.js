const setDOM = (element, func, argsArray) => {
    const elementRef = element 
    elementRef.classList.add('hidden')
    setTimeout(() => {
        func.apply(null, argsArray)
        elementRef.classList.remove('hidden')
    }, 200);
}

const setDay = (day) => {
    if (true) {
        day.displayDayLong()
    } else {
        day.displayDayShort()
    }
}

const setTemp = (day, radioF) => {
    let maxTemp
    let minTemp
    if (radioF.checked) {
        [maxTemp,minTemp] = day.getTempF()
    } else {
        [maxTemp,minTemp] = day.getTempC()
    }

    day.tempDiv.textContent = `High: ${maxTemp} \r\n Low: ${minTemp}`
    if (day.selected) {
        document.getElementById('main-temperature').textContent = `${maxTemp}˚`
    }
} 

const setDayIcon = (day) => {
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

export {setDOM, setDay, setTemp, setDayIcon, setContent}