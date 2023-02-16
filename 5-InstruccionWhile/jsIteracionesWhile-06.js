/*
Ezequiel Fleitas Div X
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;

	numeroIngresado = parseInt(prompt("Ingrese un numero"));

	while( contador < 5){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

	
}//FIN DE LA FUNCIÓN