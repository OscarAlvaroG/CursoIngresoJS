/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo = 0;
var ancho = 0;
var perimetro = 0;
var alambres = 0;
var radio = 0;
var cemento = 2;
var cal = 3;

function Rectangulo () 
{
    //ingreso largo por ancho
    largo = document.getElementById('Largo').value;
    largo = parseInt(largo);
    ancho = document.getElementById('Ancho').value;
    ancho = parseInt(ancho);

    //calculo perimetro
    perimetro = (2 * largo) + (2 * ancho);
    //saco la cantidad de alambres
    alambres = perimetro * 3;
    alert("Necesitas: "+alambres+" metros de Alambres");




}
function Circulo () 
{
    radio  = document.getElementById('Radio').value;
    radio  = parseInt(radio);

    // saco perimetro del terreno
    radio = 2*Math.PI*radio;

    // cantidad de alambres
    alambres =  Math.floor( radio * 3); // redondeo

    alert("Necesitas "+alambres+" metros de Alambres");

	
}
function Materiales () 
{
    // en 1m2 se utiliza cemento x 2 + cal x3
    // calcular segun los datos del terreno
    largo = document.getElementById('Largo').value;
    largo = parseInt(largo);
	ancho = document.getElementById('Ancho').value;
    ancho = parseInt(ancho);
    radio = document.getElementById('Radio').value;
    radio = parseInt(radio);


    // saco m2

    superficie = largo * ancho;

    //pi*radio*radio , falta informar
    superficie_circulo = Math.PI*radio*radio;

    // cemento y cal total

    cemento_total = (superficie * cemento);
    cal_total = (superficie * cal);

    //
    alert("Se requiere : "+cemento_total+" Bolsas de Cemento y "+cal_total+" Bolsas de Cal");




}