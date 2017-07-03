function Mostrar()
{
    //tomo el mes
    var mesDelAño = document.getElementById('mes').value;

    //alert (mesDelAño);
    switch (mesDelAño) 
    {
        case "Febrero":
            alert("El mes Tiene 28 Dias");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("El mes Tiene 30 Dias");
            break;
        default:
            alert("Este Mes tiene 31 Dias");
            break;
    }
        
}//fin mostrar()