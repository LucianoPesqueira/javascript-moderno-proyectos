//---- .filter ----


const carrito4 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 24 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];


//filter: crea un nuevo arreglo basado en el parametro definido
let resultado4 = 0;

resultado4 = carrito4.filter( producto => producto.precio > 400);

console.log(resultado4);

//otra condicion para filter
resultado4 = carrito4.filter( producto => producto.precio < 600);

console.log(resultado4);

//otro ejemplo: traer todo menos el celular

resultado4 = carrito4.filter( producto => producto.nombre !== 'Celular');

console.log(resultado4);