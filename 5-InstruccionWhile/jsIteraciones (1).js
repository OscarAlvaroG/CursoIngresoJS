function Mostrar()
{
	/** creo una variable para la repeticion */
	/** esto no seria un FOR ? preguntarle al profesor */
	var repetir;
	for (repetir = 0; repetir <= 10; repetir++) {
		alert("Numero de Itereacion: "+repetir);
	};
	document.getElementById("repetir").value = "Se repitieron : "+(repetir-1) +" Veces";	
}//fin mostrar()

function enclase(){
	var numero = 1;
	while(numero<=10){
		numero = numero +1;
		alert('Nº'+(numero-1));
		document.getElementById('mostrar').innerHTML = "Se repitieron : "+(numero-1)+"Veces";
	}
}