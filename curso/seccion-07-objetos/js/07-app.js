//----El problema con los objetos----

const producto7 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto7);

producto7.disponible = false;

delete producto7.precio;

console.log(producto7);

