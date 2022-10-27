// Exercicio

let spaceshipName = prompt("Digite o nome da nave: ")
let spaceshipVelocity = 0
let chosenOption

function showMenu() {
  let options
  while (options != "1" && options != "2" && options != "3" && options != "4") {
    options = prompt(`Oque deseja fazer? \n
                    "1- Acelerar a nave em 5km/s" \n
                    "2- Desacelerar a nave em 5km/s" \n
                    "3- Imprimir dados de bordo" \n
                    "4- Sair do programa"`)
  }
  return options
}

function speedUp(velocity){
  let newVelocity = velocity + 5
  return newVelocity
}

function slowDown(velocity){
  let newVelocity = velocity - 5
  if(newVelocity < 0){
    newVelocity = 0
  }
  return newVelocity
}

function primtSpaceShip(name, velocity){
  alert(`Espaçonave: ${name}\n Velocidade: ${velocity} km/s`)
}

do {
  chosenOption = showMenu()
  switch (chosenOption) {
    case "1":
      spaceshipVelocity = speedUp(spaceshipVelocity)
      break;
    case "2":
      spaceshipVelocity = slowDown(spaceshipVelocity)
      break;
    case "3":
      primtSpaceShip(spaceshipName, spaceshipVelocity)
      break;
    default:
      alert("Encerando programa de bordo")
  }
} while(chosenOption != "4")

