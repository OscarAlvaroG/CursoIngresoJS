function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/**creo variables */
	var numeroRandom;
	/**genero un numero aleatorio y lo guardo en variable */
	numeroRandom = Math.round((Math.random() * 10) + 1);
	/**imprimo en pantalla */
	//preguntar profesor porque no funciona el innerHTML y si en el alert
    document.getElementById("mostrar").innerHTML = numeroRandom;
	alert("Numero Aleatorio: " + numeroRandom);

}//fin mostrar()