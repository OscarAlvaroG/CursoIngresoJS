function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while (!(numero>=0 && numero<=9)){
		numero = prompt("Ingrese un numero entre 0 y 10");
		numero = parseInt(numero);
		//valido que solo sea numeros
		while(isNaN(numero)){
			numero = prompt("Ingrese Solo Numeros")
			numero = parseInt(numero)
		}
	}
	alert("El numero ingresado es: "+numero);
	document.getElementById("Numero").value = "El Nº es: "+numero;	


}//FIN DE LA FUNCIÓN