// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
  id: number,
  name: string,
  email?: string // ? informa que o campo e opcional
}

const account: AccountInfo = {
  id: 123,
  name: "augusto",
}

type CharInfo = {
  nickname: string,
  level: number
}

const chat: CharInfo = {
  nickname: "Augustoren",
  level: 100
}

// Intersection example
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: "Augusto",
  nickname: "augustoren",
  level: 100
}