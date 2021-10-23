var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var botão = document.getElementById('calcular');
var resultado = document.getElementById('resultado');
function calcular(num1, num2) {
    return num1 + num2;
}
botão.addEventListener('click', function () {
    resultado.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
