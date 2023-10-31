import sunriseIcon from "../icons/sunrise.svg"
import sunsetIcon from "../icons/sunset.svg"
import rainIcon from "../icons/rain.svg"
import windIcon from "../icons/wind.svg"
import snowIcon from "../icons/snow.svg"
import searchIcon from "../icons/search.svg"

const _makeElement = (type, id) => {
    const element = document.createElement(type)
    element.id = id
    return element
}

const _makeContainer = (string, img) => {
    const container = _makeElement('div', `${string}-container`)
    const icon = _makeElement('img', `${string}-icon`)
    icon.classList.add('content-icon')
    icon.src = img
    const text = _makeElement('div', `${string}-text`)
    container.appendChild(icon)
    container.appendChild(text)
    return container
}

const createMainDom = () => {
    const left = _makeElement('div', 'main-left')
    const right = _makeElement('div', 'main-right')
    right.className = 'card-container'
    return [left,right]
}

const createNavbarDom = () => {
    const navbar = _makeElement('div', 'navbar')

    // Search element
    const form = _makeElement('div', 'search-form')
    const input = _makeElement('div', 'search-input')
    input.autocomplete = 'off'
    const button = _makeElement('button', 'search-button')
    const image = _makeElement('img', 'search-icon')
    image.src = searchIcon 

    // Toggle temperature C/F
    const toggleTempLabelF = document.createElement('label')
    const toggleTempRadioF = document.createElement('input')
    toggleTempRadioF.type = 'radio'
    toggleTempRadioF.name = 'toggleTemp'
    toggleTempLabelF.textContent = 'F˚'
    toggleTempRadioF.checked = true
    toggleTempLabelF.appendChild(toggleTempRadioF)

    const toggleTempLabelC = document.createElement('label')
    const toggleTempRadioC = document.createElement('input')
    toggleTempRadioC.type = 'radio'
    toggleTempRadioC.name = 'toggleTemp'
    toggleTempLabelC.textContent = 'C˚'
    toggleTempLabelC.appendChild(toggleTempRadioC)

    const toggleTempDiv = _makeElement('div', 'toggle-temp-container')
    const toggleTempDivider = _makeElement('div', 'toggle-temp-divider')
    toggleTempDivider.innerText = '|'

    toggleTempDiv.appendChild(toggleTempLabelC)
    toggleTempDiv.appendChild(toggleTempDivider)
    toggleTempDiv.appendChild(toggleTempLabelF)

    button.appendChild(image)
    form.appendChild(input)
    form.appendChild(button)
    navbar.appendChild(form)
    navbar.appendChild(toggleTempDiv)

    return navbar 
}

const createCardDom = (number) => {
    const element = _makeElement('div', `card-${number}`)
    element.classList.add('card')
    const weekday = _makeElement('div', `card-weekday-${number}`)
    weekday.className = 'card-weekday'
    const temperature = _makeElement('div', `card-temperature-${number}`)
    temperature.className = 'card-temperature'

    element.appendChild(weekday)
    element.appendChild(temperature)
    return element
}

const createMainContentDom = () => {
    const content = _makeElement('div', 'content')
    const topContent = _makeElement('div', 'content-top')
    const bottomContent = _makeElement('div', 'content-bottom')

    // Weather icon, location, max temperature of the day
    const topHeader = _makeElement('div', 'content-header')
    const mainIconContainer = _makeElement('div', 'main-icon-container')
    const mainIcon = _makeElement('img', 'main-icon')
    const locationInfoDiv = _makeElement('div', 'location-info')
    const locationName = _makeElement('div', 'location-name')
    const locationCountry = _makeElement('div', 'location-country')
    const mainTemperature = _makeElement('div', 'main-temperature')

    // Content stuff
    const sunContainer = _makeElement('div', 'sun-container')
    sunContainer.appendChild(_makeContainer('sunrise', sunriseIcon))
    sunContainer.appendChild(_makeContainer('sunset', sunsetIcon))

    const tabDiv = _makeElement('div', 'horz-scroll-tabs')

    // Buttons for hourly info
    const temperatureButton = _makeElement('button', 'button-temperature')
    temperatureButton.textContent = "Temperature"
    temperatureButton.classList.add('tab-button')
    const windButton = _makeElement('button', 'button-wind')
    windButton.textContent = "Wind Speed"
    windButton.classList.add('tab-button')
    const precipitationButton = _makeElement('button', 'button-precipitation')
    precipitationButton.textContent = "Precipitation"
    precipitationButton.classList.add('tab-button')
    const uvButton = _makeElement('button', 'button-uv')
    uvButton.textContent = "UV"
    uvButton.classList.add('tab-button')   

    const horzScrollDiv = _makeElement('div','horz-scroll')

    // add cards
    for (let i = 0; i < 24; i += 1) {
        let hourCard = _makeElement('div', `hour-card-${i}`)
        hourCard.classList.add('hour-card')
        hourCard.textContent = i 
        horzScrollDiv.appendChild(hourCard)
    }

    locationInfoDiv.appendChild(locationName)
    locationInfoDiv.appendChild(locationCountry)

    mainIconContainer.appendChild(mainIcon)

    topHeader.appendChild(mainIconContainer)
    topHeader.appendChild(locationInfoDiv)
    topHeader.appendChild(mainTemperature)

    topContent.appendChild(topHeader)

    topContent.appendChild(sunContainer)
    topContent.appendChild(_makeContainer('wind', windIcon))
    topContent.appendChild(_makeContainer('rain', rainIcon))
    topContent.appendChild(_makeContainer('snow', snowIcon))

    tabDiv.appendChild(temperatureButton)
    tabDiv.appendChild(windButton)
    tabDiv.appendChild(precipitationButton)
    tabDiv.appendChild(uvButton)

    bottomContent.appendChild(tabDiv)
    bottomContent.appendChild(horzScrollDiv)

    content.appendChild(topContent)
    content.appendChild(bottomContent)

    return content
}

export {createMainDom, createNavbarDom, createCardDom, createMainContentDom}