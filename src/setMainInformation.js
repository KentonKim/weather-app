const setDay = (dayObj) => {
    dayObj.element.classList.add('selected')
    dayObj.selected = true

    // Weather Icon
    const mainIcon = document.getElementById('main-icon')
    mainIcon.src = dayObj.data.day.condition.icon
    // Location
    const locationData = dayObj.location
    let locationString = `${locationData.name}`
    if (locationData.region !== '') {
        locationString += `, ${locationData.region}`
    }
    document.getElementById('location-name').textContent = locationString
    document.getElementById('location-country').textContent = `${locationData.country}`


    // Sunset Sunrise

    return dayObj
}

export default setDay 