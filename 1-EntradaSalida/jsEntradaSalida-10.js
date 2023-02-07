/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaro la variable
	let importe;
	let importeFinal;
	let descuento;
	

	//Luego asigno para la variable importe donde se lo asigna y lo parsea y lo asigna a la caja de texto para tener un valor
	importe = parseFloat(document.getElementById("txtIdImporte").value);
	
	//Luego que ingrese el valor hago los calculos, con la variable descuento  se le asigna el valor importe para hacer un calculo con descuento
	descuento = importe * 25 / 100;
	//Aca a la variable ImporteFinal se le asigna una resta que va ser entre variable importe y descuento
	importeFinal = importe - descuento;

	//En la caja de texto de html le asigno la variable Importefinal
	document.getElementById("txtIdResultado").value = importeFinal;
}
