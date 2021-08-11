/*
1)
a. []
b. null
c. 11
d. 3
e. [4,19,6,7,8,9,10,11,12,13]
f. 10

2) "SUBI NUM ÔNIBUS EM MIRROCOS"
27
*/

/*
//1)
const userName = prompt("Insert your name: ")
const userEmail = prompt("Insert your email: ")

console.log(`O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userName}!`)


//2)

const arrayFood = ["hamburguer","pizza","moqueca","risoto","japonesa"]
console.log(arrayFood)
console.log("Essas são as minhas comidas preferidas: ")
console.log(arrayFood[0])
console.log(arrayFood[1])
console.log(arrayFood[2])
console.log(arrayFood[3])
console.log(arrayFood[4])

const userFood = prompt("Insert your favorite food: ")
arrayFood[1] = userFood
console.log(arrayFood)
*/

//3
//a
let listaDeTarefas=[]

//b
const task1 = prompt("Insert one daily task: ")
const task2 = prompt("Insert one daily task: ")
const task3 = prompt("Insert one daily task: ")
listaDeTarefas.push(task1)
listaDeTarefas.push(task2)
listaDeTarefas.push(task3)

//c
console.log(listaDeTarefas)

//d
const numberTask = prompt("Type one daily done task: ")
listaDeTarefas.splice(numberTask,1)
console.log(listaDeTarefas)