const toggleCF = (parentDiv) => {
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

export default toggleCF