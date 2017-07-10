function queriasDificilToma(){

	// creo variables
	var numero = 0;
	var sum_neg = 0;
	var sum_pos = 0;
	var c_pos = 0;   // contador positivos
	var c_neg = 0;   //contador negativos
	var c_ceros = 0; //contador ceros
	var c_pares = 0; //contador de nros pares
	var pro_pos = 0; //promedio positivos
	var pro_neg = 0; //promedio negativos
	var dif_pos_neg = 0;
	var respuesta = true;
	
	while (respuesta == true) {
		// faltaria validar la entrada de numeros, que no pueda ingresar texto.
		numero = prompt('Ingrese un Numero');
		numero = parseInt(numero);

		if (numero<0){
			sum_neg = sum_neg + numero;
			c_neg = c_neg + 1;
		}
		else if (numero>0){
			sum_pos = sum_pos + numero;
			c_pos = c_pos + 1;
		}
		else if (numero == 0){
			c_ceros = c_ceros + 1;
		}
		//verifico si el numero es par o impar y le sumo 1 a su contador
		if(numero%2==0){
			c_pares++;
		}
		

		respuesta = confirm('¿ Continuar ?');
	}

	// proceso informacion e informo

	pro_pos = sum_pos / c_pos;
	pro_neg = sum_neg / c_neg;

	dif_pos_neg = sum_pos + sum_neg;
	// Muestro  en pantalla toda la informacion.
	document.write("La suma de Negativos es: "+sum_neg+"</br> La suma de positivos es: "+sum_pos+" </br> Cantidad Nros Positivos: "+c_pos+" </br> Cantidad Negativos: "+c_neg+"</br> Cantidad de Ceros: "+c_ceros+" </br> Cantidad de Pares: "+c_pares+"</br> Promedio de Positivos: "+pro_pos+"</br> Promedio de Negativos "+pro_neg+"</br> Positivos - Negativos: "+dif_pos_neg);
	// mandarlo por el inner


}