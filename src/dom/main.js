const mainDom = (parentDiv) => {
    const left = document.createElement('div')
    left.id = 'main-left'
    const right = document.createElement('div')
    right.className = 'card-container'
    right.id = 'main-right'

    parentDiv.appendChild(left)
    parentDiv.appendChild(right)
    return [left,right]
}
export default mainDom