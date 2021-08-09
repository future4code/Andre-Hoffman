/*
Exercício 1)

10
10
5

Exercício 2)
10
10
10

Exercício 3)
p mudaria para horasDiariasTrabalho
t mudaria para salarioDiario

*/ 

//a,b,c
let firstName
let age

console.log(typeof(firstName),typeof(age))

//d)Não houve inicialização da variável

//e
firstName = prompt("What's your name?")
age = prompt("How old are you?")

console.log(typeof(firstName),typeof(age))

//f) Passaram a ser string devido a inicialização

//g)
console.log("Olá "+firstName +", você tem "+age +" anos")

//2)
// const firstQuestion = prompt ("Do you code?")
// const secondQuestion = prompt ("Are you happy?")
// const thirdQuestion = prompt("Are you hungry?")

// console.log("Do you code?"+firstQuestion)
// console.log("Are you happy?"+secondQuestion)
// console.log("Are you hungry?"+thirdQuestion)

//3)

let a = 10
let b = 25

c=a
a=b
b=c

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10

//Desafio

let firstNumber =Number( prompt("Insert first number:"))
let secondNumber = Number(prompt("insert second number:"))

console.log("O primeiro número somado ao segundo número resulta em: "+(firstNumber+secondNumber))
console.log("O primeiro número multiplicado pelo segundo número resulta em: "+ (firstNumber*secondNumber))
