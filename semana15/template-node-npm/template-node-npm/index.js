
//Ex1 
//a)usando process.argv
//b) 

console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`)

//c)

console.log(`Olá, ${process.argv[2]}! Você tem  ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3]) + 7}`)

//Ex2

switch(process.argv[2]){
    case "soma": 
        console.log(`${process.argv[3]}+${process.argv[4]} = ${ Number(process.argv[3]) + Number(process.argv[4])}`)
        break;
    case "sub":
        console.log(`${process.argv[3]} - ${process.argv[4]} = ${ Number(process.argv[3]) - Number(process.argv[4])}`)
        break;
    case "mult":
        console.log(`${process.argv[3]} x ${process.argv[4]} = ${ Number(process.argv[3]) * Number(process.argv[4])}`)
        break;
    case "div":
        console.log(`${process.argv[3]} / ${process.argv[4]} = ${Number(process.argv[3]) / Number(process.argv[4])}`)
        break;
    default:    
        console.log("Comando não identificado! Use soma, sub, mult ou div")
}


//Exercício 3

const listaDeTarefas = ["Passar roupa", "Limpar vidros", "Secar roupa"]

const novaTarefa = process.argv[2]
process.argv[2] && listaDeTarefas.push(novaTarefa)

novaTarefa && console.log("Tarefa adicionada com sucesso!")
console.log("tarefas:", listaDeTarefas) 
