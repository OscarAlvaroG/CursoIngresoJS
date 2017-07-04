function Mostrar()
{
/**
 * Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' 
 */

    /**creo variables */
    var edad;
    var estadoCivil;
    /** asigno valores del id edad y comparo con id estadoCivil */
    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;
    /** comparo edad si es menor de 18 */
    if (edad<=18 && estadoCivil!="Soltero") {
        //alert("Es muy pequeño para No ser soltero.")
        document.getElementById("mostrar").innerHTML = "Es muy pequeño para No ser soltero.";
    }

}//FIN DE LA FUNCIÓN