function doubleVelocity9(velocity, printer){
  console.log("Entrei em doubleVelocity")
  let newVelocity = velocity * 2
  printer(newVelocity) //callback
  return newVelocity
}

let printerVelocity = (velocity) => {
  console.log("nova velocidade: " + velocity + "km/s")
}

let newVelocity = doubleVelocity(60, printerVelocity)
console.log(newVelocity)