export class HelloWorld  {
  constructor (name){
    this.name = name
  }
  greet(){
    return `¡Hello World with ${this.name}`
  }
}