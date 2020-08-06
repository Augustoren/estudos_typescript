// Interfaces

interface Game {
  title: string
  description: string
  genre: string
  platform?: string[]
  getSimilars?: (title: string) => void
}

const tlou: Game = {
  title: "The last of US",
  description: "The best game in the world",
  genre: "action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(title)
  }
}

class CreateGame implements Game {
  title: string
  description: string
  genre: string

  constructor(t: string, d: string, g: string) {
    this.title = t
    this.description = d
    this.genre = g
  }
}