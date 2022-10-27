// Funçoes

function gretPilot(name, message = "Ola") {
  alert(name + ", " + message)
}
gretPilot("Rafael", "Seja bem vindo")

function speedUp(velocity, aceleration) {
  let newSpeedUp = velocity + aceleration
  console.log("Nova velocidade " + newSpeedUp)
  return newSpeedUp
}
console.log(speedUp(90, 100))
