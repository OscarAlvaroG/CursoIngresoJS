var miIntervalo ;
var contador;

function inicio()
{	
    //avisa que comenzo el intervalo y llama a la funcion.
    document.getElementById("mostrar").innerHTML = "Comienza el mensaje en 3 Segundos";
	miIntervalo = setInterval(intervalo, 3000);
	
}//fin inicio()

//imprime el mensaje cuando se lo llama desde inicio()
function intervalo() {
   document.getElementById("mostrar").innerHTML = "Bienvenidos a UTN FRA";

}//fin intervalo()

