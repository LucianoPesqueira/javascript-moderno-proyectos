//----Ejemplo con multiples funciones que se pasan valores----

function sumar(a, b) {
    return a + b ;
}

const resultado = sumar(2, 3);

console.log(resultado);


//ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio) {
    return total += precio; //almacena en la variable total el valor, no requiero de otra variable para visualizarlo
}

function calcularImpuesto(total) {
    return total * 1.21; //solo aplica el 21% para cadad total sin almacenarlo, debo guardar el return en una variable para visualizarlo
}

agregarCarrito(300);
agregarCarrito(100);
agregarCarrito(100);

const totalPagar = calcularImpuesto(total);


console.log(total);
console.log(totalPagar);