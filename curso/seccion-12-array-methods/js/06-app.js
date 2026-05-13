//---- .every ----

const carrito6 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 27 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];


const resultado7 = carrito6.every( producto => producto.precio < 1000);


console.log(resultado7);

