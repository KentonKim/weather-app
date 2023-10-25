export default class Day {
    constructor(object, element) {
        this.data = object
        this.element = element
        this.tempDiv = element.getElementsByClassName('temperature')[0]
        this.dayDiv = element.getElementsByClassName('weekday')[0]
    }

    displayTempF() {
        const maxf = this.data.day.maxtemp_f
        const minf = this.data.day.mintemp_f
        this.tempDiv.textContent = `HI: ${maxf} \n LOW: ${minf}`
    }

    displayTempC() {
        const maxc = this.data.day.maxtemp_c
        const minc = this.data.day.mintemp_c
        this.tempDiv.textContent = `HI: ${maxc}\nLOW: ${minc}`
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