const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const botão = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

function calcular(num1, num2) {
  
  if (typeof num1 == 'number' && typeof num2 == 'number') {
    return num1 + num2
  } else {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    return num1 + num2
    // return +num1 + +num3 -> o sinal de + na frente também faz p pardeInt
  }

}

botão.addEventListener('click', function () {
  resultado.innerHTML = calcular(numero1.value, numero2.value)
})
