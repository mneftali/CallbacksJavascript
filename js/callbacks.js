function callbackSumar(resultadoSumar) {
    console.log('Suma de 2 numeros: ', resultadoSumar);
    cuadrado(resultadoSumar, callbackCuadrado);
}

function callbackCuadrado(resultadoCuadrado) {
    console.log('cuadrado de la suma: ', resultadoCuadrado);
    dividir(resultadoCuadrado, callbackDividir);

}

function callbackDividir(resultadoDividir) {
    console.log('Division entre 2: ', resultadoDividir);
    sustraer(resultadoDividir, callbackSustraer);
}

function callbackSustraer(resultadoSustraer) {
    console.log('Sustraer 100: ', resultadoSustraer);
    esMayorCero(resultadoSustraer, callbackResultadoFinal);

}

function callbackResultadoFinal(resultadoFinal) {
    console.log(resultadoFinal);

}