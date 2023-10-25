export const createCard = (parentDiv) => {
    const element = document.createElement('div')
    element.classList.add('card')
    const weekday = document.createElement('div')
    weekday.className = 'weekday'
    const temperature = document.createElement('div')
    temperature.className = 'temperature'

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
