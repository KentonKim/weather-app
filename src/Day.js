export default class Day {
    constructor(object, location, element) {
        this.location = location
        this.data = object
        this.element = element
        this.tempDiv = element.getElementsByClassName('temperature')[0]
        this.dayDiv = element.getElementsByClassName('weekday')[0]
        this.selected = false
    }

    displayTempF() {
        const maxf = Math.round(this.data.day.maxtemp_f)
        const minf = Math.round(this.data.day.mintemp_f)
        this.tempDiv.textContent = `High: ${maxf} \r\n Low: ${minf}`

        if (this.selected) {
            document.getElementById('main-temperature').textContent = `${maxf}˚`
        }
    }

    displayTempC() {
        const maxc = Math.round(this.data.day.maxtemp_c)
        const minc = Math.round(this.data.day.mintemp_c)
        this.tempDiv.textContent = `High: ${maxc} \r\n Low: ${minc}`

        if (this.selected) {
            document.getElementById('main-temperature').textContent = `${maxc}˚` 
        }
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