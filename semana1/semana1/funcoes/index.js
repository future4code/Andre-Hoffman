/*
//1)a)
10
50
b)Não iria ser printado no console resposta, pois há apenas o return dentro da função, sem o console.log

2)a)
A saída será true ou falso. A partir do input do usuário, verifica-se a presença da palavra "cenoura".
b)
i.true
ii.true
iii.false
*/


//1)a)
function bio(){
    console.log("Olá, sou André,24, moro no RJ e estou cursando Web Full Stack na Labenu")
}
//1)b)
function bioUser(userName,age,city,profession){
    console.log(`Olá, sou ${userName}, ${age}, moro em ${city} e sou ${profession}`)
}
bioUser('André',24,'Rio','estudante')



//2)a)
function sum(a,b){
    return (a+b)
}
console.log(sum(1,2))

//b)
function compare(a,b){
    return (a>=b)
}
console.log(compare(4,1)) //true
//c)

function isEven(a){
    return ((a%2==0))
}
console.log(isEven(4)) //true

//d)
function modifySentence(sentence){
    console.log("Tamanho da frase: ", sentence.length)
    console.log(sentence.toUpperCase())
}
modifySentence('Olá, mundo')


//3)
function sum(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}

const firstNumber = Number(prompt("Insert a number:"))
const secondNumber = Number(prompt("Insert a number:"))
sum(firstNumber,secondNumber)
subtract(firstNumber,secondNumber)
multiply(firstNumber,secondNumber)
divide(firstNumber,secondNumber)

console.log(`Números inseridos: ${firstNumber} e ${secondNumber}`)
console.log("Soma: ",sum(firstNumber,secondNumber))
console.log("Diferença: ",subtract(firstNumber,secondNumber))
console.log("Multiplicação: ",multiply(firstNumber,secondNumber))
console.log(`Divisão: ${divide(firstNumber,secondNumber)}`)



//Desafio
//1)a)
const firstArrowFunction = (a) =>{
    console.log(a)
}
const expression = firstArrowFunction("Hello, world")

//b)
const secondArrowFunction = (a,b) =>{
    const sum1 = a+b
    const result1 = firstArrowFunction(sum1)
}

const sum2 = secondArrowFunction(1,2) //3

//2)
const pitagoras = (cat1,cat2) =>{
    const hipotenusa = Math.pow((Math.pow(cat1,2)+Math.pow(cat2,2)),0.5)
    return hipotenusa
}

const valorHipotenusa = pitagoras(3,4)

console.log(valorHipotenusa)

