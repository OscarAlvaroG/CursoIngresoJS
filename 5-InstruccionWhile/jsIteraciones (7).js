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
		acumulador = prompt('Ingresa un Numero o 0 Para Cancelar');
		acumulador = parseInt(acumulador);
		total = total + acumulador;

		/** pregunto si quiere seguir ingresando numeros */

		respuesta = confirm('Queres Seguir Ingresando Numeros ? "si" o "no" ');

	}
	promedio = total / contador;

	document.getElementById('suma').value=total;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN


function enclase(){

	var contador=0;
	var numero = 0;
	var total = 0;
	var promedio = 0; 
	total = parseInt(total);

	console.log(numero);

	while(!isNaN(numero)){

		contador = ++contador;
		contador = parseInt(contador);
		numero = prompt('Ingresa Un Numero');
		numero = parseInt(numero);
		console.log(numero);
		total = total + numero;
		total = parseInt(total);

	}
	promedio = total / contador;

	document.getElementById('suma').value=total;
	document.getElementById('promedio').value=promedio;
	console.log(contador);
	console.log(total);

}