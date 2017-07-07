/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5 marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4 marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3 marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // select id Marca
    //input cantidad
    // input precioDescuento //muestra el resultado

    var precio  = 35;
    var cantidad;
    var p_final;
    var empresa;
    cantidad = document.getElementById('Cantidad').value;
    cantidad = parseInt(cantidad);
    empresa = document.getElementById('Marca').value;
    
    if(cantidad > 5){
        p_final = (precio * cantidad) * .50; //5x35 = 175 - descuento(50%) = 87,50
    } else if ( cantidad == 5 && empresa == 'ArgentinaLuz') { 
        p_final = (precio * cantidad) * .60; //5x35 = 175 - descuento(40%) = 105
    } else if ( cantidad == 5 && empresa !='ArgentinaLuz') {
        p_final = (precio * cantidad) * .70; //5x35 = 175 - descuento(30%) = 122,50
    } else if ( cantidad == 4 && (empresa =='ArgentinaLuz' || empresa == 'FelipeLamparas')) {
        p_final = (precio * cantidad) * .75; //5x35 = 175 - descuento(25%) = 131,50
    } else if ( cantidad == 4 && !(empresa =='ArgentinaLuz' || empresa == 'FelipeLamparas')) {
        p_final = (precio * cantidad) * .80; //5x35 = 175 - descuento(80%) = 140
    }

    //ver si conviene un switch

    console.log('EL precio final es de :'+p_final);
 	
}
