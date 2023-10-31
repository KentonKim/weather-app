import isToggledF from "./isToggledF";


const displayDayOfWeek = (dayObj, element, isShort = false) => {
    if (isShort) {
        element.textContent = dayObj.weekdayShort
    } else {
        element.textContent = dayObj.weekdayLong
    }
}

const displayTemp = (dayObj, element, isShort = false) => {
    let maxTemp
    let minTemp

    if (isToggledF()) {
        maxTemp = dayObj.maxF
        minTemp = dayObj.minF
    } else {
        maxTemp = dayObj.maxC
        minTemp = dayObj.minC
    }

    if (isShort) {
        element.textContent = `${maxTemp} / ${minTemp}`
    } else {
        element.textContent = `High: ${maxTemp} \r\n Low: ${minTemp}`
    }
} 

const displayCardIcon = (dayObj, element) => {
    element.style.backgroundImage = `url(http:${dayObj.day.condition.icon})`
    element.style.backgroundPosition = "center"
    element.style.backgroundRepeat = "no-repeat"
}

const displayCardInfo = (card, dataArray) => {
    const number = card.getAttribute('data-index')
    const dayData = dataArray[number]
    displayTemp(dayData, card.lastChild)
    displayDayOfWeek(dayData, card.firstChild)
    displayCardIcon(dayData, card)
}

export {displayDayOfWeek, displayTemp, displayCardInfo} 
