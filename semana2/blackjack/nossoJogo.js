/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 <title>Document</title>
 */

 //Montando o jogo

 console.log("Boas vindas ao jogo de Blackjack!")

 if(confirm("Quer iniciar uma nova rodada?")) {
	iniciar()
} else {
	console.log("O jogo acabou")
}

//Sortear as 4 cartas. Detalhe:não podem ser repetidas
//vou querer algo do tipo:
//[ {obj1}, {obj2}, {obj3}, {obj4}]


function iniciar(){
   let arrayCartasSorteadas =[];
   for(let i=0; i<4; i++){  //sortear 4 cartas

      

      let cartaSorteadaCompleta = comprarCarta();
      let cartaSorteadaTexto = cartaSorteadaCompleta.texto;
      while(arrayCartasSorteadas.map((sorteio)=>{return sorteio.texto}).includes(cartaSorteadaTexto)){ //garantir que 
          cartaSorteadaCompleta = comprarCarta();                                                    //não haverá repetição
          cartaSorteadaTexto = cartaSorteadaCompleta.texto;
         
      }
      arrayCartasSorteadas.push(cartaSorteadaCompleta);

   }
   //console.log(arrayCartasSorteadas)

   //para pegar somente texto das 4 cartas sorteadas:
   const cartasTexto = arrayCartasSorteadas.map((sorteio)=>{return sorteio.texto})
   //console.log(cartasTexto)

   //para pegar somente valor das 4 cartas sorteadas:
   const cartasValor = arrayCartasSorteadas.map((sorteio)=>{return sorteio.valor})
   //console.log(cartasValor)

   //definir mão usuário:
   let arrayCartasUsuario = [];
   arrayCartasUsuario.push(arrayCartasSorteadas[0])
   arrayCartasUsuario.push(arrayCartasSorteadas[1])


   //definir mão computador:
   let arrayCartasComputador = [];
   arrayCartasComputador.push(arrayCartasSorteadas[2])
   arrayCartasComputador.push(arrayCartasSorteadas[3])

   //Pontuações:

   const pontuacaoUsuario = cartasValor[0]+cartasValor[1]

   const pontuacaoComputador = cartasValor[2]+cartasValor[3]

   //console.log("Pontuação do usuário: ", pontuacaoUsuario)
   //console.log("Pontuação do computador: ", pontuacaoComputador)

   //6) Mostrando cartas e pontuação de cada jogador

   console.log(`Usuário - cartas: ${cartasTexto[0]} ${cartasTexto[1]} - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${cartasTexto[2]} ${cartasTexto[3]} - pontuação ${pontuacaoComputador}`)

   //7) Definição do vencedor

   if(pontuacaoUsuario > pontuacaoComputador){
      console.log("O usuário ganhou!")
   }else if(pontuacaoUsuario < pontuacaoComputador){
      console.log("O computador ganhou!")
   }else{
      console.log("Empate!")
   }
}




/*

const cartaTeste = comprarCarta();
const teste1 = comprarCarta()
const arrayTeste = cartaTeste + teste1
console.log(cartaTeste.texto) //acessa carta "10paus"
console.log(cartaTeste.valor) //acessa valor 10
console.log(cartaTeste) //{texto: "10♥️", valor: 10}
console.log(cartaTeste.length) //retorna undefined

*/