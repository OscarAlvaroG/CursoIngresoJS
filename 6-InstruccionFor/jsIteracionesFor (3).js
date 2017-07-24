/**
 * al presionar el boton pedir la cantidad 
    de veces que quiero repetir el mensaje "Hola UTN FRA" 
 */

function Mostrar()
{
    var repeticiones = prompt("ingrese el número de repeticiones");
    for(i=0 ; i<repeticiones ; i++){
        var cont = i+1;
        console.log("Hola UTN FRA "+cont);
    }

}//FIN DE LA FUNCIÓN