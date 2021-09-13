ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    const repeticoes = arrayDeNumeros.filter(
      (numero,index,array)=>{
        return (numero==numeroEscolhido)
      })
    if (repeticoes.length==0){
      return "Número não encontrado"
    }else{
      return (`O número ${numeroEscolhido} aparece ${repeticoes.length}x`)
    }
  }
ˋˋˋ