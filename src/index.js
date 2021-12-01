import  './style.css'
import img from './assets/cascada.jpg'
const arr = [1,2,3,4,5,5],
  test = () => [...arr]
console.log('Webpack sin tanta config')
test()

document.getElementById('div-img').innerHTML = `<img src=${img} alt="Cascada">`