function mostrar()
{
	//tomo la edad  
	
	let edad ;

	edad = document.getElementById("txtIdEdad").value

	if (edad >= 18){
		alert("Usted es mayor")
	}


	document.getElementById("txtIdEdad").value =""

}//FIN DE LA FUNCIÓN