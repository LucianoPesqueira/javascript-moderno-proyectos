//----Arrow Functions en un forEach y un map----

const carrito = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 24 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];


carrito.forEach( producto => console.log(`${producto.nombre} - precio: ${producto.precio}`));

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - precio: ${producto.precio}`);


console.log(nuevoArreglo);


