////////////////////////////EJ1//////////////////////////////////
function ParOImpar(numero) {
    const resultado = numero % 2 === 0 ? `${numero} es par` : `${numero} es impar`;
    MostrarResultado(resultado);
}

////////////////////////////EJ2//////////////////////////////////
function CompararNumeros(num1, num2) {
    let resultado;
    if (num1 > num2) {
        resultado = `${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        resultado = `${num2} es mayor que ${num1}`;
    } else {
        resultado = `${num1} y ${num2} son iguales`;
    }
    MostrarResultado(resultado);
}

////////////////////////////EJ3//////////////////////////////////
function MultiploCinco(numero) {
    const resultado = numero % 5 === 0 ? `${numero} es múltiplo de 5` : `${numero} no es múltiplo de 5`;
    MostrarResultado(resultado);
}

////////////////////////////EJ4//////////////////////////////////
function ImpNumerosHasta(numero) {
    let resultados = [];
    for (let i = 0; i <= numero; i++) {
        resultados.push(i);
    }
    MostrarResultado(resultados.join(', '));
}

////////////////////////////EJ5//////////////////////////////////
function ImpPalabraRepetida(palabra, veces) {
    let resultados = [];
    for (let i = 0; i < veces; i++) {
        resultados.push(palabra);
    }
    MostrarResultado(resultados.join(', '));
}

////////////////////////////EJ6//////////////////////////////////
function ImpValoresArray(array) {
    MostrarResultado(array.join(', '));
}

////////////////////////////EJ7//////////////////////////////////
function ImpNoQuintaPosicion(array) {
    let resultados = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            resultados.push(array[i]);
        }
    }
    MostrarResultado(resultados.join(', '));
}

////////////////////////////EJ8//////////////////////////////////
function MultiplicarArrayPorNumero(array, numero) {
    let resultados = [];
    for (let i = 0; i < array.length; i++) {
        resultados.push(array[i] * numero);
    }
    MostrarResultado(resultados.join(', '));
}

////////////////////////////RESULTADO//////////////////////////////////
function MostrarResultado(resultado) {
    const divResultados = document.getElementById('resultados');
    const p = document.createElement('p');
    p.textContent = resultado;
    divResultados.appendChild(p);
}

////////////////////////////LLAMADO DE FUNCIONES/////////////////////////////
ParOImpar(12);
CompararNumeros(5, 15);
MultiploCinco(50);
ImpNumerosHasta(3);
ImpPalabraRepetida('Mundo', 3);
ImpValoresArray([1, 2, 3, 4, 5]);
ImpNoQuintaPosicion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
MultiplicarArrayPorNumero([1, 2, 3, 4], 3);