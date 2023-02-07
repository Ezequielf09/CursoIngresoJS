function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let maximo;
	let minimo;
	maximo = 10;
	minimo = 1;
	numero = Math.round(Math.random() * (maximo-minimo) + minimo);
	alert(numero)


	//MATH----> permite realizar tareas matemáticas.
	//ROUND----> redondea un número al entero más cercano.EJ: 2,49 se redondeará hacia abajo (2) y 2,5 se redondeará hacia arriba (3)
	//RANDOM---->  devuelve un número aleatorio desde 0  hasta 1.
	

	
}//FIN DE LA FUNCIÓN