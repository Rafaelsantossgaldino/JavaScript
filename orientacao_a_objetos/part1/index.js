let spaceship = {
  velocity: 0,
  speedUp: function(aceleration){
      this.velocity += aceleration
  }
}

function registerSpaceship(){
  spaceship.name = prompt("Informe o nome da nave")
  spaceship.type = prompt("Informe o tipo da nave")
  spaceship.maxVelocity = Number(prompt("Inmforme a velocidade maxima da nave km/s"))
}

function acelerate(){
  let acceleration = prompt("Quanto voce quer acelerar? km/s")
  spaceship.speedUp(acceleration)
  if (spaceship.velocity > spaceship.maxVelocity){
    alert("Velocidade maxima ultrapassada! \n" +
          "\nVelocdade da Nave: " + spaceship.velocity + "km/s\n" +
          "\nVelocidade maxima da nave: " + spaceship.maxVelocity + "km/s")
  }
}

function stop() {
  alert("Nome: " + spaceship.name + 
        "\nTipo: " + spaceship.type + 
        "\nVelocidade da nave: " + spaceship.velocity + 
        "\nMaxima da Nave: " + spaceship.maxVelocity)
  spaceship.velocity = 0
}

function showMenu(){
  let choseOption
  do {
    choseOption = prompt("Voce deseja: \n 1- Acelerar\n 2- Parar")
    switch (choseOption) {
      case "1":
        acelerate()
        break;
      case "2":
        stop()
        break;
      default:
        alert("Opção invalida")
    }
  } while(choseOption != "2")
}

registerSpaceship()
showMenu()