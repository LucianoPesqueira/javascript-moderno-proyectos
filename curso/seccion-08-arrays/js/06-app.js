//----Eliminar elementos con splice----

const carrito6 = [];


//definir producto
const product6 = {
    nombre : "Monitor 32 pulgadas",
    precio : 400
}

const product61 = {
    nombre : "Celular Motorola",
    precio : 750
}

const product62 = {
    nombre : "teclado",
    precio : 150
}

const product63 = {
    nombre : "celular",
    precio : 500
}
const product64 = {
    nombre : "Mouse",
    precio : 120
}

carrito6.push(product6);
carrito6.push(product61);
carrito6.push(product62);
carrito6.push(product63);
carrito6.push(product64);


console.table(carrito6);

//eliminar el ultimo elemento, desde el final
carrito6.pop();


console.table(carrito6);

//para eliminar del inicio del carrito
carrito6.shift();

console.table(carrito6);

//eliminar elementos por el medio, indicando posicion y cantidad de elementos eliminados
carrito6.splice(1, 1);

console.table(carrito6);