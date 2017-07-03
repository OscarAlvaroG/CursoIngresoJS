
/**
Mostrar(1,10);
function Mostrar(max,min) {
  var num = Math.round(Math.random() * (max - min) + min);
  alert(num);
}

 en clase */
function Mostrar(){
  var num = parseInt( Math.random() * (10 - 1)) + 1;
  alert(num);
  document.getElementById("mostrar").innerHTML = num;
}


// preguntar porque sale dos alerts uno con NaN y otro con el numero Random