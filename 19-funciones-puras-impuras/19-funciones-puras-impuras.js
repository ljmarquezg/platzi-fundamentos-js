// Funciones puras

// Una función pura es una función que, dado el mismo input, siempre retornará el mismo output. Es decir, no importa cuántas veces llamemos a la función con el mismo input, siempre obtendremos el mismo output.
function sum(a, b) {
    return a + b;
}

function square(a) {
    return a * a;
}

function addTen(y) {
    return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);

// Funciones impuras
// Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros de entrada
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manupular el DOM
// 6. Obtener la hora actual
function sum(a, b) {
    console.log('A', a);
    return a + b;
}

let total = 0;
function sumWithSideEffect(a) {
    total += a;
    return total;
}