/**
 * 1-realizar el algoritmo que lea la base por ID de un cuadrado 
 * e informar el perímetro del mismo por alert.
 */

function punto1(){
    var base;
    var perimetro;

    base = document.getElementById('base').value;

    //valido que solo sean numeros positivos, evito NaN.
    if(base>0){
        perimetro = base * 2 + base * 2;
        alert('El perimetro del Cuadrado es de: '+perimetro +' Metros');
    } else {
        alert('Ingresa Solo Numeros');
    }
    

}
/**
 * 2-realiazar el algoritmo que lea un importe por de un producto por prompt 
 * y muestre el importe final sumándole el IVA (21%).
 */
function punto2(){
    var importe ;
    var impuesto = 1.21;
    var total;
    importe = prompt('Ingrese el Importe');
    importe = Math.floor(importe);

    total = importe * impuesto;

    alert('El importe a pagar es de : $'+total);
}
/**
 * 3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.
 */
function punto3(){
    var n1;
    var n2;
    var perimetro;
    var alambres = 3;
    var total;

    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    perimetro  = n1*2 + n2*2;
    total = perimetro * alambres;

    alert('Se necesitan '+total+' Metros de Alambres para cubrir '+alambres+' Vueltas al perimetro');

}

/**
 * 4- (IF) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.
 */

function punto4(){
    var n1;
    var n2;
    var resultado;
    
    n1 = prompt('Ingrese un Numero');
    n2 = prompt('Ingrese Otro Numero');

    n1 = parseInt(n1);
    n2 = parseInt(n2);

    if(n1==n2){
        resultado = n1*n2;
    } else if (n1>n2){
        resultado = n1-n2;
    } else{
        resultado = n1+n2;
    }
    document.write('El resultado de la operacion es: '+resultado);
}


/**
 * 5- (SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”
informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .
 */

function punto5(){
    var dia;

    dia = prompt('Ingrese un Dia, Ejemplo: Lunes');

    switch (dia){
        case "domingo":
        case "Domingo":
        case 'sabado':
        case "Sabado":
            alert('Es Fin de Semana');
            break;
        default:
            alert('A trabajar');
            break;
    }
}

/**
 * 6- realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días
hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor
importe de venta.
 */

function punto6(){
    // creo mis variables
    var importe;
    var c_dias  = 1;
    var max = 0;
    var min = 0;
    //bucle de 24 dias e ingreso los importes
    while (c_dias < 24 ) {
        
        importe=prompt('Ingrese Importe de La Venta Nº'+c_dias);
        importe = parseInt(importe);
        // si es el primer ingreso y se trunca max y min son los mismos
        if(c_dias == 1){
            min = importe;
            max = importe;
        }
        // si el importe es valido comparo max y min
        if (importe>0) {
            if(importe>max){
                max = importe;
            }
            if(importe<min){
                min = importe;
            }

        } else { // si el usuario ingresa una letra o un numero negativo se detiene la ejecucion y resetea el contador
            alert('Ingresa un Importe Mayor a 0');
            c_dias = 1;
            break;
        }

        c_dias = c_dias + 1; // si todo marcho bien sumo 1 al contador para continuar el bucle

    }
    // imprimo en pantalla los resultados
    console.log('Se ingresaron: '+c_dias+' Dias')
    console.log('El importe Mayor Fue: $'+max);
    console.log('El importe Menor Fue: $'+min);
  
}

/**
 * 7- realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
 * (validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
 *   a) el promedio de las notas totales.
 *   b) la nota más baja.
 *   c) la cantidad de varones que su nota haya sido mayor o igual a 6.
*/

// preguntar profesor porque cuenta 6 veces en lugar de 5

function punto7(){

    var nota;
    var notaTotal = 0;
    var c_alumnos = 1;
    var min;
    var c_6omas = 0;
    var promedio = 0;

    while(c_alumnos>=0 && c_alumnos<=5){
        nota = prompt('Nota Nº'+c_alumnos);
        nota = parseInt(nota);
        sexo = prompt('Ingrese el Sexo: "m" o "f" para la nota Nº'+c_alumnos);
        //nota baja la primera vez
        if(c_alumnos==1){
            min = nota;
        }
        // si nota esta entre 0 y 10
        if(nota>=0 && nota<=10){
            if(nota>=6 && sexo == "m"){
                c_6omas = c_6omas + 1; // cuento los varones que sacaron 6 o mas
                c_6omas = parseInt(c_6omas);
            }
            if(nota<min){
                min = nota;
                min = parseInt(min);
            }
        }//fin if 0 y 10 si no esta en el rango termino la ejecucion.
        else {
            alert('Los datos ingresados son Invalidos');
            c_alumnos = 1;
            break;
        }
        //si todo ok, sumo un alumno y comienza de nuevo
        notaTotal = notaTotal + nota;
        c_alumnos = ++c_alumnos;

    }//fin while

    promedio = notaTotal / (c_alumnos-1);// le resto uno porque me toma uno mas
    console.log('Total de Alumnos: '+(c_alumnos-1));
    console.log('La nota mas baja '+min);
    console.log('Varones con Notas Mayores a 6: '+c_6omas);
    console.log('El promedio de notas es: '+promedio);

}

/**
 * 8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
 * usuario quiera e informar al terminar el ingreso por document.write:
 * a) la cantidad de números pares.
 * b) el promedio de todos los números ingresados.
 * c) la suma de todos los números.
 * d) El número máximo y el mínimo.
 */

function punto8(){
    var numero;
    var contador = 0;
    var c_pares = 0;
    var promedio = 0;
    var total = 0;
    var min = 0;
    var max = 0;
    var respuesta = true;

    while(respuesta==true){
        numero=prompt('Ingrese un Numero');
        numero = parseInt(numero);
        // la primera vez le asigno el minimo y el maximo
        if(contador ==1){
            min = numero;
            max = numero;
        }
        // valido numeros positivos
        if(numero>0){
            // cuento numeros pares
            if(numero % 2 == 0){
                c_pares = c_pares +1;
            }
            // determino maximo
            if(numero>max){
                max = numero;
            }
            // determino el minimo
            if(numero<min){
                min = numero;
            }
            
        } else {
            alert('Solo puede Ingresar Numeros Positivos, Vuelva a Empezar');
            break;

        }
        total = total + numero;
        contador = contador + 1;
        respuesta = confirm('Desea Seguir Ingresando');
    }

    promedio = total / contador;
    document.write('Cantidad de numeros pares: '+c_pares);
    document.write('</br>El promedio de todos los numeros ingresados es: '+promedio);
    document.write('</br>La suma de todos los numeros es: '+total);
    document.write('</br>El numero Maximo es: '+max+' y El Minimo es: '+min);

}