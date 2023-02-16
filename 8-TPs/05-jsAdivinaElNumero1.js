/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto = parseInt(document.getElementById("txtIdNumero").value);
let contadorIntentos = parseInt(document.getElementById("txtIdIntentos").value);
let maximo = 100;
let minimo = 1;
let numero = parseInt(numero);
contadorIntentos = 0;

function comenzar()
{
  numero = Math.round(Math.random() * 100);
  
}

function verificar()
{
  if(numero == numeroSecreto){
    alert(`Usted es el ganador y en tan solo ${contadorIntentos} Intentos :)`)
  }
  else if ( numero > numeroSecreto){
    alert("Se acaba de pasar del numero secreto")
  }
  else{
    alert("Falta para llegar al numero secreto ")
  }
  contadorIntentos++
  document.getElementById("txtIdIntentos").value = contadorIntentos
}