const displayDay = (day,parentDiv) => {

    // weather icon
    const icon = document.createElement('img')
    console.log(day.data.day.condition.icon)
    icon.src = day.data.day.condition.icon
    parentDiv.appendChild(icon)
    // 

    // info about location

    // info about wind speed and direction


    // graph on hourly temperature



    return
}
export default displayDay
