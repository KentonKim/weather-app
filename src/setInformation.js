const setDay = (dayarray) => {
// check condition
    let dayfunc
    if (true) {
        dayfunc = (dayElement) => {
            dayElement.displayDayLong()
        }
    } else {
        dayfunc = (dayElement) => {
            dayElement.displayDayShort()
        }
    }

    for (let i = 0; i < dayarray.length; i += 1) {
        dayfunc(dayarray[i])
    }
}

const setTemp = (dayarray, radioF) => {
// check condition
    let tempfunc
    if (radioF.checked) {
        tempfunc = (dayElement) => {
            dayElement.displayTempF()
        }
    } else {
        tempfunc = (dayElement) => {
            dayElement.displayTempC()
        }
    }

    for (let i = 0; i < dayarray.length; i += 1) {
        tempfunc(dayarray[i])
    }
} 

const setIcon = (dayarray) => {
    console.log('hello from seticon')
    dayarray.map((element) => {
        element.element.style.backgroundImage = `url(http:${element.data.day.condition.icon})`
        element.element.style.backgroundPosition = "center"
        element.element.style.backgroundRepeat = "no-repeat"
        // element.element.style.backgroundSize= "cover"
    })
}

export {setDay, setTemp, setIcon}