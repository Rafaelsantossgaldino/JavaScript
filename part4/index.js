// Exercicio de fixação
let departureDateEntry = prompt("Digite a data de partida (formata DD/MM/YYYY)")
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment()
let dateDiff = today - departureDate
let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n 1-Segundos\n 2-Minutos\n 3-Horaas\n 4-Dias")

if(chosenOption == "1"){
  let secondsOffDeparture = Math.round(dateDiff / 1000)
  alert(`Tempo de voo ${secondsOffDeparture} segundos`)
} else if(chosenOption == "2"){
  let minutesOffDeparture = Math.round(dateDiff / 1000 /60)
  alert(`Tempo de voo ${minutesOffDeparture} minutos`)
} else if(chosenOption == "3"){
  let hoursOffDeparture = Math.round(dateDiff / 1000 / 3600)
  alert(`Tempo de voo ${hoursOffDeparture} horas`)
} else if(chosenOption == "4"){
  let daysOffDeparture = Math.round(dateDiff / 1000 / 24)
  alert(`Tempo de voo ${daysOffDeparture} dias`)
} else {
  alert("Opção Invalida")
}