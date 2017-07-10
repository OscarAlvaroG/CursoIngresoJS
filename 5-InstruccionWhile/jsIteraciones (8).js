function Mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1; //pongo en 1 porque en cero siempre dara 0.
	var contadorNegativos = 0;
	var contadorPositivos = 0;

	respuesta = confirm('Seguro de Comenzar? ') ;
	while(respuesta == true){
		
		numero = prompt('ingrese un numero');
		numero = parseInt(numero);
		if(numero>=0){
			// sumar los positivos
			positivo = positivo + numero;
			contadorPositivos = contadorPositivos +1;
		} else {
			// multiplico los negativos
			negativo = negativo * numero;
			contadorNegativos = contadorNegativos +1;

		}
		respuesta = confirm('Seguir Ingresando ? ') ;
	}

	document.getElementById('suma').value="La suma de los "+contadorPositivos+" Nros positivos es: "+positivo;
	document.getElementById('producto').value="El producto de los "+contadorNegativos+" Nros negativos es: "+negativo;
	//reinicio las variables para que comience de nuevo.
	positivo = 0;
	negativo = 0;

}//fin mostrar()

function enclase(){

}