function Mostrar()
{
//creo variable y asigno el mes del select id
var mesDelAño = document.getElementById('mes').value;


// verifico por verdadero si el mes es febrero o no , imprimo
switch(true){
    case (mesDelAño=="Febrero"):
        alert("Este mes tiene menos de 29 Dias");
    break;
    case (mesDelAño!=("Febrero")):
        alert("Este mes tiene 30 dias o Mas");
    break;
    default:
    break;
}
	
	


}//FIN DE LA FUNCIÓN