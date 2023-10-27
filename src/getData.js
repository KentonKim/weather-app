import weatherapi from "./weatherapi"
import { unsplashApi, unsplashSecretApi } from "./unsplashapi"

const getWeatherData = async (location) => {
    const string = `https://api.weatherapi.com/v1/forecast.json?key=${weatherapi()}&q=${location}&days=7`
    try {
        const response = await fetch(string)
        const data = await response.json()
        if (data.error && data.error.code === 1006) {
            throw data.error
        }
        return data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

const getUnsplashData = async (weather) => {
    const string = `${unsplashApi()}`

}

export {getWeatherData, getUnsplashData }