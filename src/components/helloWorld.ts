export class HelloWorld  {
  name: string
  constructor (name: string){
    this.name = name
  }
  greet(): string{
    return `¡Hello World with ${this.name}`
  }
}