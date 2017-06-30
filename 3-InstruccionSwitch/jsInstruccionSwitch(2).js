function Mostrar()
{
/**
 * al seleccionar un mes  informar.
    si estamos en Invierno: "Abrigate que hace frio."
    si a&uacute;n no llego el Invierno: "Falta para el invierno."
    si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
    ACLARAcI&Oacute;N: tomamos a Julio y Agosto como los meses de Invierno.

*/

/** creo variables y le asigno sus valores */
var mes;
mes = document.getElementById("mes").value;

/** segun la opcion que elija, imprimo mensaje*/
switch (mes)
{
    case "Enero":
        alert("Falta para el Invierno");
        break;
    case "Febrero":
        alert("Falta para el Invierno");
        break;
    case "Marzo":
        alert("Falta para el Invierno");
        break;
    case "Abril":
        alert("Falta para el Invierno");
        break; 
    case "Mayo":
        alert("Falta para el Invierno");
        break;
    case "Junio":
        alert("Falta para el Invierno");
        break;
    case "Julio":
        alert("Abrigate que Hace Mucho Frio!");
        break;
    case "Agosto":
        alert("Abrigate que Hace Mucho Frio!");
        break; 
    case "Septiembre":
        alert("El Invierno Ya Paso, ahora Calor!");
        break;
    case "Octubre":
        alert("El Invierno Ya Paso, ahora Calor!");
        break;
    case "Noviembre":
        alert("El Invierno Ya Paso, ahora Calor!");
        break;
    case "Diciembre":
        alert("El Invierno Ya Paso, ahora Calor!");
        break; 
    default: alert("No Seleccionaste un Mes"); break;
      
}

}//fin mostrar()