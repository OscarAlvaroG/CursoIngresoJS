function Mostrar()
{

	var contador=0;
	var numero;
	var total=0;
	var promedio = 0; 
	var respuesta = true;

	while(respuesta){

		contador++
		numero = prompt('Ingresa un Numero');
		numero = parseInt(numero);
		// valido solo numeros
		while(isNaN(numero)){
			numero = prompt("Ingresa Solo Numeros")
			numero = parseInt(numero);
		}
		total = total + numero;

		/** pregunto si quiere seguir ingresando numeros */
		respuesta = confirm('Queres Seguir Ingresando Numeros ?');

	}//fin while respuesta

	// calculo promedio e informo
	promedio = total / contador;

	document.getElementById('suma').value="El total es: "+total;
	document.getElementById('promedio').value="El promedio es: "+promedio;

}//FIN DE LA FUNCIÓN
