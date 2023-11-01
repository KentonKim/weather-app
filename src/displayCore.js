const displayIcon = (data, element) => { // CORE FUNCTION 
    element.src = data
}

const displayData = (data, element) => { // CORE FUNCTION 
    element.textContent = data
}

export {displayData, displayIcon}