function Mostrar()
{
/**
* al seleccionar un mes  informar.
* si es Enero: "que comiences bien el año!!!."
* si es Marzo: "a clases!!!."
* si es Julio: "se vienen las vacaciones!!!."
* si es Diciembre: "Felices fiesta!!!."
*/

/** creo variables y asigno valores */
var meses;

meses = document.getElementById("mes").value;

/**verifico el mes mediante switch 
    Si el valor que voy a obtener es un numero le pongo el numero sino el string
    por ejemplo si meses devuelve 1 en el id, en el case debo poner 1
    si meses devuelve Enero en el id entonces pongo Enero
*/
switch (meses) 
{
    case "Enero":
    
        alert("Que Comience bien el año!!!");
        break;

    case "Marzo":
    
        alert("a Clases!!!");
        break;

    case "Julio":
    
        alert("Se vienen las vacaciones!!!");
        break;

    case "Diciembre":
    
        alert("Felices Fiestas!!!");
        break;
    default: alert("No es un mes de festejo"); break;
    

}



}//FIN DE LA FUNCIÓN