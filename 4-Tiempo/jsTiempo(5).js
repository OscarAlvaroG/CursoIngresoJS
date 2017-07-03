var miTemporizador ;

function inicio()
{	
	document.getElementById("mostrar").innerHTML = "En 3 Segundos cambiara este mensaje";
	miTemporizador = setTimeout(mensaje, 3000);// llama a funcion mensaje() despes de 3 segundos
	
}//fin inicio()
function mensaje(){
	document.getElementById("mostrar").innerHTML = "Bienvenido a UTN FRA";
}//fin mensaje()