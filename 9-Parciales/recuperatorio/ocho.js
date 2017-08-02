function Mostrar()
{
    // variables
    var n, promedio, max, min;
    var contador = 0;
    var tot_n = 0;
    var c_pares = 0;
    var respuesta = true;
    var bandera = true;
    //obtengo datos por el bucle
    while(respuesta){
        contador++;

        n = parseInt(prompt("Ingrese un Numero para Nº"+contador));
        //valido positivo
        while(!(n>0)){
            n = parseInt(prompt("Invalido, Ingrese un Numero para Nº"+contador));
        }
        // cuento los pares
        if(n%2==0){
           c_pares++; 
        }
        //bandera para min y max
        if(bandera){
            min = n;
            max = n;
            bandera = false;
        }

        // comparo min y max
        if(n<min){
            min = n;
        }
        if(n>max){
            max = n;
        }
        //acumulo los numeros
        tot_n = tot_n + n;
        //pregunto para seguir o no con el bucle
        respuesta = confirm("¿ Quiere Continuar ?");
    }//fin while

    promedio = tot_n / contador;

    //imprimo
    document.write("La cantidad de Numeros pares es : "+c_pares);
    document.write("<br>El promedio de todos los numeros ingresados es: "+promedio);
    document.write("<br>La Cantidad de numeros ingresados es: "+tot_n);
    document.write("<br>El numero Maximo es: "+max + " y El Minimo es: "+min);
}
