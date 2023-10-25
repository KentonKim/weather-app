import weatherapi from "./weatherapi"

const getData = async (location) => {
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

export default getData