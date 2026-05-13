//----El Object Constructor----

//object literal
const producto12 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//object constructor
function Producto12(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto12_2 = new Producto12('Monitor de 24 pulgadas', 500);
console.log(producto12_2);

const producto12_3 = new Producto12('Tablet', 350);
console.log(producto12_3);