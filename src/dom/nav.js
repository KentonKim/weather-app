import searchIcon from "../icons/search.svg"

const nav = (parentDiv) => {
    const element = document.createElement('div')
    element.id = 'navbar'

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

    element.appendChild(form)
    parentDiv.appendChild(element)
    return element 
}

export default nav