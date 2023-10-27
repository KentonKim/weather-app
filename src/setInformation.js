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

export {setDay, setTemp, setDayIcon}