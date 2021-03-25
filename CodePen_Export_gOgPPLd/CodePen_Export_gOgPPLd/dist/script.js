var valorEmDolarTexto = prompt("Qual o valor da ilustração em dolar?")
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
var valorEmReal = valorEmDolarNumero * 5.55
var valorEmRealDecimal = valorEmReal.toFixed(2)
alert (valorEmRealDecimal)

var valorDigitado = prompt ("E o valor do dolar para euro?")
var valorNumero = parseFloat (valorDigitado)
var valorNumeroEuro = valorNumero * 0.84
var valorNumeroEuroFixo = valorNumeroEuro.toFixed(2)
alert(valorNumeroEuroFixo)