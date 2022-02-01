/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	divisor = parseInt(divisor);
	dividendo = parseInt(dividendo);

    /*

    resto = dividendo / divisor

    te da el resultado de la division

    */

	resto = dividendo % divisor;
      //para averiguar el resto de el calculo 
	alert("El resto es " + resto);
}


/* 

resultado = parseInt(dividendo / divisor);

para que el resultado se redondee a un numero entero.

*/