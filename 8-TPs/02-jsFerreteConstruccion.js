/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    let ancho;
    let largo;
    let alambre;
    let perimetro;

    ancho = parseFloat(document.getElementById("txtIdAncho").value)
    largo = parseFloat(document.getElementById("txtIdLargo").value)

    perimetro =  (ancho + largo) * 2

    alambre = perimetro * 3

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
    let metros;
   

    ancho = parseFloat(document.getElementById("txtIdAncho").value)
    largo = parseFloat(document.getElementById("txtIdLargo").value)
    
    area = ancho * largo
    cemento = area * 2;
    cal = area * 3;

    alert(`En un contrapiso de ${area} metros se va a necesitar ${cemento} bolsas de cemento y ${cal} bolsas de cal`)
    

	
}