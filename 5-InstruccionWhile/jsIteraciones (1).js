
function Mostrar(){
	// creo una variable para las repeticiones
	var contador = 0;
	// bucle hasta que 
	while(contador<10){
		contador = contador +1;
		alert('Nº'+(contador));
		document.getElementById('mostrar').innerHTML = "Se repitieron : "+contador+" Veces";
	}
}
