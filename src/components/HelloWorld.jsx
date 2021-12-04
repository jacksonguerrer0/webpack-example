import React, { Component } from 'react'
console.log('xdxdd')

class HelloWord extends Component {
  render(){
    return(
      <>
      <h1 id='title'>¡Hello World with {this.props.name}!</h1>
      <nav>
      {
        this.props.links.map(ele => (
          <a href={ele[1]} key={ele[1]}>{ele[0]}</a>
        ))
      }
      </nav>
      </>
    )
  }
} 
export default HelloWord