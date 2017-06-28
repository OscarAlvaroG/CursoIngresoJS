/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    /**creo mis variables */
	var importe;
    var descuento;
    /** obtengo el valor del importe */
    importe = document.getElementById("importe").value;
    /**aplico el descuento del 25% y lo informo */
    descuento = importe *.75;
    document.getElementById("resultado").value = descuento;

}
