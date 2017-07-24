/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() 
{
    //variables
   
    //valido que sea un positivo
    var num = document.getElementById("numero").value;
    num = parseInt(num);
    var c_pares = 0;
    if(num<1){
        alert("Ingrese solo numeros positivos");
    } else {
        for(i=1;i<=num;i++){
            if(i%2==0){
                c_pares++;
            }   
        }//fin for
       console.log("La cantidad de pares es: "+c_pares);
    }//fin else
 	
}//fin NumerosPares

function NumerosImpares(){
     //valido que sea un positivo
    var num = document.getElementById("numero").value;
    num = parseInt(num);
    var c_negativos = 0;
    if(num<1){
        alert("Ingrese solo numeros positivos");
    } else {
        for(i=1;i<=num;i++){
            if(i%2==0){
            } else {
                c_negativos++
            }
        }//fin for
       console.log("La cantidad de Impares es: "+c_negativos);
    }//fin else
}


function NumerosDivisibles(){
     //valido que sea un positivo
    var num = document.getElementById("numero").value;
    num = parseInt(num);
    var c_divisibles = 0;

    if(num<1){
        console.log("ingrese solo numeros positivos");
    }else{
        for(i=1;i<=num;i++){
            if(num%i==0){    
                c_divisibles++;
            }
        }
        console.log("Se encontro: " + c_divisibles +" Numeros Divisibles");   
    }
  


    //verifico si es divisible con el numero
 
}