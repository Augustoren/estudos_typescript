// Interfaces

interface Game {
  title: string
  description: string
  genre: string
  platform: string[]
  getSimilars: (title: string) => void
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
