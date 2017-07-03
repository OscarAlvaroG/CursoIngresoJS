function Mostrar()
{
/**
 * al seleccionar un mes  informar.
    si estamos en Invierno: "Abrigate que hace frio."
    si aunn no llego el Invierno: "Falta para el invierno."
    si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
    Aclaracion: tomamos a Julio y Agosto como los meses de Invierno.

*/

/** creo variables y le asigno sus valores */
var mes;
mes = document.getElementById("mes").value;

/** segun la opcion que elija, imprimo mensaje*/
switch (mes)
{
    case "Julio":
    case "Agosto":
        alert("Abrigate que Hace Mucho Frio!");
        break; 
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("El Invierno Ya Paso, ahora Calor!");
        break; 
    default: 
        alert("Falta para el Invierno");
        break;
      
}

}//fin mostrar()

/** segunda forma de hacerlo */
function forma2(){

var mes;
mes = document.getElementById("mes").value;

switch (true)
{
    case (mes == "Enero" || mes == "Febrero" || mes == "Marzo" || mes == "Abril" || mes=="Mayo" || mes =="Junio"):
        alert("Falta para el Invierno");
        break;

    case (mes == "Julio" || mes  == "Agosto"):
        alert("Abrigate que Hace Mucho Frio!");
        break;
    default:
        alert("El Invierno Ya Paso");
        break;

}


}