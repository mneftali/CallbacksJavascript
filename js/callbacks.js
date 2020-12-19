// Funciones callback


function saludar(name, callback){
	callback(name);
}

const saludo = function (name){
	console.log('Hola', name);
}

//saludar('carlos Medina', saludo);

/*
	sumar 2 numeros
	El resultado elevarlo al cuadrado
	El resultado dividirlo entre 2,
	El resultado sustraerle 100,
	El resultado, validar si es mayor a 0
*/

	function sumar(num1, num2, callback){
		callback(num1 + num2);
	}


	function cuadrado(num, callback){
		callback(num*num);
	}

	sumar(8,5,function(resultadoSumar){
		console.log('Suma de 2 numeros: ', resultadoSumar);
		
		cuadrado(resultadoSumar,function(resultadoCuadrado){
			console.log('cuadrado de la suma: ', resultadoCuadrado)
		})
	})