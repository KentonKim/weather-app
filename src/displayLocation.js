import { displayData } from "./displayCore"

const displayLocation = (locationData) => {
    let locationString = `${locationData.name}`
    if (locationData.region !== '') {
        locationString += `, ${locationData.region}`
    }
    const locationName = document.getElementById('location-name')
    const locationCountry = document.getElementById('location-country')
    displayData(locationString, locationName)
    displayData(locationData.country, locationCountry)
}

export default displayLocation