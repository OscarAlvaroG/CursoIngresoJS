function Mostrar()
{
    /**
         * Al ingresar una edad menor a 18 años y 
        un estado civil distinto a "Soltero", NO HACER NADA,
        </br>pero si no es asi, y es soltero y no es menor, 
        mostrar el siguiente mensaje: 'Es soltero y no es menor.' 
     */

    /**creamos variables */
    var edad;
    var estadoCivil;

    /**obtenemos datos de los id */

    edad=document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    /** comparo edad y soltero */
    /** */
    if (edad<18 & estadoCivil!="Soltero") {
        
    } else {
        if (estadoCivil=="Soltero" & edad>=18) {
            alert("Usted es soltero y no es menor de edad");
        }
    }


	


} //fin mostrar()