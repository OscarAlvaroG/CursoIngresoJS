
function promedios(){
	var contador = 0;
	var num;
	var total = 0;
	var promedio = 0;

	while(!(contador==5)){
		contador = contador + 1;
		//contador++
		//acumulador = parseInt (prompt("ingrese un numero")); // se puede parsear en una sola linea o separado
		num = prompt("ingrese numero");
		num = parseInt(num);
		console.log(num);
		while(isNaN(num)){ // no se puede validar NaN == NaN , por el lenguaje siempre va a ser falso.
			num = prompt("ingrese numero");
			num= parseInt(num);
		}
		total = total + num;
	}
	promedio = total / contador;
	document.getElementById('suma').value=total; //suma
	document.getElementById('promedio').value=promedio; //promedio
	console.log(contador); // no s necesario reinicar el contador

}