/*
1)a)Vão ser impressos 3 arrays com os respectivos nomes e apelidos, já que existe o map, que vai percorrer todos os objetos de usuarios
2)a)Vão ser impressos os 3 nomes dos usuarios
3)a)O filter vai fazer com que o último item da lista, onde está o apelido Chijo, não seja retornado, portanto retorna os dois primeiros itens.
*/

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

//1)a)
function extrairNome(obj){return obj.nome}
const nomePets = pets.map(extrairNome)
console.log(nomePets)

//b)
function isSalsicha(obj){return obj.raca==="Salsicha"}
const cachorrosSalsichas = pets.filter(isSalsicha)
console.log(cachorrosSalsichas)

//outro modo de fazer:
// const cachorrosSalsichas2 = pets.filter(
//    (dogs)=>{return dogs.raca === "Salsicha"}
// )
//console.log(cachorrosSalsichas2)



//c)
function escreveMensagem(obj){
   return `"Você ganhou um cupom de desconto de 10% para tosar o/a ${obj.nome}!"`
}
const mensagemPoodle = cachorrosSalsichas.map(escreveMensagem)

console.log(mensagemPoodle)

//2)
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
function imprimeNome(obj){return obj.nome}

console.log(nomeItem)

//b)
const itemDesconto5 = produtos.map(
   (prod)=>{
      return{nome: prod.nome, preco: (prod.preco * 0.95).toFixed(2) }
   })

console.log(itemDesconto5)

//c)
const itensBebidas = produtos.filter(
   (bebidas)=>{return bebidas.categoria=== "Bebidas"})
   .map((bebidas)=>{return bebidas})

console.log(itensBebidas)

//d)
const itensIpe = produtos.filter(
   (ipe)=>{return ipe.nome.includes("Ypê")})
   .map((ipe)=>{return ipe})

console.log(itensIpe)

//e)
//modo mais longo:
// const itensIpe2 = produtos.filter(
//    (ipe)=>{return ipe.nome.includes("Ypê")})
//    .map((ipe)=>{return `Compre ${ipe.nome} por ${ipe.preco}`})

//modo mais rápido:
const itensIpe2 = itensIpe.map((ipe)=>{return `Compre ${ipe.nome} por ${ipe.preco}`})
console.log(itensIpe2)

//DESAFIO:

//1)a)
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

const nomePokemons = pokemons.map(
   (nomes)=>{return nomes.nome})

console.log(nomePokemons.sort())


//b)

function getDuplicates(data){
   return data.filter((value,index) => data.indexOf(value) != index);
}

const tiposPokemons = pokemons.map(
   (tipos)=>{return tipos.tipo})

const duplicados = getDuplicates(tiposPokemons) 

console.log(duplicados)//["grama","fogo","água"]


