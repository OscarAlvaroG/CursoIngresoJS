/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
    // document.getElementById("le paso el ID").value muestra el valor del ID
    // document.getElementById("le paso ID") muestra el valor completo del objeto
    // por ejemplo si es un input mostrara <input type="text" Id="ejemplo">
    var nombre;
    nombre=document.getElementById("elNombre").value;
    alert(nombre);

}


