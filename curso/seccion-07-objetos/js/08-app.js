//----Congelar un objeto para no modificarlo----

"use strict"; //habilita el modo estruicto

const producto8 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//evitar que un objeto pueda ser modificado, y se comporte como una constante
Object.freeze(producto8);

//al establecer el objeto producto8 "freezado" no puedo agregar o moficar las propiedades de ese objeto
// producto8.disponible = false;
// producto8.imagen = "imagen.jpg";


console.log(producto8);

//saber si un objeto esta "freezado"
console.log(Object.isFrozen(producto8));