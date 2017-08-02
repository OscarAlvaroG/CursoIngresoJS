function Mostrar()
{
var importe;
var max;
var min;
var dia=0;
var precioinicial=true;

while(dia<24){
    dia++;
    importe=prompt("ingrese importe");
     importe=parseInt(importe);
    while(importe<0){
         importe=prompt("ingrese importe");
         importe=parseInt(importe);
    }//fin validacion 0

    if(precioinicial){

    min=importe;
    max=importe;
    precioinicial= false;
    }

    if(importe>max){
        max=importe;
    }else if (importe<min){ 
        min=importe;

        
    

}

}// fin del while 24

alert("el mayor fue "  +max + "el menor es " +min);

console.log("el mayor fue "  +max + "el menor es " +min);
    




}

