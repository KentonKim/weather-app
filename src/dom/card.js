const createCard = (parentDiv) => {
    const element = document.createElement('div')
    element.classList.add('card')
    const weekday = document.createElement('div')
    const temperature = document.createElement('div')

    element.appendChild(weekday)
    element.appendChild(temperature)
    parentDiv.appendChild(element)
    return element
}
export default createCard 
