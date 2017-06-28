function Mostrar()
{
	/**Al presionar el Bot&oacute;n, 
					asignar una nota RANDOM al examen y mostar:
					"EXCELENTE" para notas igual a 9 o 10,
					"APROB&Oacute;" para notas mayores a 4,
					"Vamos, la proxima se puede" para notas menores a 4 */
	//creo variable
	var nota;
	//obtengo valores aleatorios
	nota = Math.floor(Math.random()*10);

	/** proceso e imprimo */

	if (nota== 9 || nota==10) {
		alert("Excelente! Te sacaste: "+nota)
	} else {
		if (nota>4) {
			alert("Aprobado, tu nota es: "+nota);
		} else {
			alert("Vamos!, la proxima se puede! Tu nota es: "+nota);
		}
	}
	

}//FIN DE LA FUNCIÓN