function mostrar()
{
	//tomo la edad  
	let edad ;

	edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad >= 18){
		alert("Usted es mayor")
	}
	if(edad <18){
		alert("Usted es menor")
	}
	
	
	
		// }else{
	// 	alert("Usted es menor")
	// }


	document.getElementById("txtIdEdad").value ="";


}//FIN DE LA FUNCIÓN