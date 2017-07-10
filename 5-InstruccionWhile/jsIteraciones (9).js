function MaxMin(){
	//variables
	var max;
	var min;
	var numero;
	var contador = 0; // para verificar la primera vez
	var respuesta = true; // para el while
	var primeravez = true;// para asignar max y min la primera vez

	//pido datos
	while(respuesta){
		numero = prompt('ingrese un numero');
		numero = parseInt(numero);
		contador = contador +1;
		// inicio max y min como primer dato. y que entre la primera vez
		if (primeravez){
			max = numero;
			min = numero;
			primeravez = false; //explico que esto es una bandera, para hacerlo la primera vez
		} else {
			//asigno el maximo
			if(numero > max){
			max = numero;
			}
			//asigno el minimo
			if (numero < min){
				min  = numero;
			}
		}
		// pregunto si quiere seguir
		respuesta = confirm('Quiere continuar ? ');
	}

	// hago los calculos y muestro los resultados

	document.getElementById('maximo').value = "El numero Maximo es: "+max;
	document.getElementById('minimo').value = 'El numero Minimo es: '+min;
}