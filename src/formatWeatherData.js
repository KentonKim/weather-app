import { DateTime } from 'luxon'

const formatWeatherData = (weatherData) => {
    try {
        const zone = weatherData.location.tz_id
        const daysForecast = weatherData.forecast.forecastday
        const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
        daysForecast.forEach( (element) => {
            const dateStr = element.date 
            const match = dateStr.match(regex);
            const year = parseInt(match[1], 10);
            const month = parseInt(match[2], 10);
            const day = parseInt(match[3], 10);
            const dateTime = DateTime.fromObject({
                year: year,
                month: month,
                day: day
            }, {
                zone: zone, // Replace with your desired time zone
            });
            if (!element.weekday) {
                element.weekday = dateTime.weekday
            }
            if (!element.weekdayLong) {
                element.weekdayLong = dateTime.weekdayLong
            }
            if (!element.weekdayShort) {
                element.weekdayShort = dateTime.weekdayShort
            }
        })
    return daysForecast
    } catch(error) {
        throw error
    }
}

export default formatWeatherData 