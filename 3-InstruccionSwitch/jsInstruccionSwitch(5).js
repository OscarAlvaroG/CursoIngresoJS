function Mostrar()
{
//tomo la edad y lo convierto en Entero
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);

// verifico por verdadero si la hora esta en el rango e imprimo
switch (true) {
    case (laHora >= 7 && laHora <= 11):
        alert("Es de Mañana");
        break;
    default:
        break;
}	
	



}//FIN DE LA FUNCIÓN