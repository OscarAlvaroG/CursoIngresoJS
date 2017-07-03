var miTemporizador ;
var contador=0;
var tiempoInicio;
var tiempoFinal;


function inicio()
{
	document.getElementById("secreto").style.visibility="hidden";
	document.getElementById("mostrar").innerHTML = "Se oculto el boton, espera 3 segundos.";
	miTemporizador = setTimeout(esperar3, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function esperar3() {


	document.getElementById("secreto").style.visibility="visible"; 
 	tiempoInicio=  new Date();
 	tiempoInicio=tiempoInicio.getTime();
	document.getElementById("mostrar").innerHTML = tiempoInicio;
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	tiempoFinal= new Date();
	tiempoFinal=tiempoFinal.getTime();
	//alert(tiempoFinal-tiempoInicio);
	document.getElementById("mostrar").innerHTML = tiempoFinal-tiempoInicio;
}//FIN DE LA FUNCIÓN fin