/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var mensaje;
	mensaje = prompt("Ingresa Tu Nombre");
	document.getElementById("elNombre").value=mensaje;
	
}

