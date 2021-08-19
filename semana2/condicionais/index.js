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

// //1)a)b)
const age = Number(prompt("insert your age: "))

//c)
if(age>=18){
    console.log("You are allowed to drive")
}else{
    console.log("You aren't allowed to drive")
}

// //2)

const turno = prompt("digite turno que estuda (M,V ou N): ")
if(turno==="M"){
    console.log("Bom dia")
}else if(turno==="V"){
    console.log("Boa Tarde")
}else{
    console.log("Boa Noite")
}

// //3)

let turno = prompt("digite turno que estuda (M,V ou N): ")
switch(turno){
    case "M":
        console.log("bom dia")
        break
    case "V":
        console.log("boa tarde")
        break
    case "N":
        console.log("boa noite")
        break 
    default:
        console.log("digite novamente")
        break       
}

// //4)
const filme = prompt("digite genero do filme: ")
const preco = Number(prompt("digite valor do ingresso: "))

if(filme=="fantasia" && preco<15){
    console.log("bom filme")
}else{
    console.log("escolha outro filme")
}


//Desafios
//1)
const filme = prompt("digite genero do filme: ")
const preco = Number(prompt("digite valor do ingresso: "))

if(filme=="fantasia" && preco<15){
    const lanche = prompt("digite seu lanchinho: ")
    console.log("bom filme")
    console.log(`Aproveite seu ${lanche}`)
}else{
    console.log("escolha outro filme")
}

//2)
function vendaIngressos(){
    const nome = prompt("Digite seu nome completo: ")
    const tipoJogo = prompt("Digite tipo jogo: (IN/DO)")
    const etapaJogo = prompt("digite etapa jogo: (SF/DT/FI)")
    const categoria = prompt("digite categoria do jogo: (1/2/3/4)")
    const qtdIngressos = Number(prompt("digite quantidade de ingressos: "))

    let tipoJogoCompleto
    if(tipoJogo=="IN"){
        tipoJogoCompleto = "Internacional"
    }else{
        tipoJogoCompleto = "Nacional" 
    }

    let etapaJogoCompleto
    if(etapaJogo=="SF"){
        etapaJogoCompleto = "semi-final"
    }else if(etapaJogo=="DT"){
        etapaJogoCompleto = "decisão de terceiro lugar"
    }else{
        etapaJogoCompleto = "final"
    }
    
    const listaIngresso = [
        [1320 , 660 , 1980], //em ordem:semi-final, terceiro, final
        [880, 440, 1320],
        [550, 330, 880],
        [220, 170, 330]
    ]

    let valorIngresso
    if (etapaJogo=="SF"){
        valorIngresso = listaIngresso[categoria-1][0]
    } else if (etapaJogo=="DT"){
        valorIngresso = listaIngresso[categoria-1][1]

    } else{
        valorIngresso = listaIngresso[categoria-1][2]
    }

    console.log("----Dados da compra----")
    console.log("Nome do cliente: ", nome)
    console.log("Tipo do jogo: ", tipoJogoCompleto)
    console.log("Etapa do jogo: ", etapaJogoCompleto )
    console.log("Categoria: ", categoria)
    console.log("Quantidade de Ingressos: "+qtdIngressos+" ingressos")
    console.log("-----Valores-----")
    if(tipoJogo=="DO"){
        console.log("Valor do ingresso: R$", valorIngresso )
        console.log("Valor total: R$", (valorIngresso*qtdIngressos))
    }else{
        console.log("Valor do ingresso: U$", (valorIngresso/4.1))
        console.log("Valor total: U$", ((valorIngresso/4.1)*qtdIngressos))
    }
}

vendaIngressos()