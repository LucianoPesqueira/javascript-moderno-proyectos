//-- .map para iterar un array y diferencias con forEach----

const carrito9 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 24 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];

//.map crea una copia de arreglo
console.log("---------------carrito9 con map---------------");
const nuevoArreglo = carrito9.map( function (producto) {
    return `${producto.nombre} - precio: ${producto.precio}`;
})

//para evitar tener que usar literales e indicarle para cada objeto el nombre y precio
//se usa array methods: forEach

console.log("---------------carrito9 con forEach---------------");
const nuevoArreglo2 =  carrito9.forEach( function (producto) {
    return `${producto.nombre} - precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);