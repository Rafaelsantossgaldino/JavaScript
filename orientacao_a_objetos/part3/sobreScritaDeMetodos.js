class Spaceship {
  constructor(name, maxCrew, maxRecomendedVelocity){
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecomendedVelocity = maxRecomendedVelocity;
    this.currentVelocity = 0
  }
  speedUp(aceleration){ //metodo
    this.currentVelocity = aceleration
    if(this.currentVelocity > this.maxRecomendedVelocity){
      alert("VELOCIDADE MAXIMA ULTRAPASSADA!!!\n")
    }
  }
}

class TransportSpaceship extends Spaceship{
  speedUp(){
    alert("Nave de transporte so aumenta a velocidade em 1km/s")
    this.crurrentVelocity += 1
  }
}
let transporteSpaceship = new TransportSpaceship("Transportadora", 4, 100)
transporteSpaceship.speedUp()
console.log(transporteSpaceship)