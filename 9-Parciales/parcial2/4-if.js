//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1=prompt("ingrese dos numeros");
	var num2=prompt("ingrese dos numeros");
	num1=parseInt(num1);
	num2=parseInt(num2);
	var resultado;

	if(num1==num2){
		resultado=num1*num2;
		
	}else if(num1>num2){
		resultado=num1-num2;
		
	}else {
		resultado=num1+num2;
	}
	document.write(resultado);

	
	
}

