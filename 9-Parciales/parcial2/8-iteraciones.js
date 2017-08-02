/**
 * 8-Realizar el algoritmo que al presionar el botón "Mostrar" permita ingresar números positivos 
 * (validar que sea positivo) hasta que el usuario quiera. 
Informar al terminar el ingreso por document.write: 
a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo.
 */
function Mostrar()
{	
	// variables
	var n;
	var tot_numeros = 0;
	var contador = 0;
	var c_pares = 0;
	var promedio;
	var max, min;
	var bandera = true;
	var respuesta = true;

	//comiendo ungreso por while
	while(respuesta){
		contador++

		n = prompt("ingrese un numero");
		n = parseInt(n);
		//valido positivos
		while(!(n>0)){
			n = prompt("ingrese un numero");
			n = parseInt(n);
		}
		//bandera para min y max
		if(bandera){
			bandera = false;
			max = n;
			min = n;
		}
		//comparo max y min
		if(n>max){
			max = n;
		}
		if(n<min){
			min = n;
		}
		//si es par cuento 1
		if(n%2==0){
			c_pares++
		}
		//acumulo los numeros
		tot_numeros = tot_numeros + n;

		//pregunto a usuario , esto devuelve true o false, sirve para el while(respuesta)
		respuesta = confirm("Quiere Continuar ?");
	} //fin while
	// calculo promedio
	promedio = tot_numeros / contador;

	//informo lo que me pidieron
	document.write("Hay "+c_pares+" Numeros Pares.");
	document.write("<br>El promedio de los Nros Ingresados es: "+promedio);
	document.write("<br>La sumatoria de todos los numeros es: "+tot_numeros);
	document.write("<br>El Numero Maximo es: "+max + " y El Minimo es: "+min);

	
}

