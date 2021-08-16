/*
1)a)
"Matheus Nachtergaele"
"Virginia Cavendish"
{canal: "Globo", horario: "14h"}
2)a)
{nome:"Juca",idade: 3,raca:"SRD"}
{nome:"Juba",idade: 3,raca:"SRD"}
{nome:"Juco",idade: 3,raca:"SRD"}

b)Essa sintaxe se chama espalhamento e realiza
uma cópia do objetivo que se quer para outro,
possibilitando reajustar posteriormente as informações.

3)a)
false
b)
o return pega o objeto, seguido de valor da chave backender, indicando falso

*/

//1)a)
const objeto = {
nome: "André", 
apelidos: ["dé","dedé","dezin"] 
}

function minhaFuncao(parametro) {
console.log(`Eu sou ${parametro.nome}, mas pode me chamar de: ${parametro.apelidos[0]}, ${parametro.apelidos[1]} ou ${parametro.apelidos[2]}`)
}

minhaFuncao(objeto)

//b)
const objeto2 = {
    ...objeto,
    apelidos: ["dé2","dedé2","dezin2"] 
    }
minhaFuncao(objeto2)

//2)a)
const pessoa1 = {
    nome: "André", 
    idade: 25,
    profissao: "estudante" 
}
const pessoa2 = {
    nome: "José", 
    idade: 50,
    profissao: "carpinteiro" 
}

//b)
function minhaFuncao2(pessoas){
    let arrayPessoa = []
    arrayPessoa.push(pessoas.nome)
    arrayPessoa.push(pessoas.nome.length)
    arrayPessoa.push(pessoas.idade)
    arrayPessoa.push(pessoas.profissao)
    arrayPessoa.push(pessoas.profissao.length)

    return arrayPessoa
}
 
console.log(minhaFuncao2(pessoa2))

//3)a)
const carrinho = []

//b)
const frutas1 = {
    nome: "banana", 
    disponibilidade: true,
     
 }
const frutas2 = {
    nome: "laranja", 
    disponibilidade: true,
     
}
const frutas3 = {
    nome: "abacaxi", 
    disponibilidade: true,
     
}

//c)

function minhaFruta(frutas){
    return carrinho.push(frutas)
}

minhaFruta(frutas1)
minhaFruta(frutas2)
minhaFruta(frutas3)
//console.log(carrinho)

//d)
console.log(carrinho)

Desafios
//1)
function perguntaDados(){
    const usuario = {
        nome: prompt("digite seu nome: "), 
        idade: Number(prompt("digite sua idade: ")),
        profissao: prompt("digite sua profissao: ") 
    }
    console.log(usuario)
    console.log(typeof(usuario))
}

perguntaDados()

//2)
const filme1 = {
    anoLancamento: 2020, 
    nomeFilme: "Filme1"
     
}
const filme2 = {
    anoLancamento: 2020, 
    nomeFilme: "Filme2"    
}

function meuFilme(parametro1,parametro2){
    return (
    `O primeiro filme foi lançado antes do segundo? ${(filme1.anoLancamento)<(filme2.anoLancamento)}
    O primeiro filme foi lançado no mesmo ano do segundo? ${(filme1.anoLancamento)==(filme2.anoLancamento)}`
       
    )
}
console.log(meuFilme(filme1,filme2))

//3)

function minhaFuncao3(algumaFruta){
    return{
        ...algumaFruta,
        disponibilidade : !algumaFruta.disponibilidade
    }
}

console.log(minhaFuncao3(frutas1))
    
