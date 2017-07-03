function Mostrar()
{
//tomo la hora del input  
var hora = document.getElementById('hora').value;
hora = parseInt(hora);

//hago comparaciones para saber si es verdadero y lo imprimo
//en el switch no se pueden poder rangos.
//se hace caso por caso.            
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
    default:
        alert("No Existe La hora");
        break;
}

}//fin mostrar()

function forma2()
{
    var hora = document.getElementById('hora').value;
    hora = parseInt(hora);

    switch (hora) 
    {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de Mañana");
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alert("Es de tarde");
            break;
        case 20:
        case 21:
        case 22:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            alert("Es de Noche")
    
        default:
            alert("No existe La hora");
            break;
    }
}
// lo mismo pero con elseif
function conelseif()
{
    var hora = document.getElementById('hora').value;
    hora = parseInt(hora);

    if (hora >= 7 && hora <= 11) {
        alert("Es de Mañana");
    }
    else if(hora >= 12 && hora <= 19){
        alert("Es de Tarde");
    }
    else if(hora >= 20 && hora <= 24 || hora >= 0 && hora <= 6){
        alert("Es de noche");
    }
    else {
        alert("La hora no existe");
    }
}