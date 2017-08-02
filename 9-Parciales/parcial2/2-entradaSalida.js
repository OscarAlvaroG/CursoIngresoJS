//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=prompt("ingrese un importe");
var precio_final;
	importe=parseInt(importe);

precio_final=importe*1.21;
	
	document.getElementById("importe").value=precio_final;
}

