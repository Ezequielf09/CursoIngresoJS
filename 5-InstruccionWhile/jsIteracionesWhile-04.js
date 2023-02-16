/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Ezequiel Fleitas Div X*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	
	while(numeroIngresado >= 9 || numeroIngresado <= 0){
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN