//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var lado;
	var perimetro;
	
	lado=document.getElementById("lado").value;

	lado=lado*3;
	perimetro=lado;
	alert("el perimetro es " +perimetro);
}

