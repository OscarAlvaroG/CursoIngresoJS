

var miIntervalo;
var contador=0;
	/**  aviso de inicio*/
function inicio()
{
	//alert("El intervalo a comenzado, recibiras un mensaje cada 2 segundos.");
	document.getElementById('total').innerHTML="Comienza el Intervalo";
	miIntervalo = setInterval(intervalo, 2000); //llamo a la funcion cada 2 segundos
	
}
	//la funcion cuenta cantidad de veces y envia mensaje
function intervalo() {

	contador = contador +1;

    if (contador==5) //cuando llegue a 5 llamo funcion fin()
    {
		fin();

    } else {
		//alert("Bienvenido a la UTN FRA, cantidad ="+contador);
		document.getElementById('total').innerHTML="Bienvenido a UTN FRA: "+contador;
	}
}
function fin(){
	clearInterval(miIntervalo);
	document.getElementById('total').innerHTML="El intervalo se repitio "+contador+" Veces.";
	contador=0;
}