const initContainers = (parentDiv) => {
    const containerContainer = document.createElement('div')
    containerContainer.id = 'content-container'
    const contentContainer = document.createElement('div')
    contentContainer.id = "content"

    const topDiv = document.createElement('div')
    topDiv.id = "content-top"

    const bottomDiv = document.createElement('div')
    bottomDiv.id = "content-bottom"
    const tabDiv = document.createElement('div')
    tabDiv.id = "horz-scroll-tabs"
    const horzScrollDiv = document.createElement('div')
    horzScrollDiv.id = "horz-scroll"

    // add cards
    for (let i = 0; i < 7; i += 1) {
        let hourCard = document.createElement('div')
        hourCard.classList.add('hour-card')
        hourCard.textContent = i 
        horzScrollDiv.appendChild(hourCard)
    }

    bottomDiv.appendChild(tabDiv)
    bottomDiv.appendChild(horzScrollDiv)
    contentContainer.appendChild(topDiv)
    contentContainer.appendChild(bottomDiv)
    containerContainer.appendChild(contentContainer)
    parentDiv.appendChild(containerContainer)
    return 
}

export {initContainers} 