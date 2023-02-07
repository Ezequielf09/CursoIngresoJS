/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{       //Declaro las variables
    let ancho;
    let largo;
    let alambre;
    let perimetro;

        //Aca en la variable Ancho y Largo se le va a asignar un parseo con un cuadro de texto de Html con valor
    ancho = parseFloat(document.getElementById("txtIdAncho").value)
    largo = parseFloat(document.getElementById("txtIdLargo").value)
        
    
    //En la linea 20 hacemos una funcion para hallar perimetro en la variable perimetro
    perimetro =  (ancho + largo) * 2
    //Una vez obtenido el resultado de la variable perimetro se lo multiplica * 3 ya que pide que alambre pase tres veces
    alambre = perimetro * 3
    //Luego de tener el valor de la variable alambre llamo un alert que diga en la pantalla que para tres hilos se va a necesitar tal numero de alambre en metros
    alert(`Para tres hilos de alambre se va a necesitar ${alambre} metros`)

    
    
}
function Circulo ()  
{
    
   
    let radio;
    let alambre;
    const PI = 3.14;
    let perimetro;

    radio = parseFloat(document.getElementById("txtIdRadio").value)

    perimetro = 2 * PI * radio
    alambre = perimetro * 3

    alambre = alambre.toFixed(2)

    alert(`Para tres hilos de alambre se va a necesitar ${alambre} metros`)


}
function Materiales () 
{   
    
    
    let ancho;
    let largo;
    let cal;
    let cemento;
    let area;
    
   

    ancho = parseFloat(document.getElementById("txtIdAncho").value)
    largo = parseFloat(document.getElementById("txtIdLargo").value)
    
    area = ancho * largo
    cemento = area * 2;
    cal = area * 3;

    alert(`En un contrapiso de ${area} metros se va a necesitar ${cemento} bolsas de cemento y ${cal} bolsas de cal`)
    

	
}