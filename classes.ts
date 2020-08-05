class UserAccount {
  name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  nickname: string
  level: number

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  displayInfo(): void {
    console.log(this.name)
  }
}

const char = new CharAccount("augusto", 22, "Augustoren", 100)
console.log(char.logDetails())
