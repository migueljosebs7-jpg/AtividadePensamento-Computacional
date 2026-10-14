let numero1 = Number(prompt ("digite primeiro numero"))
let numero2 = Number (prompt("digite segundo numero"))
let calculo = prompt ("qual a operação: \n[+]\n[-]\n[*]\n[/]")


if (calculo == "+") {
    alert ("O resultado final será: " + (numero1 + numero2))
}
else if (calculo == "-") {
    alert ("O resultado final será: " + (numero1 - numero2))
}
else if (calculo == "*") {
    alert ("O resultado final será: " + numero1 * numero2)
}
else if (calculo == "/") {
    alert ("O resultado final será: " + numero1 / numero2)
}