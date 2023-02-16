function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch(estacion){
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					mensaje = "No se viaja";
					break;
			}
			break;
		case "Verano":
			switch(destino){
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;
				case "Bariloche":
				case "Cordoba":
					mensaje = "No se viaja";
					break;
			}
			break;
		case "Otoño":
				case "Cataratas":
				case "Mar del plata":
				case "Bariloche":
				case "Cordoba":
					mensaje = "Se viaja";
					break;
		case "Primavera":
			switch(destino){
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje = "Se viaja";
					break;
				case "Bariloche":
					mensaje = "No se viaja";
					break;
			}
			break;

	}
	alert(mensaje)

}


	// switch(estacion){
	// 	case "Invierno":
	// 		if(destino == "Bariloche"){
	// 			alert("Se viaja");
	// 		}
	// 		else{
	// 			alert("No se viaja");
	// 		}
	// 		break;
	// 	case "Verano":
	// 		if(destino == "Mar del plata"){
	// 		alert("Se viaja");
	// 		}
	// 		else if(destino == "Cataratas"){
	// 		alert("Se viaja");
	// 		}
	// 		else{
	// 			alert("No se viaja");
	// 		}
	// 		break;
	// 	case "Primavera":
	// 		if(destino == "Bariloche"){
	// 			alert("No se Viaja");
	// 		}
	// 		else{
	// 			alert("Se viaja");
	// 		}
	// 		break;
	// 	default:
	// 		alert("Se viaja");
	// 		break;
	// }
