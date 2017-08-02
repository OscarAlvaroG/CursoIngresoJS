//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
var max;
var min;
var dia=0;
var bandera=true;

	while(dia<7){
		dia++;
		importe=prompt("ingrese un importe " + dia);
			importe=parseInt(importe);
	}while(importe<0){
		importe=prompt("ingrese un importe ");
			importe=parseInt(importe);

	}if(bandera){
		max=importe;
		min=importe;
		bandera=false;
	}else if (importe>max){
		max=importe;

	} if(importe<min){
		min=importe;
	}
alert("el mayor es " +max + "el minimo es " +min);

	
}

