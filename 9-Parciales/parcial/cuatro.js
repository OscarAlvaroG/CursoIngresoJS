function Mostrar()
{
    //variables
    var n1 , n2, resultado;
    
    //asigno valores y proceso
    n1 = prompt("Ingrese un Numero");
    n1 = parseInt(n1);
    n2 = prompt("Ingrese otro Numero");
    n2 = parseInt(n2);

    //condiciones
    if(n1==n2){
        resultado = n1*n2;
    } else if(n1>n2){
        resultado = n1 - n2;
    } else if(n1<n2){
        resultado = n1 + n2;
    }

    //imprimo
    document.write("El resultado segun los numeros ingresados es: "+resultado);
}
