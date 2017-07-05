function MaxMin(){
	//variables

	var max = 0;
	var min = 0;
	var numero;

	//pido datos

	respuesta = confirm('Seguro de Continuar')
	while(respuesta==true){
		numero = prompt('ingrese un numero');
		numero = parseInt(numero);
		
		//verifico si el numero es el maximo o minimo
		if(numero > max){
			max = numero;
			min = numero;
		} 
		else {
			min  = numero;
		}

		// pregunto si quiere seguir
		respuesta = confirm('Quiere continuar ? ');
	}

	// hago los calculos y muestro los resultados

	document.getElementById('maximo').value = "El numero Maximo es: "+max;
	document.getElementById('minimo').value = 'El numero Minimo es: '+min;

	//reininio variables para comenzar de nuevo
	max = 0;
	min = 0;
}