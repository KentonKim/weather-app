const mainDom = (parentDiv) => {
    const left = document.createElement('div')
    left.id = 'main-left'
    left.classList.add('flex1')
    const right = document.createElement('div')
    right.id = 'main-right'
    right.classList.add('flex1')

    parentDiv.appendChild(left)
    parentDiv.appendChild(right)
    return [left,right]
}
export default mainDom