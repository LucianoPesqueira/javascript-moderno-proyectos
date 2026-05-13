//----El Operador && para revisar que se cumplan 2 o mas condiciones----

const usuario = true;
let puedePagar = true;

if(usuario && puedePagar) {
    console.log('Si eres usuario');
} else if(!usuario) {
    console.log('Inicia Sesion o abre una cuenta');
} else if(!puedePagar) {
    console.log('Fondos insuficientes');
} else {
    console.log('No puede realizar la compra');
}


//----El operador OR para que se cumpla al menos una condicion

let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
totalAPagar = 600;

if(efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar) {
    console.log('Si se puede realizar el pago');
} else {
    console.log('Fondos Insuficientes');
}
