function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
var sexoPersona;

while (!(sexo=="f"||sexo=="m" ||sexo=="F"||sexo=="M")){
    var sexo = prompt("Ingrese Genero f: Femenino m: Masculino");
}
if (sexo == "f" || sexo =="F"){
    sexoPersona = "Femenino";
} else {
    sexoPersona = "Masculino";
}
document.getElementById("mostrar").innerHTML ="Usted tiene sexo: "+sexoPersona;

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN