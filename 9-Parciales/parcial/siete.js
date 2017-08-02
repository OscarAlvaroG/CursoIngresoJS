function Mostrar()
{var sexo;
    var nota=parseInt(prompt("ingrese las notas"));
var promedio;    
var c_notas=0;
var notastotales;
var varones=0;
var bandera= true;
var min;

while(c_notas<2){
    c_notas++;
    nota=prompt("ingrese la nota nro " + c_notas);
    sexo=prompt("ingrese el sexo " + c_notas);

nota=parseInt(nota);

while(!(nota>=0 & nota<=10)){

   nota=prompt("ingrese las notas");  
    nota=parseInt(nota);
} if (sexo=="m" & nota>=6){
    varones++;

}if(bandera){
    min=nota;
    bandera=false;
}if(nota<min){
    min=nota;

}
notastotales=notastotales+nota;

}

promedio=notastotales/c_notas;
alert("la nota mas baj a  " +min + "cantidad de varones con nota mayores a 6  " +varones + "el promedio es " +promedio );










}
