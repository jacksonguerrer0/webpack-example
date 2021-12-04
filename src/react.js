import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.css'
import db from './db.json'
import HelloWorld from './components/HelloWorld.jsx'

ReactDOM.render(
  <HelloWorld links={db.links} name='Reactjs'/>,
  document.getElementById('change')
)
