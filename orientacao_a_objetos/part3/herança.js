class Spaceship {
  constructor(name, maxCrew, maxRecomendedVelocity){
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecomendedVelocity = maxRecomendedVelocity;
    this.crurrentVelocity = 0;
  }
  spaceship(aceleration){ //função
    this.crurrentVelocity += aceleration
    if(this.crurrentVelocity > this.maxRecomendedVelocity){
      alert("Velocidade maxima ultrapassada!! \nDiminua a velocidade ou poderá causar danos na Nave...")
    }
  }
}

class BattleSpaceship extends Spaceship{ //Herdando class
  stop(){
    this.crurrentVelocity = 0
    alert("Recolhendo armas e parando nave de batalha")
  }
}
class DiscoverySpaceship extends Spaceship{ // Herdando class
  stop(){
    this.crurrentVelocity = 0
    alert("Recolhendo equipamento de amostra e parando nave de descoberta")
  }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)

darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()

//console.log(darwin, fenix)