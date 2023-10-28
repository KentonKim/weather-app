const selectDay = (dayObj) => {
    const todaysIcon = document.getElementById('todays-icon')
    todaysIcon.src = dayObj.data.day.condition.icon

    return
}

export default selectDay