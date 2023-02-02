function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
		case "Bariloche":
			alert("El punto cardinal es Este")
			break;
		case "Ushuaia":
			alert("El punto cardinal es Sur")
			break;
		case "Cataratas":
			alert("El punto cardinal es Norte")
			break;
		case "Mar del plata":
			alert("El punto caridnal es Sur")
	}

}//FIN DE LA FUNCIÓN