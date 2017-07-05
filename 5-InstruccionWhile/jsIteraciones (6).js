
function promedios(){
	var contador = 0;
	var acumulador = 0;
	var total = 0;
	var promedio = 0;
	contador = parseInt(contador);
	total = parseInt(total);

	while(!(contador==5)){
		contador = contador + 1;
		//acumulador = parseInt (prompt("ingrese un numero")); // se puede parsear en una sola linea o separado
		acumulador = prompt("ingrese numero");
		acumulador = parseInt(acumulador);
		total = total + acumulador;
	}
	promedio = total / contador;
	document.getElementById('suma').value=total; //suma
	document.getElementById('promedio').value=promedio; //promedio
	acumulador = 0;
	contador = 0;

}