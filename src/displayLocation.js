const displayLocation = (locationData) => {
    let locationString = `${locationData.name}`
    if (locationData.region !== '') {
        locationString += `, ${locationData.region}`
    }
    document.getElementById('location-name').textContent = locationString
    document.getElementById('location-country').textContent = `${locationData.country}`
}

export default displayLocation