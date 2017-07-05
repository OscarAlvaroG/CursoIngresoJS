function Mostrar()
{

    var clave;
    clave = prompt("ingrese el número clave.");
    while (clave!=("utn750")){
       clave = prompt("Ingrese la Clave") ;
    }
    document.getElementById("mostrar").innerHTML = "La clave ingresada es: "+clave;
    alert("La clave es: "+clave);


}//fin mostrar()

/*
    while(cndicion){
        if(condicion){
            continue ; // si quiero detener la ejecucion y volver al principio
        }
    }
*/