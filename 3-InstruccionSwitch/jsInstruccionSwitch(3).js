function Mostrar()
{
//creo variable y asigno el mes del select id
var mesDelAño = document.getElementById('mes').value;


// verifico por verdadero si el mes es febrero o no , imprimo
switch(true){
    case (mesDelAño=="Febrero"):
        alert("Este mes tiene menos de 29 Dias");
        break;
    default:
        alert("Este mes tiene 30 dias o Mas");
        break;
}
	
	


}//FIN DE LA FUNCIÓN

function forma2()
{
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case "Febrero":
            alert("Este mes tiene 29 dias");
            break;
        default: 
            alert("Este Mes Tiene 30 Dias o Mas");
            break;
    }
}