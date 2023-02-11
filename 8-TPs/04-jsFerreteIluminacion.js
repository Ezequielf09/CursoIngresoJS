/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidad= parseInt(document.getElementById("txtIdCantidad").value);
	let marca = document.getElementById("Marca").value;
	let precioConDescuento = parseFloat(document.getElementById("txtIdprecioDescuento").value);
	const PRECIO = 35;
	let descuento;
    let iibb;
    

    if(cantidad >=6){
        descuento = PRECIO * cantidad * 50/100; 
        precioConDescuento = PRECIO * cantidad - descuento 
    }
    else{
        if(cantidad == 5){
            if(marca == "ArgentinaLuz"){
                descuento = PRECIO * cantidad * 40/100; 
                precioConDescuento = PRECIO * cantidad - descuento 
            }1
            else{
                descuento = PRECIO * cantidad * 30/100; 
                precioConDescuento = PRECIO * cantidad - descuento
            }
        }
        else{
            if(cantidad == 4){
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                    descuento = PRECIO * cantidad * 25/100; 
                    precioConDescuento = PRECIO * cantidad - descuento
                }
                else{
                    descuento = PRECIO * cantidad * 20/100; 
                    precioConDescuento = PRECIO * cantidad - descuento;
                }
            }
            else{
                if(cantidad == 3){
                    if(marca == "ArgentinaLuz"){
                        descuento = PRECIO * cantidad * 15/100; 
                        precioConDescuento = PRECIO * cantidad - descuento;
                    }
                    else{
                        if(marca == "FelipeLamparas"){
                            descuento = PRECIO * cantidad * 10/100; 
                            precioConDescuento = PRECIO * cantidad - descuento;
                        }
                        else{
                            descuento = PRECIO * cantidad * 5/100; 
                            precioConDescuento = PRECIO * cantidad - descuento;
                        }
                    }

                }
                else{
                    precioConDescuento = PRECIO * cantidad;
                }

            }

        }
    }
    if(precioConDescuento > 120){
        iibb = precioConDescuento * 10/100;
        precioConDescuento = precioConDescuento + iibb
        alert(`Usted pago $${iibb} de ingresos brutos`);
    }

   document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

}

    // if(cantidad >= 6){
    //     descuento = 50/100
    //     precioConDescuento = PRECIO * cantidad * descuento
    //     document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    // }
    // else if(cantidad == 5 && marca == "ArgentinaLuz"){
    //     descuento = 40/100
    //     precioConDescuento = PRECIO * cantidad * descuento
    //     document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    // }
    // else if(cantidad == 5 && marca != "ArgentinaLuz"){
    //     descuento = 30/100
    //     precioConDescuento = PRECIO * cantidad * descuento
    //     document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    // }
    // else if((cantidad == 4 && marca == "ArgentinaLuz")||(cantidad == 4 && marca == "FelipeLamparas")){
    //     descuento = 25/100
    //     precioConDescuento = PRECIO * cantidad * descuento
    //     document.getElementById("txtIdprecioDescuento").value = precioConDescuento;      
    // }
    // else if(cantidad == 4 && marca != "ArgentinaLuz"){
    //     descuento = 20/100
    //     precioConDescuento = PRECIO * cantidad * descuento
    //     document.getElementById("txtIdprecioDescuento").value = precioConDescuento
    // }
    // else if(cantidad == 3 && marca == "ArgentinaLuz"){
    //     descuento = 15/100
    //     precioConDescuento = PRECIO * cantidad * descuento
    //     document.getElementById("txtIdprecioDescuento").value = precioConDescuento
    // }
    // else if(cantidad == 3 && marca == "FelipeLamparas"){
    //     descuento = 10/100
    //     precioConDescuento = PRECIO * cantidad * descuento
    //     document.getElementById("txtIdprecioDescuento").value = precioConDescuento
    // }
    // else{
    //     descuento = 5/100
    //     precioConDescuento = PRECIO * cantidad * descuento
    //     document.getElementById("txtIdprecioDescuento").value = precioConDescuento
    // }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   


