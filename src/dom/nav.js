import searchIcon from "../icons/search.svg"

const initNavbar = (parentDiv) => {
    const element = document.createElement('div')
    element.id = 'navbar'
    parentDiv.appendChild(element)
    return element 
}

const navForm = (parentDiv) => {
    const form = document.createElement('form')
    form.id = 'search-form'
    const input = document.createElement('input')
    input.id = 'search-input'
    input.autocomplete = 'off'
    const button = document.createElement('button')
    button.id = "search-button"
    const image = new Image()
    image.src = searchIcon 

    button.appendChild(image)
    form.appendChild(input)
    form.appendChild(button)

    parentDiv.appendChild(form)
    return form 
}

const navToggleTemp = (parentDiv) => {
    const toggleTempLabelF = document.createElement('label')
    const toggleTempRadioF = document.createElement('input')
    toggleTempRadioF.type = 'radio'
    toggleTempRadioF.name = 'toggleTemp'
    toggleTempLabelF.textContent = 'F˚'
    toggleTempRadioF.checked = true
    toggleTempLabelF.appendChild(toggleTempRadioF)

    const toggleTempLabelC = document.createElement('label')
    const toggleTempRadioC = document.createElement('input')
    toggleTempRadioC.type = 'radio'
    toggleTempRadioC.name = 'toggleTemp'
    toggleTempLabelC.textContent = 'C˚'
    toggleTempLabelC.appendChild(toggleTempRadioC)

    const toggleTempDiv = document.createElement('div')
    toggleTempDiv.id = 'toggle-temp-container'

    const toggleTempDivider = document.createElement('div')
    toggleTempDivider.innerText = '|'

    toggleTempDiv.appendChild(toggleTempLabelC)
    toggleTempDiv.appendChild(toggleTempDivider)
    toggleTempDiv.appendChild(toggleTempLabelF)
    parentDiv.appendChild(toggleTempDiv)
    return [toggleTempRadioC, toggleTempRadioF] 
}


export {initNavbar, navForm, navToggleTemp} 