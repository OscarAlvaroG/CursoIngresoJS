function Mostrar()
{
var dia=prompt("ingrese un dia de la semana");
var minuscula=dia.toLowerCase();

switch(minuscula){
    case("sabado"):
    case("domingo"):
    alert("es finde semana");

    break;

    case("lunes"):
    case("martes"):
    case("miercoles"):
    case("jueves"):
    case("viernes"):
    alert("A trabajar!!");

    break;

    default:
alert("no existe");
break;

}
}
