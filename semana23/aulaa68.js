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
