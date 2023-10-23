import weatherapi from "./weatherapi"

const getData = async (location) => {
    const string = `https://api.weatherapi.com/v1/forecast.json?key=${weatherapi()}&q=${location}&days=7`
    const response = await fetch(string)
    const data = await response.json()
    // return data.forecast.forecastday
    return data
}

export default getData