var miTemporizador ;

function inicio()
{
	document.getElementById("secreto").style.visibility="hidden";//al boton secreto le aplica el estilo visibilidad hidden para ocultarlo
	document.getElementById("mostrar").innerHTML="Boton Oculto, espere 3 segundos";
	miTemporizador = setTimeout(depues3segundos, 3000);
	
}//fin inicio()

function depues3segundos() 
{

	document.getElementById("secreto").style.visibility="visible"; 
	document.getElementById("mostrar").innerHTML="Bienvenido a UTN FRA."
   
}//foin despues3segundos()

function fin()
{
	document.getElementById("mostrar").innerHTML="El boton ya esta visible";

}//fin fin()