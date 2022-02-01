/*

Vilte Maria Ines DIV E

E/S Ej 7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


/*

var numeroUno
var numeroDos
var respuesta

fuera de las funciones para no repetirla en cada uno

*/



function sumar()
{	
	var numeroUno;
	var numeroDos;
	var respuesta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	respuesta = numeroUno + numeroDos;

	alert("Tu suma es " + respuesta);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var respuesta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	respuesta = numeroUno - numeroDos;

	alert("Tu resta es " + respuesta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var respuesta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	respuesta = numeroUno * numeroDos;

	alert("Tu multiplicacion es " + respuesta);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var respuesta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	respuesta = numeroUno / numeroDos;

	alert("Tu division es " + respuesta);
}

