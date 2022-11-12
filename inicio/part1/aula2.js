alert("Bem Vindo! A seguir pediremos que informe algumas coisas ")

let name = prompt("Digite seu nome")
console.log(name)

let idade = prompt("Informe sua idade")
console.log(idade)

let idadeConfirmada = confirm(`Sua idade é ${idade} anos`)

alart(`Nome ${name}\n Idade ${idade}\n Idade confirmada ${idadeConfirmada}`)
