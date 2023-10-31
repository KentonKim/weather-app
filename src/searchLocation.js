import {createCard, clearCards } from './dom/card'
import Day from './Day'
import makeDays from './formatWeatherData'
import {setDOM, setDayOfWeek, setDayOfWeekIcon, setTemp} from './setInformation'
import showNotification from './showNotification'
import displayWallpaper from './dom/displayWallpaper'

const searchLocation = async (formValue, cardContainer, radioF) => {
  const dayArray = []
  try {
    const resolve = await makeDays(formValue)
    // Clear Prior
    clearCards(cardContainer)

    console.log(resolve)
    const daysdata = resolve[1]
    
    for (let i = 0; i< daysdata.length; i += 1) {
      dayArray.push(new Day(daysdata[i], resolve[0].location, createCard(cardContainer)))
    }

    dayArray.map((dayObj) => {
      setDOM(dayObj.element, setDayOfWeekIcon, [dayObj])
      setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF, window.matchMedia('(max-width: 900px)').matches])
      setDOM(dayObj.dayDiv, setDayOfWeek, [dayObj, window.matchMedia('(max-width: 900px)').matches])
    })

    displayWallpaper(dayArray[0],document.body)
    console.log(dayArray)
  } catch(error) {
    if (error.code && error.code === 1006) {
      showNotification('Location not found')
    }
    console.log(error)
  }
  return dayArray
}

export default searchLocation