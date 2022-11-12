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

class TransportadoraSpaceship extends Spaceship{
  constructor(name, maxCrew, maxRecomendedVelocity, maxLoaWeight){
    super(name, maxCrew, maxRecomendedVelocity) //reaproveitando constructor da classe principal
    this.maxLoaWeight = maxLoaWeight
  }
  speedUp(aceleration){
    aceleration /= 2
    alert("Incrementando velocidade em " + aceleration + "km/s")
    super.speedUp(aceleration)
  }
}
let transporteSpaceship = new TransporteSpaceship("Transportadora", 4, 100, 400)
console.log(transporteSpaceship)
transporteSpaceship.speedUp(210)