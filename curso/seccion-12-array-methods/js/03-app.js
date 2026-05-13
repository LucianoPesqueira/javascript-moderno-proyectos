//---- .reduce ----


const carrito3 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 24 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];


//tomas el array de objetos e indicarle al cliente cuanto tiene que pagar

let total = 0;

carrito3.forEach( producto => total += producto.precio);

console.log(total);


//forma con reduce

let resultado3 = carrito3.reduce( (total, producto) => total + producto.precio, 0);

console.log(resultado3);

