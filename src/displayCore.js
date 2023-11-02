const displayIcon = (data, element) => {
    // check if same
    // if (element.src === data) {
    //     return
    // }
    // element.classList.add('hidden')
    // setTimeout(() => {
    //     element.src = data
    //     element.classList.remove('hidden')
    // }, 200);



    element.src = data
}

const displayData = (data, element) => { // too many moving parts when transitions 
    // check if same
    // if (element.textContent === data) {
    //     return
    // }
    // element.classList.add('hidden')
    // setTimeout(() => {
    //     element.textContent = data
    //     element.classList.remove('hidden')
    // }, 200);

    element.textContent = data
}

export {displayData, displayIcon}