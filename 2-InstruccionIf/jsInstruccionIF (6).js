function Mostrar()
{
/**
 * Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años).
 */

/** creo mis variables */
var edad;

/** obtengo los datos del id */
edad = document.getElementById("edad").value;
/**proceso la informacion e imprimo*/

if (edad>18) {
    alert("Usted es Mayor de Edad"); 
} else {
    if (edad>=13 & edad<=17) {
        alert("Usted es Adolescente");
    } else {
        alert("Usted es un Niño");
    }
}



}//FIN DE LA FUNCIÓN