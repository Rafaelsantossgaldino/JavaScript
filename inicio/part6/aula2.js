// Exemplo

let listNave  = ["Colosus", "Elemental", "Helmet"]

console.log(listNave)

listNave.push("Supernova", "F-14", "F-16") //add novo attributo no array
listNave.pop() //remove ultimo attributo
let searchAttributo = listNave.indexOf("Elemental") // procura um attributo expecifico e retorna sua posicao

console.log(listNave)
console.log(searchAttributo)