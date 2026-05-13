//----Sellar un objeto----

"use strict"; //habilita el modo estruicto

const producto9 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//sellar un objeto, permite modificar las propiedades existentes sin agregar o eliminar
Object.seal(producto9);

producto9.disponible = false;

console.log(producto9);

//saber si esta sellado "seal"
console.log(Object.isSealed(producto9));