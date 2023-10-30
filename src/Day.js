export default class Day { // MOVE DISPLAY TEMP AND DISPLAY WEEKDAY LONG TO OUTSIDE OF CLASS
    constructor(object, location, element) {
        this.location = location
        this.data = object
        this.element = element
        this.tempDiv = element.getElementsByClassName('temperature')[0]
        this.dayDiv = element.getElementsByClassName('weekday')[0]
        this.selected = false
    }

    getTempF() {
        return  [Math.round(this.data.day.maxtemp_f), Math.round(this.data.day.mintemp_f)]
    }

    getTempC() {
        return  [Math.round(this.data.day.maxtemp_c), Math.round(this.data.day.mintemp_c)]
    }

    displayDayLong() {
        this.dayDiv.textContent = this.data.weekdayLong
        return this.dayDiv
    }

    displayDayShort() {
        this.dayDiv.textContent = this.data.weekdayShort
        return this.dayDiv
    }
}