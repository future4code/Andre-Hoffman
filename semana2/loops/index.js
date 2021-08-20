/*
1)Iterando de i=0 até i=4, fazendo a soma 0+1+2+3+5, imprimindo 11 ao final

2)a)
Serão impressos os números 19,21,23,25,27,30

b)Poderíamos fazer:
let index
for(let numero of lista){
    index = lista.indexOf(numero)
}

3)

"*"
"**"
"***"
"****"

*/

//Escrita código
//1)a)
const qtdPets = Number(prompt("insira quantidade pets: "))

if(qtdPets==0){
    console.log("Que pena! Você pode adotar um pet!")
}else{
    let arrayPets = []
    for(let i=0; i<qtdPets; i++){
        const nomePet = prompt("digite nome do pet: ")
        arrayPets.push(nomePet)
    }
    console.log(arrayPets)    
}

//2)a)
let arrayOriginal = [1,2,3,4,6];
for (let i=0;i<(arrayOriginal.length); i++){
    console.log(arrayOriginal[i])
}
//b)
for (let i=0;i<(arrayOriginal.length); i++){
    console.log(arrayOriginal[i]/10)
}
//c)
let arrayPar = []
for (let i=0;i<(arrayOriginal.length); i++){
    if(arrayOriginal[i]%2==0){
        arrayPar.push(arrayOriginal[i])
    }
}
console.log(arrayPar)

//d)
let arrayStrings = []
for (let i=0;i<(arrayOriginal.length); i++){
    arrayStrings.push(`O elemento do index ${i} é: ${arrayOriginal[i]}`)
}
console.log(arrayStrings)

//e)
let maiorNumero = 0
let menorNumero = arrayOriginal[0]
for(let num of arrayOriginal){
    if(num>maiorNumero){
        maiorNumero = num
    }
    if(num<menorNumero){
        menorNumero = num
    }        
}
console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)

//Desafios
//1)
const numeroUser1 = Number(prompt("insira um número: "))
let numeroUser2 = Number(prompt("insira um número: "))
let tentativas = 1
console.log("Vamos jogar!")

if(numeroUser2 == numeroUser1){
    console.log("Acertou!!")
    console.log(`O número de tentativas foi ${tentativas}`)
}else{
    if(numeroUser2>numeroUser1){
        console.log(`O número chutado foi ${numeroUser2}`)
        console.log("Errrrrrrrou, é menor")
    }else{
        console.log(`O número chutado foi ${numeroUser2}`)
        console.log("Errrrrrrrou, é maior")
    }
    while(numeroUser2 != numeroUser1){
        numeroUser2 = Number(prompt("insira um número: "))
        tentativas += 1
        if(numeroUser2>numeroUser1){
            console.log(`O número chutado foi ${numeroUser2}`)
            console.log("Errrrrrrrou, é menor")
        }else if(numeroUser2 < numeroUser1){
            console.log(`O número chutado foi ${numeroUser2}`)
            console.log("Errrrrrrrou, é maior")
        }
    }
    console.log(`O número chutado foi ${numeroUser2}`)
    console.log("Acertou!!")
    console.log(`O número de tentativas foi ${tentativas}`)
}

//2)


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
//testando a função random:
// let i = 0
// while(i<10){
//     console.log(getRandomIntInclusive(1, 7))
//     i++
// } //7,3,6,5,1,4,3,2,4,7

const numeroUser1 = getRandomIntInclusive(1,100)
let numeroUser2 = Number(prompt("insira um número: "))
let tentativas = 1
console.log("Vamos jogar!")

if(numeroUser2 == numeroUser1){
    console.log("Acertou!!")
    console.log(`O número de tentativas foi ${tentativas}`)
}else{
    if(numeroUser2>numeroUser1){
        console.log(`O número chutado foi ${numeroUser2}`)
        console.log("Errrrrrrrou, é menor")
    }else{
        console.log(`O número chutado foi ${numeroUser2}`)
        console.log("Errrrrrrrou, é maior")
    }
    while(numeroUser2 != numeroUser1){
        numeroUser2 = Number(prompt("insira um número: "))
        tentativas += 1
        if(numeroUser2>numeroUser1){
            console.log(`O número chutado foi ${numeroUser2}`)
            console.log("Errrrrrrrou, é menor")
        }else if(numeroUser2 < numeroUser1){
            console.log(`O número chutado foi ${numeroUser2}`)
            console.log("Errrrrrrrou, é maior")
        }
    }
    console.log(`O número chutado foi ${numeroUser2}`)
    console.log("Acertou!!")
    console.log(`O número de tentativas foi ${tentativas}`)
}

//Foi simples utilizar o gerador random de números