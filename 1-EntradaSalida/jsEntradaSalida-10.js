/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    /**creo mis variables */
	var importe = 0;
    var descuento = 0;
    /** obtengo el valor del importe */
    importe = document.getElementById("importe").value;
    importe = parseInt(importe);
    /**aplico el descuento del 25% y lo informo */
    //descuento = importe *.75;
    /** tambien se puede calcular asi */
    descuento = importe - ((importe * 25) / 100);

    document.getElementById("resultado").value = descuento;

}