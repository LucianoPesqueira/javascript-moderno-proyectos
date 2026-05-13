//----Destructuring de Objetos----

const producto4 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


//forma de extraer el valor de un propiedad de un objeto en una variable
// const nombre = producto4.nombre;

// console.log(nombre);

//destructuring: extraer, en vez de declarar una variable y asignarle el valor de una propiedad del objeto
//se extrae y se asigna a una variable todo en un mismo paso
const { nombre, precio } = producto4;

console.log(nombre, precio);