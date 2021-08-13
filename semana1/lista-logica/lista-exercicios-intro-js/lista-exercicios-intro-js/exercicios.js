// //EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("digite altura:")
  const largura = prompt("digite largura: ")
  console.log(altura*largura)  

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("digite ano atual:"))
  const anoNascimento = Number(prompt("digite ano de nascimento:"))
  const idade = (anoAtual - anoNascimento)
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return (peso / (altura*altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("digite seu nome:")
  const idade = prompt("digite sua idade: ")
  const email = prompt("digite seu email: ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

//EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("digite cor:")
  const cor2 = prompt("digite cor:")
  const cor3 = prompt("digite cor:")
  let array = [cor1,cor2,cor3]
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return (string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return (custo/valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return(string1.length==string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[(array.length)-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  array.push(array[0])
  array[0]=array[(array.length)-2]
  array.splice((array.length)-2,1)
  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const string1Upper = string1.toUpperCase()
  const string2Upper = string2.toUpperCase()
  return (string1Upper == string2Upper)
}

//testando autenticação

// // EXERCÍCIO 13
// function checaRenovacaoRG() {
//   const anoAtual = Number(prompt("digite ano atual: "))
//   const anoDeNascimento = Number(prompt("digite ano nascimento: "))
//   const anoEmissao = Number(prompt("digite ano emissão da carteira: "))



// }

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   // implemente sua lógica aqui

// }