function Mostrar()
{   
    cant_divisores = 0;
    var num = prompt("Ingrese un numero");
    num = parseInt(num);
    for(i=0;i<=num;i++){

        if(i%2==0){
            cant_divisores++;
        }
    }
    console.log("Se encontraron: "+cant_divisores+" Divisores");

}//FIN DE LA FUNCIÓN