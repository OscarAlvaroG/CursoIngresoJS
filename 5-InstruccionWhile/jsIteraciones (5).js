function Mostrar()
{
    var sexo;
    var sexoPersona;

    while (sexo!="f"&&sexo!="m"){
        var sexo = prompt("Ingrese Genero f: Femenino m: Masculino");
            sexo = sexo.toLowerCase(); // lo convierto en minusculas para evitar error en el while
            if (sexo == "f"){
                sexoPersona = "Femenino";
            } else {
                sexoPersona = "Masculino";
            }
    }
   
    document.getElementById("mostrar").innerHTML ="Usted tiene sexo: "+sexoPersona;

    document.getElementById('Sexo').value="Usted Ingreso: "+sexo;

}//FIN DE LA FUNCIÓN