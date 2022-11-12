//  Exercicio
let nomePiloto = prompt("Qua o seu nome piloto?")
let velocity = 0
let newVelocity = prompt("A que velocidade voce gostaria de começãr")
let comfirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")

if (comfirmVelocity){
  velocity = newVelocity
}

if (velocity <= 0){
  alert("Nave esta parada considere partir e aumentar a velocidade")
} else if(velocity < 40){
  alert("Voce esta devagar, podemos aumentar mais!")
} else if(velocity < 80){
  alert("Parece uma boa velocidade para manter")
} else if(velocity < 100){
  alert("Velocidade alta. Considere diminuir")
} else {
  alert("Velocidade perigosa. Controle automatico forçado!")
}
alert(`Piloto: ${nomePiloto} \n Velocidade: ${velocity}km/s`)