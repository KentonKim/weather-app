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

const setTemp = (dayarray) => {
// check condition
    let tempfunc
    if (true) {
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

export {setDay, setTemp}