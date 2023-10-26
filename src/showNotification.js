const noLocation = (text) => {
    const notification = document.createElement('div')
    notification.classList.add('notification');
    notification.textContent = text
    document.body.appendChild(notification)
    notification.style.animation = 'slide-in-out 2.5s ease forwards'
    setTimeout(() => {
        notification.remove()
    }, 2510);
} 

export default noLocation