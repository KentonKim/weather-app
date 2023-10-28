import {createCard, clearCards } from './dom/card'
import Day from './Day'
import makeDays from './makeDays'
import { setTemp, setDay, setDayIcon} from './setInformation'
import showNotification from './showNotification'
import displayWallpaper from './dom/displayWallpaper'

const searchLocation = (forminput, cardContainer, radioF) => {
  const dayArray = []
  makeDays(forminput.value)
  .then((resolve) => {
    // Clear Prior
    clearCards(cardContainer)

    console.log(resolve)
    const daysdata = resolve[1]
    
    for (let i = 0; i< daysdata.length; i += 1) {
      dayArray.push(new Day(daysdata[i], resolve[0].location, createCard(cardContainer)))
    }

    dayArray.map((element) => {
      setDayIcon(element)
      setTemp(element, radioF)
      setDay(element)
    })

    displayWallpaper(dayArray[0],document.body)
  })
  .catch((error) => {
    if (error.code && error.code === 1006) {
      showNotification('Location not found')
    }
    console.log(error)
  })
  .finally (() => forminput.value = '')
  return dayArray
}

export default searchLocation