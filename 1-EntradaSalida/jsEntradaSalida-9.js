/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    /**creo mis variables */
    var sueldo;
    var aumento;
    /* obtengo el valor de sueldo */
    sueldo=parseInt(document.getElementById("sueldo").value);
    
    /**incremento en 10% el sueldo y lo muestro en ID resultado */
    aumento = sueldo * 1.1;
    document.getElementById("resultado").value = aumento

	
}
