//----Creando un if----

let puntaje = 1001;
let puntaje2 = "1000";

console.log(typeof(puntaje));
console.log(typeof(puntaje2));

if(puntaje == 1000) {
    console.log('Si es igual');
} else {
    console.log('No es igual');
}

//----Comparador Estricto----
puntaje = 1000;

if(puntaje != 1000) {
    console.log('Si! es diferente');
}

// == Operador no estricto(compara valor)
// === Operador estricto(compara valor y tipo)
if(puntaje === puntaje2) {
    console.log('Si es diferente');
} else {
    console.log('No es diferente');
}


//----Comparando Mayor o Menor que----
const dinero = 500;
let totalAPagar = 300;

if(dinero > totalAPagar) {
    console.log('Si se puede realizar el pago');
} else {
    console.log('Fondos insuficiente');
}


//----Mayor o Igual que y else if----
const tarjeta = true;
const cheque = true;

if(dinero >= totalAPagar) {
    console.log('Si se puede realizar el pago');
} else if(tarjeta) {
    console.log('El pago se realiza por tajeta');
} else if(cheque) {
    console.log('El pago se realiza por cheque');
} else {
    console.log('Fondos insuficiente');
}
