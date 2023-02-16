function mostrar()
{
	let estacion;
    let destino;
    const PRECIO = 15000;
    let precioFinal ;
    let mensaje;
    let porcentaje;
    porcentaje = 0;

    estacion = document.getElementById("txtIdEstacion").value;
    destino = document.getElementById("txtIdDestino").value;

    switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					porcentaje = 20;
				break;
				case "Mar del plata":
					porcentaje = -20;
					break;	
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
              		break;		
		}   
            break;
		case "Verano":
			switch(destino){
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Mar del plata":
					porcentaje = 20;
					break;	
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
              		break;	
			}
            break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
					porcentaje = 10;
				    break;
				case "Mar del plata":
					porcentaje = 10;
					break;	
				case "Cataratas":
					porcentaje = 10;
					break;
				case "Cordoba":
					porcentaje = 0
              		break;
			}
            break;
	}
	precioFinal = PRECIO + PRECIO * porcentaje / 100;
    mensaje = "La tarifa es " + precioFinal;
	alert(mensaje);
    
    
    
    
    // switch(estacion){
    //     case "Invierno":
    //         if(destino == "Bariloche"){
    //         aumento = 20
    //         precioFinal = PRECIO * aumento /100
    //         precioFinal = precioFinal + PRECIO

    //         alert("La tarifa en Invierno es de " +precioFinal)

    //         }
    //         else if(destino == "Mar del plata"){
    //         descuento = 20
    //         precioFinal = PRECIO * descuento /100
    //         precioFinal = precioFinal + PRECIO

    //         alert("La tarifa en Invierno es de " +precioFinal)

    //         }
    //         else{
    //           descuento = 10;
    //           precioFinal = PRECIO * descuento / 100
    //           precioFinal = PRECIO - precioFinal
    //           alert("La tarifa en Invierno es de "+ precioFinal)
    //         }
    //     break;
        
    //     case "Verano":
    //         if(destino == "Bariloche"){
    //             descuento = 20
    //             precioFinal = PRECIO * descuento / 100
    //             precioFinal = precioFinal + PRECIO
    
    //             alert("La tarifa en Verano es de " +precioFinal)
    //         }
    //         else if(destino == "Mar del plata"){
    //             aumento = 20
    //             precioFinal = PRECIO * aumento /100
    //             precioFinal = precioFinal + PRECIO
    //             alert("La tarifa en Verano es de " +precioFinal)
    //         }
    //         else{
    //             aumento =10;
    //             precioFinal = PRECIO * aumento /100
    //             precioFinal = precioFinal + PRECIO
    //             alert("La tarifa en Verano es de " +precioFinal)

    //         }

    //     break;
        
        
    //     case "Otoño":
    //     case "Primavera":
    //         if(destino == "Bariloche"){
    //             aumento = 10
    //             precioFinal = PRECIO * aumento /100
    //             precioFinal = precioFinal + PRECIO
    //             alert("La tarifa es de " +precioFinal)
    //         }
    //         else if(destino == "Mar del plata"){
    //             aumento = 10
    //             precioFinal = PRECIO * aumento /100
    //             precioFinal = precioFinal + PRECIO
    //             alert("La tarifa es de " +precioFinal)
    //         }
    //         else if(destino == "Cataratas"){
    //             aumento = 10
    //             precioFinal = PRECIO * aumento /100
    //             precioFinal = precioFinal + PRECIO
    //             alert("La tarifa es de " +precioFinal)
    //         }
    //         else{
    //             precioFinal = PRECIO
    //             alert("La tarifa es de " + precioFinal)
    //         }
    // }

}//FIN DE LA FUNCIÓN