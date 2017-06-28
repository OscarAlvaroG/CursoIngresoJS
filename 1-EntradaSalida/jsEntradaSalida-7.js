/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
    var num2;
    /**converti los numeros en Integer y relice las operaciones */
    num1 = parseInt(document.getElementById("n1").value);
    num2 = parseInt(document.getElementById("n2").value);
    resultado = num1+num2;
    alert("La suma es: "+resultado);
}

function restar()
{
    var num1;
    var num2;
    num1 = parseInt(document.getElementById("n1").value);
    num2 = parseInt(document.getElementById("n2").value);
    resultado = num1-num2;
    alert("La resta es: " +resultado);
	
}

function multiplicar()
{ 
    var num1;
    var num2;
    num1 = parseInt(document.getElementById("n1").value);
    num2 = parseInt(document.getElementById("n2").value);
    resultado = num1*num2;
    alert("El producto es: "+resultado);
	
}

function dividir()
{
    var num1;
    var num2;
    num1 = parseInt(document.getElementById("n1").value);
    num2 = parseInt(document.getElementById("n2").value);
    resultado = num1/num2;
    alert("La division es: "+resultado);
}

