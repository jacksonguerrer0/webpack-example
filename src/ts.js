import style from './style.css'
import img from './assets/cascada.jpg'
import db from './db.json'
import { HelloWorld } from './components/helloWorld.ts'

const $nav = document.createElement('nav'),
  $title = document.querySelector('h1'),
  hello = new HelloWorld('TypeScript :)')

  db.links.forEach(ele => {
    $nav.innerHTML += `<a href=${ele[1]}>${ele[0]}</a>
    `
  });
  // console.log($nav, $body)
  $title.textContent = hello.greet()
  $title.appendChild($nav)


document.getElementById('div-img').innerHTML = `<img src=${img} alt="Cascada">`