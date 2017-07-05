function Mostrar()
{
	/** cuando se sabe la cantidad de repeticiones no se usa FOR ? , preguntar al profesor */
	var numero = 10;
	var repeticiones = 0;
	while(numero>=1 &&numero<=10 ){
		alert(numero);
		numero = numero -1;
		repeticiones = repeticiones+1;

		document.getElementById('mostrar').innerHTML = "Se repitio :"+repeticiones+" Veces";
	}

}//FIN DE LA FUNCIÓN