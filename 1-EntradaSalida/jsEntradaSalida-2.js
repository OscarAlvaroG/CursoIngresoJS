/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
/**
 * 	var mensaje;
    mensaje = prompt("Ingrese un dato");
    alert(mensaje);
 */

    var mensaje;
    mensaje = prompt("Ingrese un Dato");
    document.getElementById("mostrar").innerHTML=mensaje;
    

}

