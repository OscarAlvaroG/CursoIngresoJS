/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var p1;
    var p2;
    var p3;
    var resultado;
function Sumar () 
{
    p1 = document.getElementById('1').value;
    p2 = document.getElementById('2').value;
    p3 = document.getElementById('3').value;
    p1 = parseInt(p1);
    p2 = parseInt(p2);
    p3 = parseInt(p3);

    resultado = p1 + p2 + p3 ;
    document.getElementById('mostrar').innerHTML ="El resultado de la suma es: "+ resultado;

}
function Promedio () 
{
    p1 = document.getElementById('1').value;
    p2 = document.getElementById('2').value;
    p3 = document.getElementById('3').value;
    p1 = parseInt(p1);
    p2 = parseInt(p2);
    p3 = parseInt(p3);

    resultado = (p1 + p2 + p3)/3 ;
    document.getElementById('mostrar').innerHTML ="El promedio es: "+ resultado;
	
}
function PrecioFinal () 
{
    p1 = document.getElementById('1').value;
    p2 = document.getElementById('2').value;
    p3 = document.getElementById('3').value;
    p1 = parseInt(p1);
    p2 = parseInt(p2);
    p3 = parseInt(p3);

    resultado = (p1 + p2 + p3)*1.21 ;
    document.getElementById('mostrar').innerHTML ="El precio final es: "+ resultado;
	
}