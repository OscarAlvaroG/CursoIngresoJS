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