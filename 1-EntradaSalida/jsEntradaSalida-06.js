/*

Vilte Maria Ines DIV E

E/S EJ 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

	alert(respuesta);
	
	//document.write(respuesta);
	//cambia el html y el resultado aparece ahi.

	//console.log(respuesta);
	//muestra la respuesta en la consola de la pagina.

}

/*

Se declara la variable

Se busca el Id

Se declaran las variables como un numero individual 

se suman los numeros y se guarda el resultado en la variable

*/