function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var total = 0;
	var respuesta = true;
	var promedio; 

	contador = parseInt(contador);

	/** pregunto si quiere seguir ingresando numeros */
	respuesta = confirm('Esta Seguro de Comenzar');
	//acumulador = prompt('Ingrese un numero');
	while(respuesta == true){

		contador = contador +1;
		acumulador = prompt('Ingresa un Numero');
		acumulador = parseInt(acumulador);
		total = total + acumulador;

		respuesta = confirm('Queres Seguir Ingresando Numeros ? ');

	}
	promedio = total / contador;

	document.getElementById('suma').value=total;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN