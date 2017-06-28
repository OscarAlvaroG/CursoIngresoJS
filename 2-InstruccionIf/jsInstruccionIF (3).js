function Mostrar()
{
    /**obtengo datos */
    var edad;
    edad = document.getElementById("edad").value;
    /**proceso la condicion e imprimo en pantalla */
    if (edad>18) {
        alert("Sos Mayor de Edad");
    } else {
        alert("Sos Menor de Edad");
    }

}//FIN DE LA FUNCIÓN