/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina = 0;
function comenzar()
{
    //no encontre funcionalidad a comenzar, preguntar profe

}//FIN DE LA FUNCIÓN
function piedra()
{
     eleccionMaquina = parseInt(Math.random()*3+1);
     console.log(eleccionMaquina);
    if (eleccionMaquina == 1 ){
        console.log('Empatados! Piedra con Piedra!');
    } else if (eleccionMaquina == 3 ){
        console.log('Ganaste! Piedra Golpea a Tijera');
    } else if (eleccionMaquina == 2 ){
        console.log('Perdiste! Papel Envuelve a Piedra');
    }

}//FIN DE LA FUNCIÓN
function papel()
{
     eleccionMaquina = parseInt(Math.random()*3+1);
     console.log(eleccionMaquina);
    if(eleccionMaquina == 1 ){
        console.log('Ganaste! Papel Envuelve a Piedra');
    } else if (eleccionMaquina == 2 ) {
        console.log('Empate Papel con Papel');
    } else if(eleccionMaquina == 3 ){
        console.log('Perdiste Tijera Corta Papel');
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    eleccionMaquina = parseInt(Math.random()*3+1);
    console.log(eleccionMaquina);

    if(eleccionMaquina==1){
        console.log('Perdiste, Piedra Golpea Tijera');
    } else if( eleccionMaquina==2 ){
        console.log('Ganaste Tijera Corta Papel');
    } else if( eleccionMaquina==3){
        console.log('Empatados! Tijera con Tijera');
    }
	

}//FIN DE LA FUNCIÓN