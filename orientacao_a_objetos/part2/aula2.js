class Spaceship {
  constructor(name){
    this.name = name;
    this.velocity = 0;
  }

  speedUp(aceletare){ // Metodo
    this.velocity += aceletare
  }
}

let artemis = new Spaceship("Atemisr")
artemis.speedUp(10)
artemis.speedUp(15)
console.log(artemis)