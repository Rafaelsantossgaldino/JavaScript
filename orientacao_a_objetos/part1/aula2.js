let spaceStation = {
  name: "Receptora",
  platform: 15,
  shape: "Esferica"
}

let spaceship = {
  name: "Super nova",
  type: "Batalha",
  crew: ["Cap.Silva", "Ana Julia", "Rafael"]
}

let nave = [
  { name: "Elemental", velocidade: 1000},
  { name: "Golia", velocidade: 600 },
  { name: "Fractal", velocidade: 100000 }
]

nave.forEach(value =>{    // percorre a lista do array
  console.log(value.name + "tem a velocidade de: " + value.velocidade)
})

spaceship.crew.push("Ten. Fernanda")
console.log(spaceStation.name.toUpperCase()) // Letras maiusculas
console.log(spaceship)