class Capitan{
  constructor(name, age, flightHours){
    this.name = name;
    this.age = age;
    this.flightHours = flightHours;
  }
}
class Spaceship{
  constructor(name, crewQuantity, capitanName, capitanAge, capitanFlightHours){
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.capitan = new Capitan(capitanName, capitanAge, capitanFlightHours);
  }
}
let spaceship = new Spaceship("FG-16", 3, "RafaelG", 27, 15000 )
console.log(spaceship)