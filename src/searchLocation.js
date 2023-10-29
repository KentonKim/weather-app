import {createCard, clearCards } from './dom/card'
import Day from './Day'
import makeDays from './makeDays'
import {setDOM, setDay, setDayIcon, setTemp} from './setInformation'
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
      setDOM(dayObj.element, setDayIcon, [dayObj])
      setDOM(dayObj.tempDiv, setTemp, [dayObj, radioF])
      setDOM(dayObj.dayDiv, setDay, [dayObj])
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