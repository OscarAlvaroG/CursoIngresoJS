var miIntervalo ;
var contador=0;
var mensajeBienvenida = "Bienvenido a UTN FRA"
/** muestro mensaje de unicio y comienzo el intervalo */
function inicio()
{
	document.getElementById("mostrar").innerHTML = mensajeBienvenida;
	miIntervalo = setInterval(intervalo, 2000);
	
}
/** cuento cantidad de veces del intervalo contador +1 */
function intervalo() {

	contador=contador+1;
	document.getElementById("mostrar").innerHTML = mensajeBienvenida + " " + contador;
    
}
/** aviso que se detiene el intervalo e imprimo en pantalla*/
function fin()
{
	clearInterval(miIntervalo);
	document.getElementById("mostrar").innerHTML="Fin Intervalo , Se repitio "+contador+" Veces";
	contador = 0; // reinicio el contador, sino sigue contando

}