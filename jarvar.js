let peso = parseFloat (prompt ("digite seu peso em quilos/kg"))
let altura = parseFloat (prompt ("digite sua altua em metros"))

function calcularIMC (peso ,altura) {
    return (peso / (altura*altura))
}

function classificar (imc) {
  if (imc > 40) {
      alert ("obesidade grau 3")
  }else if (imc > 39.9) {
        alert ("obesidade grau 2")
    }
    else if (imc > 29.9) {
        alert ("obesidade grau 1")
    }
    else if (imc > 24.9) {
        alert ("peso ideal")
    }
    else if (imc <= 18.5) {
        alert ("abaixo do peso")
    }
}


function relatório (peso ,altura) {
let imc = calcularIMC (peso, altura)
classificar (imc)
alert(imc)
}
relatório (peso ,altura)