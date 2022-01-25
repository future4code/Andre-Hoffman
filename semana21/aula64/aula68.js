/*
[ 
    {
        nome: "nome1",
        federacao: "país1",
        modalidade: "atletismo",
        medalhas: "50"
    },
    {
        nome: "nome2",
        federacao: "país2",
        modalidade: "atletismo",
        medalhas: "60"
    },
    {
        nome: "nome3",
        federacao: "país1",
        modalidade: "atletismo",
        medalhas: "50"
    }
]

loop, cada um o que importa é apenas federação
e medalhas
então no primeiro temos: obj[0].federacao = pais1
obj[0].medalhas = 50

vou criar um objeto separado apenas com países
e medalhas

obj2->
{
    pais1: 50,
    pais2: 1
}

então para adicionar, temos:
obj2[obj[0].federacao] : **valor dela** +  
--------------------------
aula 68
ex.1)
input x correctString
"panana" --> "banana"
one edit cases:
-1)add char at the end
-2)remove char at the end
-3)one char different

-1)input+correctString[length-1] = correctString
-2)input.remove(last digit) = correctString
-3)must be same length. Then, create an 
aux for numberOfDifferentChars, must be one

*/

const isOneEdit = (inputString, targetString) => {

    const removeLast = inputString.slice(0, -1); 

    const addAtFinal = (inputString + targetString[targetString.length - 1]) ;

    let changeOne = "" ;
    let auxChange = 0 ;
    
    if(inputString.length == targetString.length){

        for (let i=0 ; i< inputString.length ; i++){
            if(inputString[i]!= targetString[i]){
                auxChange += 1 ;
            }
        }
    }

    if(removeLast == targetString){
        return("String is 'one edit' of the target String")
    }else if (addAtFinal == targetString) {
        return("String is 'one edit' of the target String")
    }else if (auxChange == 1){
        return("String is 'one edit' of the target String")
    }else{
        return ("String is NOT 'one edit' of the target String")
    }
    
}

//console.log(isOneEdit("banan", "banana"))
//console.log(isOneEdit("bananak", "banana"))
//console.log(isOneEdit("panana", "banana"))
//console.log(isOneEdit("bananaaa", "banana"))


const compressedString = (inputString) => {
    
    let auxNumber = 1;
    let auxString = "";
    let auxNewString = "";

    for(char in inputString){
        
           
        if(char == 0){

            auxNewString += inputString[char]

        }else{

            if(inputString[char] == inputString[char - 1]){
                auxNumber += 1;
                
            }else{
                auxNewString += auxNumber.toString()
                auxNumber = 1;
                auxNewString += inputString[char]
            }

            if(char == (inputString.length - 1 )){
                auxNewString += auxNumber.toString()
            }
        }


        
    }

    if(auxNewString.length < inputString.length){
        return auxNewString
    }else{
        return inputString
    }
} 

//console.log(compressedString("aabbb")) //a2b3

console.log(compressedString("aabcccccaaa"))


console.log(compressedString("accurate"))

console.log(compressedString("escola"))

console.log(compressedString("accuraaaaaaaaaate"))

