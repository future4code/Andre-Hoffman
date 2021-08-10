// 1) a. false
// b. false
// c. true
// d. boolean

// 2)Não haverá soma numérica e sim de String. Será impresso os dois números unidos, sem espaço entre eles e nenhuma operação aritmética realizada

// 3)Usar a função Number(), ficando Number(prompt("Digi..."))


// //1)

const userAge = Number(prompt ("Insert your age:"))
const bestFriendAge = Number(prompt ("Insert your best friend's age:"))

console.log("Are you older than your best friend?", (userAge>bestFriendAge))
console.log((userAge-bestFriendAge))

// //2)

const evenNumber = Number(prompt("Insert an even number:"))
console.log((evenNumber%2))

//c)Números pares possuem resto da divisão por 2 igual a zero.

//d)Números ímpares possuem resto da divisão por 2 igual a 1.

// //3)

const userAge2 = Number(prompt ("Insert your age:"))
console.log((userAge2*12)+" months")
console.log((userAge2*365)+ " days")
console.log((userAge2*365*24)+ " hours")

// //4)

const firstNumber = Number(prompt ("Insert the first number:"))
const secondNumber = Number(prompt ("Insert the second number:"))

console.log("First Number > Second Number?", (firstNumber>secondNumber))
console.log("First Number = Second Number?", (firstNumber==secondNumber))
console.log("First Number divisible by Second Number?", ((firstNumber%secondNumber)==0))
console.log("Second number divisible by First Number?", ((secondNumber%firstNumber)==0))


// Desafio
// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

//a)
console.log(((77 - 32)*(5/9)+ 273.15).toFixed(2)+ " K")
//b)
 console.log((80*(9/5) + 32).toFixed(2)+ " °F")
//c)
const numberF1 = ((30*(9/5) + 32)).toFixed(2) // 30°C to °F
console.log(numberF1+ " °F") 
const numberK1 = ((numberF1 - 32)*(5/9)+ 273.15).toFixed(2) // 30°C to K
console.log(numberK1+ " K") 

// //d)
const numberC2 = Number(prompt ("Insert temperature in °C:"))
const numberF2 = (numberC2*(9/5) + 32).toFixed(2) // °C to °F
console.log(numberF2+ " °F")
console.log(Number(((numberF2 - 32)*(5/9))+ 273.15).toFixed(2)+ " K")


//2)
const consumptionKWh = Number (prompt("Insert the consumption, in KWh: "))
//a) 
const totalValue = 280*(0.05)
console.log(totalValue, " Reais")
//b)
const valueWithDiscount = (totalValue*(0.85).toFixed(2))
console.log(valueWithDiscount, " Reais")

//3)faltou tempo


