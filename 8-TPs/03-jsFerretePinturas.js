/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let Fahrenheit;
    let centígrados;
    let temperatura;

    Fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value)

    centígrados = (Fahrenheit - 32) / 1.8

    temperatura = centígrados

    alert(`Con ${Fahrenheit} Fahrenheit son ${temperatura} centigrados`)
}

function CentigradosFahrenheit () 
{
	let Fahrenheit;
    let centígrados;
    let temperatura;

    centígrados = parseFloat(document.getElementById("txtIdTemperatura").value)

    Fahrenheit = centígrados * 1.8 + 32

    temperatura = Fahrenheit

    alert(`Con ${centígrados} Fahrenheit son ${temperatura} centigrados`)
}
