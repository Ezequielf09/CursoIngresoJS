/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
        let num1;
        let num2;
        let num3;
        let suma;
        
        num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
        num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
        num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

        suma = num1 + num2 + num3;
        alert (`La suma es ${suma}`)


}
function Promedio() 
{
    let num1;
        let num2;
        let num3;
        let suma;
        let promedio;
        
        num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
        num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
        num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

        suma = num1 + num2 + num3;
        promedio = suma / 3 
        promedio = promedio.toFixed(2)
        alert (`La suma es ${promedio}`)
}
function PrecioFinal() 
{   
    let num1;
    let num2;
    let num3;
    let suma;
    let iva;
    let precioFinal;
    
    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = num1 + num2 + num3;
    iva = suma * 21 /100;
    precioFinal = iva + suma;
    precioFinal = precioFinal.toFixed(2)

    alert(`El precio final es ${precioFinal}`)
}