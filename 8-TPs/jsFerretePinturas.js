/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
    var numero = 0;
    var centigrados = 0;
    var farenheit = 32;
function FaC () 
{

    numero = document.getElementById('temp').value;
    numero = parseInt(numero);
    //formula farenheit a centgrados:

    ///(x-32)*5/9
    centigrados =  (numero - 32) * 5 / 9;
   //alert(centigrados);
    document.getElementById('mostrar').innerHTML = numero+" Farenheit equivale a :"+centigrados+" Grados Centigrados";
	
}

function CaF () 
{
    //conversion a farenheit
    numero = document.getElementById("temp").value;
    numero  =parseInt(numero);

    //formula centigrados a farenheit
    //x*9/5+32
     farenheit = numero * 9 / 5 + 32;
    document.getElementById("mostrar").innerHTML = numero+" Grados Centigrados equivale a :"+farenheit+" Grados Farenheit";
	
}
