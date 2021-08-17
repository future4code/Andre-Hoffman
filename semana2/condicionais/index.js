/*
1)a)Recebe como input um número fornecido pelo user e verifica se o número é par. Sendo par, imprime que passou no teste.
b)Números pares
c)Números não pares

2)a)O usuário insere o nome da fruta, caso ela seja uma das indicadas nos cases, será atribuído um valor à variável preço. Caso contrário, será atribuído preço = 5.
b)O preço da fruta Maçã é R$2.25
c)O preço 5 seria atribuído à variável preco ao invés de 5.5

3)a)Recebe um input do usuário transforma para tipo Number
b)Esse número passou no teste
Undefined
c)a variável mensagem só existe dentro do escopo do if, portanto o console.log(mensagem) é incapaz de buscar a variável.
*/

//1)a)b)
// const age = Number(prompt("insert your age: "))

// //c)
// if(age>=18){
//     console.log("You are allowed to drive")
// }else{
//     console.log("You aren't allowed to drive")
// }

//2)

// const turno = prompt("digite turno que estuda (M,V ou N): ")
// if(turno==="M"){
//     console.log("Bom dia")
// }else if(turno==="V"){
//     console.log("Boa Tarde")
// }else{
//     console.log("Boa Noite")
// }

//3)

// let turno = prompt("digite turno que estuda (M,V ou N): ")
// switch(turno){
//     case "M":
//         console.log("bom dia")
//         break
//     case "V":
//         console.log("boa tarde")
//         break
//     case "N":
//         console.log("boa noite")
//         break 
//     default:
//         console.log("digite novamente")
//         break       
// }

//4)
const filme = prompt("digite genero do filme: ")
const preco = Number(prompt("digite valor do ingresso: "))

if(filme=="fantasia" && preco<15){
    console.log("bom filme")
}else{
    console.log("escolha outro filme")
}