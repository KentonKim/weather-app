import { displayData } from "./displayCore";
import isToggledF from "./isToggledF";

const displayDayOfWeek = (dayObj, element, isShort = false) => {
    if (isShort) {
        displayData(dayObj.weekdayShort, element)
    } else {
        displayData(dayObj.weekdayLong, element)
    }
}

const displayTemp = (dayObj, element, isShort = false) => {
    let maxTemp
    let minTemp

    if (isToggledF()) {
        maxTemp = Math.round(dayObj.day.maxtemp_f)
        minTemp = Math.round(dayObj.day.mintemp_f)
    } else {
        maxTemp = Math.round(dayObj.day.maxtemp_c)
        minTemp = Math.round(dayObj.day.mintemp_c)
    }

    if (isShort) {
        displayData(`${maxTemp} / ${minTemp}`, element)
    } else {
        displayData(`High: ${maxTemp} \r\n Low: ${minTemp}`, element)
    }
} 

const displayCardIcon = (dayObj, element) => {
    element.style.backgroundImage = `url(http:${dayObj.day.condition.icon})`
}

const displayCardInfo = (card, dataArray, isShort) => {
    const number = card.getAttribute('data-index')
    const dayData = dataArray[number]
    displayTemp(dayData, card.lastChild, isShort)
    displayDayOfWeek(dayData, card.firstChild, isShort)
    displayCardIcon(dayData, card)
}

export {displayDayOfWeek, displayTemp, displayCardInfo} 
