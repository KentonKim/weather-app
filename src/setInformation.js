const setDOM = (element, func, argsArray) => {
    element.classList.add('hidden')
    setTimeout(() => {
        func.apply(null, argsArray)
        element.classList.remove('hidden')
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
    if (radioF.checked) {
        day.displayTempF()
    } else {
        day.displayTempC()
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