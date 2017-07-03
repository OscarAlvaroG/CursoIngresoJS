/**al presionar el botón INICIAR se debe
 *  mostrar un mensaje de bienvenida
"Bienvenidos a la UTN FRA" cada 3 segundos.
</br>al presionar el bot&oacute;n FINALIZAR se debe detener los mensajes. */

var miIntervalo ;
var contador = 0;
contador=parseInt(contador);

function inicio()
{
	document.getElementById("mostrar").innerHTML = "Comenzo el Intervalo."
	miIntervalo = setInterval(intervalo, 3000);// 1 segundo = 1000 milisegundos
	
}//fin inicio()

function intervalo() {
	contador = contador +1;
	document.getElementById("mostrar").innerHTML="Bienvenidos a UTN FRA: " + contador +" Mensajes";
    
}//fin intervalo()

function fin()
{
	document.getElementById("mostrar").innerHTML = "Fin del intervalo, se repitio: "+contador+" Veces";
	clearTimeout(miIntervalo);
	contador = 0;

}//fin fin()