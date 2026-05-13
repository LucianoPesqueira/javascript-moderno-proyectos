//----Operador ternario----

autenticado = false;
puedePagar = true;

console.log(autenticado ? 'Sesion iniciada' : 'Sin autenticacion');

//ternario AND 
console.log(autenticado && puedePagar ? 'Si puede pagar AND' : 'Sin autenticacion AND');

//ternario OR
console.log(autenticado || puedePagar ? 'Si puede pagar OR' : 'Sin autenticacion OR');



efectivo = 300;
credito = 400;
disponible = efectivo + credito;
totalAPagar = 600;

if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar) {
    if (efectivo > totalAPagar) {
        console.log('Si pagaste en efectivo');
    } else {
        console.log('Otra forma de pago');
    }
} else {
    console.log('Fondos Insuficientes');
}

//forma con ternario
console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'si autenticado pero no puede pagar' : 'Sin autenticacion');