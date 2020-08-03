// boolean (true / false)
let isOpen: boolean
isOpen = true || false

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number
let total: number
total = 10

// array
let items: number[]
items = [1, 2, 3]

let person: string[]
person = ['Augusto', 'Laura', 'Maria']

// array generics
let values: Array<number>
values = [1, 2, 3, 4]

// tuple
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any
let coisa: any
coisa = true || 3 || 'text' || [1, 2, 3] || { chave: "valor" }

// void (vazio)
function logger(): void {
  console.log('foo')
}

// null / undefined
type TipoNovo = string | undefined
let variable: null