//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var lado;
	var ancho;
var alambre;
var perimetro;

	lado=document.getElementById("largo").value;
	ancho=document.getElementById("ancho").value;
lado=parseInt(lado);
ancho=parseInt(ancho);

 perimetro=lado*2+ancho*2;

alambre= perimetro*6;

alert("se necesita  " +alambre)	;
}

