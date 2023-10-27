import Sunny1 from '../wallpapers/sunny01.jpg'
import Sunny2 from '../wallpapers/sunny02.jpg'
import Sunny3 from '../wallpapers/sunny03.jpg'
import Sunny4 from '../wallpapers/sunny04.jpg'
import Snowy1 from '../wallpapers/snowy01.jpg'
import Snowy2 from '../wallpapers/snowy02.jpg'
import Snowy3 from '../wallpapers/snowy03.jpg'
import Snowy4 from '../wallpapers/snowy04.jpg'
import Rainy1 from '../wallpapers/rainy01.jpg'
import Rainy2 from '../wallpapers/rainy02.jpg'
import Rainy3 from '../wallpapers/rainy03.jpg'
import Rainy4 from '../wallpapers/rainy04.jpg'
import Cloudy1 from '../wallpapers/cloudy01.jpg'
import Cloudy2 from '../wallpapers/cloudy02.jpg'
import Cloudy3 from '../wallpapers/cloudy03.jpg'
import Cloudy4 from '../wallpapers/cloudy04.jpg'

const sunnyPics = [Sunny1, Sunny2, Sunny3, Sunny4]
const snowyPics = [Snowy1, Snowy2, Snowy3, Snowy4]
const cloudyPics = [Cloudy1, Cloudy2, Cloudy3, Cloudy4]
const rainyPics = [Rainy1, Rainy2, Rainy3, Rainy4]

const displayDay = (day,parentDiv) => {

    // weather icon
    const weatherCode = day.data.day.condition.code
    const weatherPics = determineWallpaper(weatherCode) 

    while (true) {
        console.log('while loop')
        try {
            parentDiv.style.backgroundImage = weatherPics[getRandNum()]
            console.log(document.body.style.backgroundImage)
            break
        } catch (error) {
            console.log(error)
            break
        }
    }

    // info about location

    // info about wind speed and direction


    // graph on hourly temperature

    return
}

const determineWallpaper = (condition) => {
    // const sunnyarray = [1000, 1003]
    const rainyarray = [1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189,
                        1192, 1195, 1198, 1201, 1240, 1243, 1246, 1249,
                        1273, 1276]
    const cloudyarray = [1006, 1009, 1030, 1063, 1066, 1069, 1072, 1087,
                        1135]
    const snowyarray = [1114, 1117, 1147, 1204, 1207, 1210, 1213, 1216, 1219,
                        1222, 1225, 1237, 1252, 1255, 1258, 1261, 1264, 1279,
                        1282]
    if (rainyarray.includes(condition)) { // rainy 
        return rainyPics
    } else if (cloudyarray.includes(condition)) { // cloudy
        return cloudyPics
    } else if (snowyarray.includes(condition)) { // snowy
        return snowyPics
    } else { // sunny
        return sunnyPics 
    }     
}

const getRandNum = () => {
    return Math.ceil(Math.random()*4)
} 

export default displayDay
