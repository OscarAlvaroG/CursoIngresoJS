function Mostrar()
{
    // creo variables
    var importe;
    var imp_final;
    var impuesto = 1.21;

    //asigno valores y proceso
    importe  = prompt("Ingrese el importe");
    importe = parseInt(importe);

    imp_final = importe * impuesto;

    // imprimo
    document.getElementById("importeFinal").value = imp_final;
}
