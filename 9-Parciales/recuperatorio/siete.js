function Mostrar()
{
    //variables
    var edad, promedio, e_min;
    var tot_edades = 0;
    var varones = 0;
    var contador = 0;
    var bandera = true;

    //bucle 100 repeticiones
    while(contador<5){
        contador++
        edad = parseInt(prompt("Ingrese edad"));
        while(!(edad>0 & edad <100)){
           edad = parseInt(prompt("Edad Incorrecta, Ingrese edad entre 0 y 100"));
        }
        sexoUsuario = prompt("Ingrese el sexo");
        sexo = sexoUsuario.toUpperCase();
        console.log(sexo);
        while(!(sexo=="F" | sexo=="M")){
            sexo = prompt("Sexo Incorrecto, Ingrese sexo con F o M");
        }
        //cuento los varones mas de 20
        if(sexo=="M" & edad>=20){
            varones++
        }
        //bandera edad
        if(bandera){
            e_min = edad;
            bandera = false;
        }
        //edad minima
        if(edad<e_min){
           e_min = edad;
        }
        //sumo las edades para el promedio
        tot_edades = tot_edades + edad;

    } //fin while
    // promedio de edades e informo
        promedio = tot_edades / contador;
    document.write("El promedio de las edades es: "+promedio +" años." + "<br> La edad mas baja es:  "+e_min + "<br> Hay " +varones + " Varones de 20 años o mas");

}
