import displayWallpaper from './dom/displayWallpaper'
import isToggledF from './isToggledF'

const displayMainIcon = (dayObj, element) => {
    element.src = dayObj.day.condition.icon
}

const displayMainTemperature = (dayObj, element) => {
    let maxTemp
    if (isToggledF()) {
        maxTemp = dayObj.maxF
    } else {
        maxTemp = dayObj.maxC
    }
    element.textContent = `${maxTemp}°`
}

// function select day
    //   - display info on main content

const displayMainInfo = (dayObj) => {
    displayWallpaper(document.body, dayObj.day.condition.code)

    const mainIcon = document.getElementById('main-icon')
    displayMainIcon(dayObj, mainIcon)
    const mainTemperature = document.getElementById('main-temperature')
    displayMainTemperature(dayObj, mainTemperature)

    // display info on main content
}


const setDay = (dayObj) => {
    dayObj.element.classList.add('selected')
    dayObj.selected = true
}



export default displayMainInfo 