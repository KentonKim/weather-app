import sunriseIcon from "../icons/sunrise.svg"
import sunsetIcon from "../icons/sunset.svg"
import rainIcon from "../icons/rain.svg"
import windIcon from "../icons/wind.svg"
import snowIcon from "../icons/snow.svg"


const initContainers = (parentDiv) => {
    // make container with image and text child elements
    const makeContainer = (string, img) => {
        const container = document.createElement('div')
        container.id = `${string}-container`
        const icon = document.createElement('img')
        icon.classList.add('content-icon')
        icon.id = `${string}-icon`
        icon.src = img
        const text = document.createElement('div')
        text.id = `${string}-text`
        container.appendChild(icon)
        container.appendChild(text)
        return container
    }

    // const containerContainer = document.createElement('div')
    // containerContainer.id = 'content-container'
    const contentContainer = document.createElement('div')
    contentContainer.id = "content"

    // Top part
    const topDiv = document.createElement('div')
    topDiv.id = "content-top"


    // Weather icon, location, max temperature of the day
    const topHeader = document.createElement('div')
    topHeader.id = 'content-header'
    const mainIconContainer = document.createElement('div')
    mainIconContainer.id = "main-icon-container"
    const mainIcon = document.createElement('img') 
    mainIcon.id = 'main-icon'

    const locationInfoDiv = document.createElement('div')
    const locationName = document.createElement('div')
    locationName.id = 'location-name'
    const locationCountry = document.createElement('div')
    locationCountry.id = 'location-country'
    locationInfoDiv.id = 'location-info'

    const mainTemperature = document.createElement('div')
    mainTemperature.id = 'main-temperature'

    // Content stuff
    const sunContainer = document.createElement('div')
    sunContainer.id = 'sun-container'
    sunContainer.appendChild(makeContainer('sunrise', sunriseIcon))
    sunContainer.appendChild(makeContainer('sunset', sunsetIcon))

    // Bottomm Items
    const bottomDiv = document.createElement('div')
    bottomDiv.id = "content-bottom"
    const tabDiv = document.createElement('div')
    tabDiv.id = "horz-scroll-tabs"

    const temperatureButton = document.createElement('button')
    temperatureButton.textContent = "Temperature"
    temperatureButton.classList.add('tab-button')
    const windButton = document.createElement('button')
    windButton.textContent = "Wind Speed"
    windButton.classList.add('tab-button')
    const precipitationButton = document.createElement('button')
    precipitationButton.textContent = "Precipitation"
    precipitationButton.classList.add('tab-button')
    const uvButton = document.createElement('button')
    uvButton.textContent = "UV"
    uvButton.classList.add('tab-button')   

    const horzScrollDiv = document.createElement('div')
    horzScrollDiv.id = "horz-scroll"

    // add cards
    for (let i = 0; i < 24; i += 1) {
        let hourCard = document.createElement('div')
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

    topDiv.appendChild(topHeader)

    topDiv.appendChild(sunContainer)
    topDiv.appendChild(makeContainer('wind', windIcon))
    topDiv.appendChild(makeContainer('rain', rainIcon))
    topDiv.appendChild(makeContainer('snow', snowIcon))

    tabDiv.appendChild(temperatureButton)
    tabDiv.appendChild(windButton)
    tabDiv.appendChild(precipitationButton)
    tabDiv.appendChild(uvButton)

    bottomDiv.appendChild(tabDiv)
    bottomDiv.appendChild(horzScrollDiv)

    contentContainer.appendChild(topDiv)
    contentContainer.appendChild(bottomDiv)

    // containerContainer.appendChild(contentContainer)

    // parentDiv.appendChild(containerContainer)
    parentDiv.appendChild(contentContainer)
    return 
}

export {initContainers} 