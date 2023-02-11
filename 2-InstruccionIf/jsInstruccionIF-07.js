function mostrar()
{
	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if(edad < 18 && estado != "Soltero"){
		alert("Es muy Pequeño para NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN


//select: menu desplegable, beneficios: nosotros cargamos los valores y los que hacemos darle la posibilidad de elegir estos valores.