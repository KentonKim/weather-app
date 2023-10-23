import './style.css'

console.log('hello')
function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
   element.classList.add('hello');
   element.textContent = 'whats up'
 
    return element;
  }
 
  document.body.appendChild(component());