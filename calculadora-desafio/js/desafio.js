var inputHoras = document.querySelector('#valor-hora');
var inputProjetos = document.querySelector('#horas-projeto');
var resposta = document.querySelector('#resposta');


 function calcular() {
   var horas = inputHoras.valueAsNumber;
   var projetos = inputProjetos.valueAsNumber;

   var calculo = horas * projetos;
   resposta.textContent = 'R$ ' + calculo;
 }