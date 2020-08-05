abstract class Pessoa {

  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  get getName() {
    return this.name
  }

  set setName(name: string) {
    this.name = name
  }

}