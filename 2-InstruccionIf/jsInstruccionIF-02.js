function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 18){
		alert("Usted es mayor");
	}

}



//document.getElementById("txtIdEdad").value =""