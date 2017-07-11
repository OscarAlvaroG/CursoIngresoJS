/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var intentos = 0;
var n_usuario;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor(( Math.random() *100) + 1 );
  console.log(numeroSecreto);
  intentos = 0;
}

function verificar()
{
   n_usuario = document.getElementById('numero').value;
  //cuento los intentos
  intentos = intentos +1;
  if(n_usuario==numeroSecreto){
     alert('Ganaste!, en '+intentos +" Intentos");
     document.getElementById('intentos').value = "Ganaste despues de "+intentos+" Intentos";
     intentos = 0;

  } else {
    console.log("No hay coincidencias " + intentos + " intentos ");

  }
// vrifico si me pase o no del numero secreto
  if(n_usuario>numeroSecreto){
    alert("Te pasaste del numero secreto");
  } 
  else if (n_usuario<numeroSecreto){
    alert("Todavia falta para el numero secreto");
  }

}