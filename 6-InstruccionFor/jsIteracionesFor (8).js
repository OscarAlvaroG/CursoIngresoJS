/**
 * al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
 */

function Mostrar()
{
    var num = prompt("Ingrese un numero");
    var c_primos = 0;

    for(i=2;i<num;i++){

        if(num%i==0){
            c_primos++;
        }
    }//fin for
    if(c_primos>2){
        console.log("El numero no es primo");
    }else{
        console.log("El numero es primo");
    }




}//FIN DE LA FUNCIÓN