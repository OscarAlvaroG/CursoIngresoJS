function Mostrar(){
    /** creo mis variables */

    var edad;
    /** obtengo datos del Id */
    edad = document.getElementById("edad").value;

    /** condicion de la edad y mensaje caso contrario*/
    if (edad==15) {
        alert("Niña Bonita");
    }
    else{
        alert("Tu edad es : " +edad);
    }
}