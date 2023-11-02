import green from './icons/sungreen.svg'
import yellow from './icons/sunyellow.svg'
import red from './icons/sunred.svg'
import bright from './icons/sunbright.svg'
import north from './icons/north.svg'
import northeast from './icons/northeast.svg'
import northwest from './icons/northwest.svg'
import east from './icons/east.svg'
import west from './icons/west.svg'
import south from './icons/south.svg'
import southeast from './icons/southeast.svg'
import southwest from './icons/southwest.svg'

const returnWindIcon = (string) => {
    const direction = `${string.charAt(0)}${string.charAt(string.length-1)}`
    if (direction === "NN") {

        return north
    } else if (direction === "NE") {
        return northeast
    } else if (direction === "EE") {
        return east 
    } else if (direction === "SE") {
        return southeast 
    } else if (direction === "SS") {
        return south
    } else if (direction === "SW") {
        return southwest 
    } else if (direction === "WW") {
        return west 
    } else if (direction === "NW") {
        return northwest 
    } else {
        console.log('nothjing matches')
    }
}

const returnUvIcon = (uvNumber) => {
    if (uvNumber < 3) {
        return green
    } else if (uvNumber < 6) {
        return yellow
    } else if (uvNumber < 8) {
        return red
    } else {
        return bright
    }
}

export {returnWindIcon, returnUvIcon}