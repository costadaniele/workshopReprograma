console.log('Hello reprogramers!');

var inputSalario = document.querySelector('#ganho-mes');
var inputHoras = document.querySelector('#horas-dia');
var resultado =  document.querySelector('#resposta');

console.log(inputHoras);

function calcularValorHora() {
    var salario = inputSalario.valueAsNumber;
    var horas = inputHoras.valueAsNumber;

    var horasMes = horas * 22;

    var valorHora = salario / horasMes;

    var valorDuasCasas = valorHora.toFixed(2);

   resultado.textContent = "R$ " + valorDuasCasas;  
    
}

