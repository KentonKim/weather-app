import isToggledF from "./isToggledF";


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

export default displayCardInfo
