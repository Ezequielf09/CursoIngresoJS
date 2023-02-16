/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Ezequiel Fleitas Div X
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';
	
	while(respuesta == "si"){
		let num = parseInt(prompt("Ingrese un numero"))
		contador = contador + 1;
		acumulador = acumulador + num;
		respuesta = prompt("Quiere Seguir?")
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN