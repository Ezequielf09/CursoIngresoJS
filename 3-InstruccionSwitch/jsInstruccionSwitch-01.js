function mostrar()
{
	let mesDelAño;
	mesDelAño =document.getElementById("txtIdMes").value
	
	
	switch(mesDelAño){
		case "Enero":{
			alert("Que comiences bien el año!!!")
			break;
		}
		case "Marzo":{
			alert("A clases")
			break;
		}
		case "Julio": {
			alert("Se vienen las vacaciones")
			break;
		}
		case "Diciembre" :{
			alert("Felices Fiestas")
			break;
		}
	}
	
	
	
	
	
	
	
	

	
	
	// if( mesDelAño == "Enero"){
	// 	alert("Que comiences bien el año")
	// }
	// else if( mesDelAño == "Marzo"){
	// 	alert("A clases")								----------> EJEMPLO CON IF 
	// }
	// else if( mesDelAño == "Julio"){
	// 	alert("Se vienen las vacaciones")
	// }
	// else if( mesDelAño == "Diciembre"){
	// 	alert("Felices fiestas")
	// }


}