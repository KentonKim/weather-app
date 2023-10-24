import getData from "./getData"

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const daysShort = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thur',
    'Fri',
    'Sat',
]

const getDays = async (location) => {
    const resolve = await getData(location)
    const epoch = resolve.current.last_updated_epoch * 1000
    const daysForecast = resolve.forecast.forecastday
    const today = new Date(epoch)
    let dayNumber = today.getDay();
    daysForecast.forEach( (day) => {
        day.dayOfWeek = days[dayNumber]
        day.dayOfWeekShort = daysShort[dayNumber]
        dayNumber += 1
        if (dayNumber == 7) {
            dayNumber = 0
        }
    })
    return daysForecast
}

export default getDays