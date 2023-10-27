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
    // weather icon
    const icon = document.createElement('img')
    console.log(day.data.day.condition.icon)
    icon.src = day.data.day.condition.icon
    day.element.appendChild(icon)
}

export {setDay, setTemp, setDayIcon}