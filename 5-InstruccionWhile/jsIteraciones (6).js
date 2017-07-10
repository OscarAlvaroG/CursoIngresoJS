
function promedios(){
	var contador = 0;
	var num;
	var total = 0;
	var promedio = 0;

	while(contador<5){
		contador = contador + 1;
		//contador++ //tambien se puede utilizar para contar
		num = prompt("ingrese numero");
		num = parseInt(num);
		// valido que sea numeros y no letras
		//no se puede validar NaN==NaN javascript siempre lo toma false
		while(isNaN(num)){
			num = prompt("ingrese numero");
			num= parseInt(num);
		}
		total = total + num;
	}
	//calculo el promedio

	promedio = total / contador;

	//informo en pantalla

	document.getElementById('suma').value="La suma total es: "+total; //suma
	document.getElementById('promedio').value="El promedio es: "+promedio; //promedio
	console.log("Se ingresaron "+contador+" Numeros"); // no s necesario reinicar el contador

}