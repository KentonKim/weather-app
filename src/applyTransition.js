const applyTransition = (element, func, argsArray) => {
    const elementRef = element 
    elementRef.classList.add('hidden')
    setTimeout(() => {
        functionReturn = func.apply(null, argsArray)
        elementRef.classList.remove('hidden')
    }, 200);
    return functionReturn
}

export default applyTransition