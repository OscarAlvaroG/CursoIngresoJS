
Mostrar(1,10);
function Mostrar(max,min) {
  var num = Math.round(Math.random() * (max - min) + min);
  alert(num);
}

// preguntar porque sale dos alerts uno con NaN y otro con el numero Random