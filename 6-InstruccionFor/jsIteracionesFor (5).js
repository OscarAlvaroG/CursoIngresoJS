
/**
 * al presionar el boton repetir el pedido de numero hasta que ingresemos el 9.
 */
function Mostrar()
{
    for(i=0;;i++){
        var num = prompt("Ingrese un Numero. 9 para Finalizar");
        if(num == 9){
            break;
        }
        console.log(i);
        console.log("Ingresado: "+num);
    }




}//FIN DE LA FUNCIÓN