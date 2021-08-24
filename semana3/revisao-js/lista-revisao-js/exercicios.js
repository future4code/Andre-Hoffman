// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02

function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return ( array.sort((function(a, b){return a-b} )))
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const evenNumbers = array.filter((number)=>{
        return number%2==0
    })
    return evenNumbers
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const evenNumbers = array.filter((number)=>{
        return number%2==0
    }).map((number2)=>{
        return number2**2
    })
    return evenNumbers
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return ( array.sort((function(a, b){return a-b} ))[array.length -1])
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero2;
    let menorNumero;
    

    if (num1 > num2){
        maiorNumero2 = num1;
        menorNumero = num2;
    }else {
        maiorNumero2 = num2;
        menorNumero = num1;
    }

    const maiorDivisivelPorMenor2 = ((maiorNumero2%menorNumero)==0);
    

    return object = {
        maiorNumero: maiorNumero2,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor2,
        diferenca: (Math.abs(num1-num2))


    }
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayAll = [];
    for (let i=0; i < (n*2); i++){
        arrayAll.push(i)
    }
    const evenNumbers = arrayAll.filter((number)=>{
        return number%2==0
    })
    return evenNumbers
    
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if((ladoA==ladoB && ladoB==ladoC)){
        return "Equilátero"
    
    }else if(
        (ladoA!=ladoB && ladoB!=ladoC &&
        ladoA!=ladoC) 
    ){
        return "Escaleno"

    }else{
        
        return "Isósceles"
    }  
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayFinal = [];
    arrayFinal.push(array.sort((function(a, b){return a-b} ))[array.length-2]);
    arrayFinal.push(array.sort((function(a, b){return a-b} ))[1]);
    return arrayFinal
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}