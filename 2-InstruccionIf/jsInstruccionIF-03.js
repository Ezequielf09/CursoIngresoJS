function mostrar()
{
	//tomo la edad  
	let edad ;

	edad = document.getElementById("txtIdEdad").value

	if (edad >= 18){
		alert("Usted es mayor")
	}else{
		alert("Usted es menor")
	}


	document.getElementById("txtIdEdad").value ="";


}//FIN DE LA FUNCIÓN