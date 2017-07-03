function Mostrar()
{
//tomo la hora del input  
var hora = document.getElementById('hora').value;
hora = parseInt(hora);

//hago comparaciones para saber si es verdadero y lo imprimo            
switch (true) {
    case (hora >= 7 && hora <= 11):
        alert("Es de Mañana");
        break;
    case (hora >= 12 && hora <= 19):
        alert("Es de Tarde");
        break;
    case (hora >= 20 && hora <= 24 || hora >= 0 && hora <= 6):
        alert("Es de noche");
        break;
    case (hora!=(hora >= 0 && hora <= 24)):
        alert("No Existe La hora");
        break;
    default:
        break;
}

}//FIN DE LA FUNCIÓN