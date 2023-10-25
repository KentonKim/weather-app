export const createCard = (parentDiv, weekdayText, temperatureText) => {
    const element = document.createElement('div')
    element.classList.add('card')
    const weekday = document.createElement('div')
    weekday.className = 'weekday'
    weekday.textContent = weekdayText
    const temperature = document.createElement('div')
    temperature.className = 'temperature'
    temperature.textContent = temperatureText 

    element.appendChild(weekday)
    element.appendChild(temperature)
    parentDiv.appendChild(element)
    return element
}
export const clearCards = (parentDiv) => {
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
}
