function Mostrar()
{
    //variables
    var p1, p2, p3;

    // asigno datos
    p1 = parseInt(document.getElementById("precioUno").value);
    p2 = parseInt(document.getElementById("precioDos").value);
    p3 = parseInt(document.getElementById("precioTres").value);

    // proceso suma y promedio

    total = p1+p2+p3;
    promedio = parseInt(total/3);

    //imprimo
    alert("El importe total de la compra es: "+total + " , el promedio de la compra es: "+promedio);

}
