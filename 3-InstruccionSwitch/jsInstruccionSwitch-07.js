function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let mensaje;
	
	switch(destinoIngresado){
		case "Bariloche":
			mensaje = "El punto cardinal es Oeste";
			break;
		case "Ushuaia":
			mensaje = "El punto cardinal es Sur";
			break;
		case "Cataratas":
			mensaje = "El punto cardinal es Norte";
			break;
		case "Mar del plata":
			mensaje = "El punto cardinal es Este";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN