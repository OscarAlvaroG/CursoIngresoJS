function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var total = 0;
	var promedio; 
	var respuesta = true;
	
	total = parseInt(total);
	contador = parseInt(contador);

	while(respuesta ==true){

		contador = ++contador;
		acumulador = prompt('Ingresa un Numero');
		acumulador = parseInt(acumulador);
		total = total + acumulador;

		/** pregunto si quiere seguir ingresando numeros */

		respuesta = confirm('Queres Seguir Ingresando Numeros ? "si" o "no" ');

	}
	promedio = total / contador;

	document.getElementById('suma').value=total;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN