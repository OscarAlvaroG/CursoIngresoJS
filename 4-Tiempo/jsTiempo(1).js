var miIntervalo ;
var contador;

function inicio()
{	
    //avisa que comenzo el intervalo y llama a la funcion.
    document.getElementById("mostrar").innerHTML = "Comienza el mensaje en 3 Segundos";
	miIntervalo = setInterval(intervalo, 1000);// 1 segundo = 1000 milisegundos
	
}//fin inicio()

//imprime el mensaje cuando se lo llama desde inicio()
function intervalo() {
    //alert("Hola !!!!");
   document.getElementById("mostrar").innerHTML = "Bienvenidos a UTN FRA";
   clearInterval(miIntervalo);

}//fin intervalo()

