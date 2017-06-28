/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var dividendo;
    var divisor;
    dividendo = parseInt(document.getElementById("dividendo").value);
    divisor = parseInt(document.getElementById("divisor").value);

    /**obtengo el resto con el operador %  */
    resto = dividendo % divisor;
    cociente = dividendo / divisor;
    alert("El resultado es: "+cociente+" y el Resto es : "+resto);
	
}
