/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto = 0; 
var intentos = 0;
var temporzador;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(( Math.random() *100) + 1 );
	console.log(numeroSecreto);
	intentos = 0;

	temporizador = setTimeout(verificar, 4000);// llama a funcion mensaje() despes de 3 segundos
	resetear = setTimeout(reset,4000); // reseteo el juego a los 4 segundos 

}
// resetea el juego
function reset(){
	numeroSecreto = 0;
	intentos = 0;
}

function verificar()
{
	// no comienza el juego si numero secreto es 0
	if(numeroSecreto==0){
		alert('La partida Termino, hace clic en comenzar! :)')
	} else {
		n_usuario = document.getElementById('numero').value;
		//evalua si el numero secreto es igual al ingresado y la cantidad de intentos
		intentos = intentos +1;
		if (n_usuario==numeroSecreto && intentos == 1){
				alert('Ganaste!, en '+intentos +" Intentos, Sos un Psiquico! :P");
				document.getElementById('intentos').value = "Ganaste despues de "+intentos+" Intentos";
				intentos = 0;

			} else if (n_usuario == numeroSecreto && intentos == 2 ){
				alert('Ganaste!, en '+intentos +" Intentos, Excelente Percepcion");
				document.getElementById('intentos').value = "Ganaste despues de "+intentos+" Intentos";
				intentos = 0;

			} else if (n_usuario == numeroSecreto && intentos == 3){
				alert('Ganaste!, en '+intentos +" Intentos, Esto es Suerte");
				document.getElementById('intentos').value = "Ganaste despues de "+intentos+" Intentos";
				intentos = 0;

			} else if( n_usuario == numeroSecreto && intentos == 4){
				alert('Ganaste!, en '+intentos +" Intentos, Excelente Tecnica");
				document.getElementById('intentos').value = "Ganaste despues de "+intentos+" Intentos";
				intentos = 0;

			} else if ( n_usuario == numeroSecreto && intentos == 5){
				alert('Ganaste!, en '+intentos +" Intentos, Estas en la Media ;)");
				document.getElementById('intentos').value = "Ganaste despues de "+intentos+" Intentos";
				intentos = 0;

			} else if (n_usuario  == numeroSecreto && (intentos >=6 && intentos <= 10)){
				alert('Ganaste!, en '+intentos +" Intentos, Te falta Tecnica :)");
				document.getElementById('intentos').value = "Ganaste despues de "+intentos+" Intentos";
				intentos = 0;

			} else if (n_usuario == numeroSecreto && intentos > 10){
				alert('Ganaste!, en '+intentos +" Intentos, Afortunado en el Amor :(");
				document.getElementById('intentos').value = "Ganaste despues de "+intentos+" Intentos";
				intentos = 0;
			}
				// si no se cumple lo anterior
			else {
				console.log("No hay coincidencias " + intentos + " intentos ");
			}
			// vrifico si me pase o no del numero secreto
			if (n_usuario>numeroSecreto){
				alert("Te pasaste del numero secreto");
			} 
			else if (n_usuario<numeroSecreto){
				alert("Todavia falta para el numero secreto");
			}
			else{
				
			}
			// finalizo el TimeOut
			clearTimeout();

	}//fin if numero secreto == 0
   
}

