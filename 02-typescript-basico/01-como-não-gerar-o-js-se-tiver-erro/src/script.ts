const numero1 = document.getElementById('numero1') as HTMLInputElement
const numero2 = document.getElementById('numero2') as HTMLInputElement
const botão = document.getElementById('calcular') 
const resultado = document.getElementById('resultado') 

function calcular(num1: number, num2: number) {
  return num1 + num2
}

botão.addEventListener('click', function () {
  resultado.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
