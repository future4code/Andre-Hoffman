console.log("Hello World")
console.log("Hello World 2")

//tsc && node build/index.js

//ex1
//a)
let minhaString: string = "Labenu"
//não aceita number

//b)
//let meuNumero: number = 5
let meuNumero: number|string = 5

//c, d)

enum ColorsClasses {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Blue",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const person: { name: string, age: number, corFavorita:string} = {
    name: "Pedro",
    age: 24,
    corFavorita: "Azul"
    }

type Person = {
    name: string,
    age: number,
    corFavorita: ColorsClasses
}

const person2: Person = {
    name: "Joana",
    age: 22,
    corFavorita: ColorsClasses.AMARELO
}

const person3: Person = {
    name: "Gabi",
    age: 24,
    corFavorita: ColorsClasses.ANIL
}

const person4: Person = {
    name: "Jake",
    age: 30,
    corFavorita: ColorsClasses.VERDE
}

