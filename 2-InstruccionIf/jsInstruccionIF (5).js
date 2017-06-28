function Mostrar()
{
    /** creo mis variables */
    var edad;
    /**obtengo los datos */
    edad = document.getElementById("edad").value;
    /**procesamos la informacion */
    if (edad<13||edad>17) {
        alert("Usted No es Adolescente");
    } else {
        alert("Usted Es adolescente");
    }


}