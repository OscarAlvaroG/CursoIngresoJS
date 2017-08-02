function Mostrar()
{
    //variables
    var n1, n2, resultado;

    //asigno valores
    n1 = parseInt(prompt("Ingrese un numero"));
    n2 = parseInt(prompt("ingrese otro numero")) ;

    // proceso e imprimo

    resultado = n1+n2;
    if(resultado>0){
        alert("El resultado de la suma es "+resultado + " , es un numero Positivo");
    } else if(resultado<0){
        alert("El resultado de la suma es "+resultado + " , es un numero Negativo");
    } else if(resultado == 0){
        alert("El resultado de la suma es "+resultado + " , es un numero Cero");
    }

}
