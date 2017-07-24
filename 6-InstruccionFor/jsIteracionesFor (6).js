/**
 * al presionar el boton pedir un numero
Mostar los numeros pares desde el 1 al numero ingresado,
y mostar la cantidad de numeros pares encontrados.
 */

function Mostrar()
{
    var cont_pares = 0;
    var num = prompt("Ingrese un numero");
    for(i=1;i<=num;i++){

        //pares
        if(i%2==0){
            console.log("El numero par es: "+i);
            cont_pares++;
        }
        
    }//fin for
     console.log("Cantidad Pares: "+cont_pares);
   
    
}//FIN DE LA FUNCIÓN