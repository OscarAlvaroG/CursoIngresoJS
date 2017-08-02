function Mostrar()
{
    // variables
    var ancho;
    var largo;
    var cant_hilos = 3;
    var cant_alambres = 0;
    var perimetro;

    //asigno valores y proceso
    ancho = document.getElementById("ancho").value;
    largo = document.getElementById("largo").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    //obtengo perimetro y cantidad de almbres
    perimetro = (ancho * 2) + (largo * 2);
    perimetro = parseInt(perimetro);

    cant_alambres = perimetro * cant_hilos;

    //imprimo
    alert("Se necesitan " + cant_alambres + " Metros de alambres para cubrir " + cant_hilos + " hilos de alambre en un perimetro de "+perimetro+ " metros.");

}
