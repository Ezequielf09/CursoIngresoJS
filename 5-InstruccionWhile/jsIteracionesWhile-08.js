/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Ezequiel Fleitas Div X
*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador=0;
	respuesta='si';
	sumaPositivos=0;
	multiplicacionNegativos=1;

	while(respuesta == "si"){
		let numeroPos = parseInt(prompt("Ingrese un numero positivo"));
		let numeroNeg = parseInt(prompt("Ingrese un numero Negativo"));
		sumaPositivos = sumaPositivos + numeroPos;
		multiplicacionNegativos = multiplicacionNegativos * numeroNeg;
		respuesta = prompt("Quiere Seguir?")
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos 

}//FIN DE LA FUNCIÓN