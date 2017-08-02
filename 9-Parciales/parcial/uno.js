
function Mostrar()
{ 
    //leo el valor desde el id
    var perimetro;
    var base = document.getElementById("laBase").value;
    base  = parseInt(base);

    //calculo el perimetro de un cuadrado
    perimetro = base * 4;

    // informo
    alert("El perimetro es: "+perimetro);

}
