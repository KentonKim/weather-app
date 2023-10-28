const initContainers = (parentDiv) => {
    const containerContainer = document.createElement('div')
    containerContainer.id = 'content-container'
    const contentContainer = document.createElement('div')
    contentContainer.id = "content"

    const topDiv = document.createElement('div')
    topDiv.id = "content-top"
    const todaysIcon = document.createElement('img') 
    todaysIcon.id = 'todays-icon'

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
    
    const horzScrollDiv = document.createElement('div')
    horzScrollDiv.id = "horz-scroll"

    // add cards
    for (let i = 0; i < 24; i += 1) {
        let hourCard = document.createElement('div')
        hourCard.classList.add('hour-card')
        hourCard.textContent = i 
        horzScrollDiv.appendChild(hourCard)
    }

    topDiv.appendChild(todaysIcon)
    tabDiv.appendChild(temperatureButton)
    tabDiv.appendChild(windButton)
    tabDiv.appendChild(precipitationButton)
    bottomDiv.appendChild(tabDiv)
    bottomDiv.appendChild(horzScrollDiv)
    contentContainer.appendChild(topDiv)
    contentContainer.appendChild(bottomDiv)
    containerContainer.appendChild(contentContainer)
    parentDiv.appendChild(containerContainer)
    return 
}

export {initContainers} 